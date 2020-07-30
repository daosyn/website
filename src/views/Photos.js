import m from "mithril";
import Image from "../models/Image";

const imgArr = [
  ["50106152443", "_1d6b977755_c_d"],
  ["50106957492", "_9190b35f90_c_d"],
  ["50106149833", "_24cd5578fb_c_d"],
];

const Photos = {
  view: function () {
    return m(
      ".photos-container",
      imgArr.map((img) => Image(img[0], img[1]))
    );
  },
};

export default Photos;
