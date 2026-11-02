<!-- Otwiera sekcję skryptu komponentu -->
<script setup>
// Importuje funkcję ref, która tworzy wartość reaktywną
import { ref } from 'vue'

// Tworzy reaktywną wiadomość z tekstem początkowym
const message = ref('Czesć!')

// Tworzy funkcję zmieniającą wiadomość
const changeMessage = () => {
  // Ustawia nowy tekst wiadomości
  message.value = 'Cześć Szymon!'
// Zamyka funkcję changeMessage
}
// Zamyka sekcję skryptu
</script> 


<!-- Otwiera szablon komponentu -->
<template>
  <!-- Wyświetla wiadomość w nagłówku -->
  <h1>{{ message }}</h1>
  <!-- Wyświetla przycisk, który po kliknięciu uruchamia changeMessage -->
  <button @click="changeMessage" class="btn btn-primary">Zmien przywitanie</button>
<!-- Zamyka szablon -->
</template>
<!-- Otwiera style działające tylko w tym komponencie -->
<style scoped>
/* Reguła dla nagłówków h1 */
h1 {
  /* Ustawia czerwony kolor tekstu */
  color: red;
/* Zamyka regułę nagłówka */
}
/* Zamyka sekcję stylów */
</style>
