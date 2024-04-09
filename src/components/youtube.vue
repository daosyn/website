<template>
  <div ref="content">
    <iframe
      :width="size"
      :height="size"
      :src="`https://www.youtube.com/embed/videoseries?list=${playlistId}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      @load="handleLoad"
      v-show="loaded"
    />
    <loader v-show="!loaded"></loader>
  </div>
</template>

<script>
import loader from "@/components/loader.vue";

export default {
  props: ["playlistId"],
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
