// Importuje funkcje ref i computed z Vue
import { ref, computed } from 'vue'
// Importuje funkcję tworzącą magazyn Pinia
import { defineStore } from 'pinia'

// Tworzy i eksportuje magazyn o nazwie counter
export const useCounterStore = defineStore('counter', () => {
  // Tworzy reaktywny licznik z wartością początkową 0
  const count = ref(0)
  // Tworzy wartość wyliczaną, czyli licznik razy dwa
  const doubleCount = computed(() => count.value * 2)
  // Tworzy funkcję zwiększającą licznik
  function increment() {
    // Zwiększa licznik o 1
    count.value++
  // Zamyka funkcję increment
  }

  // Udostępnia na zewnątrz licznik, jego podwojenie i funkcję
  return { count, doubleCount, increment }
// Zamyka definicję magazynu
})
