<template>
    <main class="draft-container">
        <img class="draft-img" src="../assets/nba-draft.png">
        <h3>Slecet club</h3>
        <v-select :options="clubs" v-model="selected" v-on:change="filteredPlayer"></v-select>
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
                <tr v-for="rows in paginatedData">
                    <td><router-link :to ="{name:'Profile',params:{playerId:rows[0]}}">{{rows[1]}}</router-link></td>
                    <td>{{rows[4]}}</td>
                    <td>{{rows[7]}}, {{rows[8]}}</td>
                    <td>{{rows[10]}}</td>
                </tr>
            </tbody>
        </table>
        <ul class="pagination">
            <li 
            v-for="pageNumber in totalPages" 
            v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages || pageNumber == 1"
            >
                <a 
                v-bind:key="pageNumber" href="#" 
                @click="setPage(pageNumber)" 
                :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}"
                >{{ pageNumber }}
                </a>
            </li>
        </ul>
    </main>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            tableRow: '',
            searchKey: '',
            currentPage: 1,
            itemsPerPage: 20,
            resultCount: 0,
            displayed: '',
            selected: 'All',
            clubs: ["All", "Boston, Celtics", "Brooklyn, Nets", "New York, Knicks", "Philadelphiam, 76ers", "Toronto, Raptors", "Golden State, Warriors", "LA, Clippers", "Los Angeles, Lakers", "Phoenix, Suns", "Sacramento, Kings", "Chicago, Bulls", "Cleveland, Cavaliers", "Detroit, Pistons", "Indiana, Pacers", "Milwaukee, Bucks", "Dallas, Mavericks", "Houston, Rockets", "Memphis, Grizzlies", "New Orleans, Pelicans", "San Antonio, Spurs", "Atlanta, Hawks", "Charlotte, Hornets", "Miami, Heat", "Orlando, Magic", "Washington, Wizards", "Denver, Nuggets", "Minnesota, Timberwolves", "Oklahoma ,City Thunder", "Portland, Trail Blazers", "Utah, Jazz"]
        }
    },
    created() {
        axios.get('http://stats.nba.com/stats/drafthistory?LeagueID=00')
        .then(response => {
            //get NBA draft history data and push it in tableRow
             this.tableRow = response.data.resultSets[0].rowSet
        })
        .catch(error => {
            console.log(error);
        })
    },
    computed: {
        //count number of pages 
        totalPages: function() {
            return Math.ceil(this.resultCount / this.itemsPerPage);
        },
        //slice the data that need to be shown on page
        paginatedData: function() {
            if (!this.displayed || this.displayed.length != this.displayed.length) {
                return
            }
            this.resultCount = this.displayed.length
            if (this.currentPage >= this.totalPages) {
                this.currentPage = this.totalPages
            }
            var index = this.currentPage * this.itemsPerPage - this.itemsPerPage
            return this.displayed.slice(index, index + this.itemsPerPage)
        },
        filteredPlayer: function() {
          var vm = this;
          var selectedClub = vm.selected;
          //important ! every time filter is applied store tableRow in displayed data
          this.displayed = this.tableRow;
          if(selectedClub === "All") {
            return this.tableRow;
          } else {
            console.log(111);
            var filtered =  this.displayed.filter(function(player) {
              //return the array after passimng it through the filter function:
              return  (selectedClub === 'All' || (player[7] + ", " + player[8]) === selectedClub);   

            });
            return this.displayed = filtered;
          }
        }
           
    },
    methods: {
        setPage: function(pageNumber) {
            this.currentPage = pageNumber
        }
    }
} 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.draft-container {
  width: 620px;
  margin: 2rem auto 10rem;
}
td {
  text-align: left;
}
.pagination li{
  display: inline-block;
  list-style: none;
}
a.first::after {
    content: '...';
}
a.last::before {
    content: '...';
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
