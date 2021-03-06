<template>
  <nav class="navbar">
    <router-link class="navbar__name" to="/"> {{ name }}</router-link>
    <ul class="nav-links">
      <li class="nav-list" v-for="link in navLinks" :key="link.key">
        <div class="nav-link-wrapper">
          <router-link
            @click="openMobileNav"
            class="nav-list__link"
            :to="link.to"
          >
            {{ link.name }}
          </router-link>
        </div>
      </li>
    </ul>
    <div v-on:click="openMobileNav" class="burger">
      <div class="burger__line burger__line--1"></div>
      <div class="burger__line burger__line--2"></div>
      <div class="burger__line burger__line--3"></div>
    </div>
  </nav>
</template>

<script lang="ts">
import { onMounted, ref, computed, defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  props: ["name", "navLinks"],
  setup() {
    const windowWidth = ref(window.innerWidth);

    const onResize = () => {
      const nav = document.querySelector(".nav-links");

      windowWidth.value = window.innerWidth;
      if (nav) nav.classList.remove("nav-links--active");
    };

    onMounted(() => {
      window.addEventListener("resize", onResize);
    });

    return {
      width: computed(() => windowWidth.value),
    };
  },
  methods: {
    openMobileNav(): void {
      const burgerLines = document.querySelectorAll(".burger__line");
      const nav = document.querySelector(".nav-links");
      const links = document.querySelectorAll(".nav-list");

      if (this.width > 768) return;

      if (nav) nav.classList.toggle("nav-links--active");
      for (let i = 1; i < 4 && burgerLines; ++i) {
        burgerLines[i - 1].classList.toggle(`burger__line--${i}--toggle`);
      }
      links.forEach((link, index) => {
        if (link.getAttribute("style")) {
          link.removeAttribute("style");
        } else {
          link.setAttribute(
            "style",
            `animation: navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
          );
        }
      });
    },
  },
});
</script>

<style lang="scss"></style>
