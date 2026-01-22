# 📍 MyCounselor - File Locations & Quick Commands

## Project Root
```
c:\Users\User\Desktop\asd\Frond-end development\MyCounselor
```

## Quick Start Commands

### Option 1: Automatic Setup (Recommended)
```powershell
cd "c:\Users\User\Desktop\asd\Frond-end development\MyCounselor"
PowerShell -ExecutionPolicy Bypass -File auto-setup.ps1 -PostgreSQLPassword "your_password"
```

### Option 2: Manual Setup
```powershell
cd "c:\Users\User\Desktop\asd\Frond-end development\MyCounselor"

# 1. Install dependencies
C:\nodejs\node-win-x64\npm.cmd install

# 2. Generate Prisma client
npm run db:generate

# 3. Create database (after PostgreSQL installed)
npm run db:push

# 4. Start development server
npm run dev

# 5. Visit http://localhost:3000
```

---

## 📂 Important Files

### 📖 Read First
- `README_FIRST.md` - **START HERE** - One page summary
- `EVERYTHING_READY.md` - What I've done for you
- `AUTOMATED_SETUP.md` - Setup instructions

### 📚 Reference
- `README.md` - Full documentation
- `QUICK_SETUP.md` - Quick reference
- `ARCHITECTURE.md` - System design
- `START_HERE.md` - Project overview

### 🛠 Setup & Installation
- `download-postgresql.bat` - Download PostgreSQL
- `setup.bat` - Windows batch installer
- `setup.ps1` - PowerShell installer
- `auto-setup.ps1` - **Auto-configures everything**

### ⚙ Configuration
- `.env.local` - **I'll auto-update this**
- `.env.example` - Template
- `package.json` - Dependencies list
- `tsconfig.json` - TypeScript config
- `next.config.js` - Next.js config

### 💻 Source Code
- `src/app/page.tsx` - Landing page
- `src/app/api/` - API routes
- `src/app/student/` - Student pages
- `src/app/counselor/` - Counselor pages
- `src/lib/` - Utilities & helpers

### 🗄 Database
- `prisma/schema.prisma` - **Complete database schema**

---

## 🔑 Key Information

### Project Info
- **Name**: MyCounselor
- **School**: Presidential School, Gulistan
- **Framework**: Next.js 15 + React 18
- **Database**: PostgreSQL
- **Language**: TypeScript
- **Styling**: Tailwind CSS

### Node.js Setup
- **Location**: `C:\nodejs\node-win-x64`
- **Version**: v20.11.1
- **npm Version**: 10.2.4

### Default Ports
- **Development**: http://localhost:3000
- **PostgreSQL**: localhost:5432
- **Prisma Studio**: http://localhost:5555

### Database Details
- **Default user**: postgres
- **Database name**: mycounselor
- **Connection string**: `postgresql://postgres:PASSWORD@localhost:5432/mycounselor`

---

## 🚀 Essential npm Commands

```bash
# Install dependencies
npm install

# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Build for production
npm run start            # Start production server

# Database
npm run db:push          # Apply migrations
npm run db:pull          # Update schema from database
npm run db:generate      # Generate Prisma client
npm run db:studio        # Open visual database editor

# Code Quality
npm run lint             # Run ESLint
npm run lint --fix       # Fix linting errors
```

---

## ✅ Setup Checklist

### Before Running Setup
- [ ] Node.js installed (✅ Done)
- [ ] PostgreSQL installed (🔲 You do this)
- [ ] PostgreSQL password available (🔲 You save this)

### During Setup
- [ ] npm install running (⏳ Running)
- [ ] Database created (🔲 Auto-run)
- [ ] Migrations applied (🔲 Auto-run)
- [ ] .env.local configured (🔲 Auto-run)

### After Setup
- [ ] Server running at http://localhost:3000
- [ ] Login page visible
- [ ] Admin credentials working
- [ ] Ready to build pages!

---

## 🎯 Your PostgreSQL Password

**Location**: You'll create this during PostgreSQL installation
**Used in**: `.env.local` (DATABASE_URL)
**Format**: `postgresql://postgres:YOUR_PASSWORD@localhost:5432/mycounselor`

**Save this somewhere!**

---

## 🔐 Default Admin Login

```
Email:    admin@presidentialschool.edu
Password: YourSecurePassword123!
```

Change after first login!

---

## 📊 What's in Each Directory

```
src/
├── app/                 - Next.js App Router pages
│   ├── api/            - API routes (backend)
│   ├── student/        - Student pages
│   ├── counselor/      - Counselor pages
│   ├── layout.tsx      - Root layout
│   ├── page.tsx        - Landing page
│   └── globals.css     - Global styles
└── lib/                - Utility functions
    ├── prisma.ts       - Database client
    └── auth.ts         - Auth utilities

prisma/
└── schema.prisma       - Database schema (13 tables)

(node_modules will be created after npm install)
```

---

## 🆘 Troubleshooting

### Port 3000 in use?
```bash
npm run dev -- -p 3001
```

### npm command not found?
```bash
C:\nodejs\node-win-x64\npm.cmd install
```

### Can't connect to database?
- Check PostgreSQL is running
- Verify password in .env.local
- Check database `mycounselor` exists

### Error during db:push?
```bash
npm run db:generate    # First, regenerate client
npm run db:push        # Then try again
```

---

## 📞 Quick Contact Info

**Project Location**:
```
c:\Users\User\Desktop\asd\Frond-end development\MyCounselor
```

**Node.js Location**:
```
C:\nodejs\node-win-x64
```

**Start Development**:
```powershell
cd "c:\Users\User\Desktop\asd\Frond-end development\MyCounselor"
npm run dev
```

**View Database Visually**:
```bash
npm run db:studio
```

---

## 🎉 Ready?

**Install PostgreSQL, then tell me your password!**

I'll handle everything else automatically using:
```
auto-setup.ps1 -PostgreSQLPassword "your_password"
```

Everything will be running in ~10 minutes! 🚀
