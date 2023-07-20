<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Default/Header.vue'
import Footer from './components/Default/Footer.vue';
</script>

<template>
  <div class="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100vh;
}
</style>
