<template>
  <div ref="cube">
    <div v-for="(row, y) in faceletMatrix" :key="y">
      <template v-for="(facelet, x) in row" :key="x">
        <router-link v-if="facelet.route" :to="facelet.route.path" custom v-slot="{ navigate }">
          <div @click="navigate" @keypress.enter="navigate" role="link" :style="[faceletDimensions, facelet.isMoving]"
            :class="facelet.classes">
            {{ facelet.route.name }}
          </div>
        </router-link>
        <div v-else :style="[faceletDimensions, facelet.isMoving]" :class="facelet.classes"></div>
      </template>
    </div>
  </div>
</template>

<script>
import { routes } from "@/router/index.js";

export default {
  name: "cube",
  data: () => ({
    faceletMatrix: new Array(6).fill().map((_, y) =>
      new Array(6).fill().map((_, x) => ({
        x,
        y,
        classes: [`color-${y}`, "facelet"],
        isMoving: { transform: "" },
        route: null,
      }))
    ),
    randomMovementHandler: null,
    faceletDimensions: null,
    size: null,
  }),
  mounted() {
    this.setRoutes();
    this.setFaceletDimensions();
    this.setRandomMovement();
    window.addEventListener("resize", this.setFaceletDimensions);
  },
  unmounted() {
    clearInterval(this.randomMovementHandler);
    window.removeEventListener("resize", this.setFaceletDimensions);
  },
  methods: {
    setRoutes() {
      routes.forEach((route) => {
        let x = Math.floor(Math.random() * 6);
        let y = Math.floor(Math.random() * 6);
        while (this.faceletMatrix[x][y].route) {
          x = Math.floor(Math.random() * 6);
          y = Math.floor(Math.random() * 6);
        }
        this.faceletMatrix[x][y].route = route;
        this.faceletMatrix[x][y].classes.push("link");
      });
    },
    setFaceletDimensions() {
      this.size =
        this.$refs.cube.clientWidth > this.$refs.cube.clientHeight
          ? this.$refs.cube.clientHeight / 6 - 20
          : this.$refs.cube.clientWidth / 6 - 20;
      this.faceletDimensions = {
        width: this.size + "px",
        height: this.size + "px",
      };
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
    moveY(column, size) {
      for (const facelet of this.faceletMatrix) {
        facelet[column].isMoving.transform = `translateY(${size}px)`;
      }
      setTimeout(() => {
        const down = size > 0;
        const lastIndex = this.faceletMatrix.length - 1;
        let prev = this.faceletMatrix[down ? lastIndex : 0][column];
        for (
          let i = down ? 0 : lastIndex;
          down ? i <= lastIndex : i >= 0;
          down ? i++ : i--
        ) {
          let temp = this.faceletMatrix[i][column];
          this.faceletMatrix[i][column] = prev;
          this.faceletMatrix[i][column].isMoving.transform = "";
          prev = temp;
        }
      }, 250);
    },
    moveUp(column) {
      this.moveY(column, -this.size);
    },
    moveDown(column) {
      this.moveY(column, this.size);
    },
    moveX(row, size) {
      this.faceletMatrix[row].forEach((facelet) => {
        facelet.isMoving.transform = `translateX(${size}px)`;
      });
      setTimeout(() => {
        this.faceletMatrix[row].forEach((facelet) => {
          facelet.isMoving.transform = "";
        });
        if (size > 0) {
          this.faceletMatrix[row].unshift(this.faceletMatrix[row].pop());
        } else {
          this.faceletMatrix[row].push(this.faceletMatrix[row].shift());
        }
      }, 250);
    },
    moveLeft(row) {
      this.moveX(row, -this.size);
    },
    moveRight(row) {
      this.moveX(row, this.size);
    },
  },
};
</script>

<style>
.link:hover {
  cursor: pointer;
  transform: rotate(5deg);
}

.facelet {
  position: relative;
  display: inline-block;
  border: 5px solid black;
  transition: 1s transform ease-out;
  font-size: 2vw;
  font-weight: bold;
  color: black;
  text-decoration: none;
  vertical-align: bottom;
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
