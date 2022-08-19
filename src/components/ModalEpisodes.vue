<template>
  <modal name="episodes" height="400">
    <h2 class="text-center pt-5">Episodios en que aparece</h2>
    <div class="modal-appearences ms-1 mt-4">
      <div
        v-for="(episode, index) in episodes"
        :key="index"
        class="modal-episode mt-4 p-2"
      >
        <i class="fa fa-film fa-3x" aria-hidden="true"></i>
        <h4 class="text-center mt-2">{{ episode.name }}</h4>
        <p class="info__label">
          <i class="fa fa-calendar" aria-hidden="true"></i>
          {{ episode.air_date }}
        </p>
      </div>
    </div>
  </modal>
</template>
<script>
export default {
  props: {
    episodes: Array,
  },
};
</script>
