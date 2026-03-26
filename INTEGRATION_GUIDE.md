# Portfolio Integration Guide

## ✅ Project Setup Complete

Your React + TypeScript + Tailwind CSS portfolio has been successfully created and integrated with all components!

## Project Structure

```
PORTFOLIO/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx           # Reusable button with variants
│   │       ├── carousel.tsx         # Image carousel (Embla-based)
│   │       ├── collapsible.tsx      # Accordion sections (Radix-based)
│   │       └── separator.tsx        # Visual dividers
│   ├── lib/
│   │   └── utils.ts                 # Helper: cn() for class merging
│   ├── App.tsx                      # Main portfolio component
│   ├── main.tsx                     # React entry point
│   └── index.css                    # Tailwind + custom styles
├── index.html                       # HTML template
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── vite.config.ts                   # Vite config
└── dist/                            # Production build (generated)
```

## What's Included

### ✨ Core Components

1. **button.tsx** - Button component with CVA variants
   - Variants: default, destructive, outline, secondary, ghost, link
   - Sizes: default, sm, lg, icon
   - Built with @radix-ui/react-slot for flexibility

2. **carousel.tsx** - Responsive carousel
   - Uses embla-carousel-react
   - Keyboard navigation support
   - Supports horizontal/vertical orientation
   - Includes Previous/Next buttons and indicators

3. **collapsible.tsx** - Expandable sections
   - Based on @radix-ui/react-collapsible
   - Smooth animations
   - Used in experience section

4. **separator.tsx** - Visual divider
   - Horizontal/vertical orientation
   - Based on @radix-ui/react-separator
   - Decorative support

### 📱 Portfolio Sections

#### Hero Section
- Animated name and title
- Background video (YouTube embed)
- Web pattern overlay
- CTA buttons (GitHub, LinkedIn, Email)
- Smooth entrance animations

#### Projects Section
- Carousel showcase of projects
- Navigation arrows and dot indicators
- Project cards with hover effects
- Image zoom on hover
- Metadata display (title, description)

#### Experience Section
- Work history timeline
- Collapsible job positions
- Employment period and type
- Skills badges
- Company branding support
- Current employer indicator (pulsing dot)

#### Contact Section
- Email and phone display
- Copy-to-clipboard functionality
- Social media links
- Feedback on successful copy

#### Footer
- Quick navigation links
- Social links
- Copyright
- Animated container utility

## 🎨 Styling Details

### Tailwind v4
- Uses new CSS Variables approach
- OKLch color space for perceptual uniformity
- Light and dark mode support (.dark class)
- Custom radius scales (sm, md, lg, xl)

### Custom Theme
Colors defined in `src/index.css`:
- **Primary**: oklch(0.205 0 0) - Dark gray/black
- **Destructive**: Red gradient - oklch(0.577 0.245 27.325)
- **Accent**: oklch(0.97 0 0) - Light gray/white
- Custom sidebar, chart, and semantic colors

### Animations
- Framer Motion for enterances/exits
- Reduce motion support
- Collapsible animations for experience
- Carousel slide transitions
- Button hover/active states

## 🚀 Getting Started

### Start Development Server
```bash
npm run dev
```
Runs on http://localhost:5173

### Build for Production
```bash
npm run build
```
Output: `dist/` folder

### Preview Production Build
```bash
npm run preview
```

## 🎯 Customization

### 1. Update Personal Info

**File: `src/App.tsx`**

```typescript
// Hero Section - Line ~200
<h1>HARSH ROHRA</h1>  // Change name
<a href="mailto:contact@example.com">  // Change email
```

### 2. Add Your Projects

**File: `src/App.tsx` - `projects` array (Line ~650)**

```typescript
const projects: Project[] = [
  {
    id: "1",
    title: "Your Project",
    description: "Project description",
    href: "https://yourproject.com",
    image: "https://image-url.com/image.jpg",
  },
  // Add more projects...
];
```

### 3. Add Work Experience

**File: `src/App.tsx` - `experiences` array (Line ~670)**

```typescript
const experiences: Experience[] = [
  {
    id: "1",
    companyName: "Your Company",
    companyLogo: "https://logo-url.com/logo.png", // Optional
    positions: [
      {
        id: "1-1",
        title: "Your Position",
        employmentPeriod: "2023 — Present",
        employmentType: "Full-time",
        description: "Description of your role",
        skills: ["React", "TypeScript", "Node.js"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  // Add more companies...
];
```

