# FitLab - Premium Gym Website Template

A modern, dark-themed gym website template built with React, Vite, and Tailwind CSS. Perfect for fitness studios, MMA gyms, strength training facilities, and performance centers.

![FitLab Preview](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200)

## ✨ Features

- **Premium Dark Theme** - Sleek, modern aesthetic that conveys power and professionalism
- **Fully Responsive** - Looks great on desktop, tablet, and mobile
- **Easy Customization** - Single config file to change all content
- **Multiple Color Schemes** - Switch between olive, gold, or crimson accents
- **Social Proof** - Built-in testimonials and stats sections
- **WhatsApp Integration** - One-click booking via WhatsApp
- **Smooth Animations** - Subtle, purposeful micro-interactions
- **SEO Ready** - Semantic HTML and meta tags included

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### 1. Edit Site Content

Open `src/config/site.config.ts` and update:

```typescript
export const siteConfig = {
  name: "YOUR GYM NAME",
  tagline: "Your tagline here",
  contact: {
    phone: "+1 234 567 8900",
    whatsapp: "12345678900",
    // ...
  },
  // ... programs, schedule, testimonials, etc.
};
```

### 2. Change Color Scheme

Open `src/config/theme.config.ts` and change the accent:

```typescript
export const themeConfig = {
  accentScheme: 'olive', // Options: 'olive' | 'gold' | 'crimson'
  // ...
};
```

### 3. Update Images

Replace the image URLs in `siteConfig.gallery` with your own photos.

## 📁 Project Structure

```
src/
├── config/
│   ├── site.config.ts    # All content (editable)
│   └── theme.config.ts   # Colors & styling (editable)
├── app/
│   ├── App.tsx           # Main app component
│   └── components/       # UI components
│       ├── Hero.tsx
│       ├── Stats.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Testimonials.tsx
│       ├── Schedule.tsx
│       ├── Gallery.tsx
│       ├── Location.tsx
│       ├── Navigation.tsx
│       └── Footer.tsx
└── styles/
    ├── index.css         # Global styles
    └── theme.css         # CSS variables
```

## 🛠 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Lucide Icons** - Icon set
- **TypeScript** - Type safety

## 📱 Sections Included

1. **Hero** - Headline, CTAs, stats preview
2. **Stats Bar** - Member count, experience, rating
3. **About** - Core values and philosophy
4. **Programs** - Training services with "who it's for" tags
5. **Testimonials** - Member reviews with ratings
6. **Schedule** - Class timetable by day
7. **Gallery** - Facility photos
8. **Location** - Map, address, contact info
9. **Footer** - Navigation and social links

## 📄 License

This template is licensed for commercial use. See [LICENSE](./LICENSE) for details.

## 🤝 Support

For questions or customization requests, contact the developer.

---

**Built for gyms that take their business seriously.**
