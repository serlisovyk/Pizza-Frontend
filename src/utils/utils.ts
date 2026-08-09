import {
  ICartProduct,
  ICartState,
  IProductSearchParams,
  Debounced,
  DebounceTimer,
} from '../types/types'

export const changeTotalPrice = (state: ICartState) => {
  state.totalPrice = state.items.reduce(
    (sum: number, item) => item.price * item.count + sum,
    0
  )
}

export const deleteItemFromCart = (state: ICartState, payload: ICartProduct) => {
  state.items = state.items.filter(
    (item) =>
      item._id !== payload._id ||
      item.size !== payload.size ||
      item.type !== payload.type
  )
}

export const searchItemInCart = (state: ICartState, payload: ICartProduct) => {
  const findItem = state.items.find(
    (item) =>
      item._id === payload._id &&
      item.size === payload.size &&
      item.type === payload.type
  )
  return findItem
}

export const saveCartToLocalStorage = (cart: ICartState) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export const loadCartFromLocalStorage = (): ICartState => {
  const cartData = localStorage.getItem('cart')
  return cartData ? JSON.parse(cartData) : { items: [], totalPrice: 0 }
}

export const buildProductQueryParams = ({
  currentCategory,
  searchValue,
  currentPage,
  sortProperty,
}: IProductSearchParams): Record<string, any> => {
  const params: Record<string, any> = {
    page: currentPage,
    limit: 4,
    sortBy: sortProperty,
    order: 'desc',
  }

  if (currentCategory !== 'Все') params.category = currentCategory
  if (searchValue) params.search = searchValue

  return params
}

export function generateTitle(searchValue: string, currentCategory: string) {
  if (searchValue) {
    return `Поиск по запросу: ${searchValue}`
  }

  if (currentCategory && currentCategory !== 'Все') {
    return `Категория: ${currentCategory}`
  }

  return 'Все пиццы'
}

export function debounce<Function extends (...args: any[]) => void>(
  fn: Function,
  wait = 0
): Debounced<Function> {
  let timer: DebounceTimer = null
  let lastArgs: Parameters<Function> | null = null

  const debounced = ((...args: Parameters<Function>) => {
    lastArgs = args
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      timer = null

      fn(...(lastArgs as Parameters<Function>))
      lastArgs = null
    }, wait)
  }) as Debounced<Function>

  debounced.cancel = () => {
    if (timer) clearTimeout(timer)
    timer = null
    lastArgs = null
  }

  return debounced
}
