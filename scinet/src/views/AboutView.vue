<!-- Otwiera sekcję skryptu komponentu, napisaną w TypeScript -->
<script setup lang="ts">
// Importuje funkcję ref, która tworzy wartość reaktywną
import { ref } from 'vue'
// Tworzy reaktywną wartość isActive, początkowo false
const isActive = ref(false)
// Zamyka sekcję skryptu
</script>

<!-- Otwiera szablon komponentu -->
<template>
  <!-- Wyświetla nagłówek strony -->
  <h1>O nas</h1>
  <!-- Otwiera układ z panelem tekstu i kolorowym kwadratem -->
  <section class="about-layout">
    <!-- Otwiera panel tekstu -->
    <div class="about-text">
      <!-- Wyświetla akapit z opisem -->
      <p>To jest dodatkowa strona aplikacji.</p>
      <!-- Wyświetla przycisk, który po kliknięciu zmienia isActive na wartość przeciwną -->
      <button @click="isActive = !isActive" class="btn btn-primary">Zmien kolor</button>
      <!-- Zamyka panel tekstu -->
    </div>
    <!-- Wyświetla div z klasą active albo bez_active, zależnie od isActive, oraz stałą klasą btn-border -->
    <div :class="[isActive ? 'active' : 'bez_active']" class="btn-border">
      To jest div z klasą active
    </div>
    <!-- Zamyka układ -->
  </section>
  <!-- Zamyka szablon -->
</template>

<!-- Otwiera style działające tylko w tym komponencie -->
<style scoped>
/* scoped: selektory trafiają tylko w elementy tego komponentu, ale właściwości dziedziczone, np. color, i tak przechodzą do komponentów potomnych */
/* Reguła dla układu z panelem tekstu i kwadratem */
.about-layout {
  /* align-self stretch: układ rozciąga się na całą szerokość */
  /* Wartości: auto (domyślna, odczytuje align-items rodzica), stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end */
  /* Działa, gdy: rodzic ma display: flex lub inline-flex; stretch działa, gdy element nie ma ustawionej wysokości przy row albo szerokości przy column */
  /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed albo element ma margin: auto w osi poprzecznej */
  /* Po rodzicu: nie dziedziczy, ale wartość auto odczytuje align-items rodzica */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: stretch powiększa pudełko w osi poprzecznej, pozostałe wartości zostawiają rozmiar wynikający z treści */
  align-self: stretch;
  /* display flex: panel i kwadrat stają się elementami flexboksa */
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
  /* flex-flow: układa elementy w rzędzie i zawija je, gdy brakuje miejsca */
  /* Wartości: skrót flex-direction i flex-wrap: row nowrap (domyślna), row wrap, row wrap-reverse, row-reverse wrap, column nowrap, column wrap, column-reverse wrap */
  /* Działa, gdy: element ma display: flex lub inline-flex */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, dotyczy tylko bezpośrednich dzieci */
  /* Model pudełkowy: działa tak jak flex-direction i flex-wrap */
  flex-flow: row wrap;
  /* justify-content space-between: rozsuwa panel i kwadrat na przeciwne strony */
  /* Wartości: normal (domyślna, działa jak flex-start), flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right */
  /* Działa, gdy: element ma display: flex lub inline-flex i jest wolne miejsce w osi głównej */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex albo brak wolnego miejsca, bo zabrało je dziecko z flex-grow lub margin: auto */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, rozmieszcza tylko bezpośrednie dzieci */
  /* Model pudełkowy: nie zmienia rozmiaru pudełek, rozdziela tylko wolne miejsce między nimi */
  justify-content: space-between;
  /* align-items stretch: elementy mają domyślnie równą wysokość */
  /* Wartości: normal (domyślna, działa jak stretch), stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end */
  /* Działa, gdy: element ma display: flex lub inline-flex; stretch działa, gdy dziecko nie ma ustawionej wysokości przy row albo szerokości przy column */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex; pojedyncze dziecko może to zmienić własnym align-self */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, ale bezpośrednie dzieci odczytują ją przez align-self: auto; dalsze potomne już nie */
  /* Model pudełkowy: stretch powiększa pudełko dziecka w osi poprzecznej, pozostałe wartości zostawiają rozmiar wynikający z treści */
  align-items: stretch;
  /* align-content flex-start: po zawinięciu trzyma linie przy górnej krawędzi */
  /* Wartości: normal (domyślna, działa jak stretch), stretch, flex-start, flex-end, center, space-between, space-around, space-evenly, start, end */
  /* Działa, gdy: element ma display: flex lub inline-flex, flex-wrap: wrap lub wrap-reverse i jest wolne miejsce w osi poprzecznej */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex albo ma flex-wrap: nowrap */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, przesuwa całe linie dzieci, a nie pojedyncze dzieci */
  /* Model pudełkowy: stretch rozciąga linie, a pozostałe wartości nie zmieniają rozmiaru pudełek */
  align-content: flex-start;
  /* gap: ustawia odstęp między elementami */
  /* Wartości: normal (domyślna), długość, np. 10px, 1rem, procent; dwie wartości oznaczają row-gap i column-gap */
  /* Działa, gdy: element ma display: flex lub inline-flex; odstęp powstaje tylko między dziećmi, a nie przy krawędzi kontenera */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex; dziecko z position: absolute lub fixed nie dostaje odstępu */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, dotyczy tylko odstępów między bezpośrednimi dziećmi */
  /* Model pudełkowy: to nie margines, nie należy do pudełka dziecka, nie zapada się i dodaje się do marginesów */
  gap: var(--space-m);
  /* Zamyka regułę układu */
}

