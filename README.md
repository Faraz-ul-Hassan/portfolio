# Faraz Ul Hassan — Portfolio

Personal portfolio built with **Next.js (App Router)** and **Tailwind CSS**, ready to deploy on **Vercel** and serve on `farazulhassan.me`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/` — routes/pages (`/`, `/about`, `/projects`, `/skills`, `/experience`, `/contact`)
- `src/components/` — layout, sections, and UI components
- `src/lib/site.ts` — site-wide config (name, role, links, email, domain)
- `src/lib/projects.ts` — **project data (add new projects here)**
- `src/lib/skills.ts` — skills data
- `src/lib/experience.ts` — experience/education data
- `src/types/` — shared TypeScript types

## Adding a new project

Edit [`src/lib/projects.ts`](src/lib/projects.ts) and append a new object to the `projects` array:

```ts
{
  title: "Project Name",
  description: "Short description of what it does and why it matters.",
  techStack: ["Next.js", "TypeScript"],
  githubUrl: "https://github.com/...", // optional
  liveUrl: "https://...",             // optional
  featured: false,                    // set true to show on home page
  highlights: [                       // optional bullet points
    "Key outcome or feature",
  ],
}
```

No page/component changes are required — the Projects page and featured section render from this data.

## Deploying to Vercel

1. Push this `portfolio` project to a GitHub repository (or import the folder).
2. In [Vercel](https://vercel.com/new), import the repo and set the root directory to `portfolio` if needed.
3. Use defaults: Framework **Next.js**, Build `npm run build`, Output `.next`.
4. In **Project Settings → Domains**, add `farazulhassan.me` and `www.farazulhassan.me`.
5. Ensure your Namecheap DNS records point to Vercel as instructed in the Vercel dashboard (typically an `A` record for apex and `CNAME` for `www`).

## Customization

- Update personal details/links in `src/lib/site.ts`.
- Replace `public/` assets (favicon, resume, images) as needed. A resume download button expects `/resume.pdf` in `public/`.
- Edit theme/content in `src/app/globals.css` and components under `src/components/`.
