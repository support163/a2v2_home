# Design Analysis: A2V2.ai Landing Page

> **Status**: 🟢 Complete
> **Figma Link**: N/A — analyzed from screenshots
> **Analyst**: Claude Code (AI-assisted)
> **Date**: 2026-02-15

---

## 1. Component Inventory

### Navigation

| Component  | Figma Name       | Variants                             | Reusable? |
| ---------- | ---------------- | ------------------------------------ | --------- |
| TopNav     | NavBar           | desktop, mobile (hamburger inferred) | Yes       |
| NavLogo    | A2V2 Logo        | —                                    | Yes       |
| NavLink    | NavLink          | default, hover, active               | Yes       |
| NavCTA     | GetStartedButton | default, hover                       | Yes       |
| SignInLink | SignInLink       | default, hover                       | Yes       |

### Layout

| Component           | Figma Name          | Variants                  | Reusable? |
| ------------------- | ------------------- | ------------------------- | --------- |
| HeroSection         | Hero                | desktop (mobile inferred) | No        |
| FeaturesSection     | FeaturesGrid        | desktop (mobile inferred) | No        |
| HowItWorksSection   | ProcessSteps        | desktop (mobile inferred) | No        |
| TestimonialsSection | Testimonials        | desktop (mobile inferred) | No        |
| BottomCTASection    | CTABanner           | desktop (mobile inferred) | No        |
| FooterSection       | Footer              | desktop (mobile inferred) | No        |
| SocialProofBar      | TrustedBy / LogoBar | desktop                   | No        |

### Content

| Component       | Figma Name             | Variants                      | Reusable? |
| --------------- | ---------------------- | ----------------------------- | --------- |
| FeatureCard     | FeatureCard            | —                             | Yes       |
| TestimonialCard | TestimonialCard        | —                             | Yes       |
| ProcessStep     | StepItem               | step-1, step-2, step-3        | Yes       |
| HeroBadge       | AnnouncementPill       | —                             | Yes       |
| ProductMockup   | HeroImage / AppPreview | —                             | No        |
| SectionHeading  | SectionHeading         | with-subheading, heading-only | Yes       |

### Forms

| Component | Figma Name | Variants | Reusable? |
| --------- | ---------- | -------- | --------- |
| —         | —          | —        | —         |

> No form components visible on the landing page. Forms likely exist on sign-up/sign-in pages.

### Feedback

| Component | Figma Name | Variants | Reusable? |
| --------- | ---------- | -------- | --------- |
| —         | —          | —        | —         |

> No toast, alert, or feedback components visible on this page.

### Actions

| Component       | Figma Name                       | Variants                      | Reusable? |
| --------------- | -------------------------------- | ----------------------------- | --------- |
| PrimaryButton   | Button/Primary                   | default, hover, active, focus | Yes       |
| SecondaryButton | Button/Secondary (outline/ghost) | default, hover, active, focus | Yes       |
| TextLink        | TextLink                         | default, hover                | Yes       |
| FooterLink      | FooterLink                       | default, hover                | Yes       |

---

## 2. Design Token Map

### Colors

