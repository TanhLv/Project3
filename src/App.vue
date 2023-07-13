<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Default/Header.vue'
</script>

<template>
  <div class="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100vh;
}
</style>
