<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Nav from '../components/Nav.vue'
import router from '../router/index'

</script>

<template>
  <div>
    <main>
      <NavView />
    </main>

    <div class="container">
      <h1> Sign up form </h1>

      <form action="/signup" method="POST">
	      <input type="text" name="username" placeholder="username">
	      <input type="password" name="password" placeholder="password">
	      <button href="/home">Submit</button>
      </form>
    </div>
  </div>
</template>