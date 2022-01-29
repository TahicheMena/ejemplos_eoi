<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div>
      <label id="reverseLabel">{{ reverseSentence }}</label>
    </div>
  </div>
</template>

<script>
/**
 * Este componente tiene una funcionalidad simple de invertir
 * una cadena de texto dada y mostrarlo por pantalla
 */
export default {
  name: 'MirrorFilterSentence',
  props: {
    /** Título adjunto al input. Es opcional.
      * @public
      */
    title: {
      type: String,
      default: 'Reverse',
    },
    /** Palabra que se usará como patrón para el filtro
     * @public
     */
    sentence: {
      type: String,
      default: 'Mirror',
    },
  },
  computed: {
    /**
     * Devuelve el props sentence, de manera invertida
     */
    reverseSentence() {
      return this.sentence.split('').reverse().join('');
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
