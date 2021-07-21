<template>
  <div ref="cube">
    <div v-for="(row, y) in faceletMatrix" :key="y">
      <span
        v-for="(facelet, x) in row"
        :key="x"
        :style="{
          width: faceletDimensions + 'px',
          height: faceletDimensions + 'px',
        }"
        :class="facelet"
        >o</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Cube",
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
      randomMovementHandler: null,
      faceletDimensions: null,
    };
  },
  mounted() {
    this.setFaceletDimensions();
    this.setRandomMovement();
    window.addEventListener("resize", this.setFaceletDimensions);
  },
  unmounted() {
    clearInterval(this.randomMovementHandler);
    window.removeEventListener("resize", this.setFaceletDimensions);
  },
  methods: {
    setFaceletDimensions() {
      this.faceletDimensions = this.$refs.cube.clientWidth / 6;
    },
    setRandomMovement() {
      this.randomMovementHandler = setInterval(() => {
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
span {
  display: inline-block;
  outline: 5px solid black;
  transition: 1s transform linear;
}

.moving-x {
  transform: translateX(50px);
}
.moving-y {
  transform: translateY(50px);
}

.color-0 {
  background-color: red;
}
.color-1 {
  background-color: blue;
}
.color-2 {
  background-color: white;
}
.color-3 {
  background-color: orange;
}
.color-4 {
  background-color: green;
}
.color-5 {
  background-color: yellow;
}
</style>
