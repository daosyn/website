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
    <h3>// currently listening to //</h3>
    <ul>
      <li>jubilee - japanese breakfast</li>
    </ul>
    <h3>// currently reading //</h3>
    <ul>
      <li>one, none and a hundred thousand - luigi pirandello</li>
      <li>yotsuba!&</li>
    </ul>
    <h3>// currently obsessed with //</h3>
    <ul>
      <li>rock climbing</li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}
</style>
