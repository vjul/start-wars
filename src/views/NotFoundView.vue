<template>
  <div class="container">
    <h1>404 - Pagina no Encontrada</h1>
    <p>La página buscada no existe</p>
    <b-button
      class="btn btn-success text-white w-25"
      @click="$router.push('/personajes')">
      Volver
    </b-button>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "NotFoundView",
  components:{
    
  }
});
</script>

<style lang="scss" scoped>
</style>