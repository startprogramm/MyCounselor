#!/bin/bash
# MyCounselor Production Deployment Script
# Run this before deploying to production

echo "🚀 MyCounselor Production Setup"
echo "================================"

# Check Node version
echo "✓ Checking Node.js..."
node --version

# Install dependencies
echo "✓ Installing dependencies..."
npm install

# Generate Prisma client
echo "✓ Generating Prisma client..."
npx prisma generate

# Build Next.js
echo "✓ Building Next.js..."
npm run build

# Check build output
if [ -d ".next" ]; then
  echo "✓ Build successful!"
else
  echo "❌ Build failed!"
  exit 1
fi

# Database check
echo "✓ Testing database connection..."
npx prisma db execute --stdin < /dev/null 2>&1 || echo "⚠️  Database not accessible (will be set up during deployment)"

# Summary
echo ""
echo "================================"
echo "✅ PRODUCTION BUILD READY!"
echo "================================"
echo ""
echo "Next steps:"
echo "1. Set environment variables in your hosting provider"
echo "2. Deploy .next and node_modules"
echo "3. Run: npm run start"
echo ""
echo "Variables needed:"
echo "  - DATABASE_URL (PostgreSQL connection)"
echo "  - NEXTAUTH_SECRET"
echo "  - NEXTAUTH_URL"
echo "  - NODE_ENV=production"
echo ""
