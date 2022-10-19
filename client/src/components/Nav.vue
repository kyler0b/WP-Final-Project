<script setup lang = "ts">
    import router from '../router/index';
    import { ref } from 'vue';
    import LoginBadge from './LoginBadge.vue';

    let isActive = ref(false);

</script>
<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
         
      
          <a :class="{ 'is-active': isActive}" @click="isActive = !isActive" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu" a :class="{ 'is-active': isActive}">
          <div class="navbar-start">
            <router-link to = "/" class="navbar-item">Home</router-link>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>
      
              <div class="navbar-dropdown">
                <router-link to = "/history" class="navbar-item">History</router-link>
                <router-link to = "/friendsworkouts" class="navbar-item">Friends</router-link>
                <router-link to = "/about" class="navbar-item">About</router-link>
                <hr class="navbar-divider">
                <router-link to = "/admin" class="navbar-item">Admin</router-link>
                
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <login-badge></login-badge>
            </div>
          </div>
        </div>
      </nav>

</template>