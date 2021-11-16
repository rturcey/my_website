import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Work from "../views/Work.vue";
import Contact from "../views/Contact.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
