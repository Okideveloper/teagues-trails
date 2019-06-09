<template>
  <div class="d-flex justify-content-center flex-column p-5 bg-dark text-light opacity">
    <div class="mb-3">
      <h1 class="text-center">Take a Hike</h1>
      <h4 class="text-center">Enter your location</h4>
      <p class="text-center">Your Trail Awaits You</p>
    </div>
    <div>
      <b-form class="d-flex flex-column justify-content-center">
        <div>
          <b-form-input ref="search" type="text" placeholder="Mt. Rainer" v-model="searchQuery"></b-form-input>
        </div>
        <transition
          name="bounce"
          enter-active-class="bounceInLeft"
          leave-active-class="bounceOutRight"
        >
          <b-button
            class="mt-3"
            type="submit"
            variant="primary"
            @click.prevent="searchSubmit"
            v-if="searchQuery.length > 0"
          >Search</b-button>
        </transition>
      </b-form>
    </div>
  </div>
</template>

<script>
require("vue2-animate/dist/vue2-animate.min.css");
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
.form-control {
  margin-left: 38px;
  width: 30vh;
}

.text-center {
  letter-spacing: 1.5px;
}

h1 {
  font-size: 65px;
  color: rgb(208, 227, 245);
}

.opacity {
  opacity: 0.8;
}
</style>