/* Reguła dla panelu tekstu */
.about-text {
  /* flex-grow: panel zajmuje wolne miejsce w rzędzie */
  /* Wartości: 0 (domyślna, nie rośnie) albo dowolna liczba nieujemna, np. 1, 2, 0.5 */
  /* Działa, gdy: rodzic ma display: flex lub inline-flex i jest wolne miejsce w osi głównej */
  /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: powiększa pudełko w osi głównej, ale najwyżej do max-width przy row albo max-height przy column */
  flex-grow: 1;
  /* flex-shrink: panel może się zmniejszać, gdy brakuje miejsca */
  /* Wartości: 1 (domyślna) albo dowolna liczba nieujemna; 0 oznacza brak zmniejszania */
  /* Działa, gdy: rodzic ma display: flex lub inline-flex i dzieci nie mieszczą się w linii */
  /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed; przy flex-wrap: wrap dziecko najpierw przechodzi do nowej linii */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: zmniejsza pudełko w osi głównej, ale nie poniżej min-width przy row albo min-height przy column; padding i border się nie zmniejszają */
  flex-shrink: 1;
  /* flex-basis: szerokość bazowa panelu to 250 pikseli */
  /* Wartości: auto (domyślna), content, długość, np. 250px, procent, min-content, max-content, fit-content */
  /* Działa, gdy: rodzic ma display: flex lub inline-flex; przy row to szerokość, a przy column wysokość */
  /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: ustala początkowy rozmiar pudełka i ma pierwszeństwo przed width lub height; przy box-sizing: border-box obejmuje padding i border */
  flex-basis: 250px;
  /* display flex: akapit i przycisk stają się elementami flexboksa */
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
  /* flex-direction column: ustawia akapit nad przyciskiem */
  /* Wartości: row (domyślna), row-reverse, column, column-reverse */
  /* Działa, gdy: element ma display: flex lub inline-flex; ustala oś główną: przy column justify-content działa w pionie, align-items w poziomie, a flex-basis oznacza wysokość */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, ustawia kierunek tylko bezpośrednich dzieci */
  /* Model pudełkowy: sam nie zmienia rozmiaru, ale decyduje, czy flex-grow i flex-shrink zmieniają szerokość czy wysokość pudełka dziecka */
  flex-direction: column;
  /* align-items flex-start: elementy nie rozciągają się na szerokość panelu */
  /* Wartości: normal (domyślna, działa jak stretch), stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end */
  /* Działa, gdy: element ma display: flex lub inline-flex; stretch działa, gdy dziecko nie ma ustawionej wysokości przy row albo szerokości przy column */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex; pojedyncze dziecko może to zmienić własnym align-self */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, ale bezpośrednie dzieci odczytują ją przez align-self: auto; dalsze potomne już nie */
  /* Model pudełkowy: stretch powiększa pudełko dziecka w osi poprzecznej, pozostałe wartości zostawiają rozmiar wynikający z treści */
  align-items: flex-start;
  /* gap: ustawia odstęp między akapitem a przyciskiem */
  /* Wartości: normal (domyślna), długość, np. 10px, 1rem, procent; dwie wartości oznaczają row-gap i column-gap */
  /* Działa, gdy: element ma display: flex lub inline-flex; odstęp powstaje tylko między dziećmi, a nie przy krawędzi kontenera */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex; dziecko z position: absolute lub fixed nie dostaje odstępu */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, dotyczy tylko odstępów między bezpośrednimi dziećmi */
  /* Model pudełkowy: to nie margines, nie należy do pudełka dziecka, nie zapada się i dodaje się do marginesów */
  gap: var(--space-s);
  /* Model pudełkowy: ustawia wewnętrzny odstęp panelu */
  /* Wartości: 0, długość, procent; od jednej do czterech wartości: góra, prawa, dół, lewa; nie ma auto ani wartości ujemnych */
  /* Działa, gdy: element jest wyświetlany na stronie */
  /* Nie działa, gdy: element ma display: inline, bo odstęp górny i dolny nie odsuwa wtedy sąsiednich linii */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, ale odsuwa treść i dzieci od krawędzi tego elementu */
  /* Model pudełkowy: warstwa między treścią a border, widać na niej tło; przy border-box wlicza się do width i height, a przy content-box je powiększa */
  padding: var(--space-m);
  /* Model pudełkowy: ustawia obramowanie panelu */
  /* Wartości: skrót szerokość, styl, kolor; szerokość: thin, medium, thick, długość; styl: none, hidden, solid, dashed, dotted, double, groove, ridge, inset, outset */
  /* Działa, gdy: styl jest inny niż none i hidden */
  /* Nie działa, gdy: styl to none lub hidden albo nie został podany, bo obramowania wtedy nie ma */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: warstwa między padding a margin; przy border-box wlicza się do width i height, a przy content-box je powiększa */
  border: 1px solid var(--color-border);
  /* Zaokrągla rogi panelu */
  /* Wartości: 0 (domyślna), długość, procent; od jednej do czterech wartości dla kolejnych rogów */
  /* Działa, gdy: element ma widoczne tło lub obramowanie */
  /* Nie działa, gdy: element nie ma tła ani obramowania; dzieci wystające poza róg są przycinane dopiero przy overflow: hidden */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dzieci mają swoje prostokątne rogi */
  /* Model pudełkowy: nie zmienia rozmiaru pudełka */
  border-radius: var(--radius);
  /* Ustawia jasne tło panelu */
  /* Wartości: transparent (domyślna), nazwa, np. red, kod #333, rgb(), hsl(), var() */
  /* Działa, gdy: element ma rozmiar większy od zera */
  /* Nie działa, gdy: element ma szerokość lub wysokość równą zero */
  /* Po rodzicu: nie dziedziczy; przez przezroczyste dziecko widać jednak tło rodzica */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: nie zmienia rozmiaru; maluje treść, padding i obszar pod border, ale nie margin */
  background-color: var(--color-panel);
  /* Zamyka regułę panelu tekstu */
}

