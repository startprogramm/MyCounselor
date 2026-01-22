# Deployment guide for MyCounselor

## Quick Deploy to Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel: https://vercel.com
3. Import repository
4. Set environment variables:
   - DATABASE_URL: (use PostgreSQL or Neon)
   - NEXTAUTH_SECRET: (generate random string)
   - NEXTAUTH_URL: your-domain.com

## Deploy to AWS

```bash
npm run build
npm run start
```

## Deploy to Heroku

```bash
heroku create mycounselor
heroku config:set NODE_ENV=production
git push heroku main
```

## Database Setup for Production

### Option 1: PostgreSQL (Recommended)
```
postgresql://user:password@host:5432/mycounselor
```

### Option 2: Neon (Serverless PostgreSQL)
Free tier available at neon.tech

### Option 3: AWS RDS
Managed PostgreSQL service

## Production Checklist

- [ ] Set strong NEXTAUTH_SECRET
- [ ] Use PostgreSQL (not SQLite)
- [ ] Enable HTTPS
- [ ] Set NEXTAUTH_URL to production domain
- [ ] Configure database backups
- [ ] Set up monitoring
- [ ] Enable rate limiting
- [ ] Configure CORS properly
- [ ] Review security settings
- [ ] Set up SSL certificate
