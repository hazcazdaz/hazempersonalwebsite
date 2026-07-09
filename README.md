# Hazem Salem — Portfolio

Personal portfolio, redesigned as an editorial "index" — typography-driven, light/dark themed, zero purple gradients. Built with Vite + React + TypeScript + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## First-time setup (git + GitHub)

```bash
git init -b main
git add -A
git commit -m "Redesign: editorial index portfolio"
```

Then create an empty repo on github.com (`hazempersonalwebsite`, already created) and:

```bash
git remote add origin https://github.com/hazcazdaz/hazempersonalwebsite.git
git push -u origin main
```

## Deploy to Vercel (keep hazemwebsite.vercel.app)

The easiest way to keep your existing URL is to point the **existing** Vercel project at this new repo:

1. Vercel dashboard → your `hazemwebsite` project → **Settings → Git**
2. Disconnect the old Lovable repo, connect `hazcazdaz/hazempersonalwebsite`
3. **Settings → Build & Development**: Framework Preset = **Vite**, Build Command = `npm run build`, Output Directory = `dist`
4. Trigger a redeploy (or just push to `main`)

Alternatively: create a fresh Vercel project from the new repo, then delete the old project and rename the new one to `hazemwebsite` to reclaim the URL.

## Editing content

All copy lives in one file: `src/data/content.ts` — projects, experience, skills, education, links. The resume section pulls from Google Drive; to update it, replace the file in Drive (keep the same file ID) or change FILE_ID in `src/components/Resume.tsx`.

Theme colors (light + dark) are CSS variables at the top of `src/index.css`.
