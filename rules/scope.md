# Scope Rules

This is a small educational React frontend. Improve it without turning it into a
large application template.

## Do Not Add Without Explicit Request

- Test frameworks
- UI component libraries
- Tailwind, Bootstrap, or CSS-in-JS
- React Query alongside RTK Query
- New state managers
- Authentication
- Analytics scripts
- Service workers
- Web app manifests
- i18n infrastructure
- Docker
- CI/CD configuration

## Prefer

- Small React and TypeScript improvements
- Accessibility fixes tied to existing UI
- Practical responsive layout improvements
- Focused SCSS cleanup
- Backend contract alignment with Pizza Backend
- Production build improvements that directly help the app

## Tradeoffs

- If a tool adds more maintenance than value, do not add it.
- If an optimization makes the source harder to understand, reconsider it.
- If a change is only useful for a much larger project, leave it out.
- If a data problem belongs in the backend or database, do not hide it with
  brittle frontend patches.
