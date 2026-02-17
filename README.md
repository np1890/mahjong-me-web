# MahjongMe

Learn Mahjong rules and strategy. Interactive lessons and AI coaching coming soon.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Fonts:** DM Serif Display & DM Serif Text (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Deployment

### GitHub

1. Create a new repository on [GitHub](https://github.com/new)
2. Initialize and push from your project:

```bash
git init
git add .
git commit -m "Initial commit: Coming Soon page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use "Continue with GitHub")
2. Click **Add New Project** → Import your GitHub repository
3. Vercel will auto-detect Next.js. Click **Deploy**
4. Your site will be live at `your-project.vercel.app`

### Custom Domain

1. In your Vercel project, go to **Settings** → **Domains**
2. Add your domain (e.g. `mahjongme.com`)
3. Update your domain's DNS records as instructed:
   - **A record** pointing to Vercel's IP, or
   - **CNAME record** pointing to `cname.vercel-dns.com`
4. Vercel will automatically provision SSL

## Project Structure

```
MahjongMeWeb/
├── app/
│   ├── layout.tsx    # Root layout, fonts, metadata
│   ├── page.tsx      # Coming Soon homepage
│   └── globals.css   # Global styles
├── public/
│   └── images/       # Design assets (tiles, etc.)
└── ...
```

## Design Assets

Tiles and table assets are in `public/images/` sourced from the MahjongMe Design Assets folder.
