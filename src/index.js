import m from "mithril";
import Cube from "./components/Cube";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loop() {
  Cube.initialize();
  while(true) {
    await sleep(1000);
    Cube.refresh();
    m.redraw();
  }
}

m.mount(document.body, Cube);
loop();

