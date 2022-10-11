<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import TheNavbar from './components/TheNavbar.vue';
</script>

<template>
  <div class="flex h-screen">
    <nav class="">
      <TheNavbar />
    </nav>
    <main class="bg-gray-200 w-full">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>
