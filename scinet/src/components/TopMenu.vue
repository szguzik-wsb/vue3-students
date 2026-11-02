<!-- Otwiera sekcję skryptu komponentu, napisaną w TypeScript -->
<script setup lang="ts">
// Zamyka pustą sekcję skryptu
</script>

<!-- Otwiera szablon komponentu -->
<template>
  <!-- Otwiera nagłówek z całym menu -->
  <header class="top-menu">
    <!-- Wyświetla miejsce na logo -->
    <div class="logo">Logo</div>
    <!-- Otwiera nawigację z linkami -->
    <nav class="menu-items">
      <!-- Link routera do strony głównej -->
      <RouterLink to="/">Home</RouterLink>
      <!-- Link routera do strony „O nas” -->
      <RouterLink to="/about">About</RouterLink>
      <!-- Zwykły link Contact prowadzący pod adres /about -->
      <a href="/about">Contact</a>
      <!-- Zamyka nawigację -->
    </nav>
    <!-- Zamyka nagłówek z menu -->
  </header>
  <!-- Zamyka szablon -->
</template>

<!-- Otwiera style działające tylko w tym komponencie -->
<style scoped>
/* scoped: selektory trafiają tylko w elementy tego komponentu, ale właściwości dziedziczone, np. color, i tak przechodzą do komponentów potomnych */
/* Reguła dla nagłówka z menu */
.top-menu {
  /* flex-shrink 0: menu nie zmniejsza swojej wysokości, gdy brakuje miejsca */
  /* Wartości: 1 (domyślna) albo dowolna liczba nieujemna; 0 oznacza brak zmniejszania */
  /* Działa, gdy: rodzic ma display: flex lub inline-flex i dzieci nie mieszczą się w linii */
  /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed; przy flex-wrap: wrap dziecko najpierw przechodzi do nowej linii */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: zmniejsza pudełko w osi głównej, ale nie poniżej min-width przy row albo min-height przy column; padding i border się nie zmniejszają */
  flex-shrink: 0;

  /* display flex: logo i nawigacja stają się elementami flexboksa */
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

  /* flex-wrap wrap: przenosi nawigację do nowej linii, gdy brakuje miejsca */
  /* Wartości: nowrap (domyślna), wrap, wrap-reverse */
  /* Działa, gdy: element ma display: flex lub inline-flex, a dzieci nie mieszczą się w jednej linii; przy column zawijanie wymaga ograniczonej wysokości kontenera */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex; przy column i wrap szerokość kolumny wynika z treści, chyba że align-content ma wartość stretch */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, zawija tylko bezpośrednie dzieci */
  /* Model pudełkowy: przy nowrap dzieci mogą się zmniejszać dzięki flex-shrink, przy wrap najpierw przechodzą do nowej linii */
  flex-wrap: wrap;

  /* justify-content space-between: rozsuwa logo i nawigację na przeciwne strony */
  /* Wartości: normal (domyślna, działa jak flex-start), flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right */
  /* Działa, gdy: element ma display: flex lub inline-flex i jest wolne miejsce w osi głównej */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex albo brak wolnego miejsca, bo zabrało je dziecko z flex-grow lub margin: auto */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, rozmieszcza tylko bezpośrednie dzieci */
  /* Model pudełkowy: nie zmienia rozmiaru pudełek, rozdziela tylko wolne miejsce między nimi */
  justify-content: space-between;

  /* align-items center: wyrównuje elementy w pionie do środka */
  /* Wartości: normal (domyślna, działa jak stretch), stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end */
  /* Działa, gdy: element ma display: flex lub inline-flex; stretch działa, gdy dziecko nie ma ustawionej wysokości przy row albo szerokości przy column */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex; pojedyncze dziecko może to zmienić własnym align-self */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, ale bezpośrednie dzieci odczytują ją przez align-self: auto; dalsze potomne już nie */
  /* Model pudełkowy: stretch powiększa pudełko dziecka w osi poprzecznej, pozostałe wartości zostawiają rozmiar wynikający z treści */
  align-items: center;

  /* align-content center: po zawinięciu trzyma linie razem na środku */
  /* Wartości: normal (domyślna, działa jak stretch), stretch, flex-start, flex-end, center, space-between, space-around, space-evenly, start, end */
  /* Działa, gdy: element ma display: flex lub inline-flex, flex-wrap: wrap lub wrap-reverse i jest wolne miejsce w osi poprzecznej */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex albo ma flex-wrap: nowrap */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, przesuwa całe linie dzieci, a nie pojedyncze dzieci */
  /* Model pudełkowy: stretch rozciąga linie, a pozostałe wartości nie zmieniają rozmiaru pudełek */
  align-content: center;

  /* column-gap: ustawia odstęp między kolumnami */
  /* Wartości: normal (domyślna), długość, np. 10px, 1rem, procent */
  /* Działa, gdy: element ma display: flex lub inline-flex; działa między dziećmi przy row oraz między kolumnami przy column i wrap */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex albo ma column i nowrap, bo jest wtedy tylko jedna kolumna */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, dotyczy tylko odstępów między bezpośrednimi dziećmi */
  /* Model pudełkowy: to nie margines, nie należy do pudełka dziecka */
  column-gap: var(--space-m);

  /* row-gap: ustawia odstęp między liniami */
  /* Wartości: normal (domyślna), długość, np. 10px, 1rem, procent */
  /* Działa, gdy: element ma display: flex lub inline-flex; działa między liniami przy row i wrap oraz między dziećmi przy column */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex albo ma row i nowrap, bo jest wtedy tylko jedna linia */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, dotyczy tylko odstępów między bezpośrednimi dziećmi */
  /* Model pudełkowy: to nie margines, nie należy do pudełka dziecka */
  row-gap: var(--space-s);

  /* Model pudełkowy: ustawia wewnętrzny odstęp menu */
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

  /* Zamyka regułę nagłówka z menu */
}

