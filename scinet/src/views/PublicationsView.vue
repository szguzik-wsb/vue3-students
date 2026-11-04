<!-- Otwiera sekcję skryptu komponentu, napisaną w TypeScript -->
<script setup lang="ts">
// Importuje funkcję ref, która tworzy wartość reaktywną
import { ref } from 'vue';
// Importuje typ Publication, czyli opis pól jednej publikacji
import type { Publication } from '@/types/publication';
// Importuje startową listę publikacji
import { startPublications } from '@/data/publications'

// Tworzy reaktywną listę publikacji i wypełnia ją listą startową
const publications = ref<Publication[]>(startPublications);

// Zamyka sekcję skryptu
</script>

<!-- Otwiera szablon komponentu -->
<template>
<!-- Wyświetla nagłówek strony -->
<h1>Publications</h1>
<!-- Otwiera listę publikacji -->
<ul class="publications-list">
    <!-- v-for: tworzy jedną kartę dla każdej publikacji; :key: daje każdej karcie unikalny identyfikator, po którym Vue ją rozpoznaje -->
    <li v-for="pub in publications" :key="pub.id" class="publication-card">
        <!-- Otwiera blok z tekstem, dzięki któremu tekst jest jednym elementem flex, a serduszko drugim -->
        <div>
            <!-- Wyświetla tytuł publikacji -->
            <h2 class="publication-title">{{ pub.title }}</h2>
            <!-- Wyświetla autora publikacji -->
            <p>{{ pub.author }}</p>
            <!-- Wyświetla rok publikacji -->
            <p>{{ pub.year }}</p>
            <!-- Wyświetla kategorię publikacji -->
            <p>{{ pub.category }}</p>
            <!-- Zamyka blok z tekstem -->
        </div>
        <!-- Otwiera ikonę heart ze strony lucide.dev w wersji SVG; atrybuty od xmlns do stroke-linejoin są skopiowane z Lucide bez zmian -->
        <!-- class: klasa heart jest wspólna dla każdego serduszka -->
        <!-- :class: gdy pub.favorite to true, dodaje klasę heart-true; gdy to false albo publikacja nie ma tego pola, dodaje klasę heart-false -->
        <!-- xmlns: oznacza znacznik jako rysunek SVG -->
        <!-- width i height: ustawiają rozmiar ikony na 24 na 24 piksele -->
        <!-- viewBox: ustawia układ współrzędnych rysunku od punktu 0 0 do punktu 24 24 -->
        <!-- fill i stroke: wartości domyślne z Lucide; kolory serduszka ustawiają reguły CSS heart-true i heart-false, bo CSS wygrywa z tymi atrybutami -->
        <!-- stroke-width: ustawia grubość linii na 2 jednostki rysunku -->
        <!-- stroke-linecap: zaokrągla końce linii -->
        <!-- stroke-linejoin: zaokrągla miejsca, w których linie się łączą -->
        <svg class="heart" :class="[pub.favorite ? 'heart-true' : 'heart-false']" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <!-- Rysuje kształt serca; atrybut d zawiera współrzędne kolejnych odcinków i łuków -->
            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
            <!-- Zamyka ikonę serduszka -->
        </svg>
        <!-- Zamyka kartę publikacji -->
    </li>
    <!-- Zamyka listę publikacji -->
</ul>
<!-- Zamyka szablon -->
</template>

