import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";

export const routes = [
  {
    path: "/",
    name: "daosyn",
    meta: { title: "daosyn.info" },
    component: home,
  },
  {
    path: "/about",
    name: "_me",
    meta: { title: "about me" },
    component: () => import("../views/about.vue"),
  },
  {
    path: "/youtube",
    name: "_yt",
    meta: { title: "alex g covers" },
    component: () => import("../views/covers.vue"),
  },
  // {
  //   path: "/goodreads",
  //   name: "_book",
  //   meta: { title: "favorite books" },
  //   component: () => import("../views/goodreads.vue"),
  // },
  {
    path: "/mastodon",
    name: "_mstdn",
    meta: { title: "mastodon" },
    component: () => import("../views/mastodon.vue"),
  },
  {
    path: "/lastfm",
    name: "_lastfm",
    meta: { title: "top albums of the month" },
    component: () => import("../views/lastfm.vue"),
  },
  {
    path: "/climb",
    name: "_climb",
    meta: { title: "beta spray" },
    component: () => import("../views/climb.vue"),
  },
  // {
  //   path: "/rain",
  //   name: "rainy days",
  //   component: () => import("../views/rain.vue"),
  // },
  {
    path: "/photos",
    name: "_photos",
    meta: { title: "photos" },
    component: () => import("../views/photos.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
