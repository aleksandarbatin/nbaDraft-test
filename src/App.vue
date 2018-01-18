<template>
  <div id="app">
    <img src="./assets/nba-draft.png">
    <DraftTable/>
  </div>
</template>

<script>
import DraftTable from './components/DraftTable'

export default {
  name: 'App',
  components: {
    DraftTable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
