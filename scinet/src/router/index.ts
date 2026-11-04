// Importuje z biblioteki vue-router funkcje do tworzenia routera i historii przeglądarki
import { createRouter, createWebHistory } from 'vue-router'
// Importuje komponent strony „O nas”
import AboutView from '../views/AboutView.vue'
// Importuje komponent strony głównej
import HomeView from '../views/HomeView.vue'
import PublicationsView from '../views/PublicationsView.vue'

// Tworzy router i zapisuje go w stałej router
const router = createRouter(
  // Otwiera obiekt z ustawieniami routera
  {
    // to jest deklaracja routera, który będzie obsługiwał nawigację w aplikacji Vue.js. Używamy funkcji createRouter z pakietu vue-router, aby utworzyć instancję routera. W tym przypadku używamy createWebHistory, aby korzystać z historii przeglądarki do zarządzania trasami. Importujemy również komponenty widoków (AboutView i HomeView), które będą renderowane w zależności od wybranej trasy.
    // Ustawia tryb historii przeglądarki (adresy bez znaku #) i bazowy adres aplikacji
    history: createWebHistory(import.meta.env.BASE_URL),
    // to jest deklaracja zmiennej routes, która przechowuje instancję routera utworzoną za pomocą funkcji createRouter. W tym przypadku używamy createWebHistory, aby korzystać z historii przeglądarki do zarządzania trasami. Importujemy również komponenty widoków (AboutView i HomeView), które będą renderowane w zależności od wybranej trasy.
    // Otwiera listę tras, czyli przypisań adresu do strony
    routes: [
      // Otwiera obiekt pierwszej trasy
      { 
        // Ustawia adres trasy na stronę główną
        path: '/', 
        // Nadaje trasie nazwę home
        name: 'home', 
        // Wskazuje komponent pokazywany pod tym adresem
        component: HomeView 
      // Zamyka obiekt pierwszej trasy
      },
      // Trasa pod adresem /index o nazwie index, pokazuje ten sam komponent co strona główna
      { path: '/index', name: 'index', component: HomeView },
      // Trasa pod adresem /about o nazwie about, pokazuje stronę „O nas”
      { path: '/about', name: 'about', component: AboutView },
      { path: '/publications', name: 'publications', component: PublicationsView },
    // Zamyka listę tras
    ],
  // Zamyka obiekt z ustawieniami routera
  }
// Zamyka wywołanie funkcji createRouter
)

// Eksportuje router jako domyślny eksport tego pliku, z którego korzysta main.ts
export default router
