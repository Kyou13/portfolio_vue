<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/works">Works</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'headComp'
  }
</script>

<style scoped>
  nav{
    height: 40px;
    line-height: 40px;
    margin-bottom: -40px;
    background-color: rgba(225,225,225,0.5);
    position: relative;
    z-index: 2;
  }
  nav a{
    text-decoration: none;
  }
  nav a:visited{
    color: #2c3e50;
  }
</style>
