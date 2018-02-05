<template>
  <main class="fav-container">
   <h2>My favorite players:</h2>   
   <ul>
     <li v-for="fav in favData">{{fav}}</li>
   </ul>
    <router-link to="/">back</router-link>
  </main>
</template>

<script>
export default {
  props: ['favData'],
  data () {
    return {
      
    }
  }
} 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fav-container {
  width: 50%;
  margin: 0 auto;
}
  h2 {
    margin-bottom: 20px;
    text-decoration: underline;
  }
  ul {
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
  }
  li {
    font-size: 30px;
    list-style: none;
  }
  a {
    padding: 8px 30px;
    text-transform: uppercase;
    background-color: DarkCyan; 
    color: white;
  }

</style>