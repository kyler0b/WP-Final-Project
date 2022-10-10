<script>
import TheWelcome from './TheWelcome.vue'
import Nav from './Nav.vue'
import router from '../router/index'

export default {
        data() {
            return {}
        }
    }
</script>

<template>
  <div class="vue-tempalte">
      <form>
          <h3>Sign Up</h3>

          <div class="form-group">
              <label>Full Name</label>
              <input type="text" class="form-control form-control-lg"/>
          </div>

          <div class="form-group">
              <label>Email address</label>
              <input type="email" class="form-control form-control-lg" />
          </div>

          <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control form-control-lg" />
          </div>

          <button type="submit" class="btn btn-dark btn-lg btn-block"><router-link to="/login">Sign Up</router-link></button>

          <p class="forgot-password text-right">
              Already registered 
              <router-link :to="{name: 'login'}">sign in?</router-link>
          </p>
      </form>
  </div>
</template>