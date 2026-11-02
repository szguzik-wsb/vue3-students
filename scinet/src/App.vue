<!-- Otwiera sekcję skryptu komponentu, napisaną w TypeScript -->
<script setup lang="ts">
// Importuje komponent górnego menu
import TopMenu from './components/TopMenu.vue'
// Importuje komponent stopki
import PageFooter from './components/PageFooter.vue'
// Zamyka sekcję skryptu
</script>

<!-- Otwiera szablon komponentu -->
<template>
  <!-- Wyświetla górne menu -->
  <TopMenu />
  <!-- Wyświetla stronę wybraną przez router dla bieżącego adresu -->
  <RouterView />
  <!-- Wyświetla stopkę -->
  <PageFooter />
<!-- Zamyka szablon -->
</template>
