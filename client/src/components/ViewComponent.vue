<template>
  <article class="componentClass bg-slate-900 hover:bg-slate-800" @click="goToView(view.route)">
    <h1 class="text-3xl font-bold">{{ view.name }}</h1>
    <p>{{ view.description }}</p>
  </article>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

import type { View } from 'env'

import { useProductsStore } from '@/stores/products'
const productsStore = useProductsStore()

const props = defineProps<{
  view: View
}>()

// This function retrieves all the products in the view
const goToView = (route: string) => {
  productsStore.setSelectedCategory(null)
  router.push(`/${route}`)
}
</script>