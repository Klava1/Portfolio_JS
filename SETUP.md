# React Portfolio Setup Instructions

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Move assets to public folder:**
   
   Vite serves static assets from the `public` directory. You need to move/copy these files:
   
   - All images (`.jpg`, `.png`, `.svg` files)
   - Videos (`.mp4` files)
   - PDFs (`CV.pdf`)
   - HTML project files (if you want to keep them accessible)
   
   Or you can create symlinks, or keep them in root and update paths.

3. **Start development server:**
   ```bash
   npm run dev
   ```

## Asset Paths

In React/Vite, static assets should be:
- In the `public/` folder and referenced with `/filename.ext`
- Or imported in components and referenced directly

Currently, the code references assets with `/` prefix (e.g., `/logo.jpg`), which means they should be in the `public/` folder.

## Project Files

The HTML project files (split-bill.html, choices-game.html, etc.) can either:
1. Stay in the `public/` folder to be accessible
2. Be converted to React components later
3. Be served from a separate static server

## Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.


