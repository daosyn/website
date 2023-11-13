<template>
  <div class="youtube-video-container">
    <iframe
      width="560"
      height="315"
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
    };
  },
  methods: {
    handleLoad() {
      this.loaded = true;
    },
  },
};
</script>

<style scoped>
.youtube-video-container {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.youtube-video-container::after {
  display: block;
  content: "";
  padding-top: 56.25%;
}

.youtube-video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