| Token Name             | Hex                                                                                                          | Usage                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| `background-primary`   | `#09090B` ⚠️ Needs verification from Figma inspect panel.                                                    | Page background, main dark surface                           |
| `background-card`      | `#111113` ⚠️ Needs verification from Figma inspect panel.                                                    | Feature cards, testimonial cards, slightly elevated surfaces |
| `background-nav`       | `rgba(9, 9, 11, 0.8)` ⚠️ Needs verification from Figma inspect panel.                                        | Navigation bar (dark with subtle transparency)               |
| `text-primary`         | `#FFFFFF`                                                                                                    | Headings, primary text                                       |
| `text-secondary`       | `#A1A1AA` ⚠️ Needs verification from Figma inspect panel.                                                    | Body text, descriptions, supporting copy                     |
| `text-muted`           | `#71717A` ⚠️ Needs verification from Figma inspect panel.                                                    | Footer links, tertiary text                                  |
| `accent-purple`        | `#8B5CF6` ⚠️ Needs verification from Figma inspect panel.                                                    | Gradient start, icon accent, badge accents                   |
| `accent-blue`          | `#3B82F6` ⚠️ Needs verification from Figma inspect panel.                                                    | Gradient end, secondary accent                               |
| `accent-cyan`          | `#06B6D4` ⚠️ Needs verification from Figma inspect panel.                                                    | Decorative glow, tertiary accent                             |
| `gradient-primary`     | `linear-gradient(135deg, #8B5CF6, #3B82F6)` ⚠️ Needs verification from Figma inspect panel.                  | Primary CTA buttons, decorative glows                        |
| `gradient-glow-purple` | `radial-gradient(circle, rgba(139,92,246,0.3), transparent)` ⚠️ Needs verification from Figma inspect panel. | Decorative ambient glow behind hero mockup                   |
| `gradient-glow-blue`   | `radial-gradient(circle, rgba(59,130,246,0.2), transparent)` ⚠️ Needs verification from Figma inspect panel. | Decorative ambient glow behind hero mockup                   |
| `border-subtle`        | `rgba(255, 255, 255, 0.08)` ⚠️ Needs verification from Figma inspect panel.                                  | Card borders, dividers                                       |
| `border-accent`        | `rgba(139, 92, 246, 0.3)` ⚠️ Needs verification from Figma inspect panel.                                    | Accent borders on hover or active cards                      |

### Typography

| Style Name        | Font                                                  | Weight             | Size       | Line Height | Letter Spacing |
| ----------------- | ----------------------------------------------------- | ------------------ | ---------- | ----------- | -------------- |
| `hero-heading`    | Inter ⚠️ Needs verification from Figma inspect panel. | 800 (ExtraBold) ⚠️ | 56–64px ⚠️ | 1.1 ⚠️      | -0.02em ⚠️     |
| `section-heading` | Inter ⚠️                                              | 700 (Bold) ⚠️      | 36–40px ⚠️ | 1.2 ⚠️      | -0.02em ⚠️     |
| `card-heading`    | Inter ⚠️                                              | 600 (SemiBold) ⚠️  | 20–24px ⚠️ | 1.3 ⚠️      | -0.01em ⚠️     |
| `body-large`      | Inter ⚠️                                              | 400 (Regular)      | 18px ⚠️    | 1.6 ⚠️      | 0              |
| `body-base`       | Inter ⚠️                                              | 400 (Regular)      | 16px ⚠️    | 1.5 ⚠️      | 0              |
| `body-small`      | Inter ⚠️                                              | 400 (Regular)      | 14px ⚠️    | 1.5 ⚠️      | 0              |
| `nav-link`        | Inter ⚠️                                              | 500 (Medium) ⚠️    | 14–15px ⚠️ | 1.4 ⚠️      | 0              |
| `button-label`    | Inter ⚠️                                              | 600 (SemiBold) ⚠️  | 14–16px ⚠️ | 1           | 0              |
| `badge-text`      | Inter ⚠️                                              | 500 (Medium) ⚠️    | 12–13px ⚠️ | 1.4 ⚠️      | 0.02em ⚠️      |
| `footer-text`     | Inter ⚠️                                              | 400 (Regular)      | 13–14px ⚠️ | 1.5 ⚠️      | 0              |

> ⚠️ Font family could not be confirmed from screenshots alone. Inter is assumed based on visual appearance (common in modern SaaS landing pages). Verify in Figma.

### Spacing Scale

| Token               | Value                                                       |
| ------------------- | ----------------------------------------------------------- |
| `space-1`           | 4px ⚠️                                                      |
| `space-2`           | 8px ⚠️                                                      |
| `space-3`           | 12px ⚠️                                                     |
| `space-4`           | 16px ⚠️                                                     |
| `space-5`           | 20px ⚠️                                                     |
| `space-6`           | 24px ⚠️                                                     |
| `space-8`           | 32px ⚠️                                                     |
| `space-10`          | 40px ⚠️                                                     |
| `space-12`          | 48px ⚠️                                                     |
| `space-16`          | 64px ⚠️                                                     |
| `space-20`          | 80px ⚠️                                                     |
| `space-24`          | 96px ⚠️                                                     |
| `section-gap`       | 96–120px ⚠️ Needs verification from Figma inspect panel.    |
| `container-max`     | 1200–1280px ⚠️ Needs verification from Figma inspect panel. |
| `container-padding` | 24–32px ⚠️ Needs verification from Figma inspect panel.     |

