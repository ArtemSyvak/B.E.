<template>
  <div id="app">
      <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
          First section ...
        </div>
        <div class="section">
          Second section ...
        </div>
        <div class="section">
          third section ...
        </div>
        <div class="section">
          forth section ...
        </div>
        <div class="section">
          fifth section ...
        </div>
        <div class="section">
          six section ...
        </div>
      </full-page>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return true;
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#fullpage {
  background: url("./assets/background.svg") center center no-repeat;
  background-size: cover;
}
</style>
