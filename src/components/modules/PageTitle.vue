<template>
  <h1>{{ title }}</h1>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'PageTitle',
    computed: mapGetters({
      'title': 'PageTitle/getTitle'
    })
  }
</script>

<style scoped>
  h2{
    font-weight: 900;
  }
</style>
