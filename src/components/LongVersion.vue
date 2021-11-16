<template>
  <div class="about-text">
    <div class="about-text__text-more">
      I'm a 27 years old french junior developer, and I live in Bayonne. I'm
      searching for a 6 months
      <span class="about-text--highlight">internship</span> or a
      <span class="about-text--highlight">first job</span>, ideally
      <span class="about-text--highlight">remotely</span>, as
      <span class="about-text--highlight">front end</span> or
      <span class="about-text--highlight">full stack</span>
      developer.<br /><br />
      I love to <span class="about-text--highlight">discover</span>,
      <span class="about-text--highlight">learn</span>,
      <span class="about-text--highlight">share</span> and express myself with
      <span class="about-text--highlight">creativity</span>. Coding is one of my
      favorite ways to do that.<br /><br />

      I'm a
      <span class="about-text--highlight">self-taught</span> person, and that's
      how I learned to compose music and play instruments. That is also why I chose
      to train at
      <a
        target="_blank"
        href="https://42.fr/"
        class="about-text--highlight about-text__link"
        >42 school</a
      >
      in Paris since 2019, where programming is taught with practical lessons,
      based on the principles of
      <span class="about-text--highlight">sharing</span>,
      <span class="about-text--highlight">collaboration</span> and
      <span class="about-text--highlight">mutual aid</span>, but also
      <span class="about-text--highlight">autonomy</span> and
      <span class="about-text--highlight">self-discipline</span>.<br /><br />

      Before I took this path, I was a french and literature teacher.
      This taught me many skills that turn out useful in my code practice, such as
      <span class="about-text--highlight">good communication</span>,
      <span class="about-text--highlight">adaptability</span> and
      <span class="about-text--highlight">organization</span> skills, having a
      <span class="about-text--highlight">critical mind</span> and
      <span class="about-text--highlight">making decisions</span>, solving
      problems with <span class="about-text--highlight">inventiveness</span> and
      <span class="about-text--highlight">humility</span>. My vocation has
      always been to study and express myself with languages - my native
      one as well as code and music.<br /><br />

      When not coding, I like to write, read, make or listen to music, run,
      practice yoga and cook. I am interested in the animal condition, ecology,
      and I have a curiosity for design (I am planning to train in webdesign in
      the coming years!)<br /><br />Here are some of the technologies I have
      mastered or that I am currently learning :
    </div>
    <div class="about-techno">
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
  name: "LongVersion",
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
  mounted: function (): void {
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
};
</script>

<style lang="scss"></style>
