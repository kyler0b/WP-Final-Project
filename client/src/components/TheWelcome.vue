<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import WorkoutView from './views/WorkoutView.vue'
import HistoryView from './views/HistoryView.vue'
import AdminView from './views/AdminView.vue'
import { ref } from 'vue';

let isActive = ref(false);
</script>

<template>
    <WelcomeItem>
    </WelcomeItem>
</template>
