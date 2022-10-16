<script setup lang = "ts">
import Nav from '../components/Nav.vue'
import router from '../router/index'
import { login } from '../stores/session'
</script>

<template>
  <div class = "signupdiv">
      <form>
          <h3 class = "title">Sign Up</h3>
        
          <div class="form-group">
              <label>First Name</label>
              <input type="string" v-model="fname" />
          </div>
          <div class="form-group">
              <label>Last Name</label>
              <input type="string" v-model="lname" />
          </div>
            
          <div class="form-group">
              <label>Password</label>
              <input  type="string" class ="password" v-model="password"/>
          </div>

          <router-link to = "/" class = "button is-light" @click="login(fname, lname, password, true)">Sign Up</router-link>
          
          <p class="forgot-password text-right">
              Already registered 
              <router-link :to="{name: '/login'}">sign in?</router-link>
          </p>
      </form>
  </div>
</template>

<style lang = "scss">

.signupdiv{
  border: 3px solid #f1f1f1;
  margin: auto;
  width: 50%;
  padding: 10px;
}
input[type=text], input[type=email], input[type=password] {
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