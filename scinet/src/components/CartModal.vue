<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import type { Publication } from '@/types/publication'

defineProps<{
  selected: Publication[]
}>()

const emit = defineEmits<{
  remove: [publication: Publication]
  close: []
}>()

const dialog = useTemplateRef<HTMLDialogElement>('dialog')

onMounted(() => {
  dialog.value?.showModal()
})
</script>

<template>
  <dialog ref="dialog" class="cart-modal" @close="emit('close')">
    <header class="cart-modal-header">
      <h2>Koszyk</h2>
      <button type="button" class="icon-button" aria-label="Zamknij" @click="dialog?.close()">
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
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </header>
    <ul class="cart-modal-list">
      <li v-for="pub in selected" :key="pub.id" class="cart-modal-item">
        <span>{{ pub.title }}</span>
        <button type="button" class="icon-button" aria-label="Usuń" @click="emit('remove', pub)">
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
            <path d="M5 12h14" />
          </svg>
        </button>
      </li>
    </ul>
  </dialog>
</template>

<style scoped>
.cart-modal {
  width: 500px;

  max-width: calc(100% - 2 * var(--space-m));

  margin: auto;

  padding: var(--space-m);

  border: 1px solid var(--color-border);

  border-radius: var(--radius);

  color: var(--color-dark);
}

.cart-modal::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

.cart-modal-header {
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: var(--space-m);
}

.cart-modal-list {
  display: flex;

  flex-direction: column;

  gap: var(--space-s);

  margin-top: var(--space-m);

  list-style: none;
}

.cart-modal-item {
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: var(--space-m);
}

.icon-button {
  flex: 0 0 auto;

  display: flex;

  border: none;

  background-color: transparent;

  cursor: pointer;
}
</style>
