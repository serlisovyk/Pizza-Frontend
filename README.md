# React Pizza

🍕 Pizza ordering frontend built with React, TypeScript, Redux Toolkit, RTK
Query, SCSS, and Vite.

This project is the client application for a compact pizza ordering app. It
connects to the [Pizza Backend](https://github.com/serlisovyk/Pizza-Backend)
API and provides a responsive catalog with categories, search, sorting,
pagination, product details, and a cart flow. The codebase stays intentionally
small, but keeps production habits from larger projects: typed state, Vite
build tooling, React Compiler, modular SCSS, metadata, accessibility fixes, and
a clear AI-agent rule set for future maintenance.

## ✨ Features

- Pizza catalog with category filtering
- Text search with debounced Redux updates
- Sort options loaded from the backend API
- Pagination for product lists
- Product detail page
- Cart page with add, remove, decrement, total count, and total price
- Cart persistence through local storage
- RTK Query API layer for products, categories, and sort options
- React Router routes for catalog, cart, product details, and not found page
- Custom loading, empty, and error states
- Responsive layout for desktop, tablet, and mobile screens
- Accessible interactive controls with keyboard focus states
- App metadata, favicon, Open Graph, and Twitter card tags
- React Compiler enabled through the Vite React plugin
- Prettier formatting with Yarn scripts

## 🧰 Tech Stack

- React
- TypeScript
- Vite
- React Compiler
- React Router
- Redux Toolkit
- RTK Query
- SCSS Modules
- Sass
- Prettier
- Yarn

## 📁 Project Structure

```text
src/
  components/     Reusable UI blocks, layout pieces, states, and skeletons
  pages/          Route-level pages: Home, Cart, SingleProduct, NotFound
  redux/          Store setup, RTK Query API slice, and feature slices
  hooks/          Shared React hooks
  config/         Runtime config and route constants
  constants/      Shared domain constants
  scss/           Global styles: variables, reset, fonts, and button styles
  types/          Shared TypeScript types and global declarations
  utils/          Small reusable helpers
public/
  fonts/          Local Proxima Nova font files
  img/            Static images, icons, favicon source, and cart assets
```

## ⚙️ Environment Variables

Create a `.env` file in the project root. Use `.env.sample` as the list of
required keys.

```env
VITE_API_URL="https://example.com"
```

`VITE_API_URL` should point to the public Pizza Backend API origin.

## 🚀 Scripts

Install dependencies:

```bash
yarn install
```

Run the local development server:

```bash
yarn dev
```

Build the production version:

```bash
yarn build
```

Preview the production build locally:

```bash
yarn preview
```

Format code:

```bash
yarn format
```

Check formatting:

```bash
yarn format:check
```

## 🌍 Routes

```http
GET /
GET /cart
GET /pizza/:id
GET *
```

The frontend consumes these backend endpoints:

```http
GET /products
GET /products/:id
GET /categories
GET /sort
```

## 🔎 SEO & Accessibility Notes

- Metadata, favicon links, Open Graph tags, Twitter card tags, font preloads,
  and the noscript message live in `index.html`.
- Interactive controls use real buttons or links instead of clickable
  non-interactive elements.
- Controls that expose state use labels or ARIA attributes where needed.
- Decorative SVG icons are hidden from assistive technologies.
- Focus states are preserved after the global reset.

## 🧱 Architecture Notes

- `App.tsx` owns the main shell and semantic `main` landmark.
- `AppRoutes.tsx` owns route declarations and lazy-loaded secondary pages.
- `pages` contain route-level composition.
- `components` contain reusable UI and local component state.
- `redux/api/apiSlice.ts` owns all server requests through RTK Query.
- `redux/slices` own client state for cart and filters.
- `config/config.ts` owns runtime API URL and route constants.
- `constants/constants.ts` owns shared domain constants such as pizza type names.
- Global SCSS stays limited to variables, reset, fonts, and shared button styles.
- Component-specific styles should stay next to the component as SCSS modules.
