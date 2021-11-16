import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueRecaptcha from "vue3-recaptcha-v2";

createApp(App)
  .use(store)
  .use(router)
  .use(VueRecaptcha, {
    siteKey: "6Ld7PzgdAAAAANRR545ViOKprq4F5Qw9A9mCUO2z",
    alterDomain: false, // default: false
  })
  .mount("#app");
