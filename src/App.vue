<template>
  <div id="desktop-container" v-if="isDesktop">
    <Cube />
    <router-view />
  </div>
  <div id="mobile-container" v-else>
    <router-view />
    <Cube />
  </div>
</template>

<script>
import Cube from "@/components/Cube.vue";

export default {
  setup() {},
  components: {
    Cube,
  },
  computed: {
    isDesktop() {
      return window.innerWidth > window.innerHeight; // if false, likely mobile
    },
  },
};
</script>

<style>
html,
body {
  height: 90%;
  background-color: #252525;
}

@font-face {
  font-family: "savior";
  src: local("savior"), url(./fonts/savior.woff) format("woff");
}

#app,
#desktop-container,
#mobile-container {
  font-family: "savior", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  height: 100%;
  display: grid;
}
#desktop-container {
  grid-template-columns: 50% 50%;
}

#mobile-container {
  grid-template-rows: 60% 40%;
}
</style>
