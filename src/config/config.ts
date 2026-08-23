export const API_URL = import.meta.env.VITE_API_URL

export const ROUTES = {
  HOME: '/',
  CART: '/cart',
  SINGLE_PRODUCT: '/pizza/:id',
  NOT_FOUND: '*',
} as const
