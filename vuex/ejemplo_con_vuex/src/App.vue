<template>
  <FilterSentence
    filter="a"
  />
  <ReverseFilterSentence
    :sentence="$store.state.filtered"
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
