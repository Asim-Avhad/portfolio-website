# Asim Avhad · Portfolio (v2)

Personal site for Asim Avhad: AI engineer and Master of AI student at Monash University, Melbourne.

**Stack:** Next.js 15 (App Router, Server Actions) · React 19 · TypeScript · Tailwind CSS 3 · Motion · Resend + React Email

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Editing content

Everything you'd want to change lives in **`lib/data.ts`**: the status pill, projects, experience, skills, awards and the "off the clock" facts. Components only read from it.

- **Add a GitHub / demo link to an AI project:** set `repo` or `demo` on it in `featuredProjects` and a button appears.
- **Change availability:** edit `site.status` (set `open: false` to hide the pill).
- **Résumé:** replace `public/Asim-Avhad-Resume.pdf`.

## Contact form

The form posts to a server action (`actions/SendEmail.ts`) that sends through [Resend](https://resend.com). Add your key to `.env.local` locally and to your host's environment variables:

```
RESEND_API_KEY=re_...
```

Without a key the form shows a friendly "email me directly" message instead of failing.

## Design notes

- **Theme:** dark by default with a clean light mode, follows the visitor's system setting, no flash on load. Accent is racing red (#E10600), with a brighter red for text on black.
- **Type:** Instrument Serif (display), Geist Sans (body), Geist Mono (labels).
- **Hero background:** `public/contours.svg` is a topographic map generated from a height field; the animated line is a real gradient-descent path on that same field. Trekking meets loss landscapes.
- **F1 touches:** the F1 project card has a car lapping an original circuit with a lap counter and pit-stop countdown; another car crosses a chequered strip in the footer (`components/F1Car.tsx`, `F1Circuit.tsx`, `FinishLine.tsx`).
- **Quick nav:** press <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>K</kbd> anywhere.
- Respects `prefers-reduced-motion`.

## Deploying

Works out of the box on Vercel. Set `NEXT_PUBLIC_SITE_URL` to your production URL if you use a custom domain (used for social-preview links).
