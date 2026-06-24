# Shah & Associates — Premium CA & Tax Advisory Website

Enterprise-grade website for Shah & Associates, a Chartered Accountant, Tax Advisory, Legal Consultancy, and Business Compliance firm.

## Tech Stack

- React 18+ / TypeScript / Vite
- Tailwind CSS v4
- Framer Motion
- React Hook Form + Zod
- Lucide React
- Embla Carousel
- React Router DOM
- React Helmet Async

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Deployment

### Cloudflare Pages

1. Connect your repository to Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `dist`

### GitHub Pages

Add to `vite.config.ts`:

```ts
base: '/your-repo-name/'
```

Then build and deploy the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── layout/     # Header, Footer, MobileMenu
│   ├── home/       # Homepage sections
│   └── shared/     # Reusable components
├── pages/          # Route pages
├── data/           # Content data
├── hooks/          # Custom hooks
├── routes/         # Route definitions
└── utils/          # Utilities
```

## Features

- Premium corporate design (Navy + Gold palette)
- Multi-step consultation booking form
- 8 service categories with detailed cards
- Interactive industries explorer
- Case studies & testimonial carousel
- 24+ FAQ entries across 8 categories
- Resource center with lead capture
- Blog with category filtering
- 10 SEO landing pages
- Sticky CTA, WhatsApp chat, exit-intent popup
- Google Maps embed
- Fully responsive mobile navigation
