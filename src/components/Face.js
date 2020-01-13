import m from "mithril";

const Face = {
  view: function(vnode) {
    return m("div", { ...vnode.attrs });
  }
};

export default Face;
