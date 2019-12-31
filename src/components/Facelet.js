import m from "mithril";

const Facelet = {
  view: function(vnode) {
    return m("div", { ...vnode.attrs });
  }
}

export default Facelet;

