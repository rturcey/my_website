<template>
  <div class="main-div">
    <Navbar
      name="Richard Turcey"
      :navLinks="[
        { name: 'Home', to: '/' },
        { name: 'About', to: '/about' },
        { name: 'Work', to: '/work' },
        { name: 'Contact', to: '/contact' },
      ]"
    />
    <router-view />
  </div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";

export default {
  nape: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "../sass/main.scss";
</style>
