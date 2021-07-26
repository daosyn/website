<template>
  <div>
    <h1>life often scrambles itself</h1>
    <h2>
      {{
        Intl.DateTimeFormat("en-us", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }).format(new Date())
      }}
    </h2>
    <h3>
      <a
        href="https://last.fm/user/daosyn"
        target="_blank"
        rel="noopener noreferrer"
        >// currently listening to //</a
      ></h3>
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

<style scoped>
a {
  color: crimson;
  text-decoration: none;
}
</style>
