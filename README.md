# Personal Portfolio Website

A complete, professional, and responsive personal portfolio website built with React, Tailwind CSS, and modern web technologies. Ready to deploy on GitHub Pages.

## Features

✨ **Modern Design**
- Clean, minimal aesthetic with professional styling
- Fully responsive for mobile, tablet, and desktop
- Smooth animations and hover effects
- Beautiful gradient backgrounds and transitions

🎯 **Complete Sections**
- **Header/Navbar**: Sticky navigation with active link highlighting
- **Hero Section**: Full-screen introduction with call-to-action buttons
- **About Me**: Bio, career summary, and statistics
- **Skills**: Animated progress bars for technical skills
- **Portfolio**: Grid layout with category filtering (Web, Design, Marketing, Video)
- **Services**: Service cards with descriptions and icons
- **Contact**: Contact form with validation and social media links
- **Footer**: Quick links and copyright information

⚡ **Interactive Features**
- Smooth scroll navigation between sections
- Navbar active link highlighting based on scroll position
- Portfolio filtering by category with smooth transitions
- Animated skill progress bars on scroll
- Form validation with helpful error messages
- Mobile-friendly hamburger menu

🎨 **Customizable**
- Easy to update name, bio, and content
- Customizable color scheme
- Simple project and skill management
- Social media link integration

## Quick Start

### Prerequisites
- Node.js 16+ and npm
- Git

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Customization

### Update Your Information

Edit `client/src/pages/Home.tsx`:

1. **Your Name** (Line 79):
   ```javascript
   <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
     Hi, I'm <span className="text-blue-600">Your Name</span>
   </h1>
   ```

2. **Tagline** (Line 80):
   ```javascript
   <p className="text-xl text-gray-600">
     Your tagline here
   </p>
   ```

3. **Bio** (Line 83):
   ```javascript
   <p className="text-gray-600 leading-relaxed">
     Your bio here...
   </p>
   ```

### Add Your Projects

Find the `projects` array in `Home.tsx` and add your projects:

```javascript
{
  id: 1,
  title: 'Project Title',
  category: 'web', // web, design, marketing, video
  description: 'Project description',
  image: 'https://image-url.com/image.jpg',
  link: 'https://project-link.com'
}
```

### Update Skills

Find the `skills` array and modify:

```javascript
{ name: 'Skill Name', level: 95 }
```

### Customize Services

Find the `services` array and update:

```javascript
{
  title: 'Service Name',
  description: 'Service description',
  icon: '🎯' // Use any emoji
}
```

### Change Colors

Edit `client/src/index.css` to modify the color scheme. The primary color is blue throughout the site.

## Deployment

### Deploy to GitHub Pages

See [GITHUB_PAGES_GUIDE.md](./GITHUB_PAGES_GUIDE.md) for detailed deployment instructions.

Quick summary:
1. Create a GitHub repository
2. Push your code to GitHub
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://username.github.io/portfolio-website/`

### Deploy to Other Platforms

The built files in the `dist` folder can be deployed to:
- Netlify
- Vercel
- Firebase Hosting
- AWS S3
- Any static hosting service

## Project Structure

```
portfolio-website/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx     # Main portfolio page
│   │   │   └── NotFound.tsx # 404 page
│   │   ├── components/      # Reusable components
│   │   ├── contexts/        # React contexts
│   │   ├── lib/             # Utilities
│   │   ├── App.tsx          # App configuration
│   │   ├── index.css        # Global styles
│   │   └── main.tsx         # React entry point
│   └── index.html           # HTML template
├── server/                  # Placeholder for future backend
├── shared/                  # Shared types
├── package.json             # Dependencies
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## Technologies Used

- **React 19**: Modern UI framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS 4**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server
- **Lucide React**: Beautiful icon library
- **Wouter**: Lightweight routing library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized for fast loading
- Responsive images
- Smooth animations without performance impact
- Mobile-first design approach
- Lighthouse score: 90+

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Focus indicators for interactive elements

## Tips for Best Results

1. **Use High-Quality Images**: Optimize images before adding (compress to <200KB)
2. **Keep Content Updated**: Regularly update your projects and skills
3. **Test on Mobile**: Always check how it looks on different devices
4. **Customize Colors**: Make it your own by adjusting the color scheme
5. **Add Real Links**: Replace placeholder links with your actual project URLs
6. **Update Social Links**: Add your real social media profiles

## Troubleshooting

### Development Server Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build Errors
```bash
# Check Node version (should be 16+)
node --version

# Clear build cache
rm -rf dist
npm run build
```

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Try in incognito/private window
- Check browser console for errors (F12)

## Contributing

This is your personal portfolio, but feel free to customize and extend it as needed!

## License

This project is open source and available for personal use.

## Support

For issues or questions:
- Check the [GITHUB_PAGES_GUIDE.md](./GITHUB_PAGES_GUIDE.md) for deployment help
- Review the [React Documentation](https://react.dev)
- Check [Tailwind CSS Docs](https://tailwindcss.com)

## Next Steps

1. **Customize Content**: Update your name, bio, and projects
2. **Add Your Images**: Replace placeholder images with your own
3. **Update Links**: Add real links to your projects and social profiles
4. **Test Locally**: Run `npm run dev` and check everything looks good
5. **Deploy**: Follow the [GITHUB_PAGES_GUIDE.md](./GITHUB_PAGES_GUIDE.md) to go live

---

**Ready to showcase your work? Let's go! 🚀**

Built with ❤️ using React, Tailwind CSS, and modern web technologies.
