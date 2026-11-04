<script setup lang="ts">
import { ref } from 'vue'
const isActive = ref(false)
</script>

<template>
  <h1>O nas</h1>
  <section class="about-layout">
    <div class="about-text">
      <p>To jest dodatkowa strona aplikacji.</p>
      <button @click="isActive = !isActive" class="btn btn-primary">Zmien kolor</button>
    </div>
    <div :class="[isActive ? 'active' : 'bez_active']" class="btn-border">
      To jest div z klasą active
    </div>
  </section>
</template>

<style scoped>
.about-layout {
  align-self: stretch;

  display: flex;

  flex-flow: row wrap;

  justify-content: space-between;

  align-items: stretch;

  align-content: flex-start;

  gap: var(--space-m);
}

.about-text {
  flex-grow: 1;

  flex-shrink: 1;

  flex-basis: 250px;

  display: flex;

  flex-direction: column;

  align-items: flex-start;

  gap: var(--space-s);

  padding: var(--space-m);

  border: 1px solid var(--color-border);

  border-radius: var(--radius);

  background-color: var(--color-panel);
}

.about-text .btn {
  align-self: flex-end;

  margin-top: auto;
}

.active {
  background-color: red;
}

.bez_active {
  background-color: blue;
}

.btn-border {
  flex: 0 0 auto;

  align-self: center;

  display: flex;

  justify-content: center;

  align-items: center;

  width: 100px;

  height: 100px;

  border: 5px solid yellow;

  color: var(--color-light);

  font-size: 0.875rem;

  text-align: center;
}

@media (max-width: 480px) {
  .about-layout {
    flex-direction: column;

    flex-wrap: nowrap;
  }

  .about-text {
    flex-basis: auto;
  }

  .btn-border {
    order: -1;
  }
}
</style>