> ⚠️ All spacing values are estimated from screenshots. A 4px base scale is assumed. Verify exact values from Figma inspect panel.

### Borders & Shadows

| Token                | Value                                                            |
| -------------------- | ---------------------------------------------------------------- | ---------------------------------- |
| `radius-sm`          | 6px ⚠️ Needs verification from Figma inspect panel.              |
| `radius-md`          | 8px ⚠️ Needs verification from Figma inspect panel.              |
| `radius-lg`          | 12px ⚠️ Needs verification from Figma inspect panel.             |
| `radius-xl`          | 16px ⚠️ Needs verification from Figma inspect panel.             |
| `radius-full`        | 9999px                                                           | Pill-shaped badges and nav buttons |
| `shadow-card`        | `0 1px 2px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)` ⚠️ | Feature cards, testimonial cards   |
| `shadow-mockup`      | `0 8px 40px rgba(0,0,0,0.5)` ⚠️                                  | Hero product mockup                |
| `shadow-glow-purple` | `0 0 80px 20px rgba(139,92,246,0.15)` ⚠️                         | Ambient decorative glow            |
| `shadow-glow-blue`   | `0 0 80px 20px rgba(59,130,246,0.1)` ⚠️                          | Ambient decorative glow            |

---

## 3. Interactive State Matrix

| Component                    | Default | Hover | Active | Focus | Disabled | Loading | Error | Empty |
| ---------------------------- | ------- | ----- | ------ | ----- | -------- | ------- | ----- | ----- |
| PrimaryButton (gradient CTA) | ✅      | ❓    | ❓     | ❓    | ❓       | ➖      | ➖    | ➖    |
| SecondaryButton (outline)    | ✅      | ❓    | ❓     | ❓    | ❓       | ➖      | ➖    | ➖    |
| NavLink                      | ✅      | ❓    | ❓     | ❓    | ➖       | ➖      | ➖    | ➖    |
| NavCTA (Get Started)         | ✅      | ❓    | ❓     | ❓    | ➖       | ➖      | ➖    | ➖    |
| SignInLink                   | ✅      | ❓    | ❓     | ❓    | ➖       | ➖      | ➖    | ➖    |
| FeatureCard                  | ✅      | ❓    | ➖     | ➖    | ➖       | ➖      | ➖    | ➖    |
| TestimonialCard              | ✅      | ❓    | ➖     | ➖    | ➖       | ➖      | ➖    | ➖    |
| FooterLink                   | ✅      | ❓    | ❓     | ❓    | ➖       | ➖      | ➖    | ➖    |
| HeroBadge                    | ✅      | ❓    | ➖     | ➖    | ➖       | ➖      | ➖    | ➖    |
| MobileMenuToggle             | ❓      | ❓    | ❓     | ❓    | ➖       | ➖      | ➖    | ➖    |

**Legend**: ✅ Designed | ❓ Missing — needs designer input | ➖ Not applicable

> ⚠️ Only default (resting) states are visible in the provided screenshots. All hover, active, and focus states need designer confirmation. Recommended defaults if not specified:
>
> - **Buttons (hover)**: Slightly increased brightness or scale (1.02×), cursor pointer
> - **Buttons (active)**: Slight scale-down (0.98×)
> - **Buttons (focus)**: Ring outline (`0 0 0 2px accent-purple`) for keyboard accessibility
> - **NavLinks (hover)**: Color shift from `text-muted` → `text-primary`
> - **Cards (hover)**: Subtle border color shift or slight elevation increase
> - **FooterLinks (hover)**: Color shift from `text-muted` → `text-secondary`

---

## 4. Responsive Behavior

