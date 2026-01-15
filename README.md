# The Cycle Calendar

A cycle-awareness visual ritual for your iPhone lock screen. Each morning, your wallpaper updates to show where you are in a 28-day awareness cycle.

## Features

- **Daily wallpaper updates** - iOS Shortcut automation fetches the correct wallpaper each morning
- **Four phases** - Inner Winter, Inner Spring, Inner Summer, Inner Autumn
- **Multiple iPhone sizes** - Supports iPhone 13 through 16 series

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Marketing landing page
│   ├── setup/             # iOS Shortcut setup instructions
│   └── wallpaper/         # API endpoint for wallpaper redirect
├── components/
│   └── url-generator.tsx  # Date picker & model selector
└── lib/
    └── cycle-data.ts      # Cycle phases & iPhone model data

public/
└── wallpapers/            # 28 wallpapers per device size
    ├── 16-pro-max/        # 1320 × 2868 px
    ├── 16-plus/           # 1290 × 2796 px
    ├── 16-pro/            # 1206 × 2622 px
    ├── 15/                # 1179 × 2556 px
    ├── 14-plus/           # 1284 × 2778 px
    ├── 14/                # 1170 × 2532 px
    └── 13-mini/           # 1080 × 2340 px
```

## API

```
GET /wallpaper?start=YYYY-MM-DD&model=15
```

Returns a 302 redirect to the correct wallpaper image based on the cycle day.

## Deployment

Deploy to Vercel:

```bash
npx vercel
```

## Disclaimer

This is an awareness tool, not a medical tracker. It does not predict fertility, diagnose conditions, or replace professional medical advice.