/* Reguła dla logo */
.logo {
  /* flex: 0 0 auto: logo nie rośnie i nie maleje, ma szerokość swojej treści */
  /* Wartości: skrót flex-grow, flex-shrink i flex-basis: initial (domyślna, 0 1 auto), none (0 0 auto), auto (1 1 auto), liczba, np. 1 (1 1 0), albo trzy wartości, np. 0 1 220px */
  /* Działa, gdy: rodzic ma display: flex lub inline-flex */
  /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: działa tak jak flex-grow, flex-shrink i flex-basis */
  flex: 0 0 auto;

  /* Pogrubia tekst logo */
  /* Wartości: normal (domyślna, 400), bold (700), lighter, bolder, liczby od 1 do 1000 */
  /* Działa, gdy: czcionka ma taką grubość */
  /* Nie działa, gdy: czcionka nie ma tej grubości, bo przeglądarka bierze wtedy najbliższą */
  /* Po rodzicu: dziedziczy, gdy element nie ma własnej grubości */
  /* Na potomne: przechodzi na wszystkie potomne bez własnej grubości */
  /* Model pudełkowy: może nieco zmienić szerokość treści */
  font-weight: bold;

  /* Zamyka regułę logo */
}

/* Reguła dla nawigacji */
.menu-items {
  /* display flex: linki stają się elementami flexboksa */
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

  /* flex-direction row: układa linki w rzędzie */
  /* Wartości: row (domyślna), row-reverse, column, column-reverse */
  /* Działa, gdy: element ma display: flex lub inline-flex; ustala oś główną: przy column justify-content działa w pionie, align-items w poziomie, a flex-basis oznacza wysokość */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, ustawia kierunek tylko bezpośrednich dzieci */
  /* Model pudełkowy: sam nie zmienia rozmiaru, ale decyduje, czy flex-grow i flex-shrink zmieniają szerokość czy wysokość pudełka dziecka */
  flex-direction: row;

  /* justify-content flex-end: dosuwa linki do prawej strony */
  /* Wartości: normal (domyślna, działa jak flex-start), flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right */
  /* Działa, gdy: element ma display: flex lub inline-flex i jest wolne miejsce w osi głównej */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex albo brak wolnego miejsca, bo zabrało je dziecko z flex-grow lub margin: auto */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, rozmieszcza tylko bezpośrednie dzieci */
  /* Model pudełkowy: nie zmienia rozmiaru pudełek, rozdziela tylko wolne miejsce między nimi */
  justify-content: flex-end;

  /* align-items baseline: wyrównuje linki do linii bazowej tekstu */
  /* Wartości: normal (domyślna, działa jak stretch), stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end */
  /* Działa, gdy: element ma display: flex lub inline-flex; stretch działa, gdy dziecko nie ma ustawionej wysokości przy row albo szerokości przy column */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex; pojedyncze dziecko może to zmienić własnym align-self */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, ale bezpośrednie dzieci odczytują ją przez align-self: auto; dalsze potomne już nie */
  /* Model pudełkowy: stretch powiększa pudełko dziecka w osi poprzecznej, pozostałe wartości zostawiają rozmiar wynikający z treści */
  align-items: baseline;

  /* gap: ustawia odstęp między linkami */
  /* Wartości: normal (domyślna), długość, np. 10px, 1rem, procent; dwie wartości oznaczają row-gap i column-gap */
  /* Działa, gdy: element ma display: flex lub inline-flex; odstęp powstaje tylko między dziećmi, a nie przy krawędzi kontenera */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex; dziecko z position: absolute lub fixed nie dostaje odstępu */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, dotyczy tylko odstępów między bezpośrednimi dziećmi */
  /* Model pudełkowy: to nie margines, nie należy do pudełka dziecka, nie zapada się i dodaje się do marginesów */
  gap: var(--space-m);

  /* Zamyka regułę nawigacji */
}

