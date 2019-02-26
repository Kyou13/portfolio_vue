<template>
  <div>
    <div id="main">
      <h1>{{ msg }}</h1>
    </div>
    <vue-particles
      color="#7B68EE"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#7B68EE"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        msg: "Welcome to Kyohei Portfolio Site"
      }
    },
    created: function () {
      this.$store.dispatch('tabAction', 0)
    }
  }
</script>

<style scoped>
  #main{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
</style>
