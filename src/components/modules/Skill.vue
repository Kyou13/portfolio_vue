<template>
  <div class="skill-box">
    <h3 >{{ skill.title }}</h3>
      <table>
        <tbody>
          <tr v-for="item in skill.skill">
            <td>{{ item.name }}</td>
            <td v-if="item.year">{{ item.date }}年</td>
            <td v-else>{{ item.date }}ヶ月</td>
            <td class="star-rating">
                <div class="star-rating-front" v-bind:style="{ width: item.rate*20 + '%' }">★★★★★</div>
                <div class="star-rating-back">★★★★★</div>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: ['skill'],
  }
</script>
<style scoped>
  .skill-box{
    display: inline-block;
    width: 350px;
    height: 230px;
    margin: 10px;
    border: solid #2c3e50 2px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 5px;
  }
  table{
    text-align: left;
    margin: 0 auto;
  }
  td:not(:last-of-type){
    padding-right: 20px;
  }
  .star-rating {
    position: relative;
    width: 5em;
    height: 1em;
    font-size: 15px;
  }
  .star-rating-front {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    color: #ffcc33;
    z-index: 1;
  }
  .star-rating-back {
    color: #ccc;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

