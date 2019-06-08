<template>
  <div class="container">
    <div v-if="this.searchLocation.err" class="row d-flex justify-content-around mt-4">
      <div class="column">
        <h1>No Search Results Found</h1>
      </div>
      <div class="column">
        <b-button @click="newSearch" variant="danger">Search Again</b-button>
      </div>
    </div>
    <div v-else>
      <div class="row d-flex justify-content-around mt-4">
        <div class="column">
          <h1>Search Results for {{ this.searchLocation.name }}</h1>
        </div>
        <div class="column">
          <b-button @click="newSearch" variant="danger">Search Again</b-button>
        </div>
      </div>
      <div class="row">
        <GoogleMap :locationData="searchLocation" :markers="trails"/>
      </div>
      <div class="row mt-5 w-100">
        <TrailSummary :trailSummary="trails"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import GoogleMap from "@/components/GoogleMap.vue";
import TrailSummary from "@/components/TrailSummary.vue";

export default {
  name: "TrailResults",
  components: {
    GoogleMap,
    TrailSummary
  },
  props: ["query"],
  computed: {
    ...mapState(["searchLocation", "trails"])
  },
  methods: {
    newSearch() {
      this.$router.push({
        name: "HomePage"
      })
    }
  },
  mounted() {
   this.$store.dispatch("getGeoLocation", this.query);
  }
}
</script>

<style scoped>
</style>

