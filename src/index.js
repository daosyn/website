import m from "mithril";
import Cube from "./components/Cube";

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

// Cube.initialize();
m.mount(document.body, Cube);
loop();
