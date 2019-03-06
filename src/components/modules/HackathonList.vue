<template>
  <div>
    <h2>Hackathon</h2>
    <div class="box-content hackathon">
      <table>
        <tbody>
          <tr v-for="item in hackathon">
            <td>{{ item.competition }}</td>
            <td class="award">{{ item.award }}</td>
            <td>{{ item.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters('About',{
        'hackathon': 'getHackathon'
      })
    }
  }
</script>
<style scoped>
  table{
    text-align: left;
    margin: 0 auto;
  }
  td{
    padding-right: 20px;
  }
  .award{
    color: #c93a40;
  }
</style>
