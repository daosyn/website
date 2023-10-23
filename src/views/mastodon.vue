<template>
  <div class="mastodon-container">
    <iframe
      width="560"
      height="315"
      src="https://www.mastofeed.com/apiv2/feed?userurl=https%3A%2F%2Fmastodon.social%2Fusers%2Fdaosyn&theme=dark&size=100&header=false&replies=false&boosts=false"
      title="mastodon feed"
      frameborder="0"
      sandbox="allow-top-navigation allow-scripts allow-popups allow-popups-to-escape-sandbox"
    />
  </div>
</template>

<style scoped>
.mastodon-container {
  position: relative;
  overflow: hidden;
}

.mastodon-container::after {
  display: block;
  content: "";
  padding-top: 56.25%;
}

.mastodon-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
