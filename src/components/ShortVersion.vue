<template>
  <div class="about-text about-text--short">
    <div>
      <span class="about-text--highlight about-text--highlight--short"
        >I am</span
      ><br />
      27 · French · Bayonne (64)<br /><br />
      <span class="about-text--highlight about-text--highlight--short"
        >searching for</span
      >
      <ul>
        <li>6 months internship or first job</li>
        <li>Front end or full stack (JS/TS)</li>
      </ul>
    </div>
    <div>
      <span class="about-text--highlight about-text--highlight--short"
        >Guidelines</span
      ><br />
      discover · learn · share · create<br /><br />
      <span class="about-text--highlight about-text--highlight--short"
        >Hobbies / Interests</span
      ><br />
      writing · reading · playing composing & listening to music · yoga · run · cooking ·
      ecology · design<br /><br />
    </div>
    <div>
      <span class="about-text--highlight about-text--highlight--short"
        >I currently</span
      ><br />
      <span class="about-text--highlight"
        >am a
        <a target="_blank" href="https://42.fr/" class="about-text__link"
          >42 Paris</a
        >
        student, since 2019</span
      ><br />
      <span class="about-text--highlight about-text--highlight--skills"
        >soft skills:</span
      ><br />
      sharing · collaboration · mutual aid · autonomy · self-discipline ·
      curiosity · tenacity · patience · accountability
    </div>
    <div>
      <span class="about-text--highlight about-text--highlight--short"
        >I was</span
      ><br />
      <span class="about-text--highlight">a french and literature teacher</span
      ><br />
      <span class="about-text--highlight about-text--highlight--skills"
        >soft skills:</span
      ><br />
      good communication · adaptability · organization · critical mind · decision making · inventiveness · humility
    </div>

    <div class="about-techno about-techno--short">
      <span class="about-techno__title">Front</span>
      <span class="about-techno__title">Back</span>
      <span class="about-techno__title">Miscellaneous</span>
      <div class="about-techno-icons">
        <div
          v-for="icon in frontIcons"
          :key="icon.key"
          class="about-techno__wrap"
        >
          <img
            class="about__img about__img--front"
            :src="getImgUrl(icon.path)"
          />
          <span class="about-techno__description">{{ icon.name }}</span>
        </div>
      </div>
      <div class="about-techno-icons">
        <div
          v-for="icon in backIcons"
          :key="icon.key"
          class="about-techno__wrap"
        >
          <img
            class="about__img about__img--back"
            :src="getImgUrl(icon.path)"
          />
          <span class="about-techno__description">{{ icon.name }}</span>
        </div>
      </div>
      <div class="about-techno-icons">
        <div
          v-for="icon in miscIcons"
          :key="icon.key"
          class="about-techno__wrap"
        >
          <img
            class="about__img about__img--misc"
            :src="getImgUrl(icon.path)"
          />
          <span class="about-techno__description">{{ icon.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
declare function require(name: string): string;

interface Icons {
  name: string;
  path: string;
}

interface State {
  frontIcons: Icons[];
  backIcons: Icons[];
  miscIcons: Icons[];
  long: boolean;
}

export default {
  name: "ShortVersion",
  mounted: function (): void {
    const text = document.querySelector(".about-text");

    if (text) {
      text.setAttribute("style", "");
      text.setAttribute("style", "animation: fade 1s ease forwards");
    }
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
      long: false,
    };
  },
  methods: {
    getImgUrl(name: string): string {
      return require(`../assets/${name}`);
    },
  },

};
</script>

<style lang="scss"></style>
