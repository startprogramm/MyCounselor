# MyCounselor - Production Deployment Guide

## Overview
MyCounselor is a production-ready Next.js application designed for school admissions management.

---

## 🚀 DEPLOYMENT OPTIONS

### Option 1: Vercel (EASIEST - Recommended)
**Cost:** Free tier available | **Deployment Time:** 2 minutes

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your repository
5. Set environment variables:
   ```
   DATABASE_URL=postgresql://user:pass@host:5432/mycounselor
   NEXTAUTH_SECRET=your-super-secret-key-here
   NEXTAUTH_URL=https://mycounselor.vercel.app
   NODE_ENV=production
   ```
6. Deploy!

### Option 2: AWS (Enterprise)
**Cost:** ~$20-100/month | **Scalability:** Excellent

**Steps:**
1. Use AWS Amplify or Elastic Beanstalk
2. Create RDS PostgreSQL database
3. Configure environment variables
4. Deploy via git integration

### Option 3: Heroku (Legacy - Simpler)
**Cost:** $7-50/month | **Easy Setup:** Yes

```bash
# Login to Heroku
heroku login

# Create app
heroku create mycounselor-prod

# Add PostgreSQL addon
heroku addons:create heroku-postgresql:hobby-dev

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set NEXTAUTH_SECRET=your-secret

# Deploy
git push heroku main
```

### Option 4: DigitalOcean App Platform
**Cost:** $12/month | **Setup:** Moderate

1. Connect GitHub repo
2. Create App
3. Configure buildpack and runtime
4. Add PostgreSQL managed database
5. Deploy

---

## 📊 DATABASE SETUP

### For Production - PostgreSQL

**Option A: Neon (Easiest, Free tier)**
- Visit: https://neon.tech
- Create project
- Copy connection string
- Set as DATABASE_URL

**Option B: AWS RDS**
```bash
# CLI command
aws rds create-db-instance \
  --db-instance-identifier mycounselor \
  --db-instance-class db.t3.micro \
  --engine postgres
```

**Option C: DigitalOcean Managed Database**
- Easier than AWS, more reliable than free tier

### Migrate Database

```bash
# After connecting PostgreSQL:
npx prisma db push

# Verify
npx prisma studio
```

---

## 🔐 SECURITY CHECKLIST

- [ ] **NEXTAUTH_SECRET**: Generate strong random string
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```

- [ ] **HTTPS/SSL**: Enable SSL in hosting provider

- [ ] **Database**: Use PostgreSQL (not SQLite) in production

- [ ] **Environment Variables**: Never hardcode secrets

- [ ] **CORS**: Review allowed origins in next.config.js

- [ ] **Rate Limiting**: Add to API routes

- [ ] **Admin Password**: Change from default

- [ ] **Database Backups**: Enable automatic backups

---

## 📦 BUILD & DEPLOYMENT

### Local Build Test
```bash
npm run build
npm run start
# Visit http://localhost:3000
```

### GitHub Actions CI/CD (Free)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@main
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 🎯 DOMAIN SETUP

### Custom Domain (Vercel)
1. In Vercel dashboard → Settings → Domains
2. Add your domain (mycounselor.edu)
3. Update DNS records
4. SSL certificate auto-issued

### Update NEXTAUTH_URL
```
NEXTAUTH_URL=https://mycounselor.edu
```

---

## ✅ PRE-DEPLOYMENT CHECKLIST

- [ ] All environment variables set
- [ ] Database migrated
- [ ] Build succeeds locally (`npm run build`)
- [ ] No console errors
- [ ] Admin can login
- [ ] HTTPS enabled
- [ ] Monitoring configured
- [ ] Backups enabled
- [ ] Error logging setup (Sentry recommended)
- [ ] Performance monitoring (Vercel Analytics)

---

## 🔍 MONITORING

### Recommended Tools
- **Error Tracking:** Sentry
- **Analytics:** Vercel Analytics
- **Uptime Monitoring:** UptimeRobot
- **Database Monitoring:** Neon console or AWS RDS

---

## 🆘 TROUBLESHOOTING

**Build fails?**
```bash
npm run build
# Check for TypeScript errors
```

**Database connection error?**
```bash
# Test connection
psql $DATABASE_URL
```

**Login not working?**
- Check NEXTAUTH_SECRET is set
- Verify DATABASE_URL
- Check admin user exists in database

---

## 📞 SUPPORT

For issues, check:
1. Vercel/hosting provider docs
2. Next.js documentation
3. Prisma documentation
4. NextAuth documentation

---

**🎉 You're ready to go live with MyCounselor!**
