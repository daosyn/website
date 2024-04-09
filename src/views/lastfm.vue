<template>
  <div ref="content">
    <a href="https://www.last.fm/user/daosyn" target="_blank">
      <img
        alt="lastfm collage"
        src="https://tapmusic.net/collage.php?user=daosyn&type=1month&size=3x3"
        :height="size"
        :width="size"
        @load="handleLoad"
        v-show="loaded"
      />
    </a>
    <loader v-show="!loaded"></loader>
  </div>
</template>

<script>
import loader from "@/components/loader.vue";

export default {
  components: {
    loader,
  },
  data() {
    return {
      loaded: false,
      size: null,
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleLoad() {
      this.loaded = true;
    },
    handleResize() {
      this.size =
        this.$refs.content.clientWidth > this.$refs.content.clientHeight
          ? this.$refs.content.clientHeight
          : this.$refs.content.clientWidth;
    },
  },
};
</script>
