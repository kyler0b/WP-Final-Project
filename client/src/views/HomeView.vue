<script setup lang="ts">
import Nav from '../components/Nav.vue';
import session, { login, logout } from '../stores/session';
import { getWorkouts } from '../stores/workouts';

import { reactive, ref } from 'vue';
/*
const workouts = reactive([] as Workout[])
getWorkouts().then( x=> workouts.push(...x.workouts));
*/

const workouts = [
  {name: 'Squats'},
  {name: 'Burpees'},
  {name: 'Pushups'},
  {name: 'Situps'},
  {name: 'Lunges'},
  {name: 'Pullups'},
  {name: 'Leg Extensions'},
  {name: 'Bicep Curls'},
  {name: 'Tricep Curls'},
  {name: 'Lateral Raises'},
  {name: 'Overhead Press'},

] 

const cart = reactive ([])

function addToCart(workouts: any) {
  cart.push({ ...workouts, qty: 10 });
}

function removeFromCart(cart: any, workout: any) {
  const index = cart.indexOf(workout);

  if(index > -1){
    cart.splice(index, 1);
  }
  
  //cart.splice(0, cart.length);
}

function clearCart(){
  cart.splice(0);
}

</script>

<template>
  <div>
    <main>
      <NavView />
    </main>
    
    <div class="content" v-if="session.user != null">

      <div class = "content">
        <h1 class = "title">Hi, {{session.user.firstName}}</h1>

        <h2 class ="title">Choose Your Workouts</h2>
        <p class ="subtitle">Scroll Through Some Of Our Workouts</p>

        <div class = "workoutcontainer">
          <div class="scroll">
              <div class="row">
                  <div class="item">
                    <div class="box" v-for="workout in workouts" :key="workout.id" @click="addToCart(workout)"><h3>{{ workout.name }}</h3></div>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <div class = "content" v-if="cart.length != 0">
        <h1 class ="title">Your Workouts</h1>
        <table class="table is-bordered">
          <tr>
            <th>Workout</th>
            <th>Qty</th>
            <th><input type="button" class="remove-item" value="Clear All" @click="clearCart()"/></th>
          </tr>
          <tr v-for="workout in cart" :key="workout.name">
            <td>{{ workout.name }}</td>
            <td>{{workout.qty}}</td>
            <td><input type="button" class="remove-item" value="X" @click="removeFromCart(cart, workout)"/></td>
          </tr>
        </table>

        <!--<div><button>Save Cart</button></div>-->

      </div>
    </div>
    <div class = "content" v-else>
      <h1 class = "title">Welcome to Fitness App</h1>
      <p class ="subtitle">To Enjoy The Full Experience You Must Log In.</p>
    </div>

  </div>
</template>

<style lang="scss">

.content {
  max-width: 500px;
  margin: auto;
  text-align: center;
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
  box-shadow: 0 5px 5px rgba(0,0,0,.50);
}
input {
  width: 100%;
  display: inline-block;
}
.scroll {
  overflow: auto;
  width: 100%;
}
.row {
  display: table-row;
}
.item {
  display: flex;
  padding: 20px;
}
.box {
  width: 200px;
  height: 200px;
  text-align: center;
  box-shadow: 0 5px 5px rgba(0,0,0,.50);
}
.workoutcontainer {
  width: 100%;
  position: relative;
  cursor: pointer;
}
</style>