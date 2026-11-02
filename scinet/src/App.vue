<!-- Otwiera sekcję skryptu komponentu, napisaną w TypeScript -->
<script setup lang="ts">
// Importuje komponent górnego menu
import TopMenu from './components/TopMenu.vue'
// Importuje komponent stopki
import PageFooter from './components/PageFooter.vue'
// Zamyka sekcję skryptu
</script>

<!-- Otwiera szablon komponentu -->
<template>
  <!-- Wyświetla górne menu -->
  <TopMenu />
  <!-- Otwiera główną treść strony -->
  <main class="app-main">
    <!-- Wyświetla stronę wybraną przez router dla bieżącego adresu -->
    <RouterView />
    <!-- Zamyka główną treść strony -->
  </main>
  <!-- Wyświetla stopkę -->
  <PageFooter />
  <!-- Zamyka szablon -->
</template>

<!-- Otwiera style działające tylko w tym komponencie -->
<style scoped>
/* scoped: selektory trafiają tylko w elementy tego komponentu, ale właściwości dziedziczone, np. color, i tak przechodzą do komponentów potomnych */
/* Reguła dla głównej treści strony */
.app-main {
  /* flex-grow: treść zajmuje całe wolne miejsce i spycha stopkę na dół okna */
  /* Wartości: 0 (domyślna, nie rośnie) albo dowolna liczba nieujemna, np. 1, 2, 0.5 */
  /* Działa, gdy: rodzic ma display: flex lub inline-flex i jest wolne miejsce w osi głównej */
  /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: powiększa pudełko w osi głównej, ale najwyżej do max-width przy row albo max-height przy column */
  flex-grow: 1;
  /* display flex: elementy strony stają się elementami flexboksa */
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
  /* flex-direction column: ustawia elementy jeden pod drugim */
  /* Wartości: row (domyślna), row-reverse, column, column-reverse */
  /* Działa, gdy: element ma display: flex lub inline-flex; ustala oś główną: przy column justify-content działa w pionie, align-items w poziomie, a flex-basis oznacza wysokość */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, ustawia kierunek tylko bezpośrednich dzieci */
  /* Model pudełkowy: sam nie zmienia rozmiaru, ale decyduje, czy flex-grow i flex-shrink zmieniają szerokość czy wysokość pudełka dziecka */
  flex-direction: column;
  /* align-items flex-start: elementy nie rozciągają się na całą szerokość */
  /* Wartości: normal (domyślna, działa jak stretch), stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end */
  /* Działa, gdy: element ma display: flex lub inline-flex; stretch działa, gdy dziecko nie ma ustawionej wysokości przy row albo szerokości przy column */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex; pojedyncze dziecko może to zmienić własnym align-self */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, ale bezpośrednie dzieci odczytują ją przez align-self: auto; dalsze potomne już nie */
  /* Model pudełkowy: stretch powiększa pudełko dziecka w osi poprzecznej, pozostałe wartości zostawiają rozmiar wynikający z treści */
  align-items: flex-start;
  /* gap: ustawia odstęp między elementami */
  /* Wartości: normal (domyślna), długość, np. 10px, 1rem, procent; dwie wartości oznaczają row-gap i column-gap */
  /* Działa, gdy: element ma display: flex lub inline-flex; odstęp powstaje tylko między dziećmi, a nie przy krawędzi kontenera */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex; dziecko z position: absolute lub fixed nie dostaje odstępu */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, dotyczy tylko odstępów między bezpośrednimi dziećmi */
  /* Model pudełkowy: to nie margines, nie należy do pudełka dziecka, nie zapada się i dodaje się do marginesów */
  gap: var(--space-m);
  /* Model pudełkowy: treść zajmuje całą dostępną szerokość */
  /* Wartości: auto (domyślna), długość, procent, min-content, max-content, fit-content */
  /* Działa, gdy: element jest blokiem, inline-block lub elementem flex */
  /* Nie działa, gdy: element ma display: inline; w układzie flex przy row ma pierwszeństwo flex-basis inne niż auto, a limit ustalają min-width i max-width */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, ale procentowe szerokości dzieci liczą się od tej wartości */
  /* Model pudełkowy: przy content-box to szerokość samej treści, a przy border-box treści, padding i border razem */
  width: 100%;
  /* Model pudełkowy: ogranicza szerokość treści na dużych ekranach */
  /* Wartości: none (domyślna), długość, procent, min-content, max-content, fit-content */
  /* Działa, gdy: element jest blokiem, inline-block lub elementem flex */
  /* Nie działa, gdy: element ma display: inline; większe min-width ma pierwszeństwo */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: górny limit szerokości pudełka, zatrzymuje też flex-grow; przy border-box obejmuje padding i border */
  max-width: 960px;
  /* Model pudełkowy: margines auto po bokach środkuje treść na stronie */
  /* Wartości: 0, długość, procent, auto; od jednej do czterech wartości: góra, prawa, dół, lewa */
  /* Działa, gdy: element jest blokiem, inline-block lub elementem flex; auto po bokach środkuje blok o szerokości mniejszej niż rodzic, a w układzie flex zabiera wolne miejsce */
  /* Nie działa, gdy: element ma display: inline, bo margines górny i dolny nie odsuwa wtedy sąsiednich linii */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: najbardziej zewnętrzna warstwa, poza border; nie wlicza się do width nawet przy border-box; pionowe marginesy bloków się zapadają, a elementów flex nie */
  margin: 0 auto;
  /* Model pudełkowy: ustawia wewnętrzny odstęp treści */
  /* Wartości: 0, długość, procent; od jednej do czterech wartości: góra, prawa, dół, lewa; nie ma auto ani wartości ujemnych */
  /* Działa, gdy: element jest wyświetlany na stronie */
  /* Nie działa, gdy: element ma display: inline, bo odstęp górny i dolny nie odsuwa wtedy sąsiednich linii */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, ale odsuwa treść i dzieci od krawędzi tego elementu */
  /* Model pudełkowy: warstwa między treścią a border, widać na niej tło; przy border-box wlicza się do width i height, a przy content-box je powiększa */
  padding: var(--space-m);
  /* Zamyka regułę głównej treści */
}
/* Zamyka sekcję stylów */
</style>
