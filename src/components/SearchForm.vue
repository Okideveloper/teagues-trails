<template>
  <div
    class='d-flex justify-content-center flex-column p-5 bg-dark text-light opacity'>
    <div class='mb-3'>
      <h1 class='text-center'>Hike Guide</h1>
      <h3 class='text-center'>Enter your City</h3>
      <p class='text-center'>Your Trail awaits</p>
    </div>
    <div>
      <b-form class='d-flex flex-column justify-content-center'>
        <b-form-input ref='search' type='text' placeholder='Mt. Rainer' v-model='searchQuery'>
        </b-form-input>
        <b-button
          class='mt-3'
          type='submit'
          variant='primary'
          @click.prevent='searchSubmit'
          v-if='searchQuery.length > 0'
        >
            Search
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    searchSubmit() {
      this.$router.push({
        name: 'TrailResults',
        params: { query: this.searchQuery }
      })
    }
  },
  mounted() {
    this.$refs.search.focus()
  }
}
</script>

<style scoped>
.opacity {
  opacity: 0.9;
}
</style>