<!-- Otwiera style działające tylko w tym komponencie -->
<style scoped>
/* scoped: selektory trafiają tylko w elementy tego komponentu, ale właściwości dziedziczone, np. color, i tak przechodzą do komponentów potomnych */
/* Reguła dla listy publikacji */
.publications-list {
  /* align-self stretch: lista rozciąga się na całą szerokość strony */
  /* Wartości: auto (domyślna, odczytuje align-items rodzica), stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end */
  /* Działa, gdy: rodzic ma display: flex lub inline-flex; stretch działa, gdy element nie ma ustawionej wysokości przy row albo szerokości przy column */
  /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed albo element ma margin: auto w osi poprzecznej */
  /* Po rodzicu: nie dziedziczy, ale wartość auto odczytuje align-items rodzica */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: stretch powiększa pudełko w osi poprzecznej, pozostałe wartości zostawiają rozmiar wynikający z treści */
  align-self: stretch;

  /* display flex: karty publikacji stają się elementami flexboksa */
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

  /* flex-direction column: układa karty jedna pod drugą */
  /* Wartości: row (domyślna), row-reverse, column, column-reverse */
  /* Działa, gdy: element ma display: flex lub inline-flex; ustala oś główną: przy column justify-content działa w pionie, align-items w poziomie, a flex-basis oznacza wysokość */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, ustawia kierunek tylko bezpośrednich dzieci */
  /* Model pudełkowy: sam nie zmienia rozmiaru, ale decyduje, czy flex-grow i flex-shrink zmieniają szerokość czy wysokość pudełka dziecka */
  flex-direction: column;

  /* gap: ustawia odstęp między kartami */
  /* Wartości: normal (domyślna), długość, np. 10px, 1rem, procent; dwie wartości oznaczają row-gap i column-gap */
  /* Działa, gdy: element ma display: flex lub inline-flex; odstęp powstaje tylko między dziećmi, a nie przy krawędzi kontenera */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex; dziecko z position: absolute lub fixed nie dostaje odstępu */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, dotyczy tylko odstępów między bezpośrednimi dziećmi */
  /* Model pudełkowy: to nie margines, nie należy do pudełka dziecka, nie zapada się i dodaje się do marginesów */
  gap: var(--space-m);

  /* Zamyka regułę listy publikacji */
}

