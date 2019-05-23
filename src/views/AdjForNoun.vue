<template>
  <div class="adjfornoun">
    <h2>Fun with Adjectives</h2>
    <p>
      <router-link to="/">Home: Rhyming Rhymesaurus</router-link>
    </p>
    <form v-on:submit.prevent="findWords">
      <p>
        Find an Adjective for a givin Noun
        <input type="text" v-model="noun">
        <button type="submit">Search</button>
      </p>
    </form>
    <!-- By adding v-if to the results it will only show if there are results and if the length is greater than 0. -->
    <ul class="results" v-if="results && results.length > 0">
      <!-- By adding a v-for loop to the <li> tag it will loop through the items in the results. -->
      <li class="item" v-for="(item,index) of results" :key="index">
        <p>
          <strong>{{item.word}}</strong>
        </p>
        <p>{{item.score}}</p>
      </li>
    </ul>

    <!-- this message will appear if there are no results after attempted request. -->
    <div class="no-results" v-else-if="results && results.length === 0">
      <h2>No Words Found</h2>
      <p>Please adjust your search to find more words.</p>
    </div>

    <!-- This message will appear if there are errors and if the length is greater than 0. -->
    <ul class="errors" v-if="errors && errors.length > 0">
      <li v-for="(error,index) of errors" :key="index">{{error.message}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdjForNoun",
  data() {
    return {
      results: null,
      errors: [],
      noun: ""
    };
  },
  // Created an axios.get statement that requests from https://api.datamuse.com/words
  methods: {
    findWords: function() {
      axios
        .get("https://api.datamuse.com/words", {
          params: {
            rel_jjb: this.noun
          }
        })
        .then(response => {
          this.results = response.data;
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.adjfornoun {
  font-size: 1.4rem;
}

input[type="text"] {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.02);
  padding: 0.5rem;
}
button {
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1,
h2 {
  padding-bottom: 40px;
  font-weight: normal;
}

ul.results {
  list-style-type: none;
  padding: 0;
}

.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(248, 246, 246, 0.7);
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}

a {
  color: #21a2c2;
}
</style>
