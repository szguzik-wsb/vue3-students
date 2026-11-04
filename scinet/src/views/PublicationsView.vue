<script setup lang="ts">
import { ref } from 'vue'
import Publications from '@/components/Publications.vue'

const isCartOpen = ref(false)
</script>

<template>
  <header class="publications-header">
    <h1>Publications</h1>
    <button type="button" class="cart-button" aria-label="Koszyk" @click="isCartOpen = true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18" />
        <path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25" />
        <circle cx="18" cy="20" r="2" />
        <circle cx="8" cy="20" r="2" />
      </svg>
    </button>
  </header>
  <Publications :cart-open="isCartOpen" @close-cart="isCartOpen = false" />
</template>

<style scoped>
.publications-header {
  align-self: stretch;

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: var(--space-m);
}

.cart-button {
  display: flex;

  border: none;

  background-color: transparent;

  cursor: pointer;
}
</style>
