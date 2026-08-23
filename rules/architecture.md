# Architecture Rules

## File Responsibilities

- `src/index.tsx` owns React bootstrap, Redux provider setup, and router setup.
- `src/components/App/App.tsx` owns the application shell, header, and main
  landmark.
- `src/components/AppRoutes/AppRoutes.tsx` owns route declarations and
  route-level lazy loading.
- `src/pages/` contains route-level pages only.
- `src/components/` contains reusable UI blocks, skeletons, state components,
  and component-level interactions.
- `src/redux/api/apiSlice.ts` owns RTK Query endpoint definitions.
- `src/redux/slices/` owns local client state such as cart and filters.
- `src/redux/store.ts` owns store configuration.
- `src/redux/store.hooks.ts` owns typed Redux hooks and bound action helpers.
- `src/config/config.ts` owns runtime config and route constants.
- `src/constants/constants.ts` owns shared domain constants.
- `src/scss/` owns global foundation styles only: variables, reset, fonts, app
  styles, and shared button styles.
- `public/` contains static assets served by Vite.
- `dist/` are generated output. Do not edit them manually.

## Frontend Structure

- Keep route composition inside page components.
- Keep reusable UI inside `components`.
- Keep API requests in RTK Query instead of component-level `fetch` calls.
- Keep cart and filter state in Redux slices.
- Keep URL routes centralized through `ROUTES`.
- Keep backend-facing query parameter construction in helpers close to the API
  layer.

## Boundaries

- Do not call backend endpoints directly from random components.
- Do not duplicate route strings outside `config/config.ts`.
- Do not duplicate shared pizza constants outside `constants/constants.ts`.
- Do not move component-specific SCSS back into global SCSS.
- Do not add a larger architecture such as Feature-Sliced Design unless the
  project grows enough to justify it.
- Do not add a separate UI library for controls that are already simple in this
  codebase.

## Backend Contract

- Keep frontend query names aligned with Pizza Backend endpoints.
- Treat `/products`, `/products/:id`, `/categories`, and `/sort` as the current
  API surface.
- If frontend behavior requires a backend data contract change, update the
  backend intentionally instead of masking the problem in the UI.
- The frontend owns the synthetic `Все` category. The backend should return real
  categories only.
