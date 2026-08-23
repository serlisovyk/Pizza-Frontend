# Style Rules

## General

- Prefer readable React, TypeScript, and SCSS over clever tricks.
- Keep changes close to the feature or file section they affect.
- Avoid unnecessary comments. Add comments only when they explain non-obvious
  reasoning.
- Use existing naming and spacing patterns before introducing new ones.
- Keep files PascalCase where the existing project uses PascalCase.

## React

- Use function components.
- Use real buttons for actions and links for navigation.
- Keep component-local state local when it is not shared.
- Keep shared client state in Redux slices.
- Do not add `memo`, `useMemo`, or `useCallback` only for style; React Compiler
  should handle routine render optimizations.
- Keep lazy loading at route boundaries unless a heavier component clearly needs
  its own split point.

## TypeScript

- Prefer explicit shared interfaces in `src/types/types.ts` when a shape crosses
  module boundaries.
- Keep local prop types next to the component when they are only used once.
- Avoid `any` unless there is no practical typed alternative.
- Keep environment declarations in `src/types/global.d.ts`.

## SCSS

- Use SCSS Modules for component-specific styles.
- Keep global SCSS limited to variables, reset, fonts, app-level layout, and
  shared button styles.
- Use CSS custom properties from `:root` for shared colors and app-level tokens.
- Do not add SCSS token files for values that can live as CSS custom properties.
- Prefer numeric font weights such as `700` over named weights such as `bold`.
- Prefer modern media query syntax, for example `@media (width < 768px)`.
- Use sensible breakpoint values such as `1280`, `1024`, `768`, `640`, and
  `480`.

## Formatting

- Use Prettier.
- Use single quotes where Prettier applies them.
- Do not use semicolons.
- Keep `printWidth` at `85`.
- Use `yarn format` to apply formatting.
