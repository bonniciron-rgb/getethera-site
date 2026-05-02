# Deploy Ethera Website

Production domain: `getethera.io`

## Recommended Setup

Use:

- GitHub repository: `getethera-site` or `ethera-marketing`
- Vercel project name: `getethera`
- Production domain: `getethera.io`
- Optional redirect domain: `www.getethera.io`

## GitHub

1. Create a new GitHub repository.
2. Recommended name: `getethera-site`.
3. Keep it empty, with no README, no license, and no `.gitignore`.
4. Push this folder to the repository.

## Vercel

1. Open Vercel.
2. Add New Project.
3. Import the GitHub repository.
4. Use these settings:
   - Framework preset: Other
   - Build command: `npm run build`
   - Output directory: `.`
   - Install command: leave empty
5. Deploy.

## Domain

After the first successful deploy:

1. In Vercel, open Project Settings.
2. Go to Domains.
3. Add `getethera.io`.
4. Add `www.getethera.io` and redirect it to `getethera.io`.
5. Follow Vercel's DNS instructions at your domain registrar.

Typical DNS setup:

- Apex/root domain `getethera.io`: Vercel A record or nameserver setup.
- `www.getethera.io`: CNAME to Vercel.

## After Launch

- Replace the demo form email if `hello@getethera.io` changes.
- Add analytics.
- Add a real form backend through HubSpot, Vercel Functions, Tally, Formspree, or Make.
- Add Portuguese version when the first campaign is ready.
