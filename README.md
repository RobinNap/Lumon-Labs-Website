# Lumon Labs Website

A modern, fast marketing website for Lumon Labs — an independent studio crafting apps for Apple platforms.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), optimized for deployment on [Cloudflare Pages](https://pages.cloudflare.com).

## Quick Start

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

## Project Structure

```
├── public/              # Static assets
│   ├── favicon.svg      # Site favicon
│   └── robots.txt       # Search engine directives
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/
│   │   └── apps/        # App entries (markdown)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes (Astro pages)
│   └── styles/          # Global CSS
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── package.json
```

## Adding Your Apps

To add a new app to the portfolio:

1. Create a new `.md` file in `src/content/apps/`
2. Use this frontmatter template:

```yaml
---
title: "Your App Name"
tagline: "A short tagline"
description: "A longer description for the app card and SEO."
platforms: ["iOS", "iPadOS", "macOS", "watchOS", "visionOS"]
appStoreUrl: "https://apps.apple.com/app/your-app"
websiteUrl: "https://yourapp.com"  # optional
featured: true  # Show on homepage
order: 1  # Sort order
status: "available"  # or "coming-soon" or "beta"
color: "#00d4aa"  # Accent color for the app icon
---

Write your app's full description here in Markdown...
```

3. The app will automatically appear on the Apps page

## Customization

### Branding

- **Logo**: Edit the SVG in `Header.astro` and `Footer.astro`
- **Colors**: Modify the palette in `tailwind.config.mjs`
- **Fonts**: Change font imports in `global.css` and `tailwind.config.mjs`

### Contact Info

Update email addresses in these files:
- `src/pages/contact.astro`
- `src/pages/privacy.astro`
- `src/pages/support.astro`

### Site URL

Set your production URL:
1. Update `site` in `astro.config.mjs`
2. Update the sitemap URL in `public/robots.txt`

## Required Assets

Before deploying, add these files to `public/`:

- **`apple-touch-icon.png`** (180×180) — iOS home screen icon
- **`og-image.png`** (1200×630) — Social sharing preview image

## Deploy to Cloudflare Pages

### Option 1: Connect GitHub (Recommended)

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://dash.cloudflare.com/?to=/:account/pages)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `20` (set in Environment variables as `NODE_VERSION`)

### Option 2: Direct Upload

```bash
npm run build
npx wrangler pages deploy dist
```

### Environment Variables

Set these in Cloudflare Pages dashboard if needed:

| Variable | Description |
|----------|-------------|
| `SITE_URL` | Your production domain (e.g., `https://lumonlabs.com`) |
| `NODE_VERSION` | Node.js version (`20`) |

## Tech Stack

- **[Astro](https://astro.build)** — Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** — Utility-first CSS
- **[Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — Auto-generated sitemap

## License

MIT

