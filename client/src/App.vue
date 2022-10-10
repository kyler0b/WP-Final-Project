<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>


<template>
  <header>
    <NavView />
  </header>
    
  <div class = 'container'>
    <RouterView />
  </div>
</template>

