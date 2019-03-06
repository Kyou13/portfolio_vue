<template>
  <div>
  <h2>Biography</h2>
  <div class="box-content about">
    <ul>
      <li v-for="item in biography">{{ item.year }}-{{ item.month }}：{{ item.title }}</li>
    </ul>
  </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters('About',{
        'biography': 'getBiography'
      })
    }
  }
</script>
<style scoped>
  .about{
    text-align: left;
  }
  ul {
    list-style: none;
  }
</style>
