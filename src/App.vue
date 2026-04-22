<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app-wrapper">
    <AppHeader />
    
    <main>
      <RouterView />
    </main>
    
    <AppFooter />
  </div>
</template>

<style>
/* Global styles for view transitions if needed */
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
