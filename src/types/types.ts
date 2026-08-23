export interface IProduct {
  _id: string
  imageUrl: string
  description: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  category: string
  rating: number
}

export interface ICartProduct {
  _id: string
  count: number
  imageUrl: string
  price: number
  size: number
  title: string
  type: string
}

export interface ISortListItem {
  name: string
  sortProperty: TSortProperty
}

type TSortProperty = 'rating' | 'title' | 'price'

export interface ICategory {
  _id: string
  name: string
  order?: number
}

export interface IProductSearchParams {
  currentCategory: string
  searchValue: string
  currentPage: number
  sortProperty: TSortProperty
}

export interface ICartState {
  items: ICartProduct[]
  totalPrice: number
}

export interface IFilterState {
  searchValue: string
  currentPage: number
  currentCategory: string
  sort: ISortListItem
}

export type Debounced<Function extends (...args: any[]) => void> = ((
  ...args: Parameters<Function>
) => void) &
  DebouncedCancel

type DebouncedCancel = {
  cancel: () => void
}

export type DebounceTimer = ReturnType<typeof setTimeout> | null
