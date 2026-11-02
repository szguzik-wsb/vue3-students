<!-- Otwiera sekcję skryptu komponentu -->
<script setup>
// Importuje funkcję ref, która tworzy wartość reaktywną
import { ref } from 'vue'

// Tworzy reaktywną wiadomość z tekstem początkowym
const message = ref('Czesć!')

// Tworzy reaktywny tekst kontekstu
const context = ref('Witaj w SciNet!')
// Tworzy reaktywną wartość decydującą o pokazaniu kontekstu, początkowo false
const showContext = ref(false)

// Tworzy funkcję zmieniającą wiadomość
const changeMessage = () => {
  // Ustawia nowy tekst wiadomości
  message.value = 'Cześć Szymon!'
  // Zamyka funkcję changeMessage
}

// Tworzy funkcję pokazującą albo ukrywającą kontekst
const changeShowContext = () => {
  // Zmienia showContext na wartość przeciwną
  showContext.value = !showContext.value
  // Zamyka funkcję changeShowContext
}
// Zamyka sekcję skryptu
</script>

<!-- Otwiera szablon komponentu -->
<template>
  <!-- Wyświetla wiadomość w nagłówku -->
  <h1>{{ message }}</h1>
  <!-- v-if: gdy showContext ma wartość false, akapitu w ogóle nie ma na stronie, Vue dodaje go dopiero przy wartości true -->
  <p v-if="showContext" class="context">{{ context }} to jest v-if</p>
  <!-- v-show: akapit jest na stronie zawsze, a gdy showContext ma wartość false, Vue ukrywa go stylem display: none -->
  <p v-show="showContext" class="context">{{ context }} to jest v-show</p>
  <!-- Otwiera grupę przycisków -->
  <div class="actions">
    <!-- Wyświetla przycisk, który po kliknięciu uruchamia changeMessage -->
    <button @click="changeMessage" class="btn btn-primary">Zmien przywitanie</button>
    <!-- Wyświetla przycisk, który po kliknięciu uruchamia changeShowContext -->
    <button @click="changeShowContext" class="btn btn-red">Pokaż/Ukryj kontekst</button>
    <!-- Zamyka grupę przycisków -->
  </div>
  <!-- Zamyka szablon -->
</template>

<!-- Otwiera style działające tylko w tym komponencie -->
<style scoped>
/* scoped: selektory trafiają tylko w elementy tego komponentu, ale właściwości dziedziczone, np. color, i tak przechodzą do komponentów potomnych */
/* Reguła dla nagłówków h1 */
h1 {
  /* Ustawia czerwony kolor tekstu */
  /* Wartości: nazwa, np. red, kod #333, rgb(), hsl(), transparent, currentColor, var() */
  /* Działa, gdy: element lub jego potomek ma tekst */
  /* Nie działa, gdy: element nie ma tekstu; potomek z własnym kolorem go nadpisuje, a linki i przyciski dostają własny kolor od przeglądarki */
  /* Po rodzicu: dziedziczy, gdy element nie ma własnego koloru */
  /* Na potomne: przechodzi na wszystkie potomne bez własnego koloru */
  /* Model pudełkowy: nie zmienia rozmiaru; obramowanie bez podanego koloru przejmuje tę wartość */
  color: red;

  /* okreslnie jaki kolor przy rozdzielczosciach screen oraz 768px */
  @media screen and (max-width: 768px) {
    color: green;
  }

  /* Zamyka regułę nagłówka */
}

