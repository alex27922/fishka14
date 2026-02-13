# Fishka Valentine ❤️

A romantic, cinematic Valentine's Day gift website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Password:** `fishka`

## Customization

All content is configurable in **`config/valentine.config.ts`**:

- **`password`** — Change the gate password
- **`headline`** — Main romantic text in the center
- **`photos`** — Replace with your photos. Use `"url"` or `{ src: "url", caption: "Наш перший вечір" }` for hover captions
- **`secretMessage`** — Trigger text and love letter content
- **`animationSpeed`** — Adjust conveyor scroll speeds
- **`effects`** — Toggle particles, hearts on click, secret message, cursor, loading screen

## Deploy to Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy (zero config)

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
