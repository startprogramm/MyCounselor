#!/bin/bash
# MyCounselor Complete Setup Script
# Run this after PostgreSQL is installed

echo "================================================"
echo "  MyCounselor Final Setup"
echo "================================================"
echo ""

PROJECT_DIR="c:\Users\User\Desktop\asd\Frond-end development\MyCounselor"
NODE_BIN="C:\nodejs\node-win-x64"
NPM="$NODE_BIN\npm.cmd"

echo "📦 Step 1: Completing npm installation..."
cd "$PROJECT_DIR"
& $NPM install

echo ""
echo "🔧 Step 2: Generating Prisma client..."
& $NPM run db:generate

echo ""
echo "🗄️  Step 3: Creating database and running migrations..."
& $NPM run db:push

echo ""
echo "🚀 Step 4: Starting development server..."
echo ""
echo "Server will be available at: http://localhost:3000"
echo ""
echo "Login credentials:"
echo "  Email:    admin@presidentialschool.edu"
echo "  Password: YourSecurePassword123!"
echo ""

& $NPM run dev
