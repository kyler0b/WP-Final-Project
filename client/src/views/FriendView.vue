<script setup lang="ts">
import Nav from '../components/Nav.vue'
import session, {User, login} from '../stores/session'
import { reactive } from 'vue';

  const u1 = {firstName: 'Mike', lastName: 'Landry', password: '1010', admin: true, workouts: ['Jumping Jacks', 'Situps', 'Lunges']};
  const u2 = {firstName: 'Tom', lastName: 'Brady', password: '7rings', admin: true, workouts: ['Bicep Curls', 'Pullups', 'Tricep Curls']};
  const u3 = {firstName: 'Troy', lastName: 'Smith', password: '1111', admin: true, workouts: ['Pullups','Burpees', 'Squats']};
  const u4 = {firstName: 'Morgan', lastName: 'Jackson', password: '3345', admin: true, workouts: ['Lateral Raises', 'Overhead Press']};

function showUser(firstName:string, workouts: string[]){

const list2 = document.getElementById("list2");
const div = document.createElement('div');
list2!.append(div);
list2!.append(firstName+"'s Workouts: ");

while(workouts.length > 0){

    const item = workouts.pop();
    list2!.append(item+", ");

  }
}

function clear(){

const list2= document.getElementById("list2");
list2!.remove();

}

</script>

<template>
  <div>
    <main>
      <NavView />
    </main>

    <div class="content" v-if="session.user != null">
      <h1 class ="title">See What Other Are Doing</h1>

      
      <div>
  
        <table>
          <tr>
            <th class ="title">Users</th>
            <th></th>
          </tr>

          
    
          <tr><td class ="subtitle"> {{u1.firstName}} {{u1.lastName}} </td> <td><a class = "button" id ="view" @click="showUser(u1.firstName, u1.workouts)">View</a></td></tr>
          <tr><td class ="subtitle"> {{u2.firstName}} {{u2.lastName}} </td> <td><a class = "button" id ="view" @click="showUser(u2.firstName, u2.workouts)">View</a></td></tr>
          <tr><td class ="subtitle"> {{u3.firstName}} {{u3.lastName}} </td> <td><a class = "button" id ="view" @click="showUser(u3.firstName, u3.workouts)">View</a></td></tr>
          <tr><td class ="subtitle"> {{u4.firstName}} {{u4.lastName}} </td> <td><a class = "button" id ="view" @click="showUser(u4.firstName, u4.workouts)">View</a></td></tr>
        </table>

        <table>
          <div id = "list" class = "subtitle">
            <div id = "list2">
            </div>
            <p></p>
            <a class ="button" @click="clear()">Clear</a>
          </div>
        </table>

      </div>
      
    </div>

    <div class = "content" v-else>
      <h1 class = "title">See What Other Are Doing</h1>
      <p class ="subtitle">To See What Others Are Doing You Must Log In</p>
    </div>
  </div>
</template>

<style scoped>
.content {
  max-width: 500px;
  margin: auto;
  text-align: center;
}
.listcontainer{
  cursor: pointer;
  border: 1px solid black;
  max-height: 1000px;
  
  padding-top: 5px; 
  overflow-y:scroll;
  li{
    li{
        padding-top: 5px; 
        text-align: center;
      }
    }
  }
  .button{
    width: 50px;
    justify-content: center;
  }
  .list{
    display: hidden;
  }
  
</style>