import{l}from"./loader-da1d4942.js";import{_ as r,r as h,o as c,c as m,b as n,w as o,v as i,e as f}from"./index-745f78b9.js";const p={components:{loader:l},data(){return{loaded:!1,size:null}},mounted(){this.handleResize(),window.addEventListener("resize",this.handleResize)},unmounted(){window.removeEventListener("resize",this.handleResize)},methods:{handleLoad(){this.loaded=!0},handleResize(){this.size=this.$refs.content.clientWidth>this.$refs.content.clientHeight?this.$refs.content.clientHeight:this.$refs.content.clientWidth}}},u={ref:"content"},_={href:"https://www.last.fm/user/daosyn",target:"_blank"},w=["height","width"];function z(g,t,v,L,e,s){const a=h("loader");return c(),m("div",u,[n("a",_,[o(n("img",{alt:"lastfm collage",src:"https://tapmusic.net/collage.php?user=daosyn&type=1month&size=3x3",height:e.size,width:e.size,onLoad:t[0]||(t[0]=(...d)=>s.handleLoad&&s.handleLoad(...d))},null,40,w),[[i,e.loaded]])]),o(f(a,null,null,512),[[i,!e.loaded]])],512)}const k=r(p,[["render",z]]);export{k as default};
