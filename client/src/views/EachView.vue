<template>
  <main class="flex flex-col">
    <ViewComponent :view="currentView" />


    <div class="grid grid-cols-1 lg:grid-cols-2">
      <CategoryComponent v-for="category in categories"
        @click="router.push({ name: 'category', params: { category: category.id.toString() } })" :category="category"
        :key="category.id" />
    </div>
  </main>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 justify-items-center">
    <ProductComponent v-for="product in products" :product="product" :key="product.id" />
  </div>
  <div v-if="isLoading">
    <Loader />
  </div>
</template>

<script setup lang="ts">
// Components
import ViewComponent from '@/components/ViewComponent.vue'
import CategoryComponent from '@/components/CategoryComponent.vue'
import ProductComponent from '@/components/ProductComponent.vue'
import Loader from '@/components/LoaderComponent.vue'

// Store
import { useViewsStore } from '@/stores/views'
import { useCategoriesStore } from '../stores/categories'
import { useProductsStore } from '@/stores/products'
const viewsStore = useViewsStore()
const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

import useData from '@/composables/useData'
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const currentView = computed(() => viewsStore.currentView)
const categories = computed(() => categoriesStore.categories)
const products = computed(() => productsStore.filteredProducts)

// Router
const route = useRoute()
const router = useRouter()
const viewRoute = route.params.viewRoute

const { getDataByRoute, isLoading } = useData()

onMounted(async () => {
  await getDataByRoute(viewRoute as string)
})
</script>