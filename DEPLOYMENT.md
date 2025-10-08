# Vercel Deployment Guide - Remix + Thirdweb

## 🚀 Fixed 404 Error Configuration

This project is now properly configured to avoid 404 errors on Vercel deployment.

### ✅ What's Been Fixed:

1. **API Route Handler** (`api/index.js`)

   - Properly handles all Remix server requests
   - Uses `createRequestHandler` from `@remix-run/node`
   - Includes error handling for build imports

2. **Vercel Configuration** (`vercel.json`)

   - Correct routing setup to avoid 404s
   - Proper function configuration for Node.js runtime
   - Static asset caching headers
   - Filesystem handling for public assets

3. **Build Process**
   - Legacy peer deps installation for compatibility
   - Proper build command configuration

## 📋 Deployment Steps:

### 1. **Commit Your Changes**

```bash
git add .
git commit -m "fix: configure Vercel deployment to avoid 404 errors"
git push origin main
```

### 2. **Deploy on Vercel**

#### Option A: Connect Repository

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the configuration

#### Option B: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ngduytra/test-remix)

### 3. **Set Environment Variables**

In your Vercel dashboard, add:

```
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your-client-id-here
```

### 4. **Deploy!**

Vercel will automatically build and deploy your app.

## 🔧 Configuration Details

### File Structure:

```
project/
├── api/
│   └── index.js          # Handles all Remix routes
├── app/                  # Your Remix app
├── vercel.json          # Vercel configuration
└── package.json         # Dependencies and scripts
```

### Key Configuration in `vercel.json`:

- **Functions**: Maps `api/index.js` to handle server requests
- **Routes**:
  - Static assets served with caching headers
  - Filesystem handling for public files
  - All other routes directed to the API handler
- **Build**: Uses `npm run build` and handles legacy peer deps

## 🚨 Troubleshooting

### If you still get 404 errors:

1. **Check Build Logs**: Make sure build completes successfully
2. **Verify Environment Variables**: Ensure `NEXT_PUBLIC_THIRDWEB_CLIENT_ID` is set
3. **Clear Vercel Cache**: In Vercel dashboard, try "Redeploy"
4. **Check Function Logs**: View function logs in Vercel dashboard

### Common Issues:

- **Build fails**: Run `npm install --legacy-peer-deps` locally first
- **Thirdweb errors**: Make sure your client ID is valid
- **Route not found**: Verify `api/index.js` exists and has proper imports

## ✅ Success Indicators:

- Build completes without errors
- Homepage loads correctly
- Wallet connection works
- No 404 errors on route navigation

Your Remix + Thirdweb app should now deploy successfully on Vercel! 🎉
