<script setup lang="ts">
//import Nav from '../components/Nav.vue'
import router from '../router/index'
import session, { login } from '../stores/session'
import { ref } from 'vue';

const fName = ref('');
const lName = ref('');
const passwrd = ref('');

</script>

<template>
    <div class = "signup" id = "loginDiv">
        <form>
          <h3 class = "title">Sign Up</h3>

          <div class="form-group">
              <label>First Name</label>
              <input type="string" v-model="fName" />
          </div>
          <div class="form-group">
              <label>Last Name</label>
              <input type="string" v-model="lName" />
          </div>
            
          <div class="form-group">
              <label>Password</label>
              <input  type="password" class ="password" v-model="passwrd"/>
          </div>
          <router-link to = "/" class = "button is-light" @click="login(fName, lName, passwrd, true)">Sign Up</router-link>
          <p class="forgot-password text-right">
              Already registered 
              <router-link :to="{name: '/login'}">sign in?</router-link>
          </p>
      </form>
    </div>
</template>

<style lang = "scss">

.signup{
  border: 3px solid #f1f1f1;
  margin: auto;
  width: 50%;
  padding: 10px;
}
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.form-group{
    padding-top: 2px;
    padding-bottom: 2px;
}
  
</style>
