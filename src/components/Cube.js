import m from "mithril";
import Face from "./Face";

const Cube = {
  counter: 0,
  margin: "0px",
  top: "0px",
  faceletArr: [...Array(36).keys()],
  faces: ["r-face", "l-face", "f-face", "b-face", "u-face", "d-face"],
  links: ["/blog", "/about", "/gallery"],
  getAttributes: function(i) {
    const face = this.faces[i % 6];
    return "facelet " + face;
  },
  //   let height = window.innerHeight;
  //   let width = window.innerWidth;
  //   this.size =
  //     (height >= width ? Math.ceil(width / 9) : Math.ceil(height / 9)) + "px";
  move: function() {
    // just increment margins
    // use transitions to move squares
    if (parseInt(this.margin) > parseInt(window.innerWidth) - 280) {
      this.margin = "0px";
      this.top = parseInt(this.top) + 140 + "px";
      if (parseInt(this.top) > parseInt(window.innerHeight) / 2) {
        this.top = "0px";
      }
    } else {
      this.margin = parseInt(this.margin) + 140 + "px";
    }
  },
  view: function() {
    return m(
      "div.cube-container",
      this.faceletArr.map(value => {
        return m("div", {
          class: this.getAttributes(value),
          style: {
            width: "100px",
            height: "100px",
            marginLeft: this.margin,
            marginTop: value < 6 ? this.top : null
          },
          onclick: () => {
            console.log(this.links[Math.floor(Math.random() * 3)]);
            // window.location.replace(this.links[Math.floor(Math.random() * 3)]);
          },
          key: value
        });
      })
    );
  }
};

export default Cube;
