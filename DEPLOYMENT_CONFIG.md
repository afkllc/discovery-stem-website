# Deployment Configuration Guide

## Local Development
When running `npm run dev`, the site runs at:
```
http://localhost:4321/
```

**Current config.json settings (for local dev):**
```json
"base_path": "/"
```

## GitHub Pages Deployment

When deploying to GitHub Pages, you need to update `src/config/config.json` to use the project path:

### Before building for production:

```json
"base_path": "/discovery-stem-website/"
```

### Steps to Deploy:

1. **Update config for production:**
   ```bash
   # Edit src/config/config.json and change:
   "base_path": "/" 
   # to:
   "base_path": "/discovery-stem-website/"
   ```

2. **Build the site:**
   ```bash
   npm run build
   ```

3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update for GitHub Pages deployment"
   git push origin main
   ```

4. **GitHub Actions will automatically deploy** via `.github/workflows/action.yml`

Your site will be available at: `https://afkllc.github.io/discovery-stem-website/`

## Important Notes

- **Always use `/` for local development** - this prevents path errors when running `npm run dev`
- **Always use `/discovery-stem-website/` before building for production** - GitHub Pages requires the project name in the path
- Changes to `config.json` trigger Astro rebuild automatically

## Environment-Based Configuration (Optional)

If you want automatic switching based on environment, you can modify `astro.config.mjs`:

```javascript
// Check if building for production
const basePath = process.env.NODE_ENV === 'production' 
  ? '/discovery-stem-website/'
  : '/';

export default defineConfig({
  base: basePath || config.site.base_path,
  // ... rest of config
});
```

Then keep `config.json` set to `/` and it will auto-switch during builds.

---

**TL;DR:**
- 🟢 Local dev: `base_path: "/"`  
- 🟠 Before production build: switch to `base_path: "/discovery-stem-website/"`
- 🔴 After deploying: switch back to `/` if you'll be testing locally again
