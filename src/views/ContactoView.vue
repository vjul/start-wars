<template>
  <div class="container">
    <h1 class="text-center">Contacto</h1>
    <p class="text-center">Para contactarnos puede escribirnos</p>
    <b-form>
      <b-form-group
        class="m-3"
        id="input-group-1"
        label="Nombre completo"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="m-3"
        id="input-group-1"
        label="Email"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="m-3"
        id="input-group-1"
        label="Mensaje"
        label-for="input-1"
      >
        <b-form-textarea id="textarea" rows="3" max-rows="6"></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary" class="m-3">Enviar</b-button>
    </b-form>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "ContactoView",
});
</script>

<style lang="scss" scoped>
</style>