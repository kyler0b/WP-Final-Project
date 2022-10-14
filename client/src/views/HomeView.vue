<script setup lang="ts">
import Nav from '../components/Nav.vue';
import session, { login, logout } from '../stores/session'

import { reactive } from 'vue';

const workouts = [
  {name: 'Squats'},
  {name: 'Burpees'},
  {name: 'Pushups'},
  {name: 'Situps'},
]

const cart = reactive ([
  
  
]) 

function addToCart(workouts: any) {
  cart.push({ ...workouts, qty: 10 });
}

function removeFromCart(workouts: any) {
  cart.shift();
}

</script>

<template>
  <div>
    <main>
      <NavView />
    </main>
  
    <div class="content" v-if="session.user != null">

      <div class = "content">
        <h2 class ="title">Choose Your Workouts</h2>
        <p class ="subtitle">Scroll Through Some of Our Workouts</p>
      <div class = "listcontainer">
        <li>
          <li v-for="workout in workouts" :key="workout.name" @click="addToCart(workout)">
            <h3>{{ workout.name }}</h3>
          </li>
        </li>
        
      </div>

      </div>
      <div class = "content">
        <h2 class ="title">Your Workouts</h2>
        <table class="table is-bordered">
          <tr>
            <th>Workout</th>
            <th>Qty</th>
            <th></th>
          </tr>
          <tr v-for="workout in cart" :key="workout.name">
            <td>{{ workout.name }}</td>
            <td>{{workout.qty}}</td>
            <td><input type="button" class="remove-item" background-color= "red" value="X" @click="removeFromCart(workout)"/></td>
          </tr>
        </table>
      </div>
    </div>
    <div class = "content" v-else>
      <h2 class = "title">Welcome to Fitness App</h2>
      <p class ="subtitle">To enjoy the full experience you must log in.</p>
    </div>

  </div>
</template>

<style lang="scss">

.content {
  max-width: 500px;
  margin: auto;
  text-align: center;
}
.listcontainer{
  cursor: pointer;
  border: 1px dotted black;
  max-height: 60px;
  overflow:hidden;
  overflow-y:scroll;
  li{
    display: block;
     li {
          text-align: center;
        }
    }
  }
  .listcontainer:hover{
    overflow-y:scroll;
  }

td{
  .button{
    padding-left: 10px;
    padding-right: 10px;
    justify-content: center;
  }
}
table{
  table-layout: fixed;
}
input {
  width: 100%;
  display: inline-block;
}
</style>