import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IFilterState, ISortListItem } from '../../../types/types'

const initialState: IFilterState = {
  searchValue: '',
  currentPage: 1,
  currentCategory: 'Все',
  sort: { name: 'популярности', sortProperty: 'rating' },
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory(state, { payload }: PayloadAction<string>) {
      state.currentCategory = payload
      state.currentPage = 1
    },

    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload
      state.currentPage = 1
    },

    setSort(state, { payload }: PayloadAction<ISortListItem>) {
      state.sort = payload
      state.currentPage = 1
    },

    setCurrentPage(state, { payload }: PayloadAction<number>) {
      state.currentPage = payload
    },
  },
  selectors: {
    selectFilterCurrentCategory: (state) => state.currentCategory,
    selectFilterSearchValue: (state) => state.searchValue,
    selectFilterSort: (state) => state.sort,
    selectFilterCurrentPage: (state) => state.currentPage,
    selectFilterSortProperty: (state) => state.sort.sortProperty,
  },
})

export const {
  actions: filterActions,
  selectors: {
    selectFilterCurrentCategory,
    selectFilterSearchValue,
    selectFilterSort,
    selectFilterCurrentPage,
    selectFilterSortProperty,
  },
} = filterSlice

export default filterSlice
