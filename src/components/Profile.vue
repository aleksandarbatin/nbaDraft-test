<template>
  <main class="profile-container">
    <img class="profile-img" src="../assets/nbastar-profile.jpg">
    <table class="table table-bordered">
    <thead>
      <tr>
        <th>First and Last name</th>
        <th>Birthday</th>
        <th>Birthplace country</th>
        <th>Height</th>
        <th>Weight</th>
        <th>NBA club</th>
        <th>Position</th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr v-for="rows in tableRow">
          <td>{{rows[1]}}</td>
          <td>{{rows[4]}}</td>
          <td>{{rows[7]}}, {{rows[8]}}</td>
          <td>{{rows[10]}}</td>
      </tr> -->
    </tbody>
  </table>
  <router-link to="/">back</router-link>
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
         console.log(this.tableRow)
    })
    .catch(error => {
      console.log(error);
    })
  }
} 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-container {
  width: 70%;
  margin: 2rem auto 10rem;
}
.profile-img {
  width: 20%;
}

td {
  text-align: left;
}
@media only screen and (max-width: 640px) {
  .profile-container {
    width: 90%;
    margin: 2rem auto;
  }
} 
</style>