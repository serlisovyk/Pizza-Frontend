# SEO & Accessibility Rules

## SEO

- Keep page title, description, keywords, theme color, favicon links, Open Graph
  tags, Twitter card tags, and the noscript message in `index.html`.
- Keep metadata truthful to the visible app and current tech stack.
- Do not add larger SEO infrastructure such as `robots.txt`, `sitemap.xml`,
  JSON-LD, `llms.txt`, or a web app manifest unless the user asks for it.
- Keep social images aligned with assets that actually exist in `public/img`.

## Accessibility

- Use semantic landmarks and headings.
- Use real buttons for actions.
- Use real links for navigation.
- Give interactive controls clear accessible names when visible text is not
  enough.
- Decorative SVG icons should use `aria-hidden`.
- Duplicate decorative images should use empty `alt`.
- If a control has state, expose it through an appropriate label or ARIA
  attribute.
- Preserve keyboard focus states.

## UI States

- Loading states should not cause large layout jumps.
- Empty and error states should keep the main app surface stable.
- Skeletons should match the approximate size of loaded controls and cards.
- Disabled controls should remain visually understandable and keyboard-safe.

## Color

- Keep text and interactive states above WCAG AA contrast where practical.
- Check contrast when changing shared CSS variables.
- Do not rely on color alone to communicate active or disabled state when text
  or ARIA can clarify the state.
