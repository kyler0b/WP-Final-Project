<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Nav from '../components/Nav.vue'
import router from '../router/index'

</script>

<template>
  <div class="login">
      <form>
          <h3 class = "title">Log In</h3>

          <div class="form-group">
              <label>User Name</label>
              <input type="text" />
          </div>

          <div class="form-group">
              <label>Password</label>
              <input type="password"/>
          </div>

          <button type="submit"><router-link to="/home">Sign In</router-link></button>
      </form>
  </div>
</template>

<style lang = "scss">

.login{
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
