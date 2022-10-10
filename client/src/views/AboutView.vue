<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Nav from '../components/Nav.vue'
</script>

<template>
  <main>
    <NavView />
  </main>
  
  <div class="about">
    <h1>About Fitnes App</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
