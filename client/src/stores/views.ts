import { defineStore } from 'pinia'
import type { View } from 'env'

export const useViewsStore = defineStore('views', {
  state: () => ({
    views: [] as View[],
    currentView: {} as View
  })
})
