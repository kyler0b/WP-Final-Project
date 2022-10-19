<script setup lang="ts">
import { reactive } from '@vue/reactivity'
import router from '../router/index';
import Nav from '../components/Nav.vue'
import session, { login } from '../stores/session'

</script>

<template>
  <div>
    <main>
      <NavView />
    </main>

    <div class="content" v-if="session.user != null">
      <h1 class ="title">Admin</h1>
      <p>Add More Workouts Here</p>
      <div v-if="session.user != null">
        <form>
          <input type="text" id="inputItem" placeholder="Enter a new workout">
          <input type="submit">
        </form>
      </div>
    </div>

    <div class="content" v-else>
      <h1 class ="title">Admin</h1>
      <p class = "subtitle">You Must Be An Admin To Access This Page</p>
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