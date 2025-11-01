# Deploying Your Website

Your static website is ready to deploy! Here are the easiest options:

## Option 1: Netlify (Recommended - Easiest)

### Method A: Drag and Drop
1. Go to https://app.netlify.com/drop
2. Drag your entire `public` folder onto the page
3. Your site will be live instantly with a URL like `random-name-123.netlify.app`
4. To add a custom domain:
   - Go to Site settings → Domain management
   - Add your domain (e.g., `yourdomain.com`)
   - Follow Netlify's DNS instructions

### Method B: Netlify CLI
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run: `netlify deploy --dir=public --prod`
3. Follow the prompts to create/login to your account
4. Your site will be live!

## Option 2: Vercel

### Method A: Vercel CLI
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `cd public && vercel`
3. Follow the prompts
4. To deploy to production: `vercel --prod`

### Method B: Vercel Dashboard
1. Go to https://vercel.com
2. Sign up/login
3. Click "New Project"
4. Import your Git repository OR drag and drop the `public` folder
5. Set root directory to `public`
6. Deploy!

## Option 3: GitHub Pages

1. Install Git from https://git-scm.com/download/win
2. Initialize Git repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Create a GitHub repository at https://github.com/new
4. Push your code:
   ```bash
   git remote add origin YOUR_GITHUB_REPO_URL
   git branch -M main
   git push -u origin main
   ```
5. Go to repository Settings → Pages
6. Set source to `main` branch, folder to `/public`
7. Your site will be at `username.github.io/repository-name`

## Option 4: Cloudflare Pages

1. Go to https://pages.cloudflare.com
2. Sign up/login
3. Connect your Git repository OR upload the `public` folder
4. Set build command: (leave empty)
5. Set build output directory: `public`
6. Deploy!

## Adding a Custom Domain

For any platform above:
1. Buy a domain from:
   - Namecheap (https://www.namecheap.com)
   - Google Domains (https://domains.google)
   - Cloudflare Registrar (https://www.cloudflare.com/products/registrar)
   - GoDaddy (https://www.godaddy.com)
2. In your hosting platform's dashboard:
   - Add your domain
   - Update DNS records as instructed (usually add CNAME or A records)
   - Wait for DNS propagation (can take a few minutes to 48 hours)

## Quick Start Commands

**Netlify (if CLI installed):**
```bash
netlify deploy --dir=public --prod
```

**Vercel (if CLI installed):**
```bash
cd public && vercel --prod
```

---

**Recommended:** Start with Netlify drag-and-drop method - it's the fastest!

