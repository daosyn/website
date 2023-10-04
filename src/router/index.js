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
    name: "_me",
    component: () => import("../views/about.vue"),
  },
  {
    path: "/youtube",
    name: "_yt",
    component: () => import("../views/youtube.vue"),
  },
  {
    path: "/goodreads",
    name: "_book",
    component: () => import("../views/goodreads.vue"),
  },
  {
    path: "/mastodon",
    name: "_mstdn",
    component: () => import("../views/mastodon.vue"),
  },
  {
    path: "/lastfm",
    name: "_lastfm",
    component: () => import("../views/lastfm.vue"),
  },
  {
    path: "/transparent_girl",
    name: "_climb",
    component: () => import("../views/climb.vue"),
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
