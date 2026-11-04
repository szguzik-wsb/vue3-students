<script setup lang="ts">
import { ref } from 'vue'
import ImageModal from '@/components/ImageModal.vue'
import aldrin from '@/assets/images/aldrin.jpg'
import crabNebula from '@/assets/images/crab-nebula.jpg'
import earth from '@/assets/images/earth.jpg'
import hubbleDeepField from '@/assets/images/hubble-deep-field.jpg'
import jupiter from '@/assets/images/jupiter.jpg'
import pillarsOfCreation from '@/assets/images/pillars-of-creation.jpg'

const normalImage = { src: earth, alt: 'Ziemia' }

const LAZY_COPIES = 24

const lazySourceImages = [
  { src: aldrin, alt: 'Buzz Aldrin na Księżycu' },
  { src: crabNebula, alt: 'Mgławica Krab' },
  { src: hubbleDeepField, alt: 'Głębokie pole Hubble’a' },
  { src: jupiter, alt: 'Jowisz i Wielka Czerwona Plama' },
  { src: pillarsOfCreation, alt: 'Filary Stworzenia' },
]

const lazyImages = Array.from({ length: LAZY_COPIES }, (_, copy) =>
  lazySourceImages.map((image, index) => ({
    id: `${copy}-${index}`,
    src: `${image.src}?kopia=${copy}`,
    alt: image.alt,
  })),
).flat()

const selectedImage = ref<{ src: string; alt: string } | null>(null)
</script>

<template>
  <h1>Obrazki</h1>

  <section class="images-section">
    <h2>Zwykły obrazek</h2>
    <code>&lt;img :src="normalImage.src" :alt="normalImage.alt" /&gt;</code>
    <div class="images-row">
      <button type="button" class="images-thumbnail" @click="selectedImage = normalImage">
        <img class="images-image" :src="normalImage.src" :alt="normalImage.alt" />
      </button>
    </div>
  </section>

  <section class="images-section">
    <h2>Lazy loading</h2>
    <code>&lt;img :src="image.src" :alt="image.alt" loading="lazy" /&gt;</code>
    <div class="images-row">
      <button
        v-for="image in lazyImages"
        :key="image.id"
        type="button"
        class="images-thumbnail"
        @click="selectedImage = image"
      >
        <img class="images-image" :src="image.src" :alt="image.alt" loading="lazy" />
      </button>
    </div>
  </section>

  <ImageModal
    v-if="selectedImage"
    :src="selectedImage.src"
    :alt="selectedImage.alt"
    @close="selectedImage = null"
  />
</template>

<style scoped>
.images-section {
  align-self: stretch;

  display: flex;

  flex-direction: column;

  gap: var(--space-m);
}

.images-section code {
  overflow-wrap: anywhere;
}

.images-row {
  display: flex;

  flex-wrap: wrap;

  gap: var(--space-m);
}

.images-thumbnail {
  display: flex;

  border: none;

  background-color: transparent;

  cursor: pointer;
}

.images-image {
  width: 150px;

  height: 150px;

  border-radius: var(--radius);

  object-fit: cover;
}
</style>
