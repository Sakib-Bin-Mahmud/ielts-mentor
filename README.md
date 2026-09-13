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
  navy (#0B132B) for full-bleed dark sections and dark surfaces/badges, a
  separate near-black ink (#111827) for all text so type never doubles as a
  tinted surface, cobalt blue (#2563EB) as the accent for every interactive/
  selection state (buttons, active tabs, eyebrows) with sky blue (#7CC7FF) as
  its lighter highlight, and warm gold (#F2C94C) reserved for achievement/
  milestone moments (band scores, unlocked badges, stats). Defined in
  `tailwind.config.ts` as the `navy`, `ink`, `paper`, `clarity`, and
  `compass` color tokens.
- **Fonts**: Playfair Display (hero headlines, section headings, editorial
  statements, large quotes), Inter (body copy, navigation, buttons, cards),
  and DM Mono (small numerical/gamified elements only — band scores,
  milestones, journey indicators). Loaded via `next/font/google`; see
  "Fonts" below.
- **Surfaces**: cards are solid (`bg-white`/`bg-paper`/`bg-paper-dim` or, on
  dark sections, a transparent border that fills with `navy-soft` on
  hover/active) — no translucent glass panels or backdrop blur anywhere.
  Card radius is capped at `rounded-xl`; only pills and circular controls use
  `rounded-full`. Decorative texture comes from a subtle grain overlay
  (`.bg-noise` / `.bg-noise-dark`) rather than blurred gradient glows.
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

The site loads three Google Fonts via `next/font/google` in `app/layout.tsx`,
exposed as CSS variables and wired into the `display`/`sans`/`mono` stacks in
`tailwind.config.ts`:

- **Playfair Display** (`font-display`) — hero headlines, section titles,
  large quotes. Editorial, premium, expressive.
- **Inter** (`font-sans`) — body copy, navigation, buttons, cards, labels.
  Clean and highly readable.
- **DM Mono** (`font-mono`) — band scores, journey stages, milestone badges,
  and other small technical/gamified numerals.

`next/font` self-hosts the font files at build time (no runtime request to
Google), so this needs network access only during `npm run build`/`next dev`,
not in production.

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
