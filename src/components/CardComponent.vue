<template>
  <div>
    <b-card
      title=""
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        <p>Nombre: {{ character.name }}</p>
        <p>Género: {{ character.gender }}</p>
        <p>Altura: {{ character.height }}</p>
        <p>Número películas: {{ character.films.length }}</p>
      </b-card-text>
      <b-button
      class="btn btn-success text-white w-100"
      @click="$router.push('/personajes')">
      Volver
    </b-button>
    </b-card>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "CardComponent",
  components:{
    
  },
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
</style>