/* Reguła dla akapitów z kontekstem */
.context {
  /* align-self stretch: akapit rozciąga się na całą szerokość, choć rodzic tego nie robi */
  /* Wartości: auto (domyślna, odczytuje align-items rodzica), stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end */
  /* Działa, gdy: rodzic ma display: flex lub inline-flex; stretch działa, gdy element nie ma ustawionej wysokości przy row albo szerokości przy column */
  /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed albo element ma margin: auto w osi poprzecznej */
  /* Po rodzicu: nie dziedziczy, ale wartość auto odczytuje align-items rodzica */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: stretch powiększa pudełko w osi poprzecznej, pozostałe wartości zostawiają rozmiar wynikający z treści */
  align-self: stretch;

  /* Model pudełkowy: ustawia wewnętrzny odstęp akapitu */
  /* Wartości: 0, długość, procent; od jednej do czterech wartości: góra, prawa, dół, lewa; nie ma auto ani wartości ujemnych */
  /* Działa, gdy: element jest wyświetlany na stronie */
  /* Nie działa, gdy: element ma display: inline, bo odstęp górny i dolny nie odsuwa wtedy sąsiednich linii */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, ale odsuwa treść i dzieci od krawędzi tego elementu */
  /* Model pudełkowy: warstwa między treścią a border, widać na niej tło; przy border-box wlicza się do width i height, a przy content-box je powiększa */
  padding: var(--space-s);

  /* Model pudełkowy: ustawia obramowanie akapitu */
  /* Wartości: skrót szerokość, styl, kolor; szerokość: thin, medium, thick, długość; styl: none, hidden, solid, dashed, dotted, double, groove, ridge, inset, outset */
  /* Działa, gdy: styl jest inny niż none i hidden */
  /* Nie działa, gdy: styl to none lub hidden albo nie został podany, bo obramowania wtedy nie ma */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: warstwa między padding a margin; przy border-box wlicza się do width i height, a przy content-box je powiększa */
  border: 1px solid var(--color-border);

  /* Zaokrągla rogi akapitu */
  /* Wartości: 0 (domyślna), długość, procent; od jednej do czterech wartości dla kolejnych rogów */
  /* Działa, gdy: element ma widoczne tło lub obramowanie */
  /* Nie działa, gdy: element nie ma tła ani obramowania; dzieci wystające poza róg są przycinane dopiero przy overflow: hidden */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dzieci mają swoje prostokątne rogi */
  /* Model pudełkowy: nie zmienia rozmiaru pudełka */
  border-radius: var(--radius);

  /* Ustawia jasne tło akapitu */
  /* Wartości: transparent (domyślna), nazwa, np. red, kod #333, rgb(), hsl(), var() */
  /* Działa, gdy: element ma rozmiar większy od zera */
  /* Nie działa, gdy: element ma szerokość lub wysokość równą zero */
  /* Po rodzicu: nie dziedziczy; przez przezroczyste dziecko widać jednak tło rodzica */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: nie zmienia rozmiaru; maluje treść, padding i obszar pod border, ale nie margin */
  background-color: var(--color-panel);

  /* Zamyka regułę akapitów z kontekstem */
}

