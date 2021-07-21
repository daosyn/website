<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
@font-face {
  font-family: "savior";
  src: local("savior"), url(./fonts/savior.woff) format("woff");
}

#app {
  font-family: "savior", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7a0a0a;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #7a0a0a;
}

#nav a.router-link-exact-active {
  color: #b42222;
}
</style>
