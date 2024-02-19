<template>
  <article class="p-4 bg-slate-700 m-6 w-fit rounded-md text-center">
    <h3 class="font-bold">{{ product.name }}</h3>
    <p v-if="product.price">Price: {{ product.price }}$</p>
    <p class="text-slate-300">{{ product.description }}</p>
  </article>
</template>

<script setup lang="ts">
import type { Product } from 'env'

const props = defineProps<{
  product: Product
}>()
</script>