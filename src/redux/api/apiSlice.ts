import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { buildProductQueryParams } from '../../utils/utils'
import { API_URL } from '../../config/config'
import type {
  ICategory,
  IProduct,
  IProductSearchParams,
  ISortListItem,
} from '../../types/types'

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  tagTypes: ['Categories', 'Sort', 'Pizzas', 'OnePizza'],

  endpoints: ({ query }) => ({
    getCategories: query<ICategory[], void>({
      query: () => '/categories',
      providesTags: ['Categories'],
    }),

    getSortList: query<ISortListItem[], void>({
      query: () => '/sort',
      providesTags: ['Sort'],
    }),

    getPizzas: query<IProduct[], IProductSearchParams>({
      query: (params) => ({
        url: '/products',
        params: buildProductQueryParams(params),
      }),
      providesTags: ['Pizzas'],
    }),

    getOnePizza: query<IProduct, string>({
      query: (id) => `/products/${id}`,
      providesTags: ['OnePizza'],
    }),
  }),
})

export const {
  useGetCategoriesQuery,
  useGetSortListQuery,
  useGetPizzasQuery,
  useGetOnePizzaQuery,
} = apiSlice
