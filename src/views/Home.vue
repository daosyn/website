<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Cube />
  </div>
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
