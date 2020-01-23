import m from "mithril";
import Cube from "./models/Cube";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loop() {
  while (true) {
    await sleep(1000);
    Cube.move();
    m.redraw();
  }
}

const App = {
  handleclick: function(path) {
    window.location.href = path;
  },
  view: function() {
    return [
      m(
        ".cube-container",
        Cube.faceletArr.map((array, arrayIndex) => {
          return array.map(faceIndex => {
            return m("div", {
              class: Cube.getAttributes(faceIndex),
              style: {
                marginLeft:
                  arrayIndex === 1 || arrayIndex === 3 || arrayIndex === 5
                    ? Cube.margin
                    : parseInt(Cube.margin) * -1 + "px"
              }
            });
          });
        })
      ),
      m(".cube-mask", [
        m(".title", "daosyn.info"),
        m(".name", "brandon dao"),
        m(
          ".about",
          {
            onclick: () => {
              window.location.href = "/about";
            }
          },
          "about"
        ),
        m(".blog", { onclick: () => console.log("blog") }, "blog"),
        m(".photos", { onclick: () => console.log("photos") }, "photos")
      ]),
      m(".cube-mask", [
        m("#title", "daosyn.info"),
        m("#name", "brandon dao"),
        m("#about", { onclick: () => this.handleclick("about") }, "about"),
        m("#blog", { onclick: () => this.handleclick("blog") }, "blog"),
        m("#photos", { onclick: () => this.handleclick("photos") }, "photos")
      ])
    ];
  }
};

m.mount(document.body, App);
loop();
