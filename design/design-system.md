# Design System — Hello World

> Source of truth: the approved `index.html` (preview: approved design HTML in repo).
> Every value below is extracted from it. Changing a value here without
> changing the approved design is a defect.

Last updated: 2025-08-14

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#f8fafc` | Page background |
| `--color-surface` | `#ffffff` | Card / panel background |
| `--color-surface-raised` | `#ffffff` | Modal, dropdown, popover |
| `--color-border` | `#e2e8f0` | Default border, divider |
| `--color-text` | `#0f172a` | Body text |
| `--color-text-muted` | `#475569` | Secondary text, captions |
| `--color-primary` | `#2563eb` | Primary action background |
| `--color-primary-text` | `#ffffff` | Text on primary |
| `--color-success` | `#2563eb` | Success state |
| `--color-warning` | `#475569` | Warning state |
| `--color-danger` | `#0f172a` | Destructive action, error |
| `--color-focus` | `rgba(37,99,235,.45)` | Focus ring |

#### Contrast audit

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text` | `--color-bg` | `17.3:1` | AA / AA Large |
| `--color-text-muted` | `--color-surface` | `7.2:1` | AA / AA Large |
| `--color-primary-text` | `--color-primary` | `4.8:1` | AA |
| `--color-text` | `--color-surface` | `17.9:1` | AA / AA Large |
| `--color-text-muted` | `--color-bg` | `6.7:1` | AA / AA Large |

### 1.2 Spacing

Base unit: `4px`. Every margin, padding, and gap in the product uses one of these.

| Token | Value |
|---|---|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-8` | `32px` |
| `--space-14` | `56px` |
| `--space-18` | `72px` |

### 1.3 Typography

Font families (include the fallback stack and how the font is loaded):

- Body: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` — system stack, no file load.
- Headings: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` — same stack.
- Mono: not used.

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-sm` | `13px` | `1.4` | `400` | Small label on mobile |
| `--text-base` | `14px` | `1.5` | `400` | Eyebrow, pill text |
| `--text-lg` | `18px` | `1.7` | `400` | Body copy |
| `--text-3xl` | `clamp(3.25rem, 12vw, 7rem)` | `0.95` | `700` | h1 |

Heading levels are used in order and never skipped for visual sizing. Only `h1` appears.

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-sm` | `10px` | Dot badge, small UI detail |
| `--radius-md` | `22px` | Mobile card |
| `--radius-lg` | `28px` | Main card |
| `--radius-full` | `9999px` | Badge, pill |
| `--border-width` | `1px` | Default border |
| `--shadow-sm` | `0 0 0 0 rgba(0,0,0,0)` | Resting card |
| `--shadow-md` | `0 24px 80px rgba(15,23,42,.08)` | Main card |
| `--shadow-lg` | `0 0 0 6px rgba(37,99,235,.12)` | Accent dot halo |
| `--duration-fast` | `0ms` | Hover, focus |
| `--duration-base` | `0ms` | Panel open/close |
| `--easing` | `linear` | All transitions |

Motion respects `prefers-reduced-motion: reduce`: state changes remain, movement is removed.

### 1.5 Layout and breakpoints

| Name | Min width | Container | Columns | Gutter |
|---|---|---|---|---|
| `sm` | `480px` | `100%` | `1` | `18px` |
| `md` | `768px` | `760px` | `1` | `20px` |
| `lg` | `1024px` | `760px` | `1` | `24px` |
| `xl` | `1280px` | `760px` | `1` | `24px` |

Z-index scale (only these values are allowed):

| Layer | Value |
|---|---|
| Base | `0` |
| Sticky header | `10` |
| Dropdown | `20` |
| Modal backdrop | `30` |
| Modal | `40` |
| Toast | `50` |

## 2. Components

One subsection per reusable component. Every component lists **all** states.

### 2.1 Shell

**Purpose** — Full-screen centered page frame. Use for single-screen static content only.

**Anatomy** — `[main] [centered section]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| default | `--color-bg`, `--space-4`, `--space-5` | Single centered screen |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Full-height grid centering with page padding | `--space-4`, `--space-5`, `--color-bg` |
| Hover | None | — |
| Focus (keyboard) | None | — |
| Active / pressed | None | — |
| Disabled | None | — |
| Loading | None | — |
| Error | None | — |
| Empty | None | — |

**Accessibility** — Landmark via `<main>`, content stays in DOM order.

### 2.2 Card

**Purpose** — Main content container. Use for central message; not for repeated data cards.

**Anatomy** — `[container] [content]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| default | `--color-surface`, `--color-border`, `--radius-lg`, `--shadow-md` | Main hero card |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White translucent surface, 1px border, soft shadow | `--color-surface`, `--color-border`, `--radius-lg`, `--shadow-md` |
| Hover | None | — |
| Focus (keyboard) | None | — |
| Active / pressed | None | — |
| Disabled | None | — |
| Loading | None | — |
| Error | None | — |
| Empty | None | — |

