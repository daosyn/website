import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";

export const routes = [
  {
    path: "/",
    name: "daosyn",
    component: home,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/about.vue"),
  },
  {
    path: "/youtube",
    name: "youtube",
    component: () => import("../views/youtube.vue"),
  },
  // {
  //   path: "/rain",
  //   name: "rainy days",
  //   component: () => import("../views/rain.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
