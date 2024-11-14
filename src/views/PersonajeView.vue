<template>
  <div>
    <h1 class="text-center">{{ character.name }}</h1>
    <div class="container">
      <div class="d-flex justify-content-center">
        <CardComponent :character="character" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import CardComponent from "@/components/CardComponent.vue";
export default Vue.extend({
  name: "PersonajeView",
  components: {
    CardComponent,
  },
  data() {
    return {
      id: null,
      character: null,
    };
  },
  methods: {
    getCharacterById() {
      axios
        .get(`https://swapi.dev/api/people/${this.id}`)
        .then((response) => {
          this.character = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.$router.push("/notFound");
        })
        .finally(() => {
          console.log(this.id);
        });
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.getCharacterById();
  },
});
</script>

<style lang="scss" scoped>
</style>