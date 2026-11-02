<!-- Otwiera sekcję skryptu komponentu -->
<script setup>
// Importuje funkcję ref, która tworzy wartość reaktywną
import { ref } from 'vue'

// Tworzy reaktywną wiadomość z tekstem początkowym
const message = ref('Czesć!')

const context = ref('Witaj w SciNet!')
const showContext = ref(false)

// Tworzy funkcję zmieniającą wiadomość
const changeMessage = () => {
  // Ustawia nowy tekst wiadomości
  message.value = 'Cześć Szymon!'
// Zamyka funkcję changeMessage
}

const changeShowContext = () => {
  showContext.value = !showContext.value
}
// Zamyka sekcję skryptu
</script> 


<!-- Otwiera szablon komponentu -->
<template>
  <!-- Wyświetla wiadomość w nagłówku -->
  <h1>{{ message }}</h1>
  <!-- v-if: gdy showContext ma wartość false, akapitu w ogóle nie ma na stronie, Vue dodaje go dopiero przy wartości true -->
  <p v-if="showContext">{{ context }} to jest v-if</p>
  <!-- v-show: akapit jest na stronie zawsze, a gdy showContext ma wartość false, Vue ukrywa go stylem display: none -->
  <p v-show="showContext">{{ context }} to jest v-show</p>
  <!-- Wyświetla przycisk, który po kliknięciu uruchamia changeMessage -->
  <button @click="changeMessage" class="btn btn-primary">Zmien przywitanie</button>
  <button @click="changeShowContext" class="btn btn-red">Pokaż/Ukryj kontekst</button>
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
.btn {
  /* Ustawia wewnętrzny odstęp 10 pikseli w pionie i 20 pikseli w poziomie */
  padding: 10px 20px;
  /* Usuwa obramowanie przycisku */
  border: none;
  /* Zaokrągla rogi przycisku o promieniu 5 pikseli */
  border-radius: 5px;
  /* Zmienia kursor na wskaźnik przy najechaniu na przycisk */
  cursor: pointer;
}

.btn:hover {
  /* Zmienia tło przycisku na ciemniejszy niebieski przy najechaniu */
  background-color: darkblue;
}

.btn:active {
  /* Zmienia tło przycisku na jeszcze ciemniejszy niebieski po kliknięciu */
  background-color: navy;
}
.btn:focus {
  /* Usuwa obramowanie przycisku po kliknięciu */
  outline: none;
}

.btn-primary {
  /* Ustawia niebieskie tło przycisku */
  background-color: blue;
  /* Ustawia biały kolor tekstu przycisku */
  color: white;
}

.btn-red {
  /* Ustawia czerwony tło przycisku */
  background-color: red;
  /* Ustawia biały kolor tekstu przycisku */
  color: white;
}
/* Zamyka regułę przycisku */         
/* Zamyka sekcję stylów */
</style>