/* Reguła dla przycisku w panelu tekstu */
/* Selektor potomny: trafia w każdy .btn wewnątrz .about-text, na dowolnej głębokości; to nie jest dziedziczenie, styl nakłada selektor; tylko bezpośrednie dzieci wybrałby .about-text > .btn */
.about-text .btn {
  /* align-self flex-end: przesuwa przycisk do prawej krawędzi panelu */
  /* Wartości: auto (domyślna, odczytuje align-items rodzica), stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end */
  /* Działa, gdy: rodzic ma display: flex lub inline-flex; stretch działa, gdy element nie ma ustawionej wysokości przy row albo szerokości przy column */
  /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed albo element ma margin: auto w osi poprzecznej */
  /* Po rodzicu: nie dziedziczy, ale wartość auto odczytuje align-items rodzica */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: stretch powiększa pudełko w osi poprzecznej, pozostałe wartości zostawiają rozmiar wynikający z treści */
  align-self: flex-end;
  /* margin-top auto: przesuwa przycisk na dół panelu */
  /* Wartości: 0, długość, procent, auto */
  /* Działa, gdy: element jest blokiem, inline-block lub elementem flex; auto przy flex-direction: column zabiera wolne miejsce nad elementem i spycha go na dół */
  /* Nie działa, gdy: element ma display: inline albo w rodzicu flex nie ma wolnego miejsca dla wartości auto */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: zewnętrzna warstwa nad border; nie wlicza się do height */
  margin-top: auto;
  /* Zamyka regułę przycisku w panelu */
}

