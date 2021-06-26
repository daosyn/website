const Cube = {
  // hardcoded atm
  // oninit, check window height and width
  //   let height = window.innerHeight;
  //   let width = window.innerWidth;
  //   this.size =
  //     (height >= width ? Math.ceil(width / 9) : Math.ceil(height / 9)) + "px";
  margin: "-90px",
  top: "0px",
  faces: ["r-face", "l-face", "f-face", "b-face", "u-face", "d-face"],
  links: ["/blog", "/about", "/photos"],
  getAttributes: function(i) {
    // calculate column here for now
    const face = this.faces[i];
    return "facelet " + face;
  },
  faceletArr: [
    [null, 0, 1, 2, 3, 4, 5, null],
    [null, 0, 1, 2, 3, 4, 5, null],
    [null, 0, 1, 2, 3, 4, 5, null],
    [null, 0, 1, 2, 3, 4, 5, null],
    [null, 0, 1, 2, 3, 4, 5, null],
    [null, 0, 1, 2, 3, 4, 5, null],
    [null, 0, 1, 2, 3, 4, 5, null]
  ],
  moveFace: function() {
    // just increment margins
    // use transitions to move squares
    // TODO:
    // move random side of 12 posible
    const move = Math.floor(Math.random() * 12);
    const direction = Math.floor(Math.random() * 2);
    // * 2 different directions
    if (parseInt(this.margin) > 0) {
      this.margin = "-90px"; // determine position using css instead, to animate
    } else {
      this.margin = parseInt(this.margin) + 90 + "px";
    }
  }
};

export default Cube;
