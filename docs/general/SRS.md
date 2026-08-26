# SRS — General

Module: `general`
Last updated: 2026-02-14
Design: [View the approved design](http://localhost:8080/design/db3854ef-8990-4b5d-a5c4-4cba5af5ebea)
Design system: `design/design-system.md`

> One file per module, at `docs/{module}/SRS.md`. It covers only the functions
> that belong to this module. Never write `docs/SRS.md`.

## 1. Purpose

`general` delivers the whole product: one public landing page with one centered
heading that says `Hello, World!`. If this module does not exist, the app has no
visible product.

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Guest | Any visitor without sign-in | Open the public page and read the greeting |

## 3. Scope

**In scope** — the functions specified below, by their plan titles:

- Hello World page

**Out of scope** — name what a reader would reasonably expect here and say
where it lives instead.

- Login, accounts, auth flows — deliberately not built; project has no sign-in.
- Database-backed content — deliberately not built; project is static.
- Extra sections, navigation, forms, or interactions — deliberately not built; brief asks for one page and one heading only.

## 4. Functional requirements

### 4.1 Hello World page

**Requirement GENERAL-001 — Show centered greeting**

*As a* Guest, *I want to* open the public page and see `Hello, World!` centered
on the screen, *so that* I immediately get the product's only message.

Behaviour:

1. Given the app loads, the page renders one full-screen view with the greeting
   `Hello, World!` as the only required headline content.
2. The greeting is visually centered both vertically and horizontally in the
   viewport.
3. The page uses the approved minimal styling: neutral light background,
   strong large dark heading, and restrained accent styling only for basic
   polish.
4. The page contains no login UI, no database-driven content, and no extra
   content sections.

**Acceptance criteria** — each maps one-to-one onto a test case in
`docs/general/test-cases/hello-world-page.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The app is open | Guest views page | `Hello, World!` is visible as main heading |
| AC-2 | The app is open | Guest views page | Heading is centered in viewport on mobile and desktop |
| AC-3 | The app is open | Guest views page | No login, database, navigation, or extra sections are present |
| AC-4 | The app is open | Guest views page | Layout matches minimal neutral style with strong large heading |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Not applicable | This module has one public read-only page and no roles, writes, or data dependency | No error or empty state is part of the approved design; the page always shows the greeting when loaded |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Greeting text | text | yes | Must display exact copy `Hello, World!`; not editable in product |

## 5. Screens

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| Hello World landing page | Main centered card and heading | GENERAL-001 | default |

## 6. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | First paint of page content completes within 2s on a 1 Mbps connection with cold cache |
| Accessibility | Heading is keyboard reachable by page structure, visible focus style exists for any interactive element, and text contrast stays at or above 4.5:1 |
| Responsive | Page renders without horizontal scroll at 320px width and above |
| Localisation | Copy is English only |

## 7. Dependencies and assumptions

- **Depends on:** none; this module is fully static.
- **Assumption:** browser support includes modern evergreen browsers with CSS Grid and responsive layout support.

| Open question | Proposed default | Who decides |
|---|---|---|
| None | Not applicable | Stakeholder |

## 8. Traceability

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Hello World page | GENERAL-001 | `test-cases/hello-world-page.md` |
