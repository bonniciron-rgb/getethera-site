# Ethera Marketing Site

Static homepage for Ethera, prepared for GitHub and Vercel.

Production domain: `getethera.io`

## Local Preview

Open `index.html` directly in a browser, or run:

```bash
node server.cjs
```

Then visit `http://localhost:4173`.

## Vercel

This site has no build step. Import the GitHub repository in Vercel and use the default static deployment settings.

Suggested Vercel settings:

- Framework preset: Other
- Build command: leave empty, or use `npm run build`
- Output directory: `.`
- Production branch: `main`

## Launch Checklist

- Replace `hello@getethera.io` mail links with the live sales inbox if the address changes
- Add `getethera.io` in Vercel
- Add production analytics once the domain is live
- Submit `https://getethera.io/sitemap.xml` in Google Search Console after the first deployment
- Verify social previews use `https://getethera.io/assets/ethera-logo-cropped.png`
- Replace demo metrics with real proof points after first campaigns
- Add Portuguese version for Portugal launch
