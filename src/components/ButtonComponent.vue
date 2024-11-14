<template>
  <div>
    <button class="btn btn-primary" :disabled="isDisabled" @click="$emit('characters',text)">{{text}}</button>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "ButtonComponent",
  props: {
    text: {
      type: String,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style lang="scss" scoped>
</style>