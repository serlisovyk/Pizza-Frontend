# Agent Instructions

This file defines how AI coding agents should work in this repository.

This is a compact React + TypeScript + Vite frontend for a pizza ordering
application. Keep the code clean, practical, accessible, and proportional to the
project size. The frontend consumes the Pizza Backend API, so API-facing changes
should stay aligned with the backend contract.

## Rule Files

Read these files before making changes:

- [Architecture Rules](rules/architecture.md)
- [Style Rules](rules/style.md)
- [Scope Rules](rules/scope.md)
- [Assets & Performance Rules](rules/assets-performance.md)
- [SEO & Accessibility Rules](rules/seo-accessibility.md)
- [Verification Rules](rules/verification.md)

## Working Principles

- Prefer small, focused changes.
- Follow the existing React, Redux, SCSS, and Vite structure.
- Do not add new abstractions unless they remove real duplication or clarify a
  boundary.
- Do not rewrite working code just to make it look different.
- Keep UI changes responsive, accessible, and consistent with the current visual
  language.
- Preserve user edits in the working tree unless the user explicitly asks to
  revert them.
- If a request conflicts with these rules, follow the user's explicit request
  and mention the tradeoff.

## Project Defaults

- Package manager: `yarn`
- Runtime: Browser + Node.js build tooling
- Build tool: Vite
- UI: React
- Language: TypeScript
- Routing: React Router
- State: Redux Toolkit and RTK Query
- Styling: SCSS Modules plus small global SCSS foundation files
- API config: `VITE_API_URL`
- Formatting: Prettier
- Tests: not used in this project unless the user explicitly changes that

## Before Finishing

Run the relevant checks:

```bash
yarn format:check
yarn build
```

If formatting was intentionally changed, run:

```bash
yarn format
```

If a check cannot be run, report that clearly.
