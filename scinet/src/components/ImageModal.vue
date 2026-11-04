<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'

defineProps<{
  src: string
  alt: string
}>()

const emit = defineEmits<{
  close: []
}>()

const dialog = useTemplateRef<HTMLDialogElement>('dialog')

onMounted(() => {
  dialog.value?.showModal()
})
</script>

<template>
  <dialog ref="dialog" class="image-modal" :aria-label="alt" @close="emit('close')">
    <header class="image-modal-header">
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
    <img class="image-modal-image" :src="src" :alt="alt" />
  </dialog>
</template>

<style scoped>
.image-modal {
  max-width: calc(100% - 2 * var(--space-m));

  margin: auto;

  padding: var(--space-m);

  border: 1px solid var(--color-border);

  border-radius: var(--radius);
}

.image-modal::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

.image-modal-header {
  display: flex;

  justify-content: flex-end;

  margin-bottom: var(--space-s);
}

.image-modal-image {
  display: block;

  max-width: 100%;

  max-height: 80vh;

  border-radius: var(--radius);
}

.icon-button {
  display: flex;

  border: none;

  background-color: transparent;

  cursor: pointer;
}
</style>
