<template>
  <div>
    <h1>// life often scrambles itself //</h1>
    <h2>
      {{ today }}
    </h2>
    <img src="/images/inmato.jpg" alt="inmato" />
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
h1 {
  color: crimson;
  text-decoration: none;
  font-size: 3vh;
}

h2 {
  font-size: 2vh;
}

img {
  width: 69%;
  object-fit: scale-down;
}
</style>
