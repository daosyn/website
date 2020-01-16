import m from "mithril";
import Face from "./Face";

const Cube = {
  // hardcoded atm
  // oninit, check window height and width
  //   let height = window.innerHeight;
  //   let width = window.innerWidth;
  //   this.size =
  //     (height >= width ? Math.ceil(width / 9) : Math.ceil(height / 9)) + "px";
  margin: "-100px",
  top: "0px",
  faceletArr: [...Array(64).keys()],
  faces: ["r-face", "l-face", "f-face", "b-face", "u-face", "d-face"],
  // about - ?
  // blog - &
  // gallery - #
  links: ["/blog", "/about", "/gallery"],
  getAttributes: function(i) {
    // calculate column here for now
    const face = this.faces[i % 6];
    return "facelet " + face;
  },
  move: function() {
    // just increment margins
    // use transitions to move squares
    if (parseInt(this.margin) > 0) {
      this.margin = "-100px";
      this.top = parseInt(this.top) + 100 + "px";
      if (parseInt(this.top) > parseInt(window.innerHeight) / 2) {
        this.top = "0px";
      }
    } else {
      this.margin = parseInt(this.margin) + 100 + "px";
    }
  },
  view: function() {
    return [m(
      "div.cube-container",
      this.faceletArr.map(value => {
        return m("div", {
          class: this.getAttributes(value),
          style: {
            marginLeft: value > 8 ? this.margin : null
            // marginTop: value < 6 ? this.top : null
          },
          onclick: () => {
            console.log(this.links[Math.floor(Math.random() * 3)]);
            // window.location.replace(this.links[Math.floor(Math.random() * 3)]);
          },
          key: value
        });
      })
    ), m("div.cube-mask", [m("div", "daosyn.info"), m("div", "brandon dao"), m("div", "about"), m("div", "blog"), m("div", "gallery")])];
  }
};

export default Cube;
