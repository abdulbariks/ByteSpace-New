# ByteSpace

A course discovery and learning platform built with [Next.js](https://nextjs.org) (App Router), React 19, and Tailwind CSS 4.

## Overview

ByteSpace lets learners explore a curated library of courses across design, data & analytics, productivity, finance, business, music, animation, and more. Each course has a detail page with lessons, pricing, creator info, and an enrollment call-to-action.

Key pages:

- `/` — Home: hero, trusted-by logos, topic chips, course grid, learning paths, professional growth, creator CTA, community testimonials.
- `/courses` — Course search, filters (price, level, category), topic chips, sort, and pagination.
- `/courses/[slug]` — Course detail page with video hero, lesson list, and sidebar enrollment panel.
- `/creators` — Creator profile page with their published courses and filters.
- `/login` and `/register` — Auth pages with sidebar.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4** + `tw-animate-css`
- **shadcn/ui** primitives
- **lucide-react** icons
- **next/font** (Geist)

## Getting Started

First, install dependencies and run the development server:

```bash
pnpm install
pnpm dev
# or
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. The page auto-updates as you edit files.

## Project Structure

```
app/
  (public)/
    page.tsx                 # Home page
    layout.tsx               # Public layout (Navbar + Footer)
    courses/
      page.tsx               # Courses listing
      [slug]/page.tsx        # Course detail
    creators/
      page.tsx               # Creator page
  (auth)/
    login/page.tsx           # Sign in
    register/page.tsx        # Create account
    layout.tsx               # Auth layout
  layout.tsx                # Root layout + global metadata
components/
  layout/                   # Navbar, Footer
  home/                     # Hero, Skills, ExploreSkills, DiverseLearning, etc.
  course/                   # Courses, CourseDescriptionDetails
  creator/                  # CreatorCourses
  reusable/                 # CourseCard, CourseGrid, SearchBar, filter-dropdown, etc.
  auth/                     # LoginFrom, RegisterFrom, AuthSidebar
```

## Scripts

| Script     | Description                        |
| ---------- | ---------------------------------- |
| `dev`      | Start the development server       |
| `build`    | Build the production bundle        |
| `start`    | Start the production server        |
| `lint`     | Run ESLint                         |

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy

Deploy with [Vercel](https://vercel.com/new) — the platform built for Next.js.