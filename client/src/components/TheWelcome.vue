<script setup lang="ts">
//import WelcomeItem from './WelcomeItem.vue'
import { ref } from 'vue';

let isActive = ref(false);
</script>

<template>
    <WelcomeItem>
        <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a> 
    </WelcomeItem> 

</template>
