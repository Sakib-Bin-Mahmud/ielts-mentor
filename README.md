# IELTS Mentor Website — Sakib Mahmud Sovon

A premium, story-driven personal brand website for an IELTS mentor, built with
Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion — per the
"Build a Personal IELTS Mentor Website" spec.

This is **not** a course platform or LMS. It's a personal introduction: story,
philosophy, method, and a path to a conversation.

## Quick start

```bash
npm install
npm run dev       # http://localhost:4000
```

```bash
npm run build     # production build
npm start         # serve the production build
```

Requires Node 18.17+ (tested on Node 22).

## What's real vs. placeholder

Real, on-file facts already used in the copy:
- Name: Sakib Mahmud Sovon
- IELTS Academic: 8.0 Overall
- B.Sc. in Computer Science and Engineering, Khulna University
- 5+ years of teaching/mentoring experience (math outreach program reaching
  5,000+ students; teaching-assistant and doubt-solving work)

Everything else that could imply a specific outcome, number, or quote is a
**draft placeholder**, and is visually flagged on the live site itself: hover
any dashed gold-bordered box to see what needs replacing. These live in
`lib/content.ts`, clearly marked with `placeholder: true` and `[bracketed]`
text. Checklist before publishing:

- [ ] Portrait photo (`components/MentorIntro.tsx` placeholder block)
- [ ] Personal story details — the timeline in `storyTimeline` uses only
      verified facts as anchors; add real anecdotes/lessons per chapter
- [ ] Student stories (`studentStories` in `lib/content.ts`) — use only real,
      permissioned student outcomes
- [ ] Testimonials (`testimonials`) — same rule: real quotes only
- [ ] Achievement numbers (`achievements`) — years mentoring, students guided,
      workshops, etc. Use real numbers only, or remove the section
- [ ] Resource article excerpts (`resources`) — once the articles are written
- [ ] Contact details and social links (`footer.contact`, `footer.social`)
- [ ] Wire up the "Start Your Journey" / "Ask Me" CTAs to a real booking link,
      contact form, WhatsApp link, or email (`app/page.tsx` `#final-cta`
      / `#ask` anchors currently just scroll to the CTA sections)

Search the codebase for `Placeholder` and `placeholder: true` to find every
flagged spot.

## Structure

```
app/
  layout.tsx        Root layout, metadata/SEO, global fonts
  page.tsx           Assembles all sections in narrative order
  globals.css        Base styles, reduced-motion support
components/
  Navbar, Hero, MentorIntro, StoryTimeline, Philosophy, CompassMethod,
  MentorCompass, JourneyMap, WhoIHelp, Services, StudentStories,
  Testimonials, Achievements, Resources, AskMentor, FinalCTA, Footer,
  MentorPassport (floating gamified progress tracker)
  Reveal.tsx          Scroll-reveal animation wrapper (Framer Motion)
  Placeholder.tsx     Visual "needs real content" flag
  SectionHeading.tsx  Shared section heading component
lib/
  content.ts          ALL copy and data in one place — edit this file to
                      change any text on the site without touching components
```

## Design notes

- **Palette**: "Midnight Mentor" — warm paper (#F7F5F0) background, midnight
  navy ink (#0B132B) for contrast sections and text, cobalt blue (#2563EB)
  as the primary interactive accent with sky blue (#7CC7FF) as its lighter
  highlight, and warm gold (#F2C94C) reserved for achievement/milestone
  moments (band scores, unlocked badges). Defined in `tailwind.config.ts`.
- **Fonts**: the build ships with a polished system-font fallback stack
  (no external network call required to build or run it). If you want the
  originally-designed editorial serif (Fraunces) + humanist sans (Inter),
  see "Fonts" below.
- **Gamification**: kept light and entirely optional, per the spec — a
  floating "Mentor Passport" (bottom-right) unlocks milestones as the visitor
  scrolls through the narrative sections. It never blocks content.
- **Interactive signature elements**: the hero band-score slider, the
  hover/tap philosophy cards, the Mentor's Compass (four directions), and the
  "Who I Help" persona picker.
- **Motion**: scroll-triggered reveals via Framer Motion; `prefers-reduced-motion`
  is respected globally in `globals.css`.
- **Mobile**: the horizontal journey map scrolls on mobile, the compass
  collapses to a stacked touch-friendly list, and all hover-only interactions
  have a tap/click equivalent.

## Fonts

To restore the originally-specified Google Fonts (Fraunces for headings,
Inter for body, JetBrains Mono for numerals), once you have network access:

```tsx
// app/layout.tsx
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["400","500","600","700"], style: ["normal","italic"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400","500","600","700"] });
const jbmono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbmono", weight: ["400","500","600"] });
```

Then add the three `.variable` classes to the `<html>` tag, and swap the
`display`/`sans`/`mono` font stacks in `tailwind.config.ts` back to
`var(--font-fraunces)`, `var(--font-inter)`, `var(--font-jbmono)`.

## Deploying

Any standard Next.js host works (Vercel, Netlify, a Node server, etc.):

```bash
npm run build
npm start
```

## Known items

- `next` is pinned to the latest available 14.2.x patch (14.2.35). There is
  an unresolved advisory in Next.js's own AVIF image-optimization dependency
  that's only fully fixed by upgrading to Next 15/16 (a breaking change out
  of scope for this build). This site doesn't use `next/image` with
  untrusted remote AVIF input, so exposure is low, but consider upgrading
  later.
