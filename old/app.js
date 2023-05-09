import m from "mithril";
import Cube from "./models/Cube";
import Home from "./views/Home";
import About from "./views/About";
import Photos from "./views/Photos";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loop() {
  while (true) {
    await sleep(1500);
    // Cube.moveFace(Math.floor(Math.random() * 6), Math.floor(Math.random() * 2));
    m.redraw();
  }
}

m.route(document.body, "/", {
  "/": Home,
  "/about": About,
  "/photos": Photos,
});
loop();
