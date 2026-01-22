# MyCounselor Setup Script for Windows PowerShell

$nodeBin = "C:\nodejs\node-win-x64"
$projectDir = "c:\Users\User\Desktop\asd\Frond-end development\MyCounselor"

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  MyCounselor Setup" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Check if npm is available
$npm = "$nodeBin\npm.cmd"
if (-not (Test-Path $npm)) {
    Write-Host "❌ npm not found at $npm" -ForegroundColor Red
    Write-Host "Please install Node.js first" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Node.js found!" -ForegroundColor Green
& $nodeBin\node.exe --version
& $npm --version

Write-Host "`n📦 Installing dependencies..." -ForegroundColor Cyan
Write-Host "This may take 3-5 minutes...`n" -ForegroundColor Yellow

cd $projectDir
& $npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Installation successful!" -ForegroundColor Green
    Write-Host "`n📋 Next steps:" -ForegroundColor Cyan
    Write-Host "  1. Install PostgreSQL (if not already installed)" -ForegroundColor White
    Write-Host "  2. Create a database named 'mycounselor'" -ForegroundColor White
    Write-Host "  3. Edit .env.local with your database credentials" -ForegroundColor White
    Write-Host "  4. Run: npm run db:push" -ForegroundColor White
    Write-Host "  5. Run: npm run dev" -ForegroundColor White
} else {
    Write-Host "`n❌ Installation failed" -ForegroundColor Red
    Write-Host "Check the errors above" -ForegroundColor Yellow
}

Write-Host "`n" -ForegroundColor White
Read-Host "Press Enter to continue"
