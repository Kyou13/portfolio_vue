<template>
  <div class="work-box">
    <button id="show-modal" @click="showModal(index)">
      <img :src="app(index).WorkImg">
      <h3>{{ app(index).title }}</h3>
      <ul>
        <li v-for="skill in app(index).skills">{{ skill }}</li>
      </ul>
    </button>
    <modal v-if="isShowModal" @close="hideModal"></modal>
  </div>
</template>

<script>
  import Modal from "@/components/modules/Modal";
  import { mapActions, mapGetters } from 'vuex'

  export default {
    props: ['index'],
    components: {
      Modal
    },
    methods: {
      ...mapActions({
        showModal: 'Works/showModal',
        hideModal: 'Works/hideModal'
      })
    },
    computed: {
      ...mapGetters('Works',{
        'isShowModal': 'getShowModal',
        'app': 'getApp'
      })
    }

  }
</script>
<style scoped>
  .work-box{
    display: inline-block;
    vertical-align: middle;
    width: 220px;
    height: 230px;
    margin: 10px;
    border: solid #2c3e50 2px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 5px;
  }
  img{
    width: 100%;
    height: 140px;
    object-fit: cover;
  }
  button{
    /* buttonのデフォルトデザインリセット */
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;

    width: 100%;
    height: 100%;
    border-radius: 5px;
    cursor: pointer;
  }
  ul{
    padding: 0;
  }
  ul li{
    display: inline-block;
    vertical-align: middle;
    border: solid #2c3e50 1px;
    margin-right: 2px;
    padding: 0.25em;
    background: #beb5fc;
    border-radius: 15px 0px 0px 15px;
  }
  ul li:before{
    display:inline-block;
    /*以下白丸つくる*/
    content:'';
    width:1em;
    height: 1em;
    background: #fff;
    border-radius: 50%;
    margin-right: 8px;
  }
</style>

