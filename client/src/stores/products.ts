import type { Product, Category } from 'env'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    selectedCategory: null as Category | null
  }),
  getters: {
    filteredProducts: (state) => {
      if (state.selectedCategory) {
        return [...state.products].filter(
          (product) => product.category_id === state.selectedCategory.id
        )
      } else {
        return state.products
      }
    }
  },

  actions: {
    setSelectedCategory(category: Category | null) {
      this.selectedCategory = category
    }
  }
})
