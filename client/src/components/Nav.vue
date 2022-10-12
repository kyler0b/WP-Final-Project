<script setup lang = "ts">
    import router from '../router/index'
    import { ref } from 'vue';

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
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu" a :class="{ 'is-active': isActive}">
          <div class="navbar-start">
            <a class="navbar-item" href="/home">Home</a>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>
      
              <div class="navbar-dropdown">
                <a class="navbar-item" href ="/workouts">Workouts</a>
                <a class="navbar-item" href= "/friendsworkouts">Friends</a>
                <a class="navbar-item" href ="/history">History</a>
                <a class="navbar-item" href ="/admin">Admin</a>
                <hr class="navbar-divider">
                <a class="navbar-item" href ="/about">About</a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary" href="/signup"><strong>Sign up</strong></a>
                <a class="button is-light" href="/login">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

</template>