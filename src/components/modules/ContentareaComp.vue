<template>
  <div>
    <section v-for="item in items" :key="item.id">
      <h3>{{ item.title }}</h3>
      <div class="box-content">
        <box-comp v-for="content in item.content" v-bind:content="content"></box-comp>
      </div>
    </section>
  </div>
</template>

<script>
  import BoxComp from '@/components/modules/BoxComp'
  import AboutComp from '@/components/modules/AboutComp'
  import { mapGetters } from 'vuex'
  export default {
    name: "ContentareaComp",
    computed: mapGetters({
      'items': 'getItems',
      'pageNum': this.$store.state.pageNum
    }),
    components: {
      BoxComp,
      AboutComp
    }
  }
</script>

<style scoped>
</style>
