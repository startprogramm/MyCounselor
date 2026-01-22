@echo off
REM MyCounselor Production Deployment Script for Windows

echo.
echo ========================================
echo  MyCounselor Production Setup
echo ========================================
echo.

REM Check Node version
echo Checking Node.js...
C:\nodejs\node-win-x64\node.exe --version
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js not found
    pause
    exit /b 1
)

REM Install dependencies
echo.
echo Installing dependencies...
C:\nodejs\node-win-x64\npm.cmd install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)

REM Generate Prisma client
echo.
echo Generating Prisma client...
C:\nodejs\node-win-x64\npx.cmd prisma generate
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: Prisma generation had issues
)

REM Build Next.js
echo.
echo Building Next.js...
C:\nodejs\node-win-x64\npm.cmd run build
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Build failed
    pause
    exit /b 1
)

REM Check build output
if exist ".next" (
    echo Build successful!
) else (
    echo ERROR: .next folder not created
    pause
    exit /b 1
)

REM Summary
echo.
echo ========================================
echo PRODUCTION BUILD READY!
echo ========================================
echo.
echo Next steps:
echo 1. Push code to GitHub
echo 2. Deploy to Vercel, AWS, or your hosting
echo 3. Set these environment variables:
echo    - DATABASE_URL (PostgreSQL)
echo    - NEXTAUTH_SECRET (generate random)
echo    - NEXTAUTH_URL (your domain)
echo    - NODE_ENV=production
echo 4. Run: npm run start
echo.
echo Choose deployment platform:
echo  • Vercel (easiest): https://vercel.com
echo  • AWS: https://aws.amazon.com
echo  • DigitalOcean: https://digitalocean.com
echo  • Heroku: https://heroku.com
echo.
pause
