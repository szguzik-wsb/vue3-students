<script setup lang="ts">
import { ref } from 'vue'
import type { Publication } from '@/types/publication'
import { startPublications } from '@/data/publications'
import PublicationCard from '@/components/PublicationCard.vue'
import CartModal from '@/components/CartModal.vue'

defineProps<{
  cartOpen: boolean
}>()

const emit = defineEmits<{
  closeCart: []
}>()

const publications = ref<Publication[]>(startPublications)
const cart = ref<Publication[]>([])

const isInCart = (pub: Publication): boolean => cart.value.some((item) => item.id === pub.id)

const addToCart = (pub: Publication): void => {
  if (!isInCart(pub)) {
    cart.value.push(pub)
  }
}

const removeFromCart = (pub: Publication): void => {
  cart.value = cart.value.filter((item) => item.id !== pub.id)
}
</script>

<template>
  <div class="publications-layout">
    <ul class="publications-list">
      <PublicationCard
        v-for="pub in publications"
        :key="pub.id"
        :publication="pub"
        :in-cart="isInCart(pub)"
        @add="addToCart"
        @remove="removeFromCart"
      />
    </ul>
    <aside class="cart-panel">
      <h2>Wybrane</h2>
      <ul class="cart-panel-list">
        <li v-for="pub in cart" :key="pub.id">{{ pub.title }}</li>
      </ul>
    </aside>
    <CartModal
      v-if="cartOpen"
      :selected="cart"
      @remove="removeFromCart"
      @close="emit('closeCart')"
    />
  </div>
</template>

<style lang="css">
.publications-layout {
  align-self: stretch;

  display: flex;

  flex-flow: row wrap;

  align-items: flex-start;

  gap: var(--space-m);
}

.publications-list {
  flex: 3 1 400px;

  display: flex;

  flex-direction: column;

  gap: var(--space-m);
}

.cart-panel {
  flex: 1 1 220px;

  padding: var(--space-m);

  border: 1px solid var(--color-border);

  border-radius: var(--radius);

  background-color: var(--color-panel);
}

.cart-panel-list {
  display: flex;

  flex-direction: column;

  gap: var(--space-s);

  margin-top: var(--space-s);

  list-style: none;
}
</style>
