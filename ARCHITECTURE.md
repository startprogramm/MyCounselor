# MyCounselor Architecture & Data Flow

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    MYCOUNSELOR PLATFORM                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────────┐   │
│  │   STUDENT   │  │  COUNSELOR   │  │  SUPER ADMIN     │   │
│  │  Dashboard  │  │  Dashboard   │  │  Dashboard       │   │
│  │  • Tasks    │  │  • Priority  │  │  • School Mgmt   │   │
│  │  • Requests │  │    Tasks     │  │  • Counselor     │   │
│  │  • Messages │  │  • Students  │  │    Approval      │   │
│  │  • Meetings │  │  • Documents │  │  • User Mgmt     │   │
│  │  • Guidance │  │  • Meetings  │  │                  │   │
│  └──────┬──────┘  └──────┬───────┘  └────────┬─────────┘   │
│         │                │                   │              │
│         └────────────────┼───────────────────┘              │
│                          │                                  │
│         ┌────────────────▼─────────────────┐               │
│         │   NEXT.JS API ROUTES (Backend)   │               │
│         ├────────────────────────────────┬─┤               │
│         │ /api/admin/*                   │ │               │
│         │ /api/schools/*                 │ │               │
│         │ /api/students/*                │ │  Authentication
│         │ /api/counselors/*              │ │  & Sessions
│         │ /api/requests/*                │ │               │
│         │ /api/messages/*                │ │               │
│         │ /api/meetings/*                │ │               │
│         │ /api/documents/*               │ │               │
│         └────────────────┬────────────────┘               │
│                          │                                  │
│         ┌────────────────▼─────────────────┐               │
│         │     PRISMA ORM (Data Layer)      │               │
│         └────────────────┬─────────────────┘               │
│                          │                                  │
│         ┌────────────────▼─────────────────┐               │
│         │   PostgreSQL Database             │               │
│         ├────────────────────────────────┤               │
│         │ • Schools                        │               │
│         │ • Users (Student/Counselor)      │               │
│         │ • Requests & Tasks               │               │
│         │ • Messages & Documents           │               │
│         │ • Meetings & Availability        │               │
│         │ • Guidance Pages                 │               │
│         └────────────────────────────────┘               │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## User Roles & Relationships

```
┌──────────────────────────────────────────────────────────────┐
│                    ONE SCHOOL ECOSYSTEM                       │
│              (Presidential School, Gulistan)                  │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│   COUNSELOR (1)                                              │
│   ├── Manages 24 Students                                    │
│   ├── Handles All Requests                                   │
│   ├── Sets Availability for Meetings                         │
│   ├── Edits Guidance Content                                 │
│   └── Approves Recommendation Letters                        │
│                                                                │
│   STUDENT (24)                                               │
│   ├── Connected to 1 Counselor                               │
│   ├── Creates Requests (Transcript, Reports, etc.)          │
│   ├── Books Meetings with Counselor                          │
│   ├── Messages Counselor (in-platform)                       │
│   ├── Views Recommendation Status                            │
│   └── Reads Guidance Pages                                   │
│                                                                │
│   RECOMMENDER (External)                                     │
│   ├── Invited per student request                            │
│   ├── Uploads recommendation letter                          │
│   ├── Chooses visibility (counselor only / + student)       │
│   └── One-time access                                        │
│                                                                │
│   SUPER ADMIN (1)                                            │
│   ├── Creates schools                                        │
│   ├── Approves counselor signups                             │
│   ├── Assigns counselors to schools                          │
│   ├── Views all system activity                              │
│   └── Manages user permissions                               │
│                                                                │
└──────────────────────────────────────────────────────────────┘
```

## Request Lifecycle

```
STUDENT CREATES REQUEST
        │
        ▼
┌───────────────────────────────────────────┐
│  Request Created                          │
│  • Type: Transcript, Report, Letter, etc. │
│  • Status: PENDING                        │
│  • Deadline: Set by counselor             │
│  • Priority: Auto-sorted by deadline      │
└───────────────────────────────────────────┘
        │
        ▼
COUNSELOR SEES IN TASK DASHBOARD
        │
        ├─── [URGENT] Overdue requests
        ├─── [HIGH] Due within 3 days
        ├─── [MEDIUM] Due within 1 week
        └─── [LOW] Due later
        │
        ▼
COUNSELOR UPDATES STATUS
┌─────────────────┐
│ IN_PROGRESS     │ ← Counselor working on it
│ COMPLETED       │ ← Ready/uploaded
│ CANCELLED       │ ← Not needed
└─────────────────┘
        │
        ▼
STUDENT SEES STATUS UPDATE
• Notification in dashboard
• Can link messages to request
• Can attach documents
• Can attach recommendation letter
```

## Document & Recommendation Flow

```
RECOMMENDATION LETTER PROCESS

1. STUDENT CREATES REQUEST
   Request Type: RECOMMENDATION_LETTER
   └─ Linked to specific recommender

2. RECOMMENDER GETS INVITED
   Email Link: /api/recommender/accept/[inviteToken]
   
3. RECOMMENDER UPLOADS LETTER
   • Sets visibility:
     ├─ COUNSELOR_ONLY (default)
     └─ COUNSELOR_AND_STUDENT

4. COUNSELOR SEES STATUS
   Task Dashboard shows:
   ├─ PENDING (waiting for upload)
   ├─ SUBMITTED (uploaded, not viewed)
   └─ VIEWED (counselor has seen it)

5. STUDENT SEES STATUS
   • Always knows: PENDING / SUBMITTED
   • If visibility allows:
     └─ Can download the letter
   • If counselor only:
     └─ Sees "Submitted - Counselor reviewing"
```

## Message System

```
IN-PLATFORM MESSAGING ARCHITECTURE

Student ←→ Counselor (connected to student's school only)

Each message can be:
├─ Standalone message
├─ Linked to specific request
├─ Linked to meeting
└─ Linked to document

Advantages:
✓ No scattered emails
✓ Full audit trail
✓ Context kept together
✓ Easy to reference later
✓ Can be linked to tasks
```

## Meeting Scheduler

```
COUNSELOR AVAILABILITY
├─ Sets weekly availability
│  ├─ Monday: 9:00-12:00, 14:00-17:00
│  ├─ Tuesday: 9:00-11:00
│  ├─ Wednesday: OFF
│  ├─ Thursday: 10:00-16:00
│  └─ Friday: 9:00-12:00

STUDENT BOOKS MEETING
├─ Sees available time slots
├─ Books within availability
├─ Confirms request/topic
└─ Calendar entry created

CONFLICT PREVENTION
├─ Real-time slot blocking
├─ No double-booking
├─ Auto-reject if unavailable
└─ Student sees "unavailable"
```

## Data Security & Privacy

```
SCHOOL ISOLATION (MVP)
├─ Students see ONLY their counselor
├─ Counselor sees ONLY their students
├─ No cross-school access
├─ One school namespace

DOCUMENT ACCESS
├─ Student: Own documents + shared from counselor
├─ Counselor: All student documents
├─ Recommender: Can upload, limited visibility
├─ Admin: Full access

PASSWORD SECURITY
├─ bcryptjs hashing (10 rounds)
├─ No plaintext storage
├─ Super admin manages access
└─ NextAuth ready for SSO later
```

## Deployment Architecture (On Your Server)

```
┌─────────────────────────────────────────────┐
│         YOUR SERVER                         │
├─────────────────────────────────────────────┤
│                                              │
│  ┌──────────────────────────────────────┐  │
│  │  Next.js Application (Node.js)       │  │
│  │  • Port 3000 (configurable)          │  │
│  │  • Handles API + Frontend            │  │
│  │  • Serves static assets              │  │
│  └──────────────────────────────────────┘  │
│                                              │
│  ┌──────────────────────────────────────┐  │
│  │  PostgreSQL Database                 │  │
│  │  • Port 5432 (default)               │  │
│  │  • Persistent data storage           │  │
│  │  • Backups configured                │  │
│  └──────────────────────────────────────┘  │
│                                              │
│  ┌──────────────────────────────────────┐  │
│  │  File Storage (Local / S3 later)     │  │
│  │  • Documents uploaded               │  │
│  │  • Recommendations stored           │  │
│  │  • Easy to migrate to cloud         │  │
│  └──────────────────────────────────────┘  │
│                                              │
└─────────────────────────────────────────────┘
         ↕
    INTERNET
         ↕
   Web Browsers
   (Students, Counselors, Admin)
```

## Technology Stack

```
FRONTEND (Client)
├─ React 18 (UI Library)
├─ Next.js 15 (Framework)
├─ TypeScript (Type Safety)
├─ Tailwind CSS (Styling)
└─ Axios (API Client)

BACKEND (Server)
├─ Node.js (Runtime)
├─ Next.js API Routes (Endpoints)
├─ NextAuth v5 (Authentication - Ready)
├─ bcryptjs (Password Hashing)
└─ Prisma Client (Database)

DATABASE
├─ PostgreSQL (Main DB)
├─ Prisma ORM (Data Access Layer)
└─ Migrations (Schema versioning)

DEPLOYMENT
├─ Your Server (Node.js + PostgreSQL)
├─ Environment: Development / Production
└─ Reverse Proxy: nginx/Apache (optional)
```

---

**Architecture Last Updated**: January 2026
