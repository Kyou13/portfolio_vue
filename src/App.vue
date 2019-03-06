<template>
  <div id="app">
    <head-comp></head-comp>
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import HeadComp from '@/components/modules/HeadComp'

  export default {
    name: 'App',
    components: {
      HeadComp
    },
  }
</script>

<style>
  #app {
    font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", "Lucida Grande", Verdana, "ＭＳ Ｐゴシック", sans-serif;
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body{
    margin: 0;
  }
  .container{
    max-width: 800px;
    margin: 50px auto;
  }
  .box-content{
    background-color: rgba(225,225,225,0.5);
    padding: 15px;
  }
  .v-enter-active, .v-leave-active {
    transition: opacity 0.5s;
  }
  .v-enter, .v-leave-to {
    opacity: 0;
  }
</style>
