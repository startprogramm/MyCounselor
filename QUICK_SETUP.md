# ⚡ Quick Installation for Windows

## Step-by-Step Setup

### ✅ Step 1: Node.js (DONE!)
- ✓ Node.js v20.11.1 installed at: `C:\nodejs\node-win-x64`
- ✓ npm v10.2.4 available

### 📦 Step 2: Install Dependencies

**Open PowerShell or Command Prompt in the MyCounselor folder and run:**

```bash
C:\nodejs\node-win-x64\npm.cmd install
```

**Or use the setup.bat file (double-click it):**
```
setup.bat
```

This will install ~500 packages (takes 3-5 minutes)

### 📋 Step 3: PostgreSQL Setup

1. **Download PostgreSQL** from https://www.postgresql.org/download/windows/
2. **Install it** - Remember your password!
3. **Create database:**
   ```sql
   CREATE DATABASE mycounselor;
   ```

### ⚙️ Step 4: Configure Environment

Edit `.env.local` in the project folder:

```env
DATABASE_URL="postgresql://postgres:YourPassword@localhost:5432/mycounselor"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

To generate a secret:
```bash
C:\nodejs\node-win-x64\node.exe -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 🗄️ Step 5: Initialize Database

In the project folder, run:
```bash
C:\nodejs\node-win-x64\npm.cmd run db:push
```

### 🚀 Step 6: Start Development Server

```bash
C:\nodejs\node-win-x64\npm.cmd run dev
```

**Visit:** http://localhost:3000

### 🔐 Login with:
- **Email:** admin@presidentialschool.edu
- **Password:** YourSecurePassword123!

---

## Troubleshooting

**npm command not found?**
```bash
C:\nodejs\node-win-x64\npm.cmd install
```

**Port 3000 already in use?**
```bash
C:\nodejs\node-win-x64\npm.cmd run dev -- -p 3001
```

**Database connection error?**
- Check PostgreSQL is running
- Verify password in .env.local
- Make sure database `mycounselor` exists

---

## Available Commands

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run linter
npm run db:push     # Apply database migrations
npm run db:studio   # Open Prisma visual editor
```

---

**Next:** Install PostgreSQL, then come back and run the commands above!
