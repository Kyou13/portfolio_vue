<template>
  <div>
    <h3>Skills</h3>
    <div class="box-content skills">
      <skill v-bind:skill="skills.Backend"></skill>
      <skill v-bind:skill="skills.Frontend"></skill>
      <skill v-bind:skill="skills.MachineLearning"></skill>
      <skill v-bind:skill="skills.DataBase"></skill>
      <skill v-bind:skill="skills.Others"></skill>
    </div>
  </div>
</template>

<script>
  import Skill from "./Skill";
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters('About',{
        'skills': 'getSkills'
      })
    },
    components: {
      Skill
    }
  }
</script>
<style scoped>
</style>

