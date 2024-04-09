<template>
  <div class="mastodon-container">
    <iframe
      width="560"
      height="315"
      src="https://www.mastofeed.com/apiv2/feed?userurl=https%3A%2F%2Fmastodon.social%2Fusers%2Fdaosyn&theme=dark&size=100&header=false&replies=false&boosts=false"
      title="mastodon feed"
      frameborder="0"
      sandbox="allow-top-navigation allow-scripts allow-popups allow-popups-to-escape-sandbox"
      @load="handleLoad"
      v-show="loaded"
    />
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
    };
  },
  methods: {
    handleLoad() {
      this.loaded = true;
    },
  },
};
</script>
