<script setup lang="ts">
import { reactive } from '@vue/reactivity'
import router from '../router/index';
import Nav from '../components/Nav.vue'
import session, { login } from '../stores/session'

function addWorkout(){


}


</script>

<template>
  <div>
    <main>
      <NavView />
    </main>

    <div class="content" v-if="session.user != null">
      <h1 class ="title">Admin</h1>
      <p class = "subtitle">Add More Workouts Here</p>
      <div v-if="session.user != null">
        <form>
          <input type="text" id="inputItem" placeholder="Enter a new workout">
          <a class = "button">Add Workout</a>
        </form>
      </div>
    </div>

    <div class="content" v-else>
      <h1 class ="title">Admin</h1>
      <p class = "subtitle">You Must Be A Logged In Admin To Access This Page</p>
    </div>

    
  </div>
</template>

<style scoped>
.content {
  max-width: 500px;
  margin: auto;
  text-align: center;
}
input[type=text]{
  width: 100%;
  padding: 12px 20px;
  margin: 10px;
  margin-bottom: 10px;

}
input[type=text]:focus{
  background-color: lightblue;
}
</style>