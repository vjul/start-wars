<template>
  <div>
    <h1 class="text-center">Personajes</h1>
    <div class="d-flex justify-content-center">
      <ButtonComponent
        class="m-3"
        text="Buscar más personajes"
        :isDisabled="next == null"
        @characters="getCharacters(next)"
      />
    </div>
    <div>
      <div v-if="characters.length" class="row justify-content-center">
        <p
          v-for="(character, index) in characters"
          :key="index"
          class="border col-md-2 m-1"
          @click="
            $router.push(`/personaje/${index >= 16 ? index + 2 : index + 1}`)
          "
        >
          {{ character.name }}
        </p>
      </div>
      <div v-else class="text-center">
        <span>No se encontraron personajes</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default Vue.extend({
  name: "PersonajesView",
  data() {
    return {
      characters: [],
      next: null,
    };
  },
  components: {
    ButtonComponent,
  },
  methods: {
    getCharacters(url) {
      axios
        .get(url)
        .then((response) => {
          this.characters = [...this.characters, ...response.data.results];
          this.next = response.data.next;
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.getCharacters("https://swapi.dev/api/people?page=1");
  },
});
</script>

<style scoped>
</style>