<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <div class="wrapper">

    <nav>
      <RouterLink to="/"><img src="./assets/contacts.png" alt="Contacts"></RouterLink>
      <RouterLink to="/journal"><img src="./assets/call.png" alt="Journal d'appel"></RouterLink>
      <RouterLink to="/clavier"><img src="./assets/keyboard.png" alt="Clavier"></RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped lang="scss">

nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding-block: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--color-border);

  img {
    height: 50px;
    width: 50px;
  }
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
.wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
