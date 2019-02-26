<template>
  <div class="container">
    <page-title></page-title>
    <div class="box-content">
      <box-comp v-for="item in apps" :title="item.title" :content="item.content"></box-comp>
    </div>
    <div class="box-content">
      <box-comp v-for="item in intern" :title="item.title" :content="item.content"></box-comp>
    </div>
  </div>
</template>
<script>
  import PageTitle from "../components/modules/PageTitle";
  import BoxComp from "../components/modules/BoxComp";
  import { mapGetters } from "vuex"

  export default {
    name: 'Works',
    components: {
      BoxComp,
      PageTitle
    },
    created: function () {
      this.$store.dispatch('tabAction', 2)
    },
    computed: {
      ...mapGetters('Works',{
        'apps': 'getApps',
        'intern': 'getIntern'
      })
    }
  }
</script>
<style></style>
