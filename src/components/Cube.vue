<template>
  <div>
    <div v-for="(row, y) in faceletMatrix" :key="y">
      <span v-for="(facelet, x) in row" :key="x">{{ facelet }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cube",
  props: {},
  created() {
    setInterval(() => {
      const index = Math.floor(Math.random() * 6);
      const direction = Math.floor(Math.random() * 2);
      direction ? this.moveLeft(index) : this.moveRight(index);
    }, 1000);
  },
  data() {
    return {
      faceletMatrix: [
        [0, 1, 2, 3, 4, 5],
        [0, 1, 2, 3, 4, 5],
        [0, 1, 2, 3, 4, 5],
        [0, 1, 2, 3, 4, 5],
        [0, 1, 2, 3, 4, 5],
        [0, 1, 2, 3, 4, 5],
      ],
    };
  },
  methods: {
    moveUp() {},
    moveDown() {},
    moveLeft(row) {
      this.faceletMatrix[row].push(this.faceletMatrix[row].shift());
    },
    moveRight(row) {
      this.faceletMatrix[row].unshift(this.faceletMatrix[row].pop());
    },
  },
};
</script>

<style>
</style>

{
    index
    color
}