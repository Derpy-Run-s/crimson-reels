

# Red Sea Productions — Cinematic Multi-Page Masterpiece

## Philosophy
Every page breathes cinema. No dead pixels. No template energy. Mobile isn't an afterthought — it's a vertical film reel experience.

## Design System Foundation

**Colors** (HSL for Tailwind):
- Obsidian: `#020202` — the void
- Crimson: `#E60000` — the heartbeat
- Slate: `#8E8E93` — camera metadata
- Smoke: `#1a1a1a` — card surfaces

**Typography** (Google Fonts):
- Cormorant Garamond — headlines, uppercase, 0.2em tracking, razor-sharp
- JetBrains Mono — body/metadata, camera OSD feel

**Textures**: Film grain overlay (CSS noise), radial spotlight gradients, chromatic aberration on hover

## Pages & Routes

| Route | Page |
|---|---|
| `/` | Home — Aperture Hero + Highlights + Services + CTA |
| `/photography` | Photography Showcase — Masonry grid, filters, metadata cards |
| `/videos` | Video Showcase — Horizontal reel (desktop), swipe carousel (mobile) |
| `/about` | About & Team — Split narrative + B&W→color team cards |
| `/contact` | Contact Darkroom — Pulsing record button → metadata form |

## Shared Components

- **Navbar**: Fixed, transparent. "RED SEA" wordmark left (Cormorant). Links right in JetBrains Mono. Mobile: full-screen vertical typography menu with staggered fade-in
- **Footer**: Minimal OSD-style — copyright, social links, monospace
- **FilmGrain**: Fixed overlay via CSS pseudo-element, pointer-events-none, persists across all pages
- **MagneticButton**: Lightweight mouse-tracking JS — button pulls toward cursor on hover
- **ScrollReveal**: Intersection Observer wrapper — staggered fade-up for all content sections
- **PageTransition**: Fade transition on route change

## Page Details

### Home `/`
- **Aperture Hero**: Two black panels slide apart revealing headline "WE DON'T RECORD. WE CAPTURE." with animated crimson gradient text. Mobile: vertical stack, pulsing glow backdrop
- **Featured Work**: 3 photo + 3 video cards — click navigates to respective showcase pages. Hover: scale + saturate + grain removal
- **Services Teaser**: Three items (Cinematography, Photography, Post-Production) with giant faded crimson numbers (01, 02, 03)
- **CTA Strip**: "ENTER THE DARKROOM" linking to `/contact`

### Photography `/photography`
- Full-width header with massive "PHOTOGRAPHY" watermark
- Filter bar: ALL / COMMERCIAL / EDITORIAL / PORTRAIT / EVENTS
- Asymmetric masonry grid — cards show image, title, category, year in monospace
- Hover: chromatic aberration dissolves, image sharpens, metadata slides up
- Mobile: single-column stack, large images, swipe-friendly spacing

### Videos `/videos`
- Header with "VIDEOGRAPHY" watermark
- Desktop: horizontal-parallax scroll section (sticky + translateX on vertical scroll)
- Each card: dark thumbnail with play icon, title, type, duration in OSD style
- Hover: thumbnail scales, grain lifts, crimson border pulses
- Mobile: Embla Carousel with velocity physics, full-width cards
- Click: modal lightbox with embedded video player

### About `/about`
- Split layout — left sticky "RED SEA" vertical text, right scrollable narrative
- Studio philosophy, approach — written in monospace like a director's statement
- Team section: grid of member cards — B&W photos → full color on hover
- Each card: name (Cormorant), role + bio (JetBrains Mono), crimson accent line
- Mobile: single column, team cards stack vertically with generous spacing

### Contact `/contact`
- Full black void. Centered pulsing crimson "REC" circle button
- Click: button expands into full-screen form with staggered field reveals
- Fields styled as camera metadata: `SUBJECT:` (name), `LOCATION:` (email), `ISO:` (urgency dropdown), `CODEC:` (service type), `NOTES:` (textarea)
- Submit triggers crimson flash confirmation + toast
- Mobile: same experience, form fields stack naturally

## Mobile-First Responsive Strategy

- All layouts designed mobile-first, enhanced for desktop
- Mobile nav: full-screen takeover with large stacked typography links (no hamburger icon — a cinematic "MENU" text trigger)
- Touch targets: minimum 48px, generous padding
- Portfolio grids collapse to single column with full-bleed images
- Horizontal scroll sections become vertical carousels on touch devices
- Typography scales fluidly: `clamp()` for all headline sizes
- No unnecessary borders or dividers on mobile — whitespace and typography ARE the UI

## Animation & Motion

- All elements enter with staggered fade-up (Intersection Observer + CSS transitions with incremental delays)
- Smooth scroll via CSS `scroll-behavior: smooth`
- Magnetic button effect on CTA buttons
- Page transitions: opacity fade between routes
- Hero aperture: CSS keyframe panel-split on load
- Film grain: subtle animated noise overlay, reduced opacity on mobile for performance

## Files to Create
- `src/components/Navbar.tsx`
- `src/components/MobileMenu.tsx`
- `src/components/Footer.tsx`
- `src/components/FilmGrain.tsx`
- `src/components/MagneticButton.tsx`
- `src/components/ScrollReveal.tsx`
- `src/components/ProjectCard.tsx`
- `src/components/TeamMemberCard.tsx`
- `src/components/VideoLightbox.tsx`
- `src/components/ApertureHero.tsx`
- `src/components/ServicesTeaser.tsx`
- `src/components/FeaturedWork.tsx`
- `src/pages/Index.tsx` (rewrite)
- `src/pages/Photography.tsx`
- `src/pages/Videos.tsx`
- `src/pages/About.tsx`
- `src/pages/Contact.tsx`

## Files to Modify
- `index.html` — Google Fonts links, updated title/meta
- `src/index.css` — Full design system: obsidian/crimson palette, film grain, typography utilities, animations, responsive grid
- `src/App.tsx` — All 5 routes, layout wrapper with Navbar + Footer + FilmGrain
- `tailwind.config.ts` — Custom colors, fonts, keyframes, extended spacing
- `src/App.css` — Remove default Vite styles