/* Reguła dla grupy przycisków */
.actions {
  /* align-self stretch: grupa rozciąga się na całą szerokość */
  /* Wartości: auto (domyślna, odczytuje align-items rodzica), stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end */
  /* Działa, gdy: rodzic ma display: flex lub inline-flex; stretch działa, gdy element nie ma ustawionej wysokości przy row albo szerokości przy column */
  /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed albo element ma margin: auto w osi poprzecznej */
  /* Po rodzicu: nie dziedziczy, ale wartość auto odczytuje align-items rodzica */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: stretch powiększa pudełko w osi poprzecznej, pozostałe wartości zostawiają rozmiar wynikający z treści */
  align-self: stretch;

  /* display flex: przyciski stają się elementami flexboksa */
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

  /* flex-flow: układa przyciski w rzędzie i zawija je, gdy brakuje miejsca */
  /* Wartości: skrót flex-direction i flex-wrap: row nowrap (domyślna), row wrap, row wrap-reverse, row-reverse wrap, column nowrap, column wrap, column-reverse wrap */
  /* Działa, gdy: element ma display: flex lub inline-flex */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, dotyczy tylko bezpośrednich dzieci */
  /* Model pudełkowy: działa tak jak flex-direction i flex-wrap */
  flex-flow: row wrap;

  /* justify-content flex-start: ustawia przyciski od lewej strony */
  /* Wartości: normal (domyślna, działa jak flex-start), flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right */
  /* Działa, gdy: element ma display: flex lub inline-flex i jest wolne miejsce w osi głównej */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex albo brak wolnego miejsca, bo zabrało je dziecko z flex-grow lub margin: auto */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, rozmieszcza tylko bezpośrednie dzieci */
  /* Model pudełkowy: nie zmienia rozmiaru pudełek, rozdziela tylko wolne miejsce między nimi */
  justify-content: flex-start;

  /* align-content flex-start: po zawinięciu trzyma linie przy górnej krawędzi */
  /* Wartości: normal (domyślna, działa jak stretch), stretch, flex-start, flex-end, center, space-between, space-around, space-evenly, start, end */
  /* Działa, gdy: element ma display: flex lub inline-flex, flex-wrap: wrap lub wrap-reverse i jest wolne miejsce w osi poprzecznej */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex albo ma flex-wrap: nowrap */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, przesuwa całe linie dzieci, a nie pojedyncze dzieci */
  /* Model pudełkowy: stretch rozciąga linie, a pozostałe wartości nie zmieniają rozmiaru pudełek */
  align-content: flex-start;

  /* gap: ustawia odstęp między przyciskami */
  /* Wartości: normal (domyślna), długość, np. 10px, 1rem, procent; dwie wartości oznaczają row-gap i column-gap */
  /* Działa, gdy: element ma display: flex lub inline-flex; odstęp powstaje tylko między dziećmi, a nie przy krawędzi kontenera */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex; dziecko z position: absolute lub fixed nie dostaje odstępu */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, dotyczy tylko odstępów między bezpośrednimi dziećmi */
  /* Model pudełkowy: to nie margines, nie należy do pudełka dziecka, nie zapada się i dodaje się do marginesów */
  gap: var(--space-s);

  /* Zamyka regułę grupy przycisków */
}

/* Reguła dla przycisków w grupie */
/* Selektor potomny: trafia w każdy .btn wewnątrz .actions, na dowolnej głębokości; to nie jest dziedziczenie, styl nakłada selektor; tylko bezpośrednie dzieci wybrałby .actions > .btn */
.actions .btn {
  /* flex: 0 1 220px: przycisk nie rośnie, może maleć, a jego szerokość bazowa to 220 pikseli */
  /* Wartości: skrót flex-grow, flex-shrink i flex-basis: initial (domyślna, 0 1 auto), none (0 0 auto), auto (1 1 auto), liczba, np. 1 (1 1 0), albo trzy wartości, np. 0 1 220px */
  /* Działa, gdy: rodzic ma display: flex lub inline-flex */
  /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: działa tak jak flex-grow, flex-shrink i flex-basis */
  flex: 0 1 220px;

  /* Zamyka regułę przycisków w grupie */
}

/* Reguły dla wąskich ekranów */
@media (max-width: 480px) {
  /* Reguła dla grupy przycisków na wąskim ekranie */
  .actions {
    /* justify-content space-around: daje równe odstępy po obu stronach przycisków */
    /* Wartości: normal (domyślna, działa jak flex-start), flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right */
    /* Działa, gdy: element ma display: flex lub inline-flex i jest wolne miejsce w osi głównej */
    /* Nie działa, gdy: element nie ma display: flex ani inline-flex albo brak wolnego miejsca, bo zabrało je dziecko z flex-grow lub margin: auto */
    /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
    /* Na potomne: wartość nie przechodzi, rozmieszcza tylko bezpośrednie dzieci */
    /* Model pudełkowy: nie zmienia rozmiaru pudełek, rozdziela tylko wolne miejsce między nimi */
    justify-content: space-around;

    /* Zamyka regułę grupy na wąskim ekranie */
  }

  /* Zamyka reguły dla wąskich ekranów */
}

/* Zamyka sekcję stylów */
</style>