### Breakpoints Found

- [ ] Mobile (375px) — ⚠️ No mobile frame provided in screenshots
- [ ] Tablet (768px) — ⚠️ No tablet frame provided in screenshots
- [x] Desktop (1280–1440px) — Visible in both screenshots
- [ ] Large Desktop (1920px) — ⚠️ Not provided

> ⚠️ Only a desktop viewport is shown. Mobile and tablet frames were not provided. Responsive behavior below is **inferred** from standard patterns and the component structure observed.

### Layout Changes

| Breakpoint              | Changes                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mobile (< 768px)        | Single column layout. Nav collapses to hamburger menu. Hero heading reduces to ~32–36px. Feature cards stack vertically (1-col). Process steps stack vertically. Testimonial cards stack or become horizontally scrollable carousel. Footer columns stack into accordion or single column. Product mockup scales down or is hidden on very small screens. CTAs become full-width. ⚠️ All inferred. |
| Tablet (768–1023px)     | Two-column grid for feature cards. Hero text size scales to ~40–48px. Nav may remain expanded or collapse. Footer uses 2-column grid. ⚠️ All inferred.                                                                                                                                                                                                                                             |
| Desktop (1024–1439px)   | Three-column grid for feature cards. Full horizontal nav. Product mockup at full size. Side-by-side CTA buttons. Multi-column footer (4–5 columns). As shown in screenshots.                                                                                                                                                                                                                       |
| Large Desktop (1440px+) | Content area max-width likely caps at 1200–1280px and centers. No structural change, just increased margins. ⚠️ Inferred.                                                                                                                                                                                                                                                                          |

> ⚠️ No responsive designs were provided in the screenshots. All mobile/tablet behavior is inferred. **Clarification needed from designer before responsive implementation.**

---

## 5. Asset Inventory

### Icons

| Icon                                                                      | Source                                  | Format |
| ------------------------------------------------------------------------- | --------------------------------------- | ------ |
| Feature icon 1 (appears to be a "video/play" icon)                        | ⚠️ Unknown — Lucide or Heroicons likely | SVG ⚠️ |
| Feature icon 2 (appears to be a "sparkles/AI" icon)                       | ⚠️ Unknown                              | SVG ⚠️ |
| Feature icon 3 (appears to be a "lightning/speed" icon)                   | ⚠️ Unknown                              | SVG ⚠️ |
| Feature icon 4 (appears to be a "layers/templates" icon)                  | ⚠️ Unknown                              | SVG ⚠️ |
| Feature icon 5 (appears to be a "share/export" icon)                      | ⚠️ Unknown                              | SVG ⚠️ |
| Feature icon 6 (appears to be a "settings/customize" icon)                | ⚠️ Unknown                              | SVG ⚠️ |
| Chevron / Arrow (CTA indicators)                                          | ⚠️ Unknown                              | SVG ⚠️ |
| Social media icons (footer — likely Twitter/X, GitHub, LinkedIn, Discord) | ⚠️ Unknown                              | SVG ⚠️ |
| Hamburger menu icon (inferred for mobile)                                 | ⚠️ Not shown                            | SVG    |

> ⚠️ Exact icon identifiers and source library cannot be determined from screenshots. Feature card icons appear to be line-style icons, possibly from Lucide, Heroicons, or a custom set. Verify from Figma asset panel.

### Images

| Image                                    | Aspect Ratio   | Notes                                                                                                                                                                                                            |
| ---------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Product mockup (hero)                    | ~16:10 ⚠️      | Large application screenshot/preview showing the A2V2 editor interface. Appears to be a full-color PNG or rendered in-browser. Framed with rounded corners and subtle shadow. ⚠️ Needs actual export from Figma. |
| Testimonial avatars (3–4 visible)        | 1:1 (circular) | Small circular avatar images, ~40–48px diameter ⚠️. Used in testimonial cards.                                                                                                                                   |
| Company/partner logos (social proof bar) | Varies         | Grayscale or muted-color logos. ~5–6 logos visible in a horizontal row. ⚠️ Exact logos not identifiable from screenshots.                                                                                        |

