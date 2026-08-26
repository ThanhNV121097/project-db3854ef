# Architecture Overview — Hello World

## Scope and shape

Shape: `static`. Product ships one public web page, no backend, no database, no login, no API.

## Stack

| Part | Choice | Reason |
|---|---|---|
| Frontend | Next.js 15 App Router + TypeScript | Static UI, repository container expects `code/frontend` standalone output. |
| Styling | Tailwind CSS v3 + CSS tokens in `app/globals.css` | Approved design system is token-based; Tailwind keeps scaffold small. |
| Backend | None | SRS has no data, auth, or server-side integration. |
| Database | None | SRS has no persisted state. |
| Runtime | `docker compose up` from repo root | Existing compose boots frontend only for static shape. |

## Folder structure

```text
code/
  frontend/
    app/layout.tsx       # App Router root layout
    app/page.tsx         # composition root; story mounts components here
    app/globals.css      # frozen shared tokens and base styles
    components/          # story components, PascalCase
    lib/mock/            # mock data only if a later story needs it
docs/
  architecture/overview.md
  general/SRS.md
```

`code/backend/` stays absent by design. Any backend addition requires shape reassessment first.

## Conventions

- React components use `export default function ComponentName()`.
- `app/page.tsx` remains a Server Component and only composes children.
- Shared visual values live in `app/globals.css` tokens; CSS modules use `var(--token)` with no fallbacks.
- Story components own their component file and optional CSS module only.
- No hardcoded colours or spacing in story CSS modules.
- No secrets in repository. Tracked `.env.example` files list key names and comments only.

## Environment variables

Frontend reads no runtime environment variables today.

| File | Keys |
|---|---|
| `.env.example` | `FRONTEND_PORT`, `FRONTEND_MEM_LIMIT`, optional compose controls |
| `code/frontend/.env.example` | no required keys; placeholder documents static-only frontend |

## Run and verify

```bash
docker compose up --build
```

Local checks:

```bash
cd code/frontend
npm ci
npm run lint
npm run build
npm test --if-present
```

CI gate: `.github/workflows/ci.yml` runs frontend install, lint, build, tests, and design-token checks on pull requests.

## Decisions

| Decision | Rejected alternative | Tradeoff |
|---|---|---|
| Static frontend only | Scaffold Go backend and PostgreSQL | Less code, faster CI, matches SRS; backend can be added later if scope changes. |
| Next.js standalone output | Plain HTML or Vite | Matches fixed Dockerfile and platform convention; more framework than one page needs. |
| Tokens in `globals.css` | Hardcoded CSS values per component | Token checks catch drift; authors must request missing tokens instead of inventing values. |
| No frontend env dependency | Add `NEXT_PUBLIC_API_URL` | Avoids fake API contract; if backend appears later, env file updates with real key. |

## Risks and rollout

- Missing design token blocks future story CSS; update design system and `globals.css` together.
- Dockerfile and compose are fixed platform files; scaffold must keep Next standalone output.
- Product has one story, so first feature PR should only mount greeting component into `app/page.tsx`.
