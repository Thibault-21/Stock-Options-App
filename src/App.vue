<template>
  <div id="app">
    <!-- <h1> Test routing</h1> -->
    <Navbar></Navbar>  
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* text-align: center; */
  margin-top: 5px;
}
</style>
