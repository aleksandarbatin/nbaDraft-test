<template>
  <main class="profile-container">
    <img class="profile-img" src="../assets/nbastar-profile.jpg">
    <table class="table table-bordered">
     <tbody>
        <tr>
          <th>First Name</th>
            <td>{{playerData[1]}}</td>
        </tr>
        <tr>
          <th>Last Name</th>
            <td>{{playerData[2]}}</td>
        </tr>
        <tr>
          <th>Date of Birth</th>
            <td>{{birthDay}}</td>
        </tr>
        <tr>
          <th>Birthplace country</th>
            <td>{{playerData[9]}}</td>
        </tr>
        <tr>
          <th>Height</th>
            <td>{{playerData[10]}}</td>
        </tr>
        <tr>
          <th>Weight</th>
             <td>{{playerData[11]}} lbs</td>
        </tr>
        <tr>
          <th>NBA club</th>
            <td>{{playerData[20]}}, {{playerData[19]}}</td>
        </tr>
        <tr>
          <th>Position</th>
            <td>{{playerData[14]}}</td>
        </tr>
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
      playerData: '',
      birthDay: ''
    }
  },
  created() {
    var id = this.$route.params.playerId; 
    axios.get('http://stats.nba.com/stats/commonplayerinfo?LeagueID=00&PlayerID=' + id)
    .then(response => {
        this.playerData = response.data.resultSets[0].rowSet[0];
        console.log(response.data)
         //format date of birth
         var dateOfBirth = new Date(this.playerData[6].slice(0,10));
         var m = dateOfBirth.getMonth();
         var d = dateOfBirth.getDay();
         var y = dateOfBirth.getYear();
         var formatDate = m + "/" + d + "/" + y; 
         this.birthDay = formatDate;
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
  width: 30%;
  margin: 2rem auto 10rem;
}
.profile-img {
  width: 40%;
}

td {
  text-align: left;
}
a {
  padding: 8px 30px;
  text-transform: uppercase;
  background-color: DarkCyan; 
  color: white;
}
@media only screen and (max-width: 990px) {
  .profile-container {
    width: 80%;
    margin: 2rem auto;
  }
} 
</style>