/* Reguła dla kwadratu w stanie isActive równym true */
.active {
  /* Ustawia czerwone tło */
  /* Wartości: transparent (domyślna), nazwa, np. red, kod #333, rgb(), hsl(), var() */
  /* Działa, gdy: element ma rozmiar większy od zera */
  /* Nie działa, gdy: element ma szerokość lub wysokość równą zero */
  /* Po rodzicu: nie dziedziczy; przez przezroczyste dziecko widać jednak tło rodzica */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: nie zmienia rozmiaru; maluje treść, padding i obszar pod border, ale nie margin */
  background-color: red;
  /* Zamyka regułę klasy active */
}

/* Reguła dla kwadratu w stanie isActive równym false */
.bez_active {
  /* Ustawia niebieskie tło */
  /* Wartości: transparent (domyślna), nazwa, np. red, kod #333, rgb(), hsl(), var() */
  /* Działa, gdy: element ma rozmiar większy od zera */
  /* Nie działa, gdy: element ma szerokość lub wysokość równą zero */
  /* Po rodzicu: nie dziedziczy; przez przezroczyste dziecko widać jednak tło rodzica */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: nie zmienia rozmiaru; maluje treść, padding i obszar pod border, ale nie margin */
  background-color: blue;
  /* Zamyka regułę klasy bez_active */
}

