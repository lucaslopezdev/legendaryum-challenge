import { defineStore } from 'pinia'
import type { Category } from 'env'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [] as Category[],
    currentCategory: {} as Category
  })
})
