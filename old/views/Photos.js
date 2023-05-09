import m from "mithril";
import Image from "../models/Image";
import { imageUrl } from "../data/constants";

const Photos = {
  view: function () {
    return m(
      ".photos-container",
      imageUrl.map((img) => Image(img[0], img[1]))
    );
  },
};

export default Photos;
