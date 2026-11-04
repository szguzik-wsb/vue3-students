<script setup lang="ts">
import { ref } from 'vue';
import type { Publication } from '@/types/publication';
import { startPublications } from '@/data/publications'

const publications = ref<Publication[]>(startPublications);

const toggleFavorite = (pub: Publication): void => {
  pub.favorite = !pub.favorite;
};
</script>

<template>
<ul class="publications-list">
    <li v-for="pub in publications" :key="pub.id" class="publication-card">
        <div>
            <h2 class="publication-title">{{ pub.title }} ({{ pub.id }})</h2>
            <p>{{ pub.author }}</p>
            <p>{{ pub.year }}</p>
            <p>{{ pub.category }}</p>
        </div>
        <button type="button" class="heart-button" aria-label="Polub" :aria-pressed="!!pub.favorite" @click="toggleFavorite(pub)">
            <svg :class="[pub.favorite ? 'heart-true' : 'heart-false']" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
            </svg>
        </button>
    </li>
</ul>
</template>

<style lang="css">
.publications-list {
  align-self: stretch;

  display: flex;

  flex-direction: column;

  gap: var(--space-m);
}

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

.heart-button {
  flex: 0 0 auto;

  display: flex;

  border: none;

  background-color: transparent;

  cursor: pointer;
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