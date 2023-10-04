<template>
  <div>
    <h1>life often scrambles itself</h1>
    <h2>
      {{ today }}
    </h2>
    <img src="/images/inmato.jpg" alt="inmato" />
    <h3>
      <router-link to="/lastfm">// currently listening to //</router-link>
    </h3>
    <h3>
      <router-link to="/goodreads">// currently reading //</router-link>
    </h3>
    <h3>
      <router-link to="/youtube">// currently singing //</router-link>
    </h3>
    <h3>
      <router-link to="/mastodon">// currently thinking about //</router-link>
    </h3>
    <h3>
      <router-link to="/climb">// recently climbed //</router-link>
    </h3>
    <!-- <iframe
      allowfullscreen
      sandbox="allow-top-navigation allow-scripts allow-popups allow-popups-to-escape-sandbox"
      width="100%"
      height="100%"
      src="http://www.mastofeed.com/apiv2/feed?userurl=https%3A%2F%2Fmastodon.social%2Fusers%2Fdaosyn&theme=dark&size=100&header=false&replies=false&boosts=false"
    /> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    months: [
      "january",
      "febrary",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ],
  }),
  computed: {
    today() {
      const date = new Date();
      return `${date.getDate()} ${
        this.months[date.getMonth()]
      } ${date.getFullYear()}`;
    },
  },
};
</script>

<style scoped>
a {
  color: crimson;
  text-decoration: none;
}

img {
  width: 50%;
}
</style>
