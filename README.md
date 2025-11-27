# Claspuro Website

Eco-friendly marketing site for **Claspuro**, a sustainable stationery brand turning banana waste into premium A4 notebooks.

Built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**, the site showcases products, impact, and partnerships with a modern emerald-themed design.

---

## Features

- **Story-driven marketing site**
  - Hero sections with animated gradients and floating accents.
  - Clear narrative about mission, vision, impact, and community.

- **Product-focused pages**
  - Detailed product showcase for eco-friendly A4 notebooks (ruled, plain, grid).
  - Bulk order and partnership CTAs for schools, NGOs, offices, and retailers.

- **Audience segmentation**
  - Dedicated **Who We Serve** page highlighting students, institutions, NGOs, offices, retailers, and creatives with tailored messaging.

- **Company & leadership**
  - About page with Our Story, Mission & Vision, core values, impact stats, and leadership (CEO & Co‑founder) profiles.

- **Contact & FAQ**
  - Enhanced contact page with hero, quick-contact cards, inquiry types, detailed form, and business hours.
  - FAQ page with search, categorized accordions, and rich answers about products, sourcing, and orders.

- **Consistent design system**
  - Shared `SectionBadge` and `PrimaryButton` components for badges and CTAs.
  - Unified emerald gradient styling across navigation, heroes, sections, and cards.
  - Responsive layout with attention to mobile friendliness (navigation, footer, forms, grids).

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4, custom keyframe animations
- **Icons:** [`lucide-react`](https://github.com/lucide-icons/lucide)
- **UI Primitives (available):** Radix UI (@radix-ui/*)
- **Forms & Validation:** `react-hook-form`, `zod` (available for richer forms)
- **Charts & UI Extras (available):** `recharts`, `embla-carousel-react`, `sonner`, etc.

Only a subset of these libraries is currently used in the marketing pages; others are available for future features.

---

## Project Structure

High-level overview of the most relevant folders:

- `app/`
  - `page.tsx` – Home page (hero, features, how-it-works, impact stats, previews, testimonials, CTA).
  - `products/page.tsx` – Products overview with enhanced hero, benefits, sustainability, testimonials, and ordering info.
  - `about/page.tsx` – Story, mission & vision, core values, leadership, impact, and CTA.
  - `contact/page.tsx` – Contact hero, quick-contact cards, rich form, "Why choose Claspuro?" block, and business hours.
  - `faq/page.tsx` – FAQ with hero, search, categorized accordion, and contact CTA.
  - `who-we-serve/page.tsx` – Audience segments, use cases, testimonials, and partner-focused benefits.
  - `layout.tsx` – Root layout, global metadata, and shared wrappers.

- `components/`
  - `navigation.tsx` – Sticky, responsive navigation with emerald logo, active link states, and mobile menu.
  - `footer.tsx` – Rich footer with newsletter, quick links, company links, social links, and sustainability badges.
  - `hero-section.tsx` – Home hero with deterministic floating particles and animated gradients.
  - `page-hero.tsx` – Reusable page hero (background image, overlay, particles, breadcrumb, and badge via `SectionBadge`).
  - `products-showcase.tsx` – Animated product cards and bulk orders CTA.
  - `mission-section.tsx` – Mission, vision, core values, and impact stats (now also mirrored in `about/page.tsx`).
  - `contact-section.tsx` – Older contact section (replaced by enhanced inline section on Contact page, but still available).
  - `section-badge.tsx` – Shared pill-style badge used across heroes and sections.
  - `primary-button.tsx` – Shared primary CTA button styling.

- `public/`
  - Brand and content images (banners, product photos, leadership photos, icons, OG image).

- `styles/`
  - `globals.css` – Tailwind base plus custom animations like `hero-gradient` and `hero-float`.

---

## Architecture

At a high level, the app follows the **Next.js App Router** pattern:

- **Root layout**
  - `app/layout.tsx` wraps all pages with global `<html>` / `<body>`, metadata, fonts, and shared layout.
  - Injects the top-level **Navigation** and **Footer** so they are consistent across routes.

- **Route segments**
  - Each file in `app/*/page.tsx` is a **server component** page responsible for:
    - Defining page-level metadata (where needed).
    - Composing page-specific sections using shared components.

- **Shared presentation components**
  - Components in `components/` (e.g., `hero-section`, `page-hero`, `products-showcase`, `mission-section`, `section-badge`, `primary-button`) encapsulate reusable UI patterns and styling.
  - Some components are **client components** (e.g., interactive elements like FAQ accordions or animated sections) and are imported where interactivity is required.

- **Styling and assets**
  - Tailwind utilities are used inline in JSX for most styling.
  - Global animations and any custom CSS live in `styles/globals.css`.
  - Images and icons are served from `public/` and referenced via `/...` paths.

This separation keeps pages mostly declarative while pushing design details and behavior into reusable components.

### Request flow (simplified)

```text
Browser request
  → app/layout.tsx (root layout, metadata, Navigation, Footer)
    → app/[route]/page.tsx (page-level composition)
      → components/* (heroes, sections, cards, badges, buttons)
        → styles/globals.css + Tailwind utilities (styling & animations)
```

---

## Available Routes

- `/` – Home
- `/products` – Products overview
- `/who-we-serve` – Audience & partners
- `/about` – About Claspuro
- `/contact` – Contact & inquiries
- `/faq` – Frequently Asked Questions

All pages share consistent navigation and footer, plus a unified emerald visual language.

---

## Getting Started

### Prerequisites

- Node.js 18+ (recommended for Next.js 16)
- npm (or another package manager; this repo includes `package-lock.json`)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Then open **http://localhost:3000** in your browser.

The app will hot‑reload as you edit files in `app/` and `components/`.

### Build for production

```bash
npm run build
npm start
```

This compiles the Next.js app for production and starts the optimized server.

### Running with Docker

If you prefer to run the site in a container, a multi-stage `Dockerfile` is included at the project root.

**Build the image:**

```bash
docker build -t claspuro-frontend .
```

**Run the container:**

```bash
docker run --rm -e PORT=3000 -p 3000:3000 claspuro-frontend
```

Then open **http://localhost:3000** in your browser.

To pass environment variables (for example `NEXT_PUBLIC_*` values), you can use `-e` flags or an env file:

```bash
docker run --rm -e PORT=3000 -p 3000:3000 \
  -e NEXT_PUBLIC_SOME_KEY=value \
  claspuro-frontend
```

### Docker Compose

For easier local usage, a `docker-compose.yml` is included at the project root.

**Start (build + run):**

```bash
docker compose up --build
```

or, depending on your Docker version:

```bash
docker-compose up --build
```

The app will be available at **http://localhost:3000**.

**Run in the background:**

```bash
docker compose up -d --build
```

**Stop the containers:**

```bash
docker compose down
```

Environment variables for the `web` service can be stored in an optional `.env.docker` file, which is referenced by `docker-compose.yml` via `env_file`.

### Docker Hub deployment

To publish a production image to Docker Hub (under `andremugabo/claspuro-frontend`):

**Log in to Docker Hub:**

```bash
docker login
```

**Build the image with the Docker Hub tag:**

```bash
docker build -t andremugabo/claspuro-frontend:latest .
```

**Push the image:**

```bash
docker push andremugabo/claspuro-frontend:latest
```

Once pushed, you (or anyone else) can run the image directly from Docker Hub:

```bash
docker run --rm -e PORT=3000 -p 3000:3000 andremugabo/claspuro-frontend:latest
```

---

## Customization

- **Branding & copy**
  - Update text content in `app/*/page.tsx` for each section.
  - Replace images in `public/` (banners, product photos, leadership headshots) while keeping filenames or adjusting imports.

- **Colors & theming**
  - Primary colors and gradients are mostly defined via Tailwind classes in components.
  - Adjust emerald/green palettes directly in components (navigation, heroes, sections) or via Tailwind config if you extend it.

- **Components**
  - Reuse `SectionBadge` and `PrimaryButton` to keep new sections visually consistent.
  - Extend existing sections (e.g., add more testimonials, audience types, or FAQ entries) by editing the respective arrays.

---

## Contact

- Website: https://claspuro.com 
- Email: info@claspuro.com

For bulk orders, partnerships, or general questions, use the **Contact** page or the email above.

