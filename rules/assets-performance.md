# Assets & Performance Rules

## Assets

- Keep static images and icons in `public/img`.
- Keep local font files in `public/fonts`.
- Use descriptive `alt` text for product images.
- Use empty `alt` or `aria-hidden` for decorative images and icons.
- Do not manually edit generated assets in `dist/` or `build/`.

## Images

- Keep rendered image dimensions stable with `width`, `height`, or CSS sizing.
- Do not add multiple generated image variants unless the source asset quality
  and maintenance cost justify it.
- If PageSpeed reports low image resolution, prefer replacing the source image
  with a better original instead of faking responsive variants from the same
  small file.
- Prefer simpler image markup over fragile optimization code.

## Fonts

- Keep `@font-face` declarations in `src/scss/_fonts.scss`.
- Use `font-display: swap`.
- Keep font preloads in `index.html` only for fonts needed early by the initial
  view.

## Performance

- Avoid third-party runtime scripts.
- Keep route-level lazy loading for secondary pages.
- Compare production output from `yarn build` instead of judging only source
  file sizes.
- Avoid unnecessary memoization; React Compiler handles routine render
  optimizations.

## Build Output

- Let Vite hash and optimize production assets.
- Keep source maps disabled unless debugging requires them.
- Do not commit generated `dist/` or `build/` changes unless the repository
  intentionally tracks build output.
