<script>
import TheWelcome from '../components/TheWelcome.vue'
import Nav from '../components/Nav.vue'
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
          <h3>Sign In</h3>

          <div class="form-group">
              <label>Email address</label>
              <input type="email" class="form-control form-control-lg" />
          </div>

          <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control form-control-lg" />
          </div>

          <button type="submit" class="btn btn-dark btn-lg btn-block"><router-link to="/home">Sign In</router-link></button>

          <p class="forgot-password text-right mt-2 mb-4">
              <router-link to="/forgot-password">Forgot password ?</router-link>
          </p>

      </form>
  </div>
</template>