### 4. Customize Colors

**File: `src/index.css`**

Update CSS variables in `:root` and `.dark` selectors:

```css
:root {
  --primary: oklch(0.205 0 0);  /* Main color */
  --destructive: oklch(0.577 0.245 27.325);  /* Accent/Red */
  /* ... more colors ... */
}
```

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.1 | UI framework |
| react-dom | ^18.3.1 | React DOM binding |
| framer-motion | ^11.0.0 | Animations |
| lucide-react | latest | Icons |
| tailwindcss | ^4.0.0 | CSS framework |
| @tailwindcss/vite | ^4.0.0 | Tailwind Vite plugin |
| embla-carousel-react | ^8.0.0 | Carousel |
| @radix-ui/react-collapsible | ^1.0.3 | Collapsible UI |
| @radix-ui/react-separator | ^1.0.3 | Separator UI |
| @radix-ui/react-slot | ^1.0.2 | Slot pattern |
| class-variance-authority | ^0.7.0 | CSS class variants |
| clsx | ^2.1.0 | Class name utility |
| tailwind-merge | ^2.2.0 | Tailwind class merger |

## 🔍 Component Usage Examples

### Button Variants

```tsx
import { Button } from "@/components/ui/button";

// Default
<Button>Click me</Button>

// Outline
<Button variant="outline">Outline</Button>

// Destructive
<Button variant="destructive">Delete</Button>

// Ghost
<Button variant="ghost">Ghost</Button>

// Icon
<Button size="icon"><Icon /></Button>
```

### Carousel

```tsx
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

<Carousel setApi={setApi}>
  <CarouselContent>
    {items.map(item => (
      <CarouselItem key={item.id}>
        {item.content}
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### Collapsible

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

<Collapsible>
  <CollapsibleTrigger>Show details</CollapsibleTrigger>
  <CollapsibleContent>Hidden content here</CollapsibleContent>
</Collapsible>
```

## 🐛 Troubleshooting

### Build errors?
```bash
# Clear build cache
rm -r node_modules dist package-lock.json
npm install
npm run build
```

### Port 5173 already in use?
```bash
# Use different port
npm run dev -- --port 3000
```

### Styles not applying?
- Check `vite.config.ts` includes Tailwind plugin
- Verify `index.css` is imported in `main.tsx`
- Run `npm run build` to test production build

### Icons not showing?
- Lucide React icons are imported as components
- Ensure icon names match available exports
- Check `src/App.tsx` imports

## 📱 Responsive Design

The portfolio is mobile-first with breakpoints:
- **Mobile**: Default (no breakpoint)
- **Tablet**: `md:` (768px)
- **Desktop**: `lg:` (1024px)
- **Large**: `xl:` (1280px)
- **2K**: `2xl:` (1536px)

## ♿ Accessibility

- ARIA labels on buttons and interactive elements
- Keyboard navigation support (carousel arrows)
- Reduced motion support (Media query: prefers-reduced-motion)
- Semantic HTML structure
- Color contrast compliance

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
Update `vite.config.ts`:
```typescript
export default {
  base: '/repo-name/',  // Add base path
  // ...
}
```

## 📝 Files Created

✅ Complete project structure with:
- All UI components (Button, Carousel, Collapsible, Separator)
- Utility functions (cn for class merging)
- Main App component with all sections
- Tailwind CSS v4 configuration
- TypeScript configuration
- Vite configuration
- HTML entry point
- Complete README

## 🎓 Learning Resources

- [Tailwind CSS](https://tailwindcss.com)
- [React Docs](https://react.dev)
- [Framer Motion](https://www.framer.com/motion)
- [Radix UI](https://www.radix-ui.com)
- [Embla Carousel](https://www.embla-carousel.com)

## 🎉 Next Steps

1. ✅ Start dev server: `npm run dev`
2. ✅ Customize your content in `src/App.tsx`
3. ✅ Add project images and descriptions
4. ✅ Update social media links
5. ✅ Deploy to your hosting provider

---

**Ready to showcase your work!** 🚀
