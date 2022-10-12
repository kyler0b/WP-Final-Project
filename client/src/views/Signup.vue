<script setup lang = "ts">
import TheWelcome from '../components/TheWelcome.vue'
import Nav from '../components/Nav.vue'
import router from '../router/index'

</script>

<template>
  <div class = "signup">
      <form>
          <h3 class = "title">Sign Up</h3>

          <div class="form-group">
              <label>User Name</label>
              <input type="text"/>
          </div>

          <div class="form-group">
              <label>Email address</label>
              <input type="email"/>
          </div>

          <div class="form-group">
              <label>Password</label>
              <input type="password"/>
          </div>

          <button type="submit"><router-link to="/home">Sign Up</router-link></button>

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