/* Reguła dla karty jednej publikacji */
.publication-card {
  /* display flex: tekst i serduszko stają się elementami flexboksa */
  /* Wartości: flex, inline-flex, block, inline, inline-block, none, contents, flow-root, table */
  /* Działa, gdy: element jest wyświetlany na stronie; flex-direction, flex-wrap, justify-content, align-items, align-content i gap zaczynają działać dopiero przy flex albo inline-flex */
  /* Nie działa, gdy: przodek ma display: none, bo wtedy element w ogóle się nie wyświetla; dziecko kontenera flex z inline lub inline-block i tak zachowuje się jak blok */
  /* Po rodzicu: nie dziedziczy, dziecko elementu flex samo nie staje się kontenerem flex; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, ale bezpośrednie dzieci stają się elementami flex; dalsze potomne już nie */
  /* Model pudełkowy: flex zajmuje całą szerokość rodzica, inline-flex tylko szerokość treści; dzieci zachowują treść, padding, border i margin, a ich marginesy się nie zapadają */
  /* Position przy flex: static (domyślna) ignoruje top, right, bottom i left; relative i sticky zostawiają dziecko w układzie flex i tylko je przesuwają */
  /* Position przy flex: absolute i fixed wyjmują dziecko z układu, więc nie działają na nie flex-grow, flex-shrink, flex-basis ani gap; punktem odniesienia jest najbliższy przodek z position innym niż static */
  /* Inne właściwości przy flex: float, clear i vertical-align nie działają na dzieciach, a z-index działa na nich nawet bez position */
  /* Element li z display flex traci kropkę listy, bo przestaje być elementem listy (list-item) */
  display: flex;

  /* justify-content space-between: rozsuwa tekst i serduszko na przeciwne strony karty */
  /* Wartości: normal (domyślna, działa jak flex-start), flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right */
  /* Działa, gdy: element ma display: flex lub inline-flex i jest wolne miejsce w osi głównej */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex albo brak wolnego miejsca, bo zabrało je dziecko z flex-grow lub margin: auto */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, rozmieszcza tylko bezpośrednie dzieci */
  /* Model pudełkowy: nie zmienia rozmiaru pudełek, rozdziela tylko wolne miejsce między nimi */
  justify-content: space-between;

  /* align-items flex-start: trzyma tekst i serduszko przy górnej krawędzi karty */
  /* Wartości: normal (domyślna, działa jak stretch), stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end */
  /* Działa, gdy: element ma display: flex lub inline-flex; stretch działa, gdy dziecko nie ma ustawionej wysokości przy row albo szerokości przy column */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex; pojedyncze dziecko może to zmienić własnym align-self */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, ale bezpośrednie dzieci odczytują ją przez align-self: auto; dalsze potomne już nie */
  /* Model pudełkowy: stretch powiększa pudełko dziecka w osi poprzecznej, pozostałe wartości zostawiają rozmiar wynikający z treści */
  align-items: flex-start;

  /* gap: pilnuje odstępu między tekstem a serduszkiem, gdy tekst jest długi */
  /* Wartości: normal (domyślna), długość, np. 10px, 1rem, procent; dwie wartości oznaczają row-gap i column-gap */
  /* Działa, gdy: element ma display: flex lub inline-flex; odstęp powstaje tylko między dziećmi, a nie przy krawędzi kontenera */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex; dziecko z position: absolute lub fixed nie dostaje odstępu */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, dotyczy tylko odstępów między bezpośrednimi dziećmi */
  /* Model pudełkowy: to nie margines, nie należy do pudełka dziecka, nie zapada się i dodaje się do marginesów */
  gap: var(--space-m);

  /* Model pudełkowy: ustawia wewnętrzny odstęp karty */
  /* Wartości: 0, długość, procent; od jednej do czterech wartości: góra, prawa, dół, lewa; nie ma auto ani wartości ujemnych */
  /* Działa, gdy: element jest wyświetlany na stronie */
  /* Nie działa, gdy: element ma display: inline, bo odstęp górny i dolny nie odsuwa wtedy sąsiednich linii */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, ale odsuwa treść i dzieci od krawędzi tego elementu */
  /* Model pudełkowy: warstwa między treścią a border, widać na niej tło; przy border-box wlicza się do width i height, a przy content-box je powiększa */
  padding: var(--space-m);

  /* Model pudełkowy: ustawia obramowanie karty */
  /* Wartości: skrót szerokość, styl, kolor; szerokość: thin, medium, thick, długość; styl: none, hidden, solid, dashed, dotted, double, groove, ridge, inset, outset */
  /* Działa, gdy: styl jest inny niż none i hidden */
  /* Nie działa, gdy: styl to none lub hidden albo nie został podany, bo obramowania wtedy nie ma */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: warstwa między padding a margin; przy border-box wlicza się do width i height, a przy content-box je powiększa */
  border: 1px solid var(--color-border);

  /* Zaokrągla rogi karty */
  /* Wartości: 0 (domyślna), długość, procent; od jednej do czterech wartości dla kolejnych rogów */
  /* Działa, gdy: element ma widoczne tło lub obramowanie */
  /* Nie działa, gdy: element nie ma tła ani obramowania; dzieci wystające poza róg są przycinane dopiero przy overflow: hidden */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dzieci mają swoje prostokątne rogi */
  /* Model pudełkowy: nie zmienia rozmiaru pudełka */
  border-radius: var(--radius);

  /* Ustawia jasnoszare tło karty */
  /* Wartości: transparent (domyślna), nazwa, np. red, kod #333, rgb(), hsl(), var() */
  /* Działa, gdy: element ma rozmiar większy od zera */
  /* Nie działa, gdy: element ma szerokość lub wysokość równą zero */
  /* Po rodzicu: nie dziedziczy; przez przezroczyste dziecko widać jednak tło rodzica */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: nie zmienia rozmiaru; maluje treść, padding i obszar pod border, ale nie margin */
  background-color: var(--color-panel);

  /* Zamyka regułę karty publikacji */
}

/* Reguła dla tytułu publikacji */
.publication-title {
  /* Model pudełkowy: ustawia zewnętrzny odstęp pod tytułem */
  /* Wartości: 0 (domyślna), długość, procent, auto; może być ujemna */
  /* Działa, gdy: element jest wyświetlany na stronie */
  /* Nie działa, gdy: element ma display: inline, bo margines dolny nie odsuwa wtedy sąsiednich linii */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: warstwa poza border, nie widać na niej tła; nie wlicza się do width i height; w układzie blokowym może się zapaść z marginesem sąsiada */
  margin-bottom: var(--space-s);

  /* Zamyka regułę tytułu */
}

/* Reguła wspólna dla każdego serduszka */
.heart {
  /* flex: 0 0 auto: serduszko nie rośnie i nie maleje, zawsze ma 24 na 24 piksele */
  /* Wartości: skrót flex-grow, flex-shrink i flex-basis: initial (domyślna, 0 1 auto), none (0 0 auto), auto (1 1 auto), liczba, np. 1 (1 1 0), albo trzy wartości, np. 0 1 220px */
  /* Działa, gdy: rodzic ma display: flex lub inline-flex */
  /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: działa tak jak flex-grow, flex-shrink i flex-basis */
  flex: 0 0 auto;

  /* Zamyka regułę serduszka */
}

