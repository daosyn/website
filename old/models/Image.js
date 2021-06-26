import m from "mithril";

const LINK_START = "https://www.flickr.com/photos/daosyn/";
const LINK_END = "/in/dateposted-public/";
const IMG_START = "https://live.staticflickr.com/65535/";
const IMG_END = ".jpg";

const Image = (id, hash) => {
  return m(
    "a",
    { href: `${LINK_START}${id}${LINK_END}`, target: "_blank", class: "photo" },
    m("img", {
      src: `${IMG_START}${id}${hash}${IMG_END}`
    })
  );
};

export default Image;
