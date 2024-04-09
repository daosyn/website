<template>
  <img
    :src="`https://live.staticflickr.com/${serverId}/${photoId}_${secret}_q.jpg`"
  />
</template>

<script setup>
/* 
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
*/
defineProps(["serverId", "photoId", "secret"]);
</script>

<style scoped></style>
