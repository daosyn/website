import m from "mithril";
import Cube from "../models/Cube";

const Home = {
  handleclick: function (path) {
    m.route.set(path);
  },
  view: function () {
    return [
      m(
        ".cube-container",
        Cube.faceletArr.map((array, arrayIndex) => {
          return array.map((faceIndex) => {
            return m("div", {
              class: Cube.getAttributes(faceIndex),
              style: {
                marginLeft:
                  arrayIndex === 1 || arrayIndex === 3 || arrayIndex === 5
                    ? Cube.margin
                    : parseInt(Cube.margin) * -1 + "px",
              },
            });
          });
        })
      ),
      m(".cube-mask", [
        m(".title", "daosyn"),
        m(".about", "about"),
        m(".photos", "photos"),
      ]),
      m(".cube-mask", [
        m("#title", "daosyn"),
        m("#about", { onclick: () => this.handleclick("about") }, "about"),
        m("#photos", { onclick: () => this.handleclick("photos") }, "photos"),
      ]),
    ];
  },
};

export default Home;
