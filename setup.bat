@echo off
cd /d "c:\Users\User\Desktop\asd\Frond-end development\MyCounselor"
echo Installing MyCounselor dependencies...
C:\nodejs\node-win-x64\npm.cmd install
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Dependencies installed successfully!
    echo.
    echo Next steps:
    echo 1. Make sure PostgreSQL is installed
    echo 2. Edit .env.local with your database URL
    echo 3. Run: npm run db:push
    echo 4. Run: npm run dev
) else (
    echo.
    echo ❌ Installation failed. Check the errors above.
)
pause
