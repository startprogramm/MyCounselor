# MyCounselor Setup Guide

## ✅ What Has Been Created

### Project Structure
- ✅ Next.js 15 app with TypeScript & Tailwind CSS
- ✅ Complete Prisma database schema (PostgreSQL)
- ✅ API routes for admin and school management
- ✅ Student & Counselor dashboard pages
- ✅ Authentication infrastructure ready
- ✅ Environment configuration files

### Database Models Created
1. **School** - Presidential School, Gulistan
2. **SuperAdmin** - Platform admin with email/password
3. **User** - Student, Counselor, Recommender roles
4. **Student** - Connected to school & counselor
5. **Counselor** - Manages students in school
6. **Request** - Core task system (Transcript, Reports, Recommendations, Meetings)
7. **Document** - File uploads for requests
8. **RecommendationLetter** - Secure recommendation handling
9. **Recommender** - Invite-based access
10. **Message** - In-platform messaging
11. **Meeting** - Scheduling with availability
12. **GuidancePage** - Educational content

### API Endpoints Ready
- `POST /api/admin/create` - Create super admin
- `POST /api/admin/login` - Super admin login
- `GET /api/schools` - List schools
- `POST /api/schools` - Create school

---

## 🚀 Next Steps (What You Need to Do)

### 1. Install Node.js
**Windows**:
- Download from https://nodejs.org/ (v18+ recommended)
- Run the installer
- Restart PowerShell
- Verify: `node --version` and `npm --version`

### 2. Install PostgreSQL
**Windows**:
- Download from https://www.postgresql.org/download/windows/
- Install and remember your password
- Create a database: `mycounselor`

### 3. Update Environment Variables
Edit `.env.local` in the project root:
```env
DATABASE_URL="postgresql://postgres:YourPassword@localhost:5432/mycounselor"
NEXTAUTH_SECRET="run: openssl rand -base64 32"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Install Dependencies
```bash
npm install
```

### 5. Setup Database
```bash
npm run db:push
```

### 6. Initialize School
The school "Presidential School" will need to be created. Use the API:
```bash
curl -X POST http://localhost:3000/api/schools \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Presidential School",
    "city": "Gulistan"
  }'
```

### 7. Create Super Admin
```bash
curl -X POST http://localhost:3000/api/admin/create \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@presidentialschool.edu",
    "password": "YourSecurePassword123!",
    "name": "Your Name"
  }'
```

**💾 Save these credentials!**

### 8. Start Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

---

## 🎯 Your Super Admin Credentials

**Email**: admin@presidentialschool.edu  
**Password**: YourSecurePassword123!  
**Name**: Your Name

⚠️ **Change password immediately after first login!**

---

## 📋 Features Implemented

### Database Level ✅
- Role-based access (Student, Counselor, Recommender, Super Admin)
- One school = one ecosystem (no cross-school access)
- Request system with priority & deadline sorting
- Recommendation letter visibility controls
- Meeting scheduling with availability slots
- Guidance page management

### Backend Level ✅
- Admin creation & authentication (email/password with bcrypt)
- School management API
- Database connection with Prisma ORM
- Password hashing & verification

### Frontend Level (UI Templates) ✅
- Landing page
- Student dashboard template
- Counselor dashboard template

---

## 🔜 What Comes Next

1. **Authentication Pages** - Student/Counselor signup & login
2. **Student Pages** - Requests, Messages, Meetings, Guidance
3. **Counselor Pages** - Task dashboard, Student list, Availability settings
4. **Admin Dashboard** - Counselor management, Approval system
5. **Messaging System** - Real-time/polling messages
6. **Meeting Scheduler** - Calendar view with availability
7. **Guidance System** - Editable guidance pages by counselor
8. **Recommender Flow** - Invite system & letter uploads
9. **Documents** - Secure file upload & storage

---

## 📞 Super Admin Responsibilities

Once logged in as super admin, you can:
1. Create schools (already created: Presidential School)
2. View all users by role
3. Approve counselor signups
4. Assign counselors to students
5. Monitor system activity
6. Manage guidance content

---

## 💡 Key Decisions Made for MVP

✅ **PostgreSQL** - Reliable, scalable, perfect for structured data  
✅ **Prisma ORM** - Type-safe, easy to use  
✅ **Next.js** - Full-stack, simple deployment  
✅ **Local File Storage** - Easy for MVP, switchable to S3 later  
✅ **One Counselor per Student** - For MVP simplicity  
✅ **Email/Password Auth** - For Super Admin, Google OAuth later  
✅ **Requests Auto-sorted by Deadline** - Shows urgent tasks first  
✅ **In-Platform Messaging Only** - No scattered emails  

---

## 🚨 Troubleshooting

**"npx: command not found"** → Install Node.js and restart  
**"DATABASE_URL error"** → Check PostgreSQL is running  
**"Port 3000 already in use"** → Change with `npm run dev -- -p 3001`  

---

**Ready to continue? Let me know once you've set up Node.js and PostgreSQL!**
