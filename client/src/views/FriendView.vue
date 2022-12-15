<script setup lang="ts">
//import Nav from '../components/Nav.vue'
import session, { login} from '../stores/session'
import { reactive, ref } from 'vue';

  const u1 = {firstName: 'Mike', lastName: 'Landry', password: '1010', admin: true, workouts: ['Jumping Jacks', 'Situps', 'Lunges']};
  const u2 = {firstName: 'Tom', lastName: 'Brady', password: '7rings', admin: true, workouts: ['Bicep Curls', 'Pullups', 'Tricep Curls']};
  const u3 = {firstName: 'Troy', lastName: 'Smith', password: '1111', admin: true, workouts: ['Pullups','Burpees', 'Squats']};
  const u4 = {firstName: 'Morgan', lastName: 'Jackson', password: '3345', admin: true, workouts: ['Lateral Raises', 'Overhead Press']};

function open(firstName:string, workouts: string[]){
  
  var modal = document.getElementById("myModal");
  modal!.style.display = "block";
  const list2 = document.getElementById("list2");
  const div = document.createElement('div');
  list2!.append(div);
  list2!.append(firstName+"'s Workouts: ");

  while(workouts.length > 0){

      const item = workouts.pop();
      list2!.append(" - "+item+" ");
  }
}

function close(){

  var modal = document.getElementById("myModal");
  modal!.style.display = "none";
  const list2= document.getElementById("list2");

  list2!.innerHTML = "";
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
          <div class="scroll">
             
                  <div class="item">
                    <div class ="box" @click="open(u1.firstName, u1.workouts)"> <p>{{u1.firstName}} {{u1.lastName}}</p> </div>
                    <div class ="box" @click="open(u2.firstName, u2.workouts)"> <p>{{u2.firstName}} {{u2.lastName}}</p> </div>
                    <div class ="box" @click="open(u3.firstName, u3.workouts)"> <p>{{u3.firstName}} {{u3.lastName}}</p> </div>
                    <div class ="box" @click="open(u4.firstName, u4.workouts)"> <p>{{u4.firstName}} {{u4.lastName}}</p> </div>
                  </div>
                
          </div>

        </div>

        <p></p>
        <p></p>

        <!-- The Modal -->
        <div id="myModal" class="modal">

          <!-- Modal content -->
          <div class="modal-content">
            <span class="close" @click="close()">&times;</span>

            <div id = "list" class = "subtitle">
            <div id = "list2">
            </div>

            <p></p>
            </div>
          </div>
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
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}
.close {
  width: 50px;
  justify-content: center;
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.scroll {
  overflow: auto;
  width: 100%;
}
.row {
  
}
.item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  justify-content: center;
}
.box {
  width: 200px;
  height: 200px;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 5px rgba(0,0,0,.50);
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>