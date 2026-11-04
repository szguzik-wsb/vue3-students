<script setup lang="ts">
import { ref } from 'vue'
import type { Publication } from '@/types/publication'
import { startPublications } from '@/data/publications'
import PublicationCard from '@/components/PublicationCard.vue'

const publications = ref<Publication[]>(startPublications)
</script>

<template>
  <ul class="publications-list">
    <PublicationCard v-for="pub in publications" :key="pub.id" :publication="pub" />
  </ul>
</template>

<style lang="css">
.publications-list {
  align-self: stretch;

  display: flex;

  flex-direction: column;

  gap: var(--space-m);
}
</style>
