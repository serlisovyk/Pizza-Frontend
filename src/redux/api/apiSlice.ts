import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { buildProductQueryParams } from '../../utils/utils'
import { BASIC_URL } from '../../utils/constants'
import {
  ICategory,
  IProduct,
  IProductSearchParams,
  ISortListItem,
} from '../../types/types'

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: BASIC_URL }),

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
