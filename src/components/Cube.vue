<template>
  <div>
    <div v-for="(row, y) in faceletMatrix" :key="y">
      <span v-for="(facelet, x) in row" :key="x" :class="facelet">o</span>
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
      const axis = Math.floor(Math.random() * 2);
      if (axis) {
        direction ? this.moveLeft(index) : this.moveRight(index);
      } else {
        direction ? this.moveUp(index) : this.moveDown(index);
      }
    }, 1000);
  },
  data() {
    return {
      faceletMatrix: [
        ["color-0", "color-1", "color-2", "color-3", "color-4", "color-5"],
        ["color-0", "color-1", "color-2", "color-3", "color-4", "color-5"],
        ["color-0", "color-1", "color-2", "color-3", "color-4", "color-5"],
        ["color-0", "color-1", "color-2", "color-3", "color-4", "color-5"],
        ["color-0", "color-1", "color-2", "color-3", "color-4", "color-5"],
        ["color-0", "color-1", "color-2", "color-3", "color-4", "color-5"],
        // [0, 1, 2, 3, 4, 5],
      ],
    };
  },
  methods: {
    moveUp(column) {
      let prev = this.faceletMatrix[0][column];
      for (var i = this.faceletMatrix.length - 1; i >= 0; i--) {
        let temp = this.faceletMatrix[i][column];
        this.faceletMatrix[i][column] = prev;
        prev = temp;
      }
    },
    moveDown(column) {
      let prev = this.faceletMatrix[this.faceletMatrix.length - 1][column];
      for (const facelet of this.faceletMatrix) {
        let temp = facelet[column];
        facelet[column] = prev;
        prev = temp;
      }
    },
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
 .color-0 {
    background: red;
 }
 .color-1 {
    background: blue;
 }
 .color-2 {
    background: white;
 }
 .color-3 {
    background: orange;
 }
 .color-4 {
    background: green;
 }
 .color-5 {
    background: yellow;
 }
</style>
