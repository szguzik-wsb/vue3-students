// Importuje funkcję tworzącą aplikację Vue
import { createApp } from 'vue'
// Importuje funkcję tworzącą magazyn stanu Pinia
import { createPinia } from 'pinia'

// Importuje główny komponent aplikacji
import App from './App.vue'
// Importuje router
import router from './router'
// Dołącza globalne style
import './style.css'

// Tworzy aplikację z komponentem App i zapisuje ją w stałej app
const app = createApp(App)

// Podłącza Pinia do aplikacji
app.use(createPinia())
// Podłącza router do aplikacji
app.use(router)

// Wyświetla aplikację w elemencie strony o identyfikatorze app
app.mount('#app')
