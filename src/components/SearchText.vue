<template>
  <div>
    <div v-if="nameCharacter.length > 0">
      <h2 class="text-center mt-3">
        Personaje con el nombre: <i>"{{ nameCharacter }}"</i>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
    props: ['nameCharacter']
}
</script>
