# Pizza

A full-stack pizza ordering app with a Node.js backend (Express + MongoDB) and a React frontend (TypeScript + Redux Toolkit). The app supports browsing, search, filtering, sorting, and adding items to the cart.

## Demo

Soon...

## Tools

<p align="left">

  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="40" height="40" alt="Mongodb" title="Mongodb" />
  
  <img width="12" />
  
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="40" height="40" alt="Express" title="Express" />

  <img width="12" />

  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="40" height="40" alt="Nodejs" title="Nodejs" />
  
  <br>
  <br>
  
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="40" height="40" alt="React" title="React" />

  <img width="12" />

  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="40" height="40" alt="Typescript" title="Typescript" />

   <img width="12" />

  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="40" height="40" alt="Sass" title="Sass" />

  <img width="12" />

  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="40" height="40" alt="Redux" title="Redux" />

  <br>
  <br>

  <img src="https://www.cdnlogo.com/logos/n/39/npm-square-red.svg" width="40" height="40" alt="npm" title="npm" />

  <img width="12" />

  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ju3LyCsEPZrHqjHSLpKpeG5gy-iFa52HdQ&s" width="40" height="40" alt="Yarn" title="Yarn" />

  <img width="12" />

  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="40" height="40" alt="Figma" title="Figma" />

   <img width="12" />

  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="40" height="40" alt="Git" title="Git" />
</p>

## Running API

```bash
cd server
npm install
npm start
```

## Running the Development Server

```bash
cd client
npm install
npm start
```

## 📁 Структура Backend

```bash
server/
├── src/
│   ├── controllers/          # Request handlers
│   │   ├── ProductsController.ts
│   │   ├── CategoriesController.ts
│   │   └── SortController.ts
│   ├── services/             # Business logic
│   │   ├── ProductsService.ts
│   │   ├── CategoriesService.ts
│   │   └── SortService.ts
│   ├── models/               # MongoDB models
│   │   ├── ProductsModel.ts
│   │   ├── CategoriesModel.ts
│   │   └── SortModel.ts
│   ├── router/               # API routing
│   │   ├── router.ts
│   │   ├── productsRouter.ts
│   │   ├── categoriesRouter.ts
│   │   └── sortRouter.ts
│   ├── middlewares/          # Middlewares
│   │   └── ErrorHandlingMiddleware.ts
│   ├── error/                # Custom error classes
│   │   └── ApiError.ts
│   ├── types/                # TypeScript types and interfaces
│   │   └── types.ts
│   ├── db.ts                 # Database connection
│   └── server.ts             # App entry point
├── package.json
├── yarn.lock
└── tsconfig.json
```

## 📁 Структура Frontend

```bash
client/
├── public/                                  # Static assets served as-is
│   ├── index.html
│   ├── fonts/
│   └── img/
├── src/
│   ├── index.tsx                            # App bootstrap (React root, providers)
│   ├── components/
│   │   ├── App
│   │   ├── AppRoutes
│   │   ├── CartEmpty
│   │   ├── CartItem
│   │   ├── Categories
│   │   ├── Content
│   │   ├── Error
│   │   ├── Header
│   │   ├── Loader
│   │   ├── Pagination
│   │   ├── PizzaBlock
│   │   ├── Search
│   │   └── Sort
│   ├── hooks/                               # Custom React hooks
|   |   └── usePizzasFromFilters
│   ├── pages/                               # Route-level screens
│   │   ├── Cart
│   │   ├── Home
│   │   ├── NotFound
│   │   └── SingleProduct
│   ├── redux/                               # State management (RTK + RTK Query)
│   │   ├── store
│   │   ├── store.hooks
│   │   ├── api/
│   │   │   └── apiSlice
│   │   └── slices/
│   │       ├── cartSlice
│   │       └── filterSlice
│   ├── scss/                                # Global styles (Sass modules)
│   │   ├── app.scss
│   │   ├── _button.scss
│   │   ├── _fonts.scss
│   │   ├── _reset.scss
│   │   └── _variables.scss
│   ├── types/                               # Shared TypeScript types
│   │   ├── global
│   │   └── types
│   └── utils/                               # Helpers and constants
│       ├── constants
│       ├── routes
│       └── utils
├── package-lock.json
├── package.json
└── tsconfig.json
```

## 📡 API Endpoints

- `GET /products` - Get products with filtering and pagination
  - Query параметры:
    - `category` (string) - filter by category
    - `search` (string) - search by title
    - `sortBy` (string) - one of title, price, rating
    - `page` (number) - page number (default: 1)
- `GET /products/:id` - Get a product by ID

- `GET /categories` - Get all categories

- `GET /sort` - Get all available sort options
