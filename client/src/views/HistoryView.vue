<script setup lang="ts">
import Nav from '../components/Nav.vue'
import session from '../stores/session'
import cart from '../views/HomeView.vue'

</script>

<template>
  <div>
    <main>
      <NavView />
    </main>

    <div class="content" v-if="session.user != null">
      <p class = "subtitle">Look At What You've Done So Far</p>
    
      <table class="table is-bordered">
          <tr>
            <th>Workouts</th>
          </tr>

          <tr v-for="workout in cart" :key="workout.name">
            <!--
            <td>{{workout.name}}</td>
            -->
          </tr>
      </table>
      
    </div>

    <div class = "content" v-else>
      <h1 class = "title">History</h1>
      <p class ="subtitle">To See Your Progress You Must Log In</p>
    </div>
  </div>
</template>

<style scoped>
.content {
  max-width: 500px;
  margin: auto;
  text-align: center;
}
table{
  table-layout: fixed;
}
</style>