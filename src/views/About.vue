<template>
  <div class="container">
    <page-title></page-title>
    <biography-list></biography-list>
    <skill-list></skill-list>
    <hackathon-list></hackathon-list>
  </div>
</template>

<script>
  import PageTitle from "../components/modules/PageTitle";
  import BiographyList from "../components/modules/BiographyList"
  import { mapGetters } from 'vuex'
  import SkillList from "../components/modules/SkillList";
  import HackathonList from "../components/modules/HackathonList";

  export default {
    name: 'About',
    components: {
      HackathonList,
      SkillList,
      BiographyList,
      PageTitle
    },
    created: function () {
      this.$store.dispatch('tabAction', 1)
    }
  }
</script>
<style scoped>
</style>

