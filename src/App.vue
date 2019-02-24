<template>
  <div id="app">
    <head-comp></head-comp>
    <router-view/>
  </div>
</template>

<script>
  import HeadComp from '@/components/modules/HeadComp'
export default {
  name: 'App',
  components: {
    HeadComp
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
