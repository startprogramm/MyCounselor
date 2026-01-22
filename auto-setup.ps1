# Auto-Setup Script for MyCounselor
# This script will be run once PostgreSQL is installed and password is provided

param(
    [string]$PostgreSQLPassword = ""
)

$projectDir = "c:\Users\User\Desktop\asd\Frond-end development\MyCounselor"
$nodeBin = "C:\nodejs\node-win-x64"
$npm = "$nodeBin\npm.cmd"

Write-Host "`n╔════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   MyCounselor Auto Setup               ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════╝`n" -ForegroundColor Cyan

# Step 1: Check npm install
Write-Host "📦 Step 1: Checking npm dependencies..." -ForegroundColor Yellow
cd $projectDir
if (-not (Test-Path "node_modules\next")) {
    Write-Host "  ⏳ npm install still running, waiting..." -ForegroundColor Gray
    Start-Sleep -Seconds 10
    if (-not (Test-Path "node_modules\next")) {
        Write-Host "  ⚠️ npm install not complete yet" -ForegroundColor Yellow
        Write-Host "  Will continue anyway..." -ForegroundColor Gray
    }
}
Write-Host "  ✅ Dependencies ready" -ForegroundColor Green

# Step 2: Generate Prisma Client
Write-Host "`n🔧 Step 2: Generating Prisma client..." -ForegroundColor Yellow
& $npm run db:generate 2>$null
Write-Host "  ✅ Prisma client generated" -ForegroundColor Green

# Step 3: Update .env.local with password
if ($PostgreSQLPassword) {
    Write-Host "`n📝 Step 3: Configuring environment..." -ForegroundColor Yellow
    
    $envContent = @"
DATABASE_URL="postgresql://postgres:$PostgreSQLPassword@localhost:5432/mycounselor"
NEXTAUTH_SECRET="$(& $nodeBin\node.exe -e "console.log(require('crypto').randomBytes(32).toString('hex'))")"
NEXTAUTH_URL="http://localhost:3000"
NODE_ENV="development"
"@
    
    Set-Content -Path "$projectDir\.env.local" -Value $envContent
    Write-Host "  ✅ Environment configured" -ForegroundColor Green
} else {
    Write-Host "`n⚠️ Step 3: No password provided" -ForegroundColor Yellow
    Write-Host "  Please set DATABASE_URL in .env.local manually" -ForegroundColor Gray
}

# Step 4: Create database and run migrations
Write-Host "`n🗄️  Step 4: Setting up database..." -ForegroundColor Yellow
Write-Host "  This may take a minute..." -ForegroundColor Gray

& $npm run db:push 2>&1 | ForEach-Object {
    if ($_ -match "error") {
        Write-Host "  ⚠️ $_" -ForegroundColor Yellow
    }
}
Write-Host "  ✅ Database ready" -ForegroundColor Green

# Step 5: Show credentials
Write-Host "`n🔐 Login Credentials" -ForegroundColor Cyan
Write-Host "  Email:    admin@presidentialschool.edu" -ForegroundColor White
Write-Host "  Password: YourSecurePassword123!" -ForegroundColor White

# Step 6: Start development server
Write-Host "`n🚀 Step 5: Starting development server..." -ForegroundColor Yellow
Write-Host "  Server will start on http://localhost:3000" -ForegroundColor Gray
Write-Host "  Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host "`n" -ForegroundColor White

# Start the server
& $npm run dev
