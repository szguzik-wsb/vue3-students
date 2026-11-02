<!-- Otwiera sekcję skryptu komponentu, napisaną w TypeScript -->
<script setup lang="ts">
// Zamyka pustą sekcję skryptu
</script>

<!-- Otwiera szablon komponentu -->
<template>
  <!-- Wyświetla stopkę strony z napisem Footer -->
  <footer class="page-footer">Footer</footer>
  <!-- Zamyka szablon -->
</template>

<!-- Otwiera style działające tylko w tym komponencie -->
<style scoped>
/* scoped: selektory trafiają tylko w elementy tego komponentu, ale właściwości dziedziczone, np. color, i tak przechodzą do komponentów potomnych */
/* Reguła dla stopki */
.page-footer {
  /* flex-shrink 0: stopka nie zmniejsza swojej wysokości, gdy brakuje miejsca */
  /* Wartości: 1 (domyślna) albo dowolna liczba nieujemna; 0 oznacza brak zmniejszania */
  /* Działa, gdy: rodzic ma display: flex lub inline-flex i dzieci nie mieszczą się w linii */
  /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed; przy flex-wrap: wrap dziecko najpierw przechodzi do nowej linii */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: zmniejsza pudełko w osi głównej, ale nie poniżej min-width przy row albo min-height przy column; padding i border się nie zmniejszają */
  flex-shrink: 0;

  /* display flex: tekst stopki staje się elementem flexboksa */
  /* Wartości: flex, inline-flex, block, inline, inline-block, none, contents, flow-root, table */
  /* Działa, gdy: element jest wyświetlany na stronie; flex-direction, flex-wrap, justify-content, align-items, align-content i gap zaczynają działać dopiero przy flex albo inline-flex */
  /* Nie działa, gdy: przodek ma display: none, bo wtedy element w ogóle się nie wyświetla; dziecko kontenera flex z inline lub inline-block i tak zachowuje się jak blok */
  /* Po rodzicu: nie dziedziczy, dziecko elementu flex samo nie staje się kontenerem flex; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, ale bezpośrednie dzieci stają się elementami flex; dalsze potomne już nie */
  /* Model pudełkowy: flex zajmuje całą szerokość rodzica, inline-flex tylko szerokość treści; dzieci zachowują treść, padding, border i margin, a ich marginesy się nie zapadają */
  /* Position przy flex: static (domyślna) ignoruje top, right, bottom i left; relative i sticky zostawiają dziecko w układzie flex i tylko je przesuwają */
  /* Position przy flex: absolute i fixed wyjmują dziecko z układu, więc nie działają na nie flex-grow, flex-shrink, flex-basis ani gap; punktem odniesienia jest najbliższy przodek z position innym niż static */
  /* Inne właściwości przy flex: float, clear i vertical-align nie działają na dzieciach, a z-index działa na nich nawet bez position */
  display: flex;

  /* justify-content flex-start: ustawia tekst przy lewej krawędzi */
  /* Wartości: normal (domyślna, działa jak flex-start), flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right */
  /* Działa, gdy: element ma display: flex lub inline-flex i jest wolne miejsce w osi głównej */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex albo brak wolnego miejsca, bo zabrało je dziecko z flex-grow lub margin: auto */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, rozmieszcza tylko bezpośrednie dzieci */
  /* Model pudełkowy: nie zmienia rozmiaru pudełek, rozdziela tylko wolne miejsce między nimi */
  justify-content: flex-start;

  /* align-items center: środkuje tekst w pionie */
  /* Wartości: normal (domyślna, działa jak stretch), stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end */
  /* Działa, gdy: element ma display: flex lub inline-flex; stretch działa, gdy dziecko nie ma ustawionej wysokości przy row albo szerokości przy column */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex; pojedyncze dziecko może to zmienić własnym align-self */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, ale bezpośrednie dzieci odczytują ją przez align-self: auto; dalsze potomne już nie */
  /* Model pudełkowy: stretch powiększa pudełko dziecka w osi poprzecznej, pozostałe wartości zostawiają rozmiar wynikający z treści */
  align-items: center;

  /* Model pudełkowy: ustawia najmniejszą wysokość stopki */
  /* Wartości: 0 lub auto (domyślna; auto na elementach flex), długość, np. 50px, 100vh, procent, min-content, max-content, fit-content */
  /* Działa, gdy: element jest blokiem, inline-block lub elementem flex; procent wymaga ustawionej wysokości rodzica */
  /* Nie działa, gdy: element ma display: inline */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: dolny limit wysokości pudełka, ma pierwszeństwo przed height i max-height */
  min-height: 50px;

  /* Model pudełkowy: ustawia wewnętrzny odstęp stopki */
  /* Wartości: 0, długość, procent; od jednej do czterech wartości: góra, prawa, dół, lewa; nie ma auto ani wartości ujemnych */
  /* Działa, gdy: element jest wyświetlany na stronie */
  /* Nie działa, gdy: element ma display: inline, bo odstęp górny i dolny nie odsuwa wtedy sąsiednich linii */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, ale odsuwa treść i dzieci od krawędzi tego elementu */
  /* Model pudełkowy: warstwa między treścią a border, widać na niej tło; przy border-box wlicza się do width i height, a przy content-box je powiększa */
  padding: var(--space-s) var(--space-m);

  /* Ustawia ciemne tło */
  /* Wartości: transparent (domyślna), nazwa, np. red, kod #333, rgb(), hsl(), var() */
  /* Działa, gdy: element ma rozmiar większy od zera */
  /* Nie działa, gdy: element ma szerokość lub wysokość równą zero */
  /* Po rodzicu: nie dziedziczy; przez przezroczyste dziecko widać jednak tło rodzica */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: nie zmienia rozmiaru; maluje treść, padding i obszar pod border, ale nie margin */
  background-color: var(--color-dark);

  /* Ustawia jasny kolor tekstu */
  /* Wartości: nazwa, np. red, kod #333, rgb(), hsl(), transparent, currentColor, var() */
  /* Działa, gdy: element lub jego potomek ma tekst */
  /* Nie działa, gdy: element nie ma tekstu; potomek z własnym kolorem go nadpisuje, a linki i przyciski dostają własny kolor od przeglądarki */
  /* Po rodzicu: dziedziczy, gdy element nie ma własnego koloru */
  /* Na potomne: przechodzi na wszystkie potomne bez własnego koloru */
  /* Model pudełkowy: nie zmienia rozmiaru; obramowanie bez podanego koloru przejmuje tę wartość */
  color: var(--color-light);

  /* Zamyka regułę stopki */
}

/* Zamyka sekcję stylów */
</style>