/* Reguła dla linków w nawigacji */
/* Selektor potomny: trafia w każdy link wewnątrz .menu-items, na dowolnej głębokości; to nie jest dziedziczenie, styl nakłada selektor; tylko bezpośrednie dzieci wybrałby .menu-items > a */
.menu-items a {
  /* Ustawia jasny kolor linków */
  /* Wartości: nazwa, np. red, kod #333, rgb(), hsl(), transparent, currentColor, var() */
  /* Działa, gdy: element lub jego potomek ma tekst */
  /* Nie działa, gdy: element nie ma tekstu; potomek z własnym kolorem go nadpisuje, a linki i przyciski dostają własny kolor od przeglądarki */
  /* Po rodzicu: dziedziczy, gdy element nie ma własnego koloru */
  /* Na potomne: przechodzi na wszystkie potomne bez własnego koloru */
  /* Model pudełkowy: nie zmienia rozmiaru; obramowanie bez podanego koloru przejmuje tę wartość */
  color: var(--color-light);

  /* Usuwa podkreślenie linków */
  /* Wartości: none (domyślna), underline, overline, line-through; można dodać styl solid, double, dotted, dashed, wavy oraz kolor i grubość */
  /* Działa, gdy: element lub jego potomek ma tekst */
  /* Nie działa, gdy: potomek nie wyłączy linii narysowanej przez rodzica nawet przez none; linki dostają podkreślenie od przeglądarki, więc usuwa się je na samym linku */
  /* Po rodzicu: nie dziedziczy */
  /* Na potomne: wartość nie przechodzi, ale linia rysuje się też na tekście potomków wewnątrz elementu */
  /* Model pudełkowy: nie zmienia rozmiaru pudełka */
  text-decoration: none;

  /* Zamyka regułę linków */
}

/* Reguły dla wąskich ekranów */
@media (max-width: 480px) {
  /* Reguła dla nagłówka z menu na wąskim ekranie */
  .top-menu {
    /* flex-direction column: ustawia logo nad nawigacją */
    /* Wartości: row (domyślna), row-reverse, column, column-reverse */
    /* Działa, gdy: element ma display: flex lub inline-flex; ustala oś główną: przy column justify-content działa w pionie, align-items w poziomie, a flex-basis oznacza wysokość */
    /* Nie działa, gdy: element nie ma display: flex ani inline-flex */
    /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
    /* Na potomne: wartość nie przechodzi, ustawia kierunek tylko bezpośrednich dzieci */
    /* Model pudełkowy: sam nie zmienia rozmiaru, ale decyduje, czy flex-grow i flex-shrink zmieniają szerokość czy wysokość pudełka dziecka */
    flex-direction: column;

    /* flex-wrap nowrap: bez zawijania kolumna zajmuje całą szerokość menu */
    /* Wartości: nowrap (domyślna), wrap, wrap-reverse */
    /* Działa, gdy: element ma display: flex lub inline-flex, a dzieci nie mieszczą się w jednej linii; przy column zawijanie wymaga ograniczonej wysokości kontenera */
    /* Nie działa, gdy: element nie ma display: flex ani inline-flex; przy column i wrap szerokość kolumny wynika z treści, chyba że align-content ma wartość stretch */
    /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
    /* Na potomne: wartość nie przechodzi, zawija tylko bezpośrednie dzieci */
    /* Model pudełkowy: przy nowrap dzieci mogą się zmniejszać dzięki flex-shrink, przy wrap najpierw przechodzą do nowej linii */
    flex-wrap: nowrap;

    /* align-items stretch: rozciąga logo i nawigację na całą szerokość */
    /* Wartości: normal (domyślna, działa jak stretch), stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end */
    /* Działa, gdy: element ma display: flex lub inline-flex; stretch działa, gdy dziecko nie ma ustawionej wysokości przy row albo szerokości przy column */
    /* Nie działa, gdy: element nie ma display: flex ani inline-flex; pojedyncze dziecko może to zmienić własnym align-self */
    /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
    /* Na potomne: wartość nie przechodzi, ale bezpośrednie dzieci odczytują ją przez align-self: auto; dalsze potomne już nie */
    /* Model pudełkowy: stretch powiększa pudełko dziecka w osi poprzecznej, pozostałe wartości zostawiają rozmiar wynikający z treści */
    align-items: stretch;

    /* Zamyka regułę nagłówka na wąskim ekranie */
  }

  /* Reguła dla nawigacji na wąskim ekranie */
  .menu-items {
    /* justify-content space-evenly: rozkłada linki z równymi odstępami */
    /* Wartości: normal (domyślna, działa jak flex-start), flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right */
    /* Działa, gdy: element ma display: flex lub inline-flex i jest wolne miejsce w osi głównej */
    /* Nie działa, gdy: element nie ma display: flex ani inline-flex albo brak wolnego miejsca, bo zabrało je dziecko z flex-grow lub margin: auto */
    /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
    /* Na potomne: wartość nie przechodzi, rozmieszcza tylko bezpośrednie dzieci */
    /* Model pudełkowy: nie zmienia rozmiaru pudełek, rozdziela tylko wolne miejsce między nimi */
    justify-content: space-evenly;

    /* Zamyka regułę nawigacji na wąskim ekranie */
  }

  /* Zamyka reguły dla wąskich ekranów */
}

/* Zamyka sekcję stylów */
</style>
