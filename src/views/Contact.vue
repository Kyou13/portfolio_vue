<template>
  <div class="container">
    <page-title></page-title>
  </div>
</template>
<script>
  import PageTitle from "../components/modules/PageTitle";
  export default {
    name: 'Contact',
    components: {PageTitle},
    created: function () {
      this.$store.dispatch('tabAction', 3)
    }
  }
</script>
<style></style>
