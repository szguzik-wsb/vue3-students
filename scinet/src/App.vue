<script setup lang="ts">
import TopMenu from './components/TopMenu.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<template>
  <TopMenu />
  <main class="app-main">
    <RouterView />
  </main>
  <PageFooter />
</template>

<style scoped>
.app-main {
  flex-grow: 1;

  display: flex;

  flex-direction: column;

  align-items: flex-start;

  gap: var(--space-m);

  width: 100%;

  max-width: 960px;

  margin: 0 auto;

  padding: var(--space-m);
}
</style>
