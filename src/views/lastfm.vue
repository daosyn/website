<template>
  <div>
    <a href="https://www.last.fm/user/daosyn" target="_blank">
      <img
        alt="lastfm collage"
        src="https://tapmusic.net/collage.php?user=daosyn&type=1month&size=3x3"
        :style="{
          height: isLandscape ? 'auto' : '100%',
          width: isLandscape ? '100%' : 'auto',
        }"
      />
    </a>
  </div>
</template>

<script>
export default {
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