/* Reguła dla serduszka publikacji z favorite równym true */
.heart-true {
  /* fill red: wypełnia serduszko czerwonym kolorem */
  /* Wartości: black (domyślna), none, nazwa, np. red, kod #333, rgb(), hsl(), transparent, currentColor, var() */
  /* Działa, gdy: element jest kształtem SVG, np. path, albo znacznikiem svg, po którym kształty dziedziczą wartość; reguła CSS wygrywa z atrybutem fill w znaczniku */
  /* Nie działa, gdy: element nie należy do SVG, np. div albo p; kształt z własną wartością fill nadpisuje dziedziczoną */
  /* Po rodzicu: dziedziczy, gdy element nie ma własnego wypełnienia */
  /* Na potomne: przechodzi na wszystkie kształty wewnątrz svg bez własnego wypełnienia */
  /* Model pudełkowy: nie zmienia rozmiaru; maluje wnętrze kształtu, a nie pudełko jak background-color */
  fill: red;

  /* stroke red: rysuje czerwony kontur serduszka */
  /* Wartości: none (domyślna), nazwa, np. red, kod #333, rgb(), hsl(), transparent, currentColor, var() */
  /* Działa, gdy: element jest kształtem SVG, np. path, albo znacznikiem svg, po którym kształty dziedziczą wartość, a stroke-width jest większe od zera; reguła CSS wygrywa z atrybutem stroke w znaczniku */
  /* Nie działa, gdy: element nie należy do SVG, np. div albo p; kształt z własną wartością stroke nadpisuje dziedziczoną */
  /* Po rodzicu: dziedziczy, gdy element nie ma własnego konturu */
  /* Na potomne: przechodzi na wszystkie kształty wewnątrz svg bez własnego konturu */
  /* Model pudełkowy: to nie border: nie należy do pudełka i nie zmienia jego rozmiaru; biegnie po krawędzi kształtu, a border narysowałby prostokąt wokół całej ikony */
  stroke: red;

  /* Zamyka regułę czerwonego serduszka */
}

/* Reguła dla serduszka publikacji z favorite równym false albo bez tego pola */
.heart-false {
  /* fill transparent: zostawia wnętrze serduszka przezroczyste, więc widać przez nie tło karty */
  /* Wartości: black (domyślna), none, nazwa, np. red, kod #333, rgb(), hsl(), transparent, currentColor, var() */
  /* Działa, gdy: element jest kształtem SVG, np. path, albo znacznikiem svg, po którym kształty dziedziczą wartość; reguła CSS wygrywa z atrybutem fill w znaczniku */
  /* Nie działa, gdy: element nie należy do SVG, np. div albo p; kształt z własną wartością fill nadpisuje dziedziczoną */
  /* Po rodzicu: dziedziczy, gdy element nie ma własnego wypełnienia */
  /* Na potomne: przechodzi na wszystkie kształty wewnątrz svg bez własnego wypełnienia */
  /* Model pudełkowy: nie zmienia rozmiaru; maluje wnętrze kształtu, a nie pudełko jak background-color */
  fill: transparent;

  /* stroke black: rysuje czarny kontur serduszka */
  /* Wartości: none (domyślna), nazwa, np. red, kod #333, rgb(), hsl(), transparent, currentColor, var() */
  /* Działa, gdy: element jest kształtem SVG, np. path, albo znacznikiem svg, po którym kształty dziedziczą wartość, a stroke-width jest większe od zera; reguła CSS wygrywa z atrybutem stroke w znaczniku */
  /* Nie działa, gdy: element nie należy do SVG, np. div albo p; kształt z własną wartością stroke nadpisuje dziedziczoną */
  /* Po rodzicu: dziedziczy, gdy element nie ma własnego konturu */
  /* Na potomne: przechodzi na wszystkie kształty wewnątrz svg bez własnego konturu */
  /* Model pudełkowy: to nie border: nie należy do pudełka i nie zmienia jego rozmiaru; biegnie po krawędzi kształtu, a border narysowałby prostokąt wokół całej ikony */
  stroke: black;

  /* Zamyka regułę przezroczystego serduszka */
}

/* Zamyka sekcję stylów */
</style>
