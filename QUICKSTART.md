# 🚀 Quick Start

## Installation Complete ✅

Your portfolio project is ready to go!

### Pre-requisites
- ✅ All dependencies installed
- ✅ Project structure created
- ✅ Configuration files set up
- ✅ Production build verified

### 1️⃣ Start Development Server

```bash
npm run dev
```

The app will open at **http://localhost:5173**

### 2️⃣ Customize Your Content

Edit `src/App.tsx` to personalize:

**Lines ~200-250: Hero Section**
- Update your name
- Change tagline
- Update social links

**Lines ~650-680: Projects**
- Add your project details
- Update image URLs
- Modify descriptions

**Lines ~670-705: Experience**
- Add your work history
- Update company names
- Add skills and descriptions

**Lines ~480-490: Contact Info**
- Change email
- Update phone number

### 3️⃣ Build for Production

```bash
npm run build
```

Output goes to `dist/` folder - ready to deploy!

### 4️⃣ Deploy

**Vercel** (easiest):
```bash
npm i -g vercel && vercel
```

**Netlify**:
```bash
npm i -g netlify-cli && netlify deploy --prod --dir=dist
```

## 📋 What's Included

✅ **UI Components**
- Button with multiple variants
- Carousel (for projects)
- Collapsible (for experience)
- Separator (visual dividers)

✅ **Sections**
- Hero with animations
- Projects showcase
- Work experience
- Contact information
- Footer with links

✅ **Features**
- Smooth animations (Framer Motion)
- Responsive design (mobile-first)
- Dark mode support
- Accessibility built-in
- Copy-to-clipboard
- Icon integration (Lucide React)

## 🎨 Customization Quick Tips

### Change Colors
Edit `src/index.css` - Look for OKLch color values

### Change Fonts
Add to `src/index.css`:
```css
@layer base {
  body {
    @apply font-[your-font-family];
  }
}
```

### Add More Projects
Update `projects` array in `src/App.tsx` (Line 650)

### Update Social Links
Search for `href="https://github.com"` in `src/App.tsx` and update URLs

## 📚 File Guide

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main portfolio - **CUSTOMIZE HERE** |
| `src/index.css` | Tailwind styles & theme |
| `package.json` | Dependencies |
| `vite.config.ts` | Build configuration |
| `tsconfig.json` | TypeScript settings |

## 🆘 Support

### Common Issues

**Port 5173 in use?**
```bash
npm run dev -- --port 3000
```

**Build fails?**
```bash
rm -rf node_modules dist
npm install
npm run build
```

**Styles look wrong?**
- Clear browser cache
- Rebuild: `npm run build`
- Check `src/index.css` is imported

## 🎯 Recommended Edits Order

1. Change your name in hero
2. Update social media links
3. Add your projects
4. Add your experience
5. Update contact email/phone
6. Customize colors in index.css
7. Deploy!

## 📱 Important URLs in Code

- **GitHub Link**: Line ~235 & ~631
- **LinkedIn Link**: Line ~245 & ~640
- **Email**: Line ~480
- **Phone**: Line ~481

---

**Happy coding! 🎉**

For detailed customization, see `INTEGRATION_GUIDE.md`
