<template>
  <div ref="content">
    <div class="photo-container">
      <photo
        v-for="photo in photos"
        :key="photo.photoId"
        :server-id="serverId"
        :photo-id="photo.photoId"
        :secret="photo.secret"
        :size="size"
      />
    </div>
  </div>
</template>

<script>
import photo from "@/components/photo.vue";
export default {
  components: {
    photo,
  },
  data: () => ({
    // https://www.flickr.com/services/api/misc.urls.html
    serverId: 65535,
    photos: [
      // japan
      {
        photoId: 50106152443,
        secret: "1d6b977755",
      },
      {
        photoId: 50106957492,
        secret: "9190b35f90",
      },
      {
        photoId: 50106149833,
        secret: "24cd5578fb",
      },
      {
        photoId: 50106953317,
        secret: "cc2a74dd4f",
      },
      {
        photoId: 50106134373,
        secret: "c4a493295a",
      },
      {
        photoId: 50106134558,
        secret: "800f51ed98",
      },
      {
        photoId: 50106132158,
        secret: "d4f594acde",
      },
      {
        photoId: 50106131183,
        secret: "2113e94b41",
      },
      {
        photoId: 50106698361,
        secret: "2aacd27c35",
      },
      // hebru brantley
      {
        photoId: 50123443351,
        secret: "35b22bef1f",
      },
      {
        photoId: 50122878058,
        secret: "a49432ea7e",
      },
      // <3
      {
        photoId: 53708689175,
        secret: "ffac0dbda4",
      },
      {
        photoId: 53708466528,
        secret: "321b4e89b5",
      },
      {
        photoId: 53708256271,
        secret: "73229c0eb4",
      },
      {
        photoId: 53708256136,
        secret: "c0d046e56a",
      },
      {
        photoId: 53708584514,
        secret: "35ed1b6a46",
      },
      {
        photoId: 53708586109,
        secret: "7a6ef4e7ee",
      },
    ],
    size: null,
  }),
  created() {
    this.shuffleArray(this.photos);
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.size =
        this.$refs.content.clientWidth > this.$refs.content.clientHeight
          ? this.$refs.content.clientHeight + "px"
          : this.$refs.content.clientWidth + "px";
    },
    shuffleArray(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    },
  },
};
</script>

<style scoped>
.photo-container::-webkit-scrollbar {
  display: none;
}

.photo-container {
  scroll-snap-type: y mandatory;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: v-bind(size);
  height: v-bind(size);
}
</style>
