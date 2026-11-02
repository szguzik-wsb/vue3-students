<!-- Otwiera sekcję skryptu komponentu, napisaną w TypeScript -->
<script setup lang="ts">
// Zamyka pustą sekcję skryptu
</script>

<!-- Otwiera szablon komponentu -->
<template>
  <!-- Otwiera kontener całego menu -->
  <div class="top-menu">
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
  <!-- Zamyka kontener menu -->
  </div>
<!-- Zamyka szablon -->
</template>

<!-- Otwiera style działające tylko w tym komponencie -->
<style scoped>
/* Reguła dla kontenera menu */
.top-menu {
  /* Układa zawartość w rzędzie za pomocą flexboksa */
  display: flex;
  /* Rozsuwa logo i linki na przeciwne strony */
  justify-content: space-between;
  /* Wyrównuje zawartość w pionie do środka */
  align-items: center;
  /* Ustawia wewnętrzny odstęp 10 pikseli */
  padding: 10px;
  /* Ustawia ciemnoszare tło */
  background-color: #333;
  /* Ustawia biały kolor tekstu */
  color: white;
/* Zamyka regułę kontenera menu */
}

/* Reguła dla linków w nawigacji */
.menu-items a {
  /* Ustawia biały kolor linków */
  color: white;
  /* Usuwa podkreślenie linków */
  text-decoration: none;
  /* Ustawia odstęp 15 pikseli z lewej strony linku */
  margin-left: 15px;
/* Zamyka regułę linków */
}
/* Zamyka sekcję stylów */
</style>