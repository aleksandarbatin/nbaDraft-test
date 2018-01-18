<template>
  <main class="draft-container">
    <table class="table table-bordered">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Pick</th>
        <th>Affiliation</th>
        <th>College/Club</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>1</td>
        <td>john@example.com</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>2</td>
        <td>john@example.com</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>3</td>
        <td>john@example.com</td>
        <td>john@example.com</td>
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
      results: ''
    }
  },
  created() {
    var config = {
        headers: {'Access-Control-Allow-Origin': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'}
    };
    axios.get('http://stats.nba.com/stats/drafthistory?LeagueID=00',config)
    .then(response => {
         this.results = response.data
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
  margin: 2rem auto;
}
</style>
