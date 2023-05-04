<template>
  <div class="youtube-video-container">
    <iframe width="560" height="315"
      src="https://www.youtube.com/embed/videoseries?list=PLuZs8bwd7syWgz3LE28M1cug9IPceObC3" title="YouTube video player"
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
</template>

<style scoped>
.youtube-video-container {
  position: relative;
  overflow: hidden;
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
