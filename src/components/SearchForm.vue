<template>
  <div class="d-flex justify-content-center flex-column p-5 bg-dark text-light opacity">
    <div class="mb-3">
      <h1 class="text-center">Hike Guide</h1>
      <h4 class="text-center">Enter your City</h4>
      <p class="text-center">Your Trail Awaits You</p>
    </div>
    <div>
      <b-form class="d-flex flex-column justify-content-center">
        <b-form-input ref="search" type="text" placeholder="Mt. Rainer" v-model="searchQuery"></b-form-input>
        <b-button
          class="mt-3"
          type="submit"
          variant="primary"
          @click.prevent="searchSubmit"
          v-if="searchQuery.length > 0"
        >Search</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    searchSubmit() {
      this.$router.push({
        name: "TrailResults",
        params: { query: this.searchQuery }
      });
    }
  },
  mounted() {
    this.$refs.search.focus();
  }
};
</script>

<style scoped>

.flex-column  {
  
  width: 65vh;
}

.form-control {
  margin-left: 105px;
  width: 30vh;
}

.text-center {
  letter-spacing: 1.5px;
}

h1 {
  font-size: 65px;
  color:rgb(208, 227, 245)
}

.opacity {
  opacity: 0.8;
}
</style>






