<template>
  <div id="app">
    <h1>Datamuse</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  background-color: rgb(70, 50, 117);
}
#app {
  padding-block-start: 100px;
  padding-block-end: 50px;
  background-color: blanchedalmond;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 150px;
}
</style>
