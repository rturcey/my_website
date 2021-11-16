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
          <a target="_blank" :href="icon.url"
            ><img
              class="about__img about__img--social"
              :src="getImgUrl(icon.path)"
          /></a>
          <span
            class="about-techno__description about-techno__description--socials"
            >{{ icon.name }}</span
          >
        </div>
      </div>
    </div>
    <LongVersion v-if="long" />
    <ShortVersion v-else />
  </div>
</template>

<script lang="ts">
declare function require(name: string): string;
import { defineComponent } from "vue";
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

export default defineComponent({
  name: "About",
  components: {
    LongVersion,
    ShortVersion,
  },
  data(): State {
    return {
      frontIcons: [
        { name: "Typescript", path: "typescript.svg" },
        { name: "Javascript", path: "javascript.svg" },
        { name: "Vue.js", path: "vuejs.svg" },
        { name: "HTML5", path: "html.svg" },
        { name: "CSS3", path: "css.svg" },
        { name: "Sass", path: "sass.svg" },
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
        {
          name: "LinkedIn",
          path: "linkedin.png",
          url: "https://www.linkedin.com/in/richard-turcey-a0830283/",
        },
        {
          name: "GitHub",
          path: "github-light.png",
          url: "https://github.com/rturcey",
        },
        {
          name: "Instagram",
          path: "instagram.png",
          url: "https://www.instagram.com/richard_trc/",
        },
        {
          name: "YouTube",
          path: "youtube.png",
          url: "https://www.youtube.com/c/richardturcey",
        },
      ],
      long: false,
    };
  },
  methods: {
    getImgUrl(name: string): string {
      return require(`../assets/${name}`);
    },

    setFalse(): void {
      this.long = false;
    },
    setTrue(): void {
      this.long = true;
    },
  },
});
</script>

<style lang="scss"></style>