/* Reguła dla kształtu kwadratu */
.btn-border {
  /* flex: 0 0 auto: kwadrat nie rośnie i nie maleje */
  /* Wartości: skrót flex-grow, flex-shrink i flex-basis: initial (domyślna, 0 1 auto), none (0 0 auto), auto (1 1 auto), liczba, np. 1 (1 1 0), albo trzy wartości, np. 0 1 220px */
  /* Działa, gdy: rodzic ma display: flex lub inline-flex */
  /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: działa tak jak flex-grow, flex-shrink i flex-basis */
  flex: 0 0 auto;
  /* align-self center: środkuje kwadrat w pionie, wbrew ustawieniu rodzica */
  /* Wartości: auto (domyślna, odczytuje align-items rodzica), stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end */
  /* Działa, gdy: rodzic ma display: flex lub inline-flex; stretch działa, gdy element nie ma ustawionej wysokości przy row albo szerokości przy column */
  /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed albo element ma margin: auto w osi poprzecznej */
  /* Po rodzicu: nie dziedziczy, ale wartość auto odczytuje align-items rodzica */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: stretch powiększa pudełko w osi poprzecznej, pozostałe wartości zostawiają rozmiar wynikający z treści */
  align-self: center;
  /* display flex: tekst kwadratu staje się elementem flexboksa */
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
  /* justify-content center: środkuje tekst w poziomie */
  /* Wartości: normal (domyślna, działa jak flex-start), flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right */
  /* Działa, gdy: element ma display: flex lub inline-flex i jest wolne miejsce w osi głównej */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex albo brak wolnego miejsca, bo zabrało je dziecko z flex-grow lub margin: auto */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, rozmieszcza tylko bezpośrednie dzieci */
  /* Model pudełkowy: nie zmienia rozmiaru pudełek, rozdziela tylko wolne miejsce między nimi */
  justify-content: center;
  /* align-items center: środkuje tekst w pionie */
  /* Wartości: normal (domyślna, działa jak stretch), stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end */
  /* Działa, gdy: element ma display: flex lub inline-flex; stretch działa, gdy dziecko nie ma ustawionej wysokości przy row albo szerokości przy column */
  /* Nie działa, gdy: element nie ma display: flex ani inline-flex; pojedyncze dziecko może to zmienić własnym align-self */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: wartość nie przechodzi, ale bezpośrednie dzieci odczytują ją przez align-self: auto; dalsze potomne już nie */
  /* Model pudełkowy: stretch powiększa pudełko dziecka w osi poprzecznej, pozostałe wartości zostawiają rozmiar wynikający z treści */
  align-items: center;
  /* Model pudełkowy: ustawia szerokość 100 pikseli */
  /* Wartości: auto (domyślna), długość, procent, min-content, max-content, fit-content */
  /* Działa, gdy: element jest blokiem, inline-block lub elementem flex */
  /* Nie działa, gdy: element ma display: inline; w układzie flex przy row ma pierwszeństwo flex-basis inne niż auto, a limit ustalają min-width i max-width */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, ale procentowe szerokości dzieci liczą się od tej wartości */
  /* Model pudełkowy: przy content-box to szerokość samej treści, a przy border-box treści, padding i border razem */
  width: 100px;
  /* Model pudełkowy: ustawia wysokość 100 pikseli */
  /* Wartości: auto (domyślna), długość, procent, min-content, max-content, fit-content */
  /* Działa, gdy: element jest blokiem, inline-block lub elementem flex; procent wymaga ustawionej wysokości rodzica */
  /* Nie działa, gdy: element ma display: inline; w układzie flex przy column ma pierwszeństwo flex-basis inne niż auto, a limit ustalają min-height i max-height */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, ale procentowe wysokości dzieci liczą się od tej wartości */
  /* Model pudełkowy: przy content-box to wysokość samej treści, a przy border-box treści, padding i border razem */
  height: 100px;
  /* Model pudełkowy: ustawia żółte obramowanie o grubości 5 pikseli */
  /* Wartości: skrót szerokość, styl, kolor; szerokość: thin, medium, thick, długość; styl: none, hidden, solid, dashed, dotted, double, groove, ridge, inset, outset */
  /* Działa, gdy: styl jest inny niż none i hidden */
  /* Nie działa, gdy: styl to none lub hidden albo nie został podany, bo obramowania wtedy nie ma */
  /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
  /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
  /* Model pudełkowy: warstwa między padding a margin; przy border-box wlicza się do width i height, a przy content-box je powiększa */
  border: 5px solid yellow;
  /* Ustawia jasny kolor tekstu */
  /* Wartości: nazwa, np. red, kod #333, rgb(), hsl(), transparent, currentColor, var() */
  /* Działa, gdy: element lub jego potomek ma tekst */
  /* Nie działa, gdy: element nie ma tekstu; potomek z własnym kolorem go nadpisuje, a linki i przyciski dostają własny kolor od przeglądarki */
  /* Po rodzicu: dziedziczy, gdy element nie ma własnego koloru */
  /* Na potomne: przechodzi na wszystkie potomne bez własnego koloru */
  /* Model pudełkowy: nie zmienia rozmiaru; obramowanie bez podanego koloru przejmuje tę wartość */
  color: var(--color-light);
  /* Zmniejsza tekst, żeby zmieścił się w kwadracie */
  /* Wartości: medium (domyślna), długość, np. 14px, 0.875rem, em, procent, xx-small do xxx-large, smaller, larger */
  /* Działa, gdy: element lub jego potomek ma tekst */
  /* Nie działa, gdy: element nie ma tekstu */
  /* Po rodzicu: dziedziczy, gdy element nie ma własnego rozmiaru; em i procent liczą się od rozmiaru rodzica, a rem od rozmiaru strony */
  /* Na potomne: przechodzi na wszystkie potomne bez własnego rozmiaru */
  /* Model pudełkowy: zmienia rozmiar treści, a przez to pudełka o rozmiarze auto */
  font-size: 0.875rem;
  /* Wyśrodkowuje linie tekstu */
  /* Wartości: start (domyślna), end, left, right, center, justify, match-parent */
  /* Działa, gdy: element jest blokiem lub elementem flex i ma w środku tekst */
  /* Nie działa, gdy: element ma display: inline; nie przesuwa elementów flex, tylko tekst wewnątrz nich */
  /* Po rodzicu: dziedziczy, gdy element nie ma własnej wartości */
  /* Na potomne: przechodzi na wszystkie potomne bez własnej wartości */
  /* Model pudełkowy: nie zmienia rozmiaru pudełka */
  text-align: center;
  /* Zamyka regułę kształtu kwadratu */
}

