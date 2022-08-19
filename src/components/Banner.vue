<template>
  <div>
    <div class="input-group input-group-lg banner__input m-5">
      <input type="text" class="form-control" placeholder="Buscar Personaje..." :value="value"
        @input="$emit('input', $event.target.value)" @keyup.enter="getDataByName" />
      <span class="input-group-text banner__icon" id="search-character" @click="getDataByName">
        <i class="fa fa-search fa-2x" aria-hidden="true"></i>
      </span>
    </div>
  </div>

</template>
<script>
export default {
  props: ["value"],
  methods: {
    getDataByName() {
      this.$emit("get-data-by-name");
    },
  },
};
</script>
