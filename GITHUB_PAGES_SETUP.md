# GitHub Pages Deployment Guide

Follow these steps to deploy your website to GitHub Pages:

## Step 1: Install Git (if not already installed)

1. Download Git for Windows: https://git-scm.com/download/win
2. Install with default settings
3. Restart your terminal/command prompt

## Step 2: Create a GitHub Account

1. Go to https://github.com/signup
2. Create a free account

## Step 3: Initialize Git Repository

Open PowerShell or Command Prompt in your project folder and run:

```bash
cd C:\Users\lenovo\terminus-clone

# Initialize git repository
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit - Terminus website"
```

## Step 4: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `terminus-website` (or any name you like)
3. Make it **Public** (required for free GitHub Pages)
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 5: Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/terminus-website.git

# Rename branch to main
git branch -M main

# Push your code
git push -u origin main
```

When prompted, enter your GitHub username and password (or use a Personal Access Token).

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/terminus-website`
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Select: **GitHub Actions** (this will use our workflow)
5. Or if GitHub Actions doesn't appear:
   - Select: **Deploy from a branch**
   - Branch: `main`
   - Folder: `/public`
   - Click **Save**

## Step 7: Your Site is Live!

After a few minutes, your site will be available at:
- `https://YOUR_USERNAME.github.io/terminus-website/`

## Step 8: Custom Domain (Optional)

1. In your repository → Settings → Pages
2. Scroll to "Custom domain"
3. Enter your domain (e.g., `terminus.club`)
4. Add a `CNAME` file in your `public` folder with your domain
5. Update DNS settings at your domain registrar:
   - Add a CNAME record: `@` → `YOUR_USERNAME.github.io`
   - Or A records: Point to GitHub's IPs (185.199.108.153, 185.199.109.153, etc.)

## Troubleshooting

- **Git not recognized**: Make sure Git is installed and restart your terminal
- **Authentication failed**: Use a Personal Access Token instead of password:
  - GitHub → Settings → Developer settings → Personal access tokens → Generate new token
  - Give it `repo` scope
  - Use the token as your password
- **Site not updating**: Wait a few minutes for GitHub Pages to rebuild
- **404 errors**: Make sure you're using the correct URL format with repository name

## Updating Your Site

Whenever you make changes:

```bash
git add .
git commit -m "Update website"
git push
```

Your site will automatically rebuild and update!

