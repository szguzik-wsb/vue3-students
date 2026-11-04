<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Czesć!')

const context = ref('Witaj w SciNet!')
const showContext = ref(false)

const changeMessage = () => {
  message.value = 'Cześć Szymon!'
}

const changeShowContext = () => {
  showContext.value = !showContext.value
}
</script>

<template>
  <h1>{{ message }}</h1>
  <p v-if="showContext" class="context">{{ context }} to jest v-if</p>
  <p v-show="showContext" class="context">{{ context }} to jest v-show</p>
  <div class="actions">
    <button @click="changeMessage" class="btn btn-primary">Zmien przywitanie</button>
    <button @click="changeShowContext" class="btn btn-red">Pokaż/Ukryj kontekst</button>
  </div>
</template>

<style scoped>
h1 {
  color: red;

  @media screen and (max-width: 768px) {
    color: green;
  }
}

.context {
  align-self: stretch;

  padding: var(--space-s);

  border: 1px solid var(--color-border);

  border-radius: var(--radius);

  background-color: var(--color-panel);
}

.actions {
  align-self: stretch;

  display: flex;

  flex-flow: row wrap;

  justify-content: flex-start;

  align-content: flex-start;

  gap: var(--space-s);
}

.actions .btn {
  flex: 0 1 220px;
}

@media (max-width: 480px) {
  .actions {
    justify-content: space-around;
  }
}
</style>