/* Reguły dla wąskich ekranów */
@media (max-width: 480px) {
  /* Reguła dla układu na wąskim ekranie */
  .about-layout {
    /* flex-direction column: ustawia panel i kwadrat jeden pod drugim */
    /* Wartości: row (domyślna), row-reverse, column, column-reverse */
    /* Działa, gdy: element ma display: flex lub inline-flex; ustala oś główną: przy column justify-content działa w pionie, align-items w poziomie, a flex-basis oznacza wysokość */
    /* Nie działa, gdy: element nie ma display: flex ani inline-flex */
    /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
    /* Na potomne: wartość nie przechodzi, ustawia kierunek tylko bezpośrednich dzieci */
    /* Model pudełkowy: sam nie zmienia rozmiaru, ale decyduje, czy flex-grow i flex-shrink zmieniają szerokość czy wysokość pudełka dziecka */
    flex-direction: column;
    /* flex-wrap nowrap: bez zawijania kolumna zajmuje całą szerokość układu */
    /* Wartości: nowrap (domyślna), wrap, wrap-reverse */
    /* Działa, gdy: element ma display: flex lub inline-flex, a dzieci nie mieszczą się w jednej linii; przy column zawijanie wymaga ograniczonej wysokości kontenera */
    /* Nie działa, gdy: element nie ma display: flex ani inline-flex; przy column i wrap szerokość kolumny wynika z treści, chyba że align-content ma wartość stretch */
    /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
    /* Na potomne: wartość nie przechodzi, zawija tylko bezpośrednie dzieci */
    /* Model pudełkowy: przy nowrap dzieci mogą się zmniejszać dzięki flex-shrink, przy wrap najpierw przechodzą do nowej linii */
    flex-wrap: nowrap;
    /* Zamyka regułę układu na wąskim ekranie */
  }

  /* Reguła dla panelu tekstu na wąskim ekranie */
  .about-text {
    /* flex-basis auto: wysokość panelu wynika z jego treści */
    /* Wartości: auto (domyślna), content, długość, np. 250px, procent, min-content, max-content, fit-content */
    /* Działa, gdy: rodzic ma display: flex lub inline-flex; przy row to szerokość, a przy column wysokość */
    /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed */
    /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
    /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
    /* Model pudełkowy: ustala początkowy rozmiar pudełka i ma pierwszeństwo przed width lub height; przy box-sizing: border-box obejmuje padding i border */
    flex-basis: auto;
    /* Zamyka regułę panelu na wąskim ekranie */
  }

  /* Reguła dla kwadratu na wąskim ekranie */
  .btn-border {
    /* order -1: pokazuje kwadrat przed panelem, choć w kodzie jest po nim */
    /* Wartości: 0 (domyślna) albo dowolna liczba całkowita, także ujemna */
    /* Działa, gdy: rodzic ma display: flex lub inline-flex; zmienia tylko kolejność na ekranie, a nie w HTML ani przy poruszaniu się klawiszem Tab */
    /* Nie działa, gdy: rodzic nie ma display: flex ani inline-flex albo element ma position: absolute lub fixed */
    /* Po rodzicu: nie dziedziczy, każdy element ma własną wartość; można wymusić przez inherit */
    /* Na potomne: nie przechodzi, dotyczy tylko tego elementu */
    /* Model pudełkowy: nie zmienia rozmiaru pudełka */
    order: -1;
    /* Zamyka regułę kwadratu na wąskim ekranie */
  }
  /* Zamyka reguły dla wąskich ekranów */
}
/* Zamyka sekcję stylów */
</style>
