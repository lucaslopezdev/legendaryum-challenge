import viewService from '@/services/view.service'
import { useViewsStore } from '@/stores/views'
import { useCategoriesStore } from '@/stores/categories'
import { useProductsStore } from '@/stores/products'
import { computed, ref } from 'vue'

const useData = () => {
  const isLoading = ref(false)
  const viewsStore = useViewsStore()
  const categoriesStore = useCategoriesStore()
  const productsStore = useProductsStore()

  async function getViews() {
    isLoading.value = true

    try {
      const { data } = await viewService.getViews()
      viewsStore.views = data
    } catch (error: any) {
      throw Error('Error when trying to load views')
    } finally {
      isLoading.value = false
    }
  }

  async function getDataByRoute(viewRoute: string) {
    isLoading.value = true
    
    try {
      const { data } = await viewService.getView(viewRoute)
      viewsStore.currentView = data.view
      categoriesStore.categories = data.categories
      productsStore.products = data.products
      
    } catch (error: any) {
      throw Error('There was an error getting the view.')
    } finally {
      isLoading.value = false
    }
    
  }

  const views = computed(() => viewsStore.views)

  return {
    // data
    views,
    isLoading,

    // methods
    getViews,
    getDataByRoute
  }
}

export default useData
