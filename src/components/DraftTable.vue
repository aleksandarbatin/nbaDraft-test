<template>
  <main class="draft-container">
    <img class="draft-img" src="../assets/nba-draft.png">
    <table class="table table-bordered">
    <thead>
      <tr>
        <th>Firstname and Lastname</th>
        <th>Pick</th>
        <th>Affiliation (City, Club)</th>
        <th>College/University</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="rows in tableRow">
          <td><router-link :to ="{name:'Profile',params:{playerId:rows[0]}}">{{rows[1]}}</router-link></td>
          <td>{{rows[4]}}</td>
          <td>{{rows[7]}}, {{rows[8]}}</td>
          <td>{{rows[10]}}</td>
      </tr>
    </tbody>
  </table>
  </main>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      tableRow: ''
    }
  },
  created() {
    axios.get('http://stats.nba.com/stats/drafthistory?LeagueID=00')
    .then(response => {
         this.tableRow = response.data.resultSets[0].rowSet.slice(0,20)
         //console.log(this.tableRow)
    })
    .catch(error => {
      console.log(error);
    })
  }
} 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.draft-container {
  width: 70%;
  margin: 2rem auto 10rem;
}
td {
  text-align: left;
}
@media only screen and (max-width: 640px) {
  .draft-container {
    width: 90%;
    margin: 2rem auto;
  }
  .draft-img {
    width: 50%;
  }
} 
</style>
