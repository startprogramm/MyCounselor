@echo off
REM MyCounselor Complete Setup Script for Windows
REM SQLite version - no PostgreSQL needed

echo ================================================
echo   MyCounselor Final Setup (SQLite Mode)
echo ================================================
echo.

setlocal enabledelayedexpansion
set PROJECT_DIR=c:\Users\User\Desktop\asd\Frond-end development\MyCounselor
set NODE_BIN=C:\nodejs\node-win-x64
set NPM=%NODE_BIN%\npm.cmd

echo Checking if npm is available...
%NPM% --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm not found at %NPM%
    echo Please install Node.js first
    pause
    exit /b 1
)

cd /d "%PROJECT_DIR%"

echo.
echo 1 of 4: Completing npm installation...
echo.
%NPM% install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)

echo.
echo 2 of 4: Generating Prisma client...
echo.
%NPM% run db:generate
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: Prisma generation had issues, continuing anyway
)

echo.
echo 3 of 4: Creating database...
echo.
echo NOTE: Using SQLite database at prisma/dev.db
echo.
%NPM% run db:push

echo.
echo 4 of 4: Starting development server...
echo.
echo ================================================
echo   Server starting on http://localhost:3000
echo ================================================
echo.
echo Login with:
echo   Email:    admin@presidentialschool.edu
echo   Password: YourSecurePassword123!
echo.
echo Press Ctrl+C to stop the server
echo.

%NPM% run dev

pause
