<template>
  <div class="container">
    <h1> {{ title }} </h1>
    <h2>Apps</h2>
    <div class="box-content">
      <app-box v-for="(item, index) in apps" :title="item.title" :WorkImg="item.WorkImg" :index="index"></app-box>
    </div>

    <h2>Intern</h2>
    <!--<div class="box-content">-->
      <!--<box-comp v-for="item in intern" :title="item.title" :content="item.content"></box-comp>-->
    <!--</div>-->
  </div>
</template>
<script>
  import PageTitle from "../components/modules/PageTitle";
  import AppBox from "../components/modules/AppBox";
  import Modal from "../components/modules/Modal";
  import { mapGetters } from "vuex"

  export default {
    name: 'Works',
    components: {
      AppBox,
      PageTitle,
      Modal
    },
    computed: {
      ...mapGetters('Works',{
        'apps': 'getApps',
        'intern': 'getIntern',
        'title': 'getTitle'
      })
    }
  }
</script>
<style></style>
