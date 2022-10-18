<script setup lang="ts">
import Nav from '../components/Nav.vue'
import session, {User, login} from '../stores/session'
import { reactive } from 'vue';

  const u1 = {firstName: 'Mike', lastName: 'Landry', password: '1010', admin: true};
  const u2 = {firstName: 'Tom', lastName: 'Brady', password: '7rings', admin: true};
  const u3 = {firstName: 'Troy', lastName: 'Smith', password: '1111', admin: true};
  const u4 = {firstName: 'Morgan', lastName: 'Jackson', password: '3345', admin: true};

  //function addFollow(firstName, lastName){
    //cart.push({firstName, lastName});
//}

function addFriend(firstName:string, lastName:string){
  const list = document.getElementById('list');
  const li = document.createElement('li');
  li.append(firstName+' '+lastName);
  list.appendChild(li);
}


</script>

<template>
  <div>
    <main>
      <NavView />
    </main>

    <div class="content" v-if="session.user != null">
      <h1 class ="title">Find Friends</h1>

      
      <div>
  
        <table>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        
          <tr><td> {{u1.firstName}} {{u1.lastName}} </td> <td><button id ="follow" onclick ="addFriend(u1.firstName, u1.lastName)">Follow</button></td></tr>
          <tr><td> {{u2.firstName}} {{u2.lastName}} </td> <td><button id ="follow" onclick ="addFriend(u2.firstName, u2.lastName)">Follow</button></td></tr>
          <tr><td> {{u3.firstName}} {{u3.lastName}} </td> <td><button id ="follow" onclick ="addFriend(u3.firstName, u3.lastName)">Follow</button></td></tr>
          <tr><td> {{u4.firstName}} {{u4.lastName}} </td> <td><button id ="follow" onclick ="addFriend(u4.firstName, u4.lastName)">Follow</button></td></tr>
        </table>

        <table>
          <tr>
            <th>Your Friends</th>
          </tr>
          
          <ul id = "list">
          </ul>

        </table>

      </div>
      
    </div>

    <div class = "content" v-else>
      <h1 class = "title">Find Friends</h1>
      <p class ="subtitle">To See Your Friends You Must Log In</p>
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
  
</style>