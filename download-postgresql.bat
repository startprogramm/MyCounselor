@echo off
REM PostgreSQL Automated Download Script for Windows
REM This will download PostgreSQL 15 installer

echo ========================================
echo   PostgreSQL Download & Installation
echo ========================================
echo.
echo This script will download PostgreSQL 15 for Windows...
echo.

setlocal enabledelayedexpansion

REM Check if we can download files
where curl >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Downloading PostgreSQL 15...
    curl -o "%TEMP%\postgresql-15-installer.exe" "https://get.enterprisedb.com/postgresql/postgresql-15.0-1-windows-x64.exe"
    
    if exist "%TEMP%\postgresql-15-installer.exe" (
        echo.
        echo ✅ Download complete!
        echo.
        echo To install:
        echo 1. Go to: %TEMP%
        echo 2. Double-click: postgresql-15-installer.exe
        echo 3. Follow the installer (use default settings)
        echo 4. Remember the password you create!
        echo.
        echo After installation, come back here and tell me your password.
    ) else (
        echo.
        echo ❌ Download failed. 
        echo.
        echo Manual download:
        echo 1. Visit: https://www.postgresql.org/download/windows/
        echo 2. Download PostgreSQL 15 installer
        echo 3. Run the installer
        echo 4. Remember your password
    )
) else (
    echo.
    echo Unable to auto-download. Please:
    echo 1. Visit: https://www.postgresql.org/download/windows/
    echo 2. Download PostgreSQL 15 for Windows
    echo 3. Run the installer
    echo 4. Use default settings
    echo 5. Remember the password you create
)

echo.
pause
