<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Nav from '../components/Nav.vue';

import { reactive } from 'vue';
import { remove } from '@vue/shared';

const workouts = [
  {name: 'Squats'},
  {name: 'Burpees'},
  {name: 'Pushups'},
  {name: 'Situps'},
]

const cart = reactive ([
  {name: 'Squats', qty: 1},
  {name: 'Burpees', qty: 1},
  {name: 'Pushups', qty: 1},
  {name: 'Situps', qty: 1},
  
]) 

function addToCart(workouts: any) {
  cart.push({ ...workouts, qty: 1 });
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
    
    <div class="container1">

      <div class = "inner-container">
        <h2 class ="title">Pick Workouts</h2>
        <ul>
          <li v-for="workout in workouts" :key="workout.name" @click="addToCart(workout)">
            <h3>{{ workout.name }}</h3>
          </li>
        </ul>
      </div>

      <div class = "inner-container">
        <h2 class ="title">My Workouts</h2>
        <table class="table is-bordered">
          <tr>
            <th>Workout</th>
            <th>Qty</th>
            <th class = "th1"></th>
          </tr>
          <tr v-for="workout in cart" :key="workout.name">
            <td>{{ workout.name }}</td>
            <td><input v-model="workout.qty" /></td>
            <td><input type="button" class="remove-item" background-color= "red" value="X" @click="removeFromCart(workout)"/></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.container1{
  padding-top:100px;
  width: 100%;
  justify-content: center;
  display: flex;
}
ul {
     display: flex;
     li {
          //width: 200px;
          display: block;
          color: black;
          padding: 5px;
          margin: 5px;
        }
    }

td{
  .button{
    padding-left: 10px;
    padding-right: 10px;
    justify-content: center;
  }
}
.th1{
  justify-content: center;
  //width:100px;
}
.inner-container{
  margin: 10px;
  width: 50%;
  float: left;
}

</style>