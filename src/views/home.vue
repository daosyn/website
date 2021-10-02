<template>
  <div>
    <h1>life often scrambles itself</h1>
    <h2>
      {{ today }}
    </h2>
    <h3>
      <a
        href="https://last.fm/user/daosyn"
        target="_blank"
        rel="noopener noreferrer"
        >// currently listening to //</a
      >
    </h3>
    <h3>
      <a
        href="https://goodreads.com/daosyn"
        target="_blank"
        rel="noopener noreferrer"
        >// currently reading //</a
      >
    </h3>
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
      return `${date.getDate()} ${this.months[date.getMonth()]} ${date.getFullYear()}`
    }
  },
};
</script>

<style scoped>
a {
  color: crimson;
  text-decoration: none;
}
</style>
