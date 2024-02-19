<template>
  <article @click="selectCategory(category)" class="componentClass bg-sky-950 hover:bg-sky-800">
    <h2 class="text-2xl lg:text-3xl font-bold">{{ category.name }}</h2>
    <p>{{ category.description }}</p>
  </article>
</template>

<script setup lang="ts">
import type { Category } from 'env'
import { useProductsStore } from '../stores/products'

const productsStore = useProductsStore()

const selectCategory = (category: Category) => {
  productsStore.setSelectedCategory(category)
}
const props = defineProps<{
  category: Category
}>()
</script>