### Decorative / Background Elements

| Element                   | Description                                                  | Notes                                                                                                  |
| ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Purple glow orb           | Radial gradient positioned behind/above left of hero mockup  | Large (~300–500px), soft purple/violet gradient blob. ⚠️ Exact size/position needs Figma.              |
| Blue glow orb             | Radial gradient positioned behind/below right of hero mockup | Large (~300–500px), soft blue gradient blob. ⚠️ Exact size/position needs Figma.                       |
| Possible grid/dot pattern | Faint background texture                                     | ⚠️ May be a subtle dot grid or noise texture on the dark background. Hard to confirm from screenshots. |

---

## 6. Open Questions for Designer

1. **Font family**: What is the exact typeface? Inter is assumed but needs confirmation. Is it Inter, Geist, SF Pro, or a custom/licensed font? ⚠️ Needs verification from Figma inspect panel.
2. **Interactive states**: No hover, active, focus, or disabled states are visible in the screenshots. Can the designer provide a state sheet or confirm the recommended defaults outlined in Section 3?
3. **Responsive layouts**: No mobile or tablet frames were provided. Should we follow standard responsive patterns (single-column stacking, hamburger nav) or does the designer have specific mobile layouts?
4. **Gradient exact values**: The primary gradient on CTA buttons and decorative glows appear purple-to-blue, but exact color stops, angles, and opacity values need Figma inspection. ⚠️ Needs verification from Figma inspect panel.
5. **Feature card icons**: What icon library is used? Are these custom SVGs or from an existing icon set (Lucide, Heroicons, Phosphor)?
6. **Social proof logos**: Which company/partner logos should appear in the trusted-by bar? Need actual logo assets.
7. **Product mockup**: Is the hero mockup a static image export or a live-rendered component? Need the actual image asset at 2× resolution.
8. **Testimonial data**: Are testimonial quotes, names, and avatars provided, or should placeholder content be used?
9. **Animation/motion**: Are there any entrance animations, scroll-triggered effects, or micro-interactions intended (e.g., fade-in on scroll, parallax on hero, hover lift on cards)?
10. **Background texture**: Is there a subtle dot-grid or noise texture on the dark background, or is it a flat solid color?
11. **Navigation behavior**: Does the nav become sticky/fixed on scroll? Does it gain a backdrop blur or background opacity change?
12. **Dark mode only**: Is this a dark-theme-only landing page, or should we support a light mode toggle?
13. **Announcement badge**: The pill/badge above the hero heading — what does it link to? Is it dismissible?
14. **Footer structure**: Exact column groupings and link items need confirmation. How many link columns and what categories?

---

## Summary

- **Total unique components**: ~18 (5 navigation, 3 layout-specific, 6 content, 0 forms, 0 feedback, 4 actions)
- **Design tokens extracted**: ~40+ (14 colors/gradients, 10 typography styles, 13 spacing, 9 borders/shadows)
- **Open questions**: 14 ⚠️
- **Recommended build order**:
  1. **Design tokens** → CSS custom properties for colors, gradients, typography scale, spacing scale, border radii, shadows
  2. **Tailwind config** → Extend theme with extracted tokens
  3. **Atomic components** → PrimaryButton, SecondaryButton, TextLink, NavLink, SectionHeading, HeroBadge
  4. **Composed components** → FeatureCard, TestimonialCard, ProcessStep, ProductMockup
  5. **Layout components** → TopNav, HeroSection, FeaturesSection, HowItWorksSection, TestimonialsSection, BottomCTASection, FooterSection, SocialProofBar
  6. **Page assembly** → LandingPage combining all layout components in sequence

> ⚠️ **14 open questions remain.** Many exact token values were estimated from screenshots and flagged for Figma verification. Phase 1 is complete for what can be extracted from screenshots, but **precise values should be confirmed with Figma inspect panel before proceeding to Phase 2 (Architecture) and Phase 3 (Build).**

> ✅ Phase 1 complete (screenshot-based). Do NOT proceed to code generation until open questions above are resolved with the designer or verified in Figma.
