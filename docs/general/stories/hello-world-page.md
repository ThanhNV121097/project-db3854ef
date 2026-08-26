# Hello World page

## User story
As a Guest, I want to open the public page and see `Hello, World!` centered on the screen, so that I immediately get the product's only message.

## In scope
- One public landing page for any visitor without sign-in.
- One full-screen view with a single centered `h1` that says `Hello, World!`.
- Minimal approved styling: neutral light background, strong large dark heading, and restrained accent styling only for basic polish.
- Responsive layout that keeps the greeting centered on mobile and desktop.

## Out of scope
- Login, accounts, auth flows.
- Database-backed content or any persisted state.
- Navigation, extra sections, forms, or other interactions.
- Any copy other than the exact greeting `Hello, World!`.

## UI scope
- `Hello World` landing page only.
- Uses the approved single-screen centered shell, main card, status badge/dot, heading, and body-copy treatment from the design system.
- Only default state exists.

## Acceptance criteria
1. When the app loads, `Hello, World!` is visible as the main heading.
2. The heading is centered in the viewport on mobile and desktop.
3. No login UI, database-driven content, navigation, forms, or extra sections are present.
4. Layout matches the approved minimal neutral style with a strong large heading.

## Dependencies
- Approved design and design system for `Hello World`.
- No external accounts, secrets, backend services, or database data.
- No prior stories required.
