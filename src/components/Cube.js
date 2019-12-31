import m from "mithril";
import Facelet from "./Facelet";

const Cube = {
  faceletArr: [],
  faces: ["r-face", "l-face", "f-face", "b-face", "u-face", "d-face"],
  getAttributes: function(i) {
    const face = this.faces[i % 6];
    return {
      class: "facelet " + face
    }
  },
  initialize: function() {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let size = height >= width ? Math.ceil(width / 6) : Math.ceil(height / 6);
    console.log("length/width of squares: " + size);
    for (let i = 0; i < 6; i++) { // change later
      this.faceletArr.push(m(Facelet, { style: { width: size, height: size}, class: this.faces[i] }));
    }
  },
  move: function() {
    // just increment margins
    // use transitions to move squares
  },
  refresh: function() {
    // random move
  },
  view: function() {
    return m("main", this.faceletArr);
  }
}

export default Cube;

