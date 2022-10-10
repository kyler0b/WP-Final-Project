<script setup lang = "ts">
    import router from '../router/index'
    import { ref } from 'vue';

    let isActive = ref(false);

</script>
<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a>
      
          <a :class="{ 'is-active': isActive}" @click="isActive = !isActive" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu" a :class="{ 'is-active': isActive}">
          <div class="navbar-start">
            <a class="navbar-item"><router-link to ="/home">Home</router-link></a>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>
      
              <div class="navbar-dropdown">
                <a class="navbar-item"><router-link to ="/workouts">Workouts</router-link></a>
                <a class="navbar-item"><router-link to ="/friendsworkouts">Friends</router-link></a>
                <a class="navbar-item"><router-link to ="/history">History</router-link></a>
                <a class="navbar-item"><router-link to ="/admin">Admin</router-link></a>
                <hr class="navbar-divider">
                <a class="navbar-item"><router-link to ="/about">About</router-link></a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary"><strong>Sign up</strong></a>
                <a class="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

</template>