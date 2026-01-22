# MyCounselor - School Admissions Platform

A centralized web platform that makes the school admissions process easier, clearer, and less stressful for both students and school counselors.

## Project Overview

**Goal**: Build a structured communication hub, task & document coordination system, and clear admissions guide for students.

**School**: Presidential School, Gulistan (MVP)

**Philosophy**: 
- One school = one closed ecosystem
- Functionality > design > animations
- Simple, calm, and intuitive interface

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL 14+
- npm or yarn

### Setup Instructions

1. **Clone and Install**
   ```bash
   npm install
   ```

2. **Configure Database**
   - Update `.env.local` with your PostgreSQL connection string:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/mycounselor"
   NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
   ```

3. **Initialize Database**
   ```bash
   npm run db:push
   ```

4. **Create Super Admin**
   - Use the API endpoint to create your super admin account:
   ```bash
   curl -X POST http://localhost:3000/api/admin/create \
     -H "Content-Type: application/json" \
     -d '{
       "email": "admin@presidentialschool.edu",
       "password": "SecurePassword123!",
       "name": "Admin User"
     }'
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

## 📊 Database Schema

### Core Models
- **School**: Presidential School in Gulistan
- **SuperAdmin**: Platform administrator
- **User**: Student, Counselor, or Recommender
- **Student**: School student with counselor
- **Counselor**: Teacher managing students
- **Request**: Core task system (Transcript, Reports, Recommendations, Meetings)
- **Message**: In-platform communication
- **Meeting**: Scheduling & availability
- **RecommendationLetter**: Secure recommendation handling
- **GuidancePage**: Admissions guidance content

## 🎯 Core Features

### ✅ Student Features
- Dashboard with task overview
- Create & track requests
- Message counselor
- Book meetings
- Read admissions guidance
- View recommendation status

### ✅ Counselor Features
- Priority task dashboard (sorted by deadline)
- Student management
- Request handling & status updates
- Meeting availability settings
- Edit guidance content
- Document uploads

### ✅ Recommender Features
- Invite-based access
- Upload recommendation letters
- Choose visibility (counselor only / counselor + student)

### ✅ Super Admin Features
- Create schools
- Manage counselor assignments
- View all system activity
- User management

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── admin/           # Admin management
│   │   ├── schools/         # School management
│   │   ├── students/        # Student API
│   │   ├── counselors/      # Counselor API
│   │   ├── requests/        # Request management
│   │   ├── messages/        # Messaging
│   │   └── meetings/        # Meeting scheduling
│   ├── student/             # Student pages
│   ├── counselor/           # Counselor pages
│   ├── admin/               # Admin dashboard
│   ├── auth/                # Authentication pages
│   └── page.tsx             # Landing page
├── lib/
│   ├── prisma.ts            # Database client
│   ├── auth.ts              # Auth utilities
│   └── types.ts             # TypeScript types
├── components/              # Reusable components
└── styles/
    └── globals.css          # Tailwind CSS

prisma/
└── schema.prisma            # Database schema
```

## 🔐 Authentication

- Email/Password for Super Admin
- Student signup with school selection
- Counselor onboarded by admin
- Recommender invited via email link

## 📋 API Endpoints

### Admin
- `POST /api/admin/create` - Create super admin
- `POST /api/admin/login` - Super admin login

### Schools
- `GET /api/schools` - List schools
- `POST /api/schools` - Create school

### More endpoints coming...

## 🛠 Technology Stack

- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth v5 (ready for implementation)
- **File Storage**: Local filesystem (switchable to S3)

## 📅 MVP Features

### Phase 1 (Current)
- [x] Super admin dashboard
- [x] School management
- [x] Student/Counselor signup
- [x] Request system
- [ ] Task dashboard
- [ ] Messaging
- [ ] Meeting scheduling
- [ ] Basic guidance pages

### Phase 2 (Next)
- Parent role & access
- Advanced notification system
- Email integration
- Google OAuth
- AWS S3 file storage

### Phase 3 (Future)
- AI-powered guidance
- Advanced analytics
- Multi-school dashboard
- Mobile app

## 🤝 Contributing

1. Create feature branches
2. Follow TypeScript conventions
3. Test API endpoints before pushing
4. Update README for new features

## 📝 Notes

- One counselor per student (for MVP)
- Requests auto-prioritized by deadline
- No scattered emails - all communication in-platform
- Design supports AI integration (not implemented yet)

## 📞 Support

Contact: [Your contact info]

---

**Last Updated**: January 2026
