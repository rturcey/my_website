<template>
  <div class="home">
    <img class="home__img" src="../assets/photo.jpeg" />
    <div class="home-main">
      <span class="home__txt home__txt--hi">Hi! I'm</span>
      <div class="home__txt home__txt--name">
        Richard
        <span class="home__txt home__txt--name home__txt--coma">,</span>
      </div>
      <div class="home__txt home__txt--job">
        a
        <span class="home__txt--job home__txt--full">full stack</span>
        developer<span class="home__txt--job home__txt--dot">.</span>
      </div>
      <br />
      <span class="home__txt home__txt--would"
        >Would you be my first company ?</span
      >
      <router-link class="button button--hire" to="/contact">yes!</router-link>
    </div>
    <div class="footer">
      <div v-for="icon in icons" :key="icon.key" class="footer__wrap">
        <img class="footer__img" :src="getImgUrl(icon.path)" />
        <span class="footer__description">{{ icon.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
declare function require(name: string): string;

interface Icons {
  name: string;
  path: string;
}

interface State {
  icons: Icons[];
}

export default defineComponent({
  name: "Home",
  data(): State {
    return {
      icons: [
        { name: "Typescript", path: "typescript.png" },
        { name: "Javascript", path: "javascript.png" },
        { name: "Vue.js", path: "vuejs.png" },
        { name: "HTML5", path: "html.png" },
        { name: "CSS3", path: "css.png" },
        { name: "Sass", path: "sass.png" },
        { name: "Node.js", path: "nodejs.png" },
        { name: "NestJS", path: "nestjs.png" },
        { name: "npm", path: "npm.png" },
        { name: "PostgreSQL", path: "postgresql.png" },
        { name: "Git", path: "git.png" },
        { name: "GitHub", path: "github.png" },
        { name: "Bash", path: "bash.png" },
        { name: "Ubuntu", path: "ubuntu.png" },
        { name: "Docker", path: "docker.png" },
      ],
    };
  },
  mounted: function (): void {
    const texts = document.querySelectorAll(".home__txt");
    const images = document.querySelectorAll(".footer__img");
    const button = document.querySelector(".button--hire");
    const avatar = document.querySelector(".home__img");

    if (button)
      button.setAttribute("style", `animation: leftFade 2s ease forwards 2s`);
    if (avatar)
      avatar.setAttribute("style", `animation: bottomFade 1s ease forwards`);

    texts.forEach((text, index) => {
      if (index % 2)
        text.setAttribute(
          "style",
          `animation: leftFade 2s ease forwards ${index / 2 - 1}s`
        );
      else
        text.setAttribute(
          "style",
          `animation: rightFade 1s ease forwards ${index / 2 - 1}s`
        );
    });

    images.forEach((image, index) => {
      image.setAttribute(
        "style",
        `animation: topFade 1.5s ease forwards ${index / 4 - 1}s`
      );
    });
  },
  methods: {
    getImgUrl(name: string): string {
      return require(`../assets/${name}`);
    },
  },
});
</script>

<style lang="scss"></style>
