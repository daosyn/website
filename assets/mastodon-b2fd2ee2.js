import{l as n}from"./loader-2b89c3ee.js";import{_ as r,r as c,o as p,c as i,g as s,v as t,b as _,e as m}from"./index-a8e9ed5e.js";const f={components:{loader:n},data(){return{loaded:!1}},methods:{handleLoad(){this.loaded=!0}}},u={class:"mastodon-container"};function h(v,e,w,x,o,a){const d=c("loader");return p(),i("div",u,[s(_("iframe",{width:"560",height:"315",src:"https://www.mastofeed.com/apiv2/feed?userurl=https%3A%2F%2Fmastodon.social%2Fusers%2Fdaosyn&theme=dark&size=100&header=false&replies=false&boosts=false",title:"mastodon feed",frameborder:"0",sandbox:"allow-top-navigation allow-scripts allow-popups allow-popups-to-escape-sandbox",onLoad:e[0]||(e[0]=(...l)=>a.handleLoad&&a.handleLoad(...l))},null,544),[[t,o.loaded]]),s(m(d,null,null,512),[[t,!o.loaded]])])}const F=r(f,[["render",h],["__scopeId","data-v-742ef992"]]);export{F as default};