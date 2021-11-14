<template>
  <div class="about">
    <div class="about-left">
      <div
        :class="['about-selector', !long ? 'about-selector--active' : '']"
        @click="setFalse"
      >
        short version
      </div>
      <div
        :class="['about-selector', long ? 'about-selector--active' : '']"
        @click="setTrue"
      >
        long version
      </div>
      <div class="about-socials">
        <div
          v-for="icon in socialIcons"
          :key="icon.key"
          class="about-techno__wrap"
        >
          <a :href="icon.url"><img
            class="about__img about__img--social"
            :src="getImgUrl(icon.path)"
          /></a>
          <span class="about-techno__description about-techno__description--socials">{{ icon.name }}</span>
        </div>
      </div>
    </div>
    <LongVersion v-if="long" />
    <ShortVersion v-else />
  </div>
</template>

<script lang="ts">
declare function require(name: string): string;
import LongVersion from "../components/LongVersion.vue";
import ShortVersion from "../components/ShortVersion.vue";

interface Icons {
  name: string;
  path: string;
  url?: string;
}

interface State {
  frontIcons: Icons[];
  backIcons: Icons[];
  miscIcons: Icons[];
  socialIcons: Icons[];
  long: boolean;
}

export default {
  name: "About",
  components: {
    LongVersion, ShortVersion
  },
  data(): State {
    return {
      frontIcons: [
        { name: "Typescript", path: "typescript.svg" },
        { name: "Javascript", path: "javascript.svg" },
        { name: "HTML5", path: "html.svg" },
        { name: "CSS3", path: "css.svg" },
        { name: "Sass", path: "sass.svg" },
        { name: "Vue.js", path: "vuejs.svg" },
      ],
      backIcons: [
        { name: "Node.js", path: "nodejs.svg" },
        { name: "NestJS", path: "nestjs.svg" },
        { name: "npm", path: "npm.svg" },
        { name: "PostgreSQL", path: "postgresql.svg" },
      ],
      miscIcons: [
        { name: "Git", path: "git.svg" },
        { name: "GitHub", path: "github-light.png" },
        { name: "Bash", path: "bash.svg" },
        { name: "Ubuntu", path: "ubuntu.svg" },
        { name: "Docker", path: "docker.svg" },
      ],
      socialIcons: [
        { name: "LinkedIn", path: "linkedin.png", url: "https://www.linkedin.com/in/richard-turcey-a0830283/" },
        { name: "GitHub", path: "github-light.png", url: "https://github.com/rturcey" },
        { name: "Instagram", path: "instagram.png", url: "https://www.instagram.com/richard_trc/" },
        { name: "YouTube", path: "youtube.png", url: "https://www.youtube.com/c/richardturcey" },
      ],
      long: false,
    };
  },
  mounted: function (): void {
    const social = document.querySelectorAll(".about__img--social");

      social.forEach((icon, index) => {
        icon.setAttribute("style", "");
        icon.setAttribute(
          "style",
          `animation: leftFade 2s ease forwards ${index / 7}s`
        );
      });
  },
  methods: {
    getImgUrl(name: string): string {
      return require(`../assets/${name}`);
    },
    refreshAnimations(): void {
      const front = document.querySelectorAll(".about__img--front");
      const back = document.querySelectorAll(".about__img--back");
      const misc = document.querySelectorAll(".about__img--misc");
      const texts = document.querySelectorAll(".about-text");
      const highlights = document.querySelectorAll(".about-text--highlight");

      texts.forEach((text) => {
        text.setAttribute("style", `animation: fade 4s ease forwards`);
      });

      highlights.forEach((text, index) => {
        if (index % 4 == 1)
          text.setAttribute("style", `animation: leftFade 2s ease forwards`);
        else if (index % 4 == 2)
          text.setAttribute("style", `animation: rightFade 2s ease forwards`);
        else if (index % 4 == 3)
          text.setAttribute("style", `animation: bottomFade 2s ease forwards`);
        else if (index % 4 == 0)
          text.setAttribute("style", `animation: topFade 2s ease forwards`);
      });

      front.forEach((icon, index) => {
        icon.setAttribute("style", "");
        icon.setAttribute(
          "style",
          `animation: leftFade 2s ease forwards ${(front.length - index) / 7}s`
        );
      });

      back.forEach((icon, index) => {
        icon.setAttribute("style", "");
        icon.setAttribute(
          "style",
          `animation: bottomFade 2s ease forwards ${index / 7}s`
        );
      });

      misc.forEach((icon, index) => {
        icon.setAttribute("style", "");
        icon.setAttribute(
          "style",
          `animation: rightFade 2s ease forwards ${index / 7}s`
        );
      });
    },
    setFalse(): void {
      this.refreshAnimations();
      this.long = false;
    },
    setTrue(): void {
      this.refreshAnimations();
      this.long = true;
    },
  },
};
</script>

<style lang="scss"></style>
