<template>
  <div>
    <b-nav class="ms-auto">
      <router-link to="/" class="p-3 link">Inicio</router-link>
      <router-link to="/personajes" class="p-3 link">Personajes</router-link>
      <router-link to="/contacto" class="p-3 link">Contacto</router-link>
    </b-nav>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "NavbarComponent",
});
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>