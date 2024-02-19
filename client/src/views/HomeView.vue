<template>
  <main>
    <div class="flex flex-col lg:flex-row justify-center">
      <ViewComponent v-for="view in views"
        @click="router.push(`${view.route}`)"
        class="lg:w-96"
        :view="view"
        :key="view.id"
      />
    </div>
    <div v-if="isLoading">
      <Loader/>
    </div>
  </main>
</template>

<script setup lang="ts">
// Components
import ViewComponent from '@/components/ViewComponent.vue'
import Loader from '@/components/LoaderComponent.vue'

import { onMounted } from 'vue'
import useData from '@/composables/useData'

// Router
import { useRouter } from 'vue-router'
const router = useRouter()

const { views, isLoading, getViews } = useData()

onMounted(async () => {
  await getViews()
})
</script>
