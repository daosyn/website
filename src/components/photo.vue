<!--
  https://www.flickr.com/services/api/misc.urls.html
    note on flickr size suffixes:
    s       thumbnail   75  cropped square
    q       thumbnail   150 cropped square
    t       thumbnail   100
    m       small       240    
    n       small       320    
    w       small       400    
    (none)  medium      500    
    z       medium      640    
    c       medium      800    
    b       large       1024    
-->
<template>
  <a :href="`https://www.flickr.com/photos/daosyn/${photoId}`" target="_blank">
    <img
      :src="`https://live.staticflickr.com/${serverId}/${photoId}_${secret}_c.jpg`"
      :alt="`photo id ${photoId} from flickr`"
  /></a>
</template>

<script setup>
defineProps(["serverId", "photoId", "secret", "size"]);
</script>

<style scoped>
img {
  scroll-snap-align: start;
  object-fit: cover;
  width: v-bind(size);
  height: v-bind(size);
}
</style>
