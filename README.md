# Joshua Khooba — Terminal Portfolio

A personal developer portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Features a terminal-inspired aesthetic with animated sections, dark/light theming, and a responsive single-page layout.

🌐 **Live Site:** [joshuakhooba.com](https://github.com/JoshuaKhooba)

---

## Features

- **Animated Hero** — Typing effect cycling through roles (Full Stack Developer, Data Analyst, IT Professional, etc.)
- **Interactive Skills Grid** — Organized by category: Languages, Frontend, Backend, Databases, Cloud, and Tools
- **Experience Timeline** — Detailed work history with role highlights and metrics
- **Projects Showcase** — 9 projects spanning iOS, Full-Stack, Blockchain, Data, and Java
- **Certifications** — AWS Academy and TestOut credential cards with verify links
- **Fun Facts** — Hobbies and personal facts section
- **Contact Section** — Direct email, GitHub, and LinkedIn links
- **Dark / Light Theme** — Toggle with `next-themes`; persists across sessions
- **Cursor Glow & Particle Canvas** — Subtle ambient UI effects
- **Scroll Reveal Animations** — Sections animate in via Intersection Observer
- **SEO-ready** — `robots.ts` and `sitemap.ts` included
- **Downloadable Resume** — PDF served from `/public/assets/`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| UI Primitives | Radix UI (Dialog, Tabs, Tooltip) |
| Icons | Lucide React |
| Theming | next-themes |
| Linting | ESLint (Next.js config) |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with font and theme provider
│   ├── page.tsx            # Single-page composition (all sections)
│   ├── globals.css         # Global styles and CSS variables
│   ├── robots.ts           # SEO robots config
│   └── sitemap.ts          # SEO sitemap
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with section links and theme toggle
│   │   └── Footer.tsx      # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx        # Landing with typing animation
│   │   ├── About.tsx       # Bio and education cards
│   │   ├── Skills.tsx      # Tabbed skills grid
│   │   ├── Experience.tsx  # Work history timeline
│   │   ├── Projects.tsx    # Project cards with GitHub links
│   │   ├── Certifications.tsx
│   │   ├── FunFacts.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Card.tsx
│       ├── BrandIcons.tsx
│       ├── CursorGlow.tsx
│       ├── FloatingDots.tsx
│       ├── ParticleCanvas.tsx
│       ├── SectionHeading.tsx
│       └── ThemeToggle.tsx
├── data/
│   └── portfolio.ts        # All content: bio, experience, projects, skills, certs
├── hooks/
│   ├── useScrollReveal.ts  # Intersection Observer hook for scroll animations
│   └── useTypingEffect.ts  # Cycling typing animation hook
└── lib/
    └── utils.ts            # cn() utility (clsx + tailwind-merge)
```

**All site content lives in `src/data/portfolio.ts`** — update that single file to change any text, project, or skill on the site.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/JoshuaKhooba/Terminal-Portfolio.git
cd Terminal-Portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site. The page hot-reloads as you edit.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Customization

To make this portfolio your own, edit **`src/data/portfolio.ts`**:

- `personalInfo` — name, title, email, location, social links, bio
- `titles` — the strings the hero typing animation cycles through
- `education` — degrees, schools, GPA, date ranges
- `experience` — jobs, bullet points, date ranges
- `skills` — categories and individual skill entries
- `projects` — title, description, tech stack, GitHub/demo URLs
- `certifications` — issuer, date, credential ID, verify URL
- `funFacts` — hobbies and personal facts

Replace the resume at `public/assets/Joshua_Khooba_Resume.pdf` with your own PDF (keep the filename or update `resumeUrl` in `personalInfo`).

---

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com/new):

1. Push your repo to GitHub
2. Import the project on Vercel
3. Deploy — no configuration needed for Next.js

Alternatively, build and serve the output locally:

```bash
npm run build
npm run start
```

Or containerize with Docker and deploy to any cloud provider.

---

## License

This project is open-source and available under the [MIT License](LICENSE).
