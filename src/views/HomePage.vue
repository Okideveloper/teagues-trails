<template>
   <div class='d-flex justify-content-center align-items-center home-bg-img'>
    <SearchForm />
  </div>
</template>

<script>

import axios from "axios";
import SearchForm from '../components/SearchForm.vue'


export default {
  name: 'HomePage',
  components: {
    SearchForm
  }
}
</script>

<style scoped>
.bg-img {
  background-image: url('../assets/home-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
}
</style>


