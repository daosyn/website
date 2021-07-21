<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <Cube />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Cube from "@/components/Cube.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Cube,
  },
};
</script>
