<template>
  <div v-if="isLandscape" id="desktop-container">
    <cube id="cube-container" />
    <router-view id="content-container" />
  </div>
  <div v-else id="mobile-container">
    <router-view id="content-container" />
    <cube id="cube-container" />
  </div>
</template>

<script>
import cube from "@/components/cube.vue";

export default {
  components: {
    cube,
  },
  setup: () => {},
  data: () => ({
    isLandscape: window.innerWidth > window.innerHeight,
  }),
  mounted() {
    window.addEventListener("resize", () => {
      this.isLandscape = window.innerWidth > window.innerHeight;
    });
  },
};
</script>

<style>
html,
body {
  background-color: #252525;
  height: 95vh;
}

@font-face {
  font-family: "savior";
  src: local("savior"), url(/fonts/savior.woff) format("woff");
}

#app {
  height: 95vh;
}

#app,
#desktop-container,
#mobile-container {
  font-family: "savior", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  display: grid;
  height: 95vh;
}

#desktop-container {
  grid-template-columns: 50% 50%;
}

#mobile-container {
  grid-template-rows: 50% 50%;
}

#content-container {
  overflow-x: hidden;
  overflow-y: auto;
  margin: 2vw;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

#cube-container {
  margin: 1vw;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
