<script setup lang="ts"></script>

<template>
  <header class="top-menu">
    <div class="logo">Logo</div>
    <nav class="menu-items">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/publications">Publications</RouterLink>
      <a href="/about">Contact</a>
    </nav>
  </header>
</template>

<style scoped>
.top-menu {
  flex-shrink: 0;

  display: flex;

  flex-wrap: wrap;

  justify-content: space-between;

  align-items: center;

  align-content: center;

  column-gap: var(--space-m);

  row-gap: var(--space-s);

  padding: var(--space-s) var(--space-m);

  background-color: var(--color-dark);

  color: var(--color-light);
}

.logo {
  flex: 0 0 auto;

  font-weight: bold;
}

.menu-items {
  display: flex;

  flex-direction: row;

  justify-content: flex-end;

  align-items: baseline;

  gap: var(--space-m);
}

.menu-items a {
  color: var(--color-light);

  text-decoration: none;
}

@media (max-width: 480px) {
  .top-menu {
    flex-direction: column;

    flex-wrap: nowrap;

    align-items: stretch;
  }

  .menu-items {
    justify-content: space-evenly;
  }
}
</style>
