<template>
  <header>
    <div class="wrapper">
      <nav class="m-4 right-0 text-center font-bold text-xl ">
        <RouterLink to="/">Home 🏠</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>