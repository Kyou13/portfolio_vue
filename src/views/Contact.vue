<template>
  <div class="container">

    <h1>{{ title }}</h1>
    <div class="box-content">
      <img :src="ProfileImg">
      <div class="sns-icon">
        <a v-for="item in Accounts" :href="item.link" :key="item.id" target="_blank" rel="noopener">
        <span :class="{ 'fa-stack': item.isStackActive }">
          <font-awesome-icon v-for="icon in item.icon" :icon="{ prefix: icon.prefix, iconName: icon.iconName}" :class=icon.className ></font-awesome-icon>
        </span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import PageTitle from "../components/modules/PageTitle";
  import { mapGetters } from "vuex"

  export default {
    name: 'Contact',
    components: {PageTitle},
    computed: {
      ...mapGetters('Contact',{
        'ProfileImg': 'getProfileImg',
        'title': 'getTitle',
        'Accounts': 'getAccounts'
      })
    }
  }
</script>
<style scoped>
  img{
    width: 180px;
    height: auto;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
  .sns-icon a:link,.sns-icon  a:visited,.sns-icon  a:hover,.sns-icon  a:active{
    color: #2c3e50;
  }
  .fa-inverse{
    color: #F0F0F0;
  }
  .sns-icon span{
    margin: 0 10px;
  }
  .fa-stack{
    width: 28px;
    top: 4px;
  }
  .fa-stack svg{
    width: 28px;
  }
</style>
