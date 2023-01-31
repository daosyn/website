<template>
  <!-- <div class="bandcamp-container">
    <iframe
      style="border: 0; width: 350px; height: 442px"
      src="https://bandcamp.com/EmbeddedPlayer/track=2497088647/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/transparent=true/"
      seamless
      ><a href="https://doingnothing.bandcamp.com/track/if-you-wanna"
        >if you wanna by bleak delusions</a
      ></iframe
    >
  </div> -->
  <div class="youtube-video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLuZs8bwd7syWgz3LE28M1cug9IPceObC3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<style scoped>
.bandcamp-container {
  position: relative;
  text-align: center;
}

.bandcamp-iframe {
  height: 100%;
  border: none;
}
.youtube-video-container {
  position: relative;
  overflow: hidden;
  width: 100%;
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
