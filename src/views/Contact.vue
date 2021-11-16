<template>
  <div class="contact-form-wrap">
    <div class="about-socials about-socials--contact">
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
    <form class="contact-form" ref="form" @submit.prevent="sendEmail">
      <label class="contact-form__label">Name</label>
      <input
        class="contact-form__input"
        type="text"
        name="from_name"
        placeholder="your name"
        maxlength="50"
        required
      />
      <label class="contact-form__label">Email</label>
      <input
        class="contact-form__input"
        type="email"
        name="from_email"
        placeholder="your email"
        maxlength="100"
        required
      />
      <label class="contact-form__label">Message</label>
      <textarea
        class="contact-form__input contact-form__input--text-area"
        name="message"
        cols="30"
        rows="5"
        placeholder="your message"
        maxlength="2000"
        required
      />
      <vue-recaptcha
        class="g-captcha"
        theme="dark"
        size="normal"
        :tabindex="0"
        @widgetId="recaptchaWidget = $event"
        @verify="callbackVerify($event)"
        @expired="callbackExpired()"
        @fail="callbackFail()"
      />
      <input class="button button--contact-form"
        type="submit"
        :value="buttonText"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import emailjs from "emailjs-com";
import { VueRecaptcha, useRecaptcha } from "vue3-recaptcha-v2";

interface Icons {
  name: string;
  path: string;
  url?: string;
}

interface State {
  socialIcons: Icons[];
  buttonText: string;
}

export default defineComponent({
  name: "Contact",
  components: { VueRecaptcha },
  methods: {
    getImgUrl(name: string): string {
      return require(`../assets/${name}`);
    },

    resetForm(form: HTMLFormElement): void {
      form.reset();
    },

    sendEmail(): void {

      const button = document.querySelector(".button--contact-form");

      emailjs
        .sendForm(
          "service_mywebsite",
          "template_dp7i8it",
          this.$refs.form as HTMLFormElement,
          "user_1QQRWh1wjegu9SG6h2EvX"
        )
        .then(
          (res) => {
            console.log(res.text);
            if (button)
              button.classList.add("button--contact-form--sent");
            this.buttonText = "Sent!";
            this.resetForm(this.$refs.form as HTMLFormElement);
          },
          (err) => {
            console.log(err.text);
            if (button)
              button.classList.add("button--contact-form--err");
            this.buttonText = "Error :-(";
          }
        );
    },
  },
  data(): State {
    return {
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
      buttonText: "Send",
    };
  },
  mounted: function (): void {
    const form = document.querySelector(".contact-form-wrap");
    const social = document.querySelectorAll(".about__img--social");

    social.forEach((icon, index) => {
      icon.setAttribute("style", "");
      icon.setAttribute(
        "style",
        `animation: leftFade 2s ease forwards ${index / 7}s`
      );
    });

    if (form) {
      form.setAttribute("style", "");
      form.setAttribute("style", "animation: fade 2s ease forwards");
    }
  },
  setup: () => {
    // Reset Recaptcha
    const { resetRecaptcha } = useRecaptcha();
    const recaptchaWidget = ref(null);

    const callbackVerify = (res: string) => {
      console.log(res);
    };
    const callbackExpired = () => {
      console.log("expired!");
    };
    const callbackFail = () => {
      console.log("fail");
    };
    // Reset Recaptcha action
    const actionReset = () => {
      if (recaptchaWidget.value) resetRecaptcha(Number(recaptchaWidget.value));
    };

    return {
      recaptchaWidget,
      callbackVerify,
      callbackFail,
      callbackExpired,
      actionReset,
    };
  },
});
</script>

<style lang="scss"></style>
