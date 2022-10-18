<script setup lang="ts">
import Nav from '../components/Nav.vue'
import session from '../stores/session'

</script>

<template>
  <div>
    <main>
      <NavView />
    </main>

    <div class="content" v-if="session.user != null">
      <h1 class ="title">Workouts</h1>
    </div>

    <div class="content" v-else>
      <h1 class ="title">Workouts</h1>
      <p class = "subtitle">You Must Be Logged In To Access This Page</p>
    </div>
  </div>
</template>

<style scoped>
.content {
  max-width: 500px;
  margin: auto;
  text-align: center;
}
</style>