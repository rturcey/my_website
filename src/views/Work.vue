<template>
  <div class="work-slider">
    <div class="slider_arrow" @click="decrementCount">
      <img class="slider-arrow__img" :src="getImgUrl('sliderarrow_left.png')" />
    </div>
    <div v-if="width < 768" class="slider_arrow" @click="incrementCount">
      <img
        class="slider-arrow__img"
        :src="getImgUrl('sliderarrow_right.png')"
      />
    </div>
    <div class="work-card">
      <div class="work-img-wrap">
        <img class="work-card__img" :src="getImgUrl(workCards[count].path)" />
        <a target="_blank" class="work-card__link" :href="workCards[count].url"
          ><img
            class="work-card__link-img"
            :src="getImgUrl('github-light.png')"
          />see on github</a
        >
      </div>
      <div class="work-card-content">
        <span class="work-card__title">{{ workCards[count].name }}</span>
        <div class="work-techno">
          <div
            v-for="icon in getIcons(workCards[count].name)"
            :key="icon.key"
            class="work-techno__wrap"
          >
            <img
              class="work__img work__img--website"
              :src="getImgUrl(icon.path)"
            />
            <span class="work-techno__description">{{ icon.name }}</span>
          </div>
        </div>
        <p class="work-card__text">{{ workCards[count].text }}</p>
        <a
          class="work-card__text work-card__text--link"
          :href="workCards[count].url"
          >→ see on github</a
        >
      </div>
    </div>
    <div v-if="width >= 768" class="slider_arrow" @click="incrementCount">
      <img
        class="slider-arrow__img"
        :src="getImgUrl('sliderarrow_right.png')"
      />
    </div>
  </div>
</template>

<script lang="ts">
declare function require(name: string): string;
import { ref, defineComponent, onMounted, computed } from "vue";

interface Icons {
  name: string;
  path: string;
  url?: string;
}

interface Cards {
  name: string;
  path: string;
  url: string;
  text: string;
}

interface State {
  websiteIcons: Icons[];
  transcendenceIcons: Icons[];
  webservIcons: Icons[];
  minirtIcons: Icons[];
  workCards: Cards[];
  count: number;
}

export default defineComponent({
  name: "Work",
  components: {},
  data(): State {
    return {
      websiteIcons: [
        { name: "Typescript", path: "typescript.svg" },
        { name: "Javascript", path: "javascript.svg" },
        { name: "Vue.js", path: "vuejs.svg" },
        { name: "HTML5", path: "html.svg" },
        { name: "CSS3", path: "css.svg" },
        { name: "Sass", path: "sass.svg" },
      ],
      transcendenceIcons: [
        { name: "Typescript", path: "typescript.svg" },
        { name: "Javascript", path: "javascript.svg" },
        { name: "Vue.js", path: "vuejs.svg" },
        { name: "HTML5", path: "html.svg" },
        { name: "CSS3", path: "css.svg" },
        { name: "Sass", path: "sass.svg" },
        { name: "Node.js", path: "nodejs.svg" },
        { name: "NestJS", path: "nestjs.svg" },
        { name: "npm", path: "npm.svg" },
        { name: "PostgreSQL", path: "postgresql.svg" },
        { name: "Docker", path: "docker.svg" },
      ],
      webservIcons: [{ name: "C++", path: "cpp.png" }],
      minirtIcons: [{ name: "C", path: "c.png" }],
      workCards: [
        {
          name: "This Website",
          path: "website.png",
          url: "https://github.com/rturcey/my_website",
          text: "My personal website, developed only with Vue.js, in full Typescript. No CMS. No other framework. Pure home made!",
        },
        {
          name: "Ft_Transcendence",
          path: "transcendence.png",
          url: "https://github.com/42esoulard/42_ft_transcendence",
          text: "A pong contest website, with a chat, an admin view, real-time multiplayer online games and user accounts (work in progress, team project).",
        },
        {
          name: "Webserv",
          path: "webserv.png",
          url: "https://github.com/rturcey/webserv",
          text: "An HTTP 1.1 server in C++ 98, according to RFC and based on Nginx (GET, POST, DELETE, PUT methods). Graded 110%, in pairs.",
        },
        {
          name: "miniRT",
          path: "minirt.png",
          url: "https://github.com/rturcey/miniRT",
          text: "A RayTracer in C, rendering computer-generated-images, implementing many mathematical formulas. Graded 125%, solo.",
        },
      ],
      count: 0,
    };
  },
  mounted: function (): void {
    const workCard = document.querySelector(".work-card");

    if (workCard) {
      workCard.setAttribute("style", "");
      workCard.setAttribute("style", "animation: fade 1s ease forwards");
    }
  },
  methods: {
    getImgUrl(name: string): string {
      return require(`../assets/${name}`);
    },

    refreshAnimations(): void {
      console.log("");
    },

    getIcons(name: string): Icons[] {
      if (name === "This Website") return this.websiteIcons;
      else if (name === "Ft_Transcendence") return this.transcendenceIcons;
      else if (name === "Webserv") return this.webservIcons;
      else return this.minirtIcons;
    },

    incrementCount(): void {
      const workCard = document.querySelector(".work-card");

      if (workCard) {
        workCard.setAttribute("style", "");
        workCard.setAttribute(
          "style",
          "animation: rightSlide 1s ease forwards"
        );
      }

      setTimeout(
        function (vm: { count: number }) {
          const workCard = document.querySelector(".work-card");

          if (workCard) {
            workCard.setAttribute("style", "");
            workCard.setAttribute(
              "style",
              "animation: newRightSlide 1s ease forwards"
            );
          }
          vm.count++;
          if (vm.count == 4) vm.count = 0;
        },
        500,
        this
      );
    },

    decrementCount(): void {
      const workCard = document.querySelector(".work-card");

      if (workCard) {
        workCard.setAttribute("style", "");
        workCard.setAttribute("style", "animation: leftSlide 1s ease forwards");
      }

      setTimeout(
        function (vm: { count: number }) {
          const workCard = document.querySelector(".work-card");

          if (workCard) {
            workCard.setAttribute("style", "");
            workCard.setAttribute(
              "style",
              "animation: newLeftSlide 1s ease forwards"
            );
          }
          vm.count--;
          if (vm.count == -1) vm.count = 3;
        },
        500,
        this
      );
    },
  },
  setup() {
    const windowWidth = ref(window.innerWidth);
    const windowHeight = ref(window.innerHeight);

    const onResize = () => {
      windowWidth.value = window.innerWidth;
      windowHeight.value = window.innerHeight;
    };

    onMounted(() => {
      window.addEventListener("resize", onResize);
    });

    return {
      width: computed(() => windowWidth.value),
      height: computed(() => windowHeight.value),
    };
  },
});
</script>

<style lang="scss"></style>
