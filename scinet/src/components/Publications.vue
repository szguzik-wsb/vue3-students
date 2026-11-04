<script setup lang="ts">
import { computed, ref, watch } from 'vue'
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

const CART_STORAGE_KEY = 'scinet-cart'

const publications = ref<Publication[]>(startPublications)
const cart = ref<Publication[]>(JSON.parse(localStorage.getItem(CART_STORAGE_KEY) ?? '[]'))

watch(
  cart,
  (newCart) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart))
  },
  { deep: true },
)

const searchQuery = ref('')

const filteredPublications = computed(() =>
  publications.value.filter((pub) =>
    pub.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
  ),
)

const cartSummary = computed(() => `${cart.value.length} z ${publications.value.length}`)

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
    <input
      v-model.trim="searchQuery"
      type="search"
      class="publications-search"
      placeholder="Szukaj po tytule"
      aria-label="Szukaj po tytule"
    />
    <ul class="publications-list">
      <PublicationCard
        v-for="pub in filteredPublications"
        :key="pub.id"
        :publication="pub"
        :in-cart="isInCart(pub)"
        @add="addToCart"
        @remove="removeFromCart"
      />
    </ul>
    <aside class="cart-panel">
      <h2>Wybrane ({{ cartSummary }})</h2>
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

.publications-search {
  flex: 1 1 100%;

  padding: var(--space-s);

  border: 1px solid var(--color-border);

  border-radius: var(--radius);

  font: inherit;
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
