# Portfolio - React + TypeScript + Tailwind CSS

A modern, animated portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a showcase of projects, work experience, and contact section with smooth animations and responsive design.

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Embla Carousel** - Carousel component
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library

## Project Structure

```
src/
├── components/
│   └── ui/
│       ├── button.tsx          # Reusable button component
│       ├── carousel.tsx        # Image carousel component
│       ├── collapsible.tsx     # Expandable/collapsible sections
│       └── separator.tsx       # Visual separator lines
├── lib/
│   └── utils.ts                # Utility functions (cn for class merging)
├── App.tsx                     # Main portfolio component
├── main.tsx                    # React entry point
└── index.css                   # Tailwind + custom styles
```

## Component Overview

### UI Components
- **Button**: Versatile button with multiple variants (default, outline, ghost, link, destructive, secondary)
- **Carousel**: Responsive carousel for project showcase with keyboard navigation
- **Collapsible**: Accordion-style component for expandable experience details
- **Separator**: Visual dividing lines

### Portfolio Sections
1. **Hero Section** - Animated intro with background video and CTA buttons
2. **Projects Section** - Carousel showcasing featured projects
3. **Experience Section** - Work history with collapsible job details
4. **Contact Section** - Email and phone with copy-to-clipboard functionality
5. **Footer** - Navigation links and social media

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

3. **Build for production**:
   ```bash
   npm run build
   ```
   Output goes to `dist/`

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Customization Guide

### Update Portfolio Content

Edit `src/App.tsx` to customize:

1. **Hero Section** - Update name, title, and social links
2. **Projects** - Modify the `projects` array with your projects
3. **Experience** - Update the `experiences` array with your work history
4. **Contact** - Change email and phone numbers

### Styling

- **Colors**: Edit CSS variables in `src/index.css` (light/dark theme)
- **Animations**: Adjust Framer Motion properties in component sections
- **Tailwind**: Use TailwindCSS classes throughout components

### Theme Customization

The app uses CSS variables for theming:
- Light mode: `:root` selector
- Dark mode: `.dark` selector

Colors use OKLch color space for better perceptual uniformity.

## Key Features

✨ **Smooth Animations** - Fade, slide, and scale animations on scroll

🎨 **Modern Design** - Red gradient theme with glass-morphism effects

📱 **Fully Responsive** - Mobile-first design that works on all devices

♿ **Accessible** - ARIA labels, keyboard navigation, reduced motion support

🔄 **Interactive Components** - Carousel, collapsible sections, copy buttons

⚡ **Fast** - Vite dev server with instant HMR

## Dependencies Overview

| Package | Purpose |
|---------|---------|
| `framer-motion` | Animation library |
| `lucide-react` | Icons |
| `embla-carousel-react` | Carousel functionality |
| `@radix-ui/*` | Accessible UI primitives |
| `class-variance-authority` | CSS class variant composition |
| `clsx` + `tailwind-merge` | Smart class name handling |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. Optimize project images (use appropriate formats and sizes)
2. Lazy load carousel images
3. Use `memo` for expensive sub-components
4. Monitor bundle size with `npm run build`

## Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)

## Troubleshooting

**Dev server won't start:**
- Clear `node_modules` and `package-lock.json`, then reinstall
- Make sure port 5173 is available
- Check Node version: `node --version` (should be 18+)

**Styling issues:**
- Ensure `src/index.css` is imported in `src/main.tsx`
- Check Tailwind config in `vite.config.ts`
- Rebuild with `npm run build` to verify

**Animations not working:**
- Check `prefers-reduced-motion` for accessibility
- Ensure Framer Motion is properly installed
- Verify component has `motion.` prefix

## License

MIT

## Next Steps

1. Customize portfolio content in `src/App.tsx`
2. Update social media links
3. Add your project images
4. Deploy to Vercel, Netlify, or GitHub Pages

---

Built with ❤️ | Powered by React, TypeScript & Tailwind CSS
