<template>
  <FilterSentence
    filter="a"
    @filtered="updateSentence"
  />
  <ReverseFilterSentence
    :sentence="filteredSentence"
  />
</template>

<script>
import FilterSentence from './components/FilterSentence/FilterSentence.vue'
import ReverseFilterSentence from './components/ReverseFilterSentence/ReverseFilterSentence.vue'

export default {
  name: 'App',
  components: {
    FilterSentence,
    ReverseFilterSentence,
  },
  data() {
    return {
      filteredSentence: '',
    }
  },
  methods: {
    updateSentence(newFilteredSentence) {
      this.filteredSentence = newFilteredSentence;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
