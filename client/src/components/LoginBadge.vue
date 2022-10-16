<script setup lang="ts">
    import session, { login, logout } from '../stores/session'

    // @click="login('Admin', 'User', true)"
</script>

<template>
    <div class="buttons" v-if="session.user == null">
        <router-link to = "/signup" class="button is-primary"><strong>Sign Up</strong></router-link>
    
        <router-link to = "/login" class="button is-light">Log In</router-link>
    
    </div>
    <div v-else>
        <a class="button is-primary">
            Welcome {{session.user.firstName}} {{session.user.lastName}}
        </a>
        
        <a class="button is-light" @click="logout()">
            Log Out
        </a>
    </div>

</template>


<style scoped>

</style>
