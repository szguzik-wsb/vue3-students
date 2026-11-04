<script setup lang="ts">
import type { Publication } from '@/types/publication'

const props = defineProps<{
  publication: Publication
  inCart: boolean
}>()

const emit = defineEmits<{
  add: [publication: Publication]
  remove: [publication: Publication]
}>()

const toggleFavorite = (pub: Publication): void => {
  pub.favorite = !pub.favorite
}
</script>

<template>
  <li class="publication-card">
    <div>
      <h2 class="publication-title">{{ publication.title }} ({{ publication.id }})</h2>
      <p>{{ publication.author }}</p>
      <p>{{ publication.year }}</p>
      <p>{{ publication.category }}</p>
    </div>
    <div class="publication-actions">
      <button
        type="button"
        class="icon-button"
        aria-label="Dodaj"
        :disabled="inCart"
        @click="emit('add', publication)"
      >
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
          <path d="M12 5v14" />
        </svg>
      </button>
      <button
        type="button"
        class="icon-button"
        aria-label="Usuń"
        :disabled="!inCart"
        @click="emit('remove', publication)"
      >
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
      <button
        type="button"
        class="icon-button"
        aria-label="Polub"
        :aria-pressed="!!publication.favorite"
        @click="toggleFavorite(publication)"
      >
        <svg
          :class="[publication.favorite ? 'heart-true' : 'heart-false']"
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
          <path
            d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
          />
        </svg>
      </button>
    </div>
  </li>
</template>

<style scoped>
.publication-card {
  display: flex;

  justify-content: space-between;

  align-items: flex-start;

  gap: var(--space-m);

  padding: var(--space-m);

  border: 1px solid var(--color-border);

  border-radius: var(--radius);

  background-color: var(--color-panel);
}

.publication-title {
  margin-bottom: var(--space-s);
}

.publication-actions {
  flex: 0 0 auto;

  display: flex;

  gap: var(--space-s);
}

.icon-button {
  display: flex;

  border: none;

  background-color: transparent;

  cursor: pointer;
}

.icon-button:disabled {
  opacity: 0.3;

  cursor: not-allowed;
}

.heart-true {
  fill: red;

  stroke: red;
}

.heart-false {
  fill: transparent;

  stroke: black;
}
</style>
