# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

Before you begin, make sure you have:
- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in to your account
2. Click the **+** icon in the top-right corner and select **New repository**
3. Name your repository `portfolio-website` (or any name you prefer)
4. Choose **Public** (required for free GitHub Pages)
5. Do NOT initialize with README, .gitignore, or license (we'll do this locally)
6. Click **Create repository**

## Step 2: Initialize Git and Push Your Code

Open your terminal/command prompt and navigate to your project directory:

```bash
cd portfolio-website
```

Initialize Git and add your repository:

```bash
git init
git add .
git commit -m "Initial commit: Complete portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Build the Project for Production

Before deploying, build the project for production:

```bash
npm run build
```

This creates an optimized `dist` folder with all your website files.

## Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll down to the **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **main** branch and **/root** folder
6. Click **Save**

GitHub will now build and deploy your site. This may take a few minutes.

## Step 5: Access Your Live Website

Your website will be available at:

```
https://YOUR_USERNAME.github.io/portfolio-website/
```

If you used a different repository name, replace `portfolio-website` with your actual repository name.

## Customization Guide

### Update Your Name and Information

Edit `client/src/pages/Home.tsx` and update:

- **Line 79**: Change "Your Name" to your actual name
- **Line 80**: Update the tagline if desired
- **Line 83**: Update the bio description
- **Line 95**: Update statistics (50+ projects, 40+ clients)
- **Contact Section**: Update email, phone, and location

### Update Portfolio Projects

In `client/src/pages/Home.tsx`, find the `projects` array (around line 75) and update:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'web', // web, design, marketing, or video
    description: 'Your project description',
    image: 'https://your-image-url.com/image.jpg',
    link: 'https://your-project-link.com'
  },
  // Add more projects...
];
```

### Update Skills

Find the `skills` array (around line 130) and modify:

```javascript
const skills = [
  { name: 'Your Skill', level: 95 },
  // Add more skills...
];
```

### Update Services

Find the `services` array (around line 145) and customize:

```javascript
const services = [
  {
    title: 'Your Service',
    description: 'Service description',
    icon: '🎯' // Use any emoji
  },
  // Add more services...
];
```

### Update Social Media Links

In the Contact section, find the social media links and update the `href` attributes with your actual social media profiles.

### Update Colors and Styling

Edit `client/src/index.css` to change the color scheme. The main color is blue (used throughout). You can modify:

- Primary color: Change `--primary: var(--color-blue-700);` to another color
- Accent colors: Modify the gradient colors in the CSS

## Making Updates and Redeploying

After making changes:

1. Test locally:
   ```bash
   npm run dev
   ```

2. Build for production:
   ```bash
   npm run build
   ```

3. Commit and push changes:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

4. GitHub Pages will automatically rebuild and deploy your changes (usually within 1-2 minutes)

## Using a Custom Domain

If you have a custom domain, you can use it with GitHub Pages:

1. Go to your repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain name
3. Click **Save**
4. Update your domain's DNS settings to point to GitHub Pages (see GitHub's documentation for your domain provider)

## Troubleshooting

### Site Not Appearing

- Wait 5-10 minutes for GitHub Pages to build and deploy
- Check that your repository is public
- Verify the build was successful by checking the Actions tab

### Build Errors

- Ensure all dependencies are installed: `npm install`
- Check that you're using Node.js 16 or higher: `node --version`
- Clear cache and rebuild: `rm -rf node_modules dist && npm install && npm run build`

### Styling Issues

- Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try accessing the site in an incognito/private window
- Check browser console for errors (F12 → Console tab)

## Project Structure

```
portfolio-website/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx     # Main portfolio page
│   │   ├── App.tsx          # App configuration
│   │   ├── index.css        # Global styles
│   │   └── main.tsx         # Entry point
│   └── index.html           # HTML template
├── package.json             # Dependencies
├── vite.config.ts           # Build configuration
└── tailwind.config.ts       # Tailwind CSS config
```

## File Locations for Quick Edits

- **Change name/bio**: `client/src/pages/Home.tsx` (lines 79-95)
- **Add projects**: `client/src/pages/Home.tsx` (lines 75-105)
- **Update skills**: `client/src/pages/Home.tsx` (lines 130-145)
- **Change colors**: `client/src/index.css` (lines 46-79)
- **Update social links**: `client/src/pages/Home.tsx` (lines 380-400)

## Performance Tips

- Optimize images before uploading (compress to <200KB each)
- Use external image URLs for faster loading
- Test on mobile devices before deploying
- Use browser DevTools to check performance (F12 → Lighthouse)

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)

## Support

For issues with GitHub Pages, visit: https://docs.github.com/en/pages

For React/Tailwind questions, refer to their official documentation.

Happy deploying! 🚀