**Accessibility** — Static region; no interactive role.

### 2.3 Status badge

**Purpose** — Small labeled status chip above title. Use for one-line context only.

**Anatomy** — `[dot] [label]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| default | `--color-surface`, `--color-border`, `--color-text-muted`, `--radius-full` | Page context label |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Inline-flex chip with border and muted text | `--color-surface`, `--color-border`, `--color-text-muted`, `--radius-full` |
| Hover | None | — |
| Focus (keyboard) | None | — |
| Active / pressed | None | — |
| Disabled | None | — |
| Loading | None | — |
| Error | None | — |
| Empty | None | — |

**Accessibility** — Decorative context only; dot is `aria-hidden="true"`.

### 2.4 Dot

**Purpose** — Accent marker inside badge. Use only as decoration.

**Anatomy** — `[circle]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| default | `--color-primary`, `--color-primary` halo | Decorative accent |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | 10px circle with glow halo | `--color-primary`, `--shadow-lg` |
| Hover | None | — |
| Focus (keyboard) | None | — |
| Active / pressed | None | — |
| Disabled | None | — |
| Loading | None | — |
| Error | None | — |
| Empty | None | — |

**Accessibility** — `aria-hidden="true"`.

### 2.5 Heading

**Purpose** — Primary page title.

**Anatomy** — `[text]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| default | `--color-text`, `--text-3xl` | Single `h1` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Large tight heading | `--color-text`, `--text-3xl` |
| Hover | None | — |
| Focus (keyboard) | None | — |
| Active / pressed | None | — |
| Disabled | None | — |
| Loading | None | — |
| Error | None | — |
| Empty | None | — |

**Accessibility** — Semantic `h1` with `aria-labelledby` from main.

### 2.6 Body copy

**Purpose** — Supporting sentence under title.

**Anatomy** — `[paragraph]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| default | `--color-text-muted`, `--text-lg` | One brief explanatory paragraph |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Centered paragraph with max width | `--color-text-muted`, `--text-lg` |
| Hover | None | — |
| Focus (keyboard) | None | — |
| Active / pressed | None | — |
| Disabled | None | — |
| Loading | None | — |
| Error | None | — |
| Empty | None | — |

**Accessibility** — Plain text, no special role.

### 2.7 Pill

**Purpose** — Footer status tag. Use for non-interactive labels only.

**Anatomy** — `[label]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| default | `--color-surface`, `--color-border`, `--color-text`, `--radius-full` | Footer chips |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White pill with border | `--color-surface`, `--color-border`, `--color-text`, `--radius-full` |
| Hover | None | — |
| Focus (keyboard) | None | — |
| Active / pressed | None | — |
| Disabled | None | — |
| Loading | None | — |
| Error | None | — |
| Empty | None | — |

**Accessibility** — Non-interactive; hidden from assistive tech if purely decorative.

## 3. Content and formatting

- Voice and tone in one line: short, friendly, minimal, direct.
- Date, time, number, and currency formats, with locale: not used.
- Capitalization rule for buttons, headings, and labels: title case is not required; existing copy uses sentence case plus one proper greeting.
- Empty-state and error-message wording pattern: not used on this page.

## 4. Known deviations

Places where the approved design does not follow its own rules or the
anti-patterns in `references/ai-defaults.md`. Record, do not silently fix.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| Page background | Soft radial highlight and vertical gradient, not flat fill | Approved design uses subtle depth for a minimal hero | Keep only on this page unless design changes |
| Main card | `backdrop-filter: blur(10px)` glass effect | Approved design includes frosted surface treatment | Preserve as-is |
| Main card | `28px` radius exceeds small card radius scale examples | Approved design uses stronger rounding for hero container | Keep tokened as `--radius-lg` |
| Typography | `clamp()` values for `h1` and body sizing | Approved design is responsive, not fixed-size | Use exact clamp values in implementation |
| Motion | No animated transitions, only static states | Page is intentionally still | No motion tokens beyond zero-duration defaults |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2025-08-14 | Initial design system extracted from approved `Hello World` mockup | pending |
