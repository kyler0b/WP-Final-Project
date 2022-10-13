<script setup lang="ts">
    import session, { login, logout } from '../stores/session'
</script>

<template>
    <div class="buttons" v-if="session.user == null">
        <a class="button is-primary">
            <strong>Sign up</strong>
        </a>
        <a class="button is-light" @click="login('Admin', 'User', true)">
            Log in
        </a>
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
Footer
