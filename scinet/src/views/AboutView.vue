<!-- Otwiera sekcję skryptu komponentu, napisaną w TypeScript -->
<script setup lang="ts">
// Importuje funkcję ref, która tworzy wartość reaktywną
import { ref } from 'vue'
// Tworzy reaktywną wartość isActive, początkowo false
const isActive = ref(false)
// Zamyka sekcję skryptu
</script>

<!-- Otwiera szablon komponentu -->
<template>
  <!-- Otwiera główną treść strony -->
  <main>
    <!-- Wyświetla nagłówek strony -->
    <h1>O nas</h1>
    <!-- Wyświetla akapit z opisem -->
    <p>To jest dodatkowa strona aplikacji.</p>
    <!-- Wyświetla przycisk, który po kliknięciu zmienia isActive na wartość przeciwną -->
    <button @click="isActive = !isActive" class="btn btn-primary">Zmien kolor</button>
    <!-- Wyświetla div z klasą active albo bez_active, zależnie od isActive, oraz stałą klasą btn-border -->
    <div :class="[isActive ? 'active' : 'bez_active']" class="btn-border">
      To jest div z klasą active
    </div>

    <!-- Zamyka główną treść strony -->
  </main>
  <!-- Zamyka szablon -->
</template>

<!-- Otwiera style działające tylko w tym komponencie -->
<style scoped>
/* Reguła dla diva, gdy isActive ma wartość true */
.active {
  /* Ustawia szerokość 100 pikseli */
  width: 100px;
  /* Ustawia wysokość 100 pikseli */
  height: 100px;
  /* Ustawia czerwone tło */
  background-color: red;
  /* Zamyka regułę klasy active */
}

/* Reguła dla diva, gdy isActive ma wartość false */
.bez_active {
  /* Ustawia szerokość 100 pikseli */
  width: 100px;
  /* Ustawia wysokość 100 pikseli */
  height: 100px;
  /* Ustawia niebieskie tło */
  background-color: blue;
  /* Zamyka regułę klasy bez_active */
}

/* Reguła dla obramowania diva */
.btn-border {
  /* Ustawia żółte obramowanie o grubości 5 pikseli */
  border: 5px solid yellow;
  /* Zamyka regułę klasy btn-border */
}
/* Zamyka sekcję stylów */
</style>
