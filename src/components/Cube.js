import m from "mithril";
import Face from "./Face";

const Cube = {
  counter: 0,
  margin: "0px",
  top: "0px",
  faceletArr: [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5],
  faces: ["r-face", "l-face", "f-face", "b-face", "u-face", "d-face"],
  getAttributes: function(i) {
    const face = this.faces[i % 6];
    return "facelet " + face;
  },
  initialize: function() {
    let height = window.innerHeight;
    let width = window.innerWidth;
    this.size =
      (height >= width ? Math.ceil(width / 9) : Math.ceil(height / 9)) + "px";
    // change later
    return this.faceletArr.map(value => {
      return m(
        "div",
        {
          class: this.getAttributes(value),
          style: {
            width: this.size,
            height: this.size,
            marginLeft: value === 0 ? this.margin : null,
            marginTop: value === 0 ? this.top : null
          }
        },
        parseInt(this.margin) - parseInt(window.innerWidth)
      );
    });
  },
  move: function() {
    // just increment margins
    // use transitions to move squares
    if (parseInt(this.margin) > parseInt(window.innerWidth)) {
      this.margin = "0px";
      // this.top = parseInt(this.top) + 100 + "px";
      // if (parseInt(this.top) > parseInt(window.innerHeight)) {
      //   this.top = "0px";
      // }
    } else {
      this.margin = parseInt(this.margin) + 100 + "px";
    }
  },
  view: function() {
    return [
      m("main", this.initialize()),
      m(
        "div",
        {
          onclick: () => {
            this.counter++;
          }
        },
        this.counter
      )
    ];
  }
};

export default Cube;
