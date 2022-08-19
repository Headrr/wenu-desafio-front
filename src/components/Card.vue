<template>
  <div class="container-main animate__animated animate__fadeInUp" :class="customstyle" >

<div class="favorite-icon me-3 container-main-icon card-icon-favorite" @click="showInfoCharacter">
          <i class="fa fa-heart fa-3x favorite-icon__principal" aria-hidden="true"></i>
      </div>
    <div class="image">
      <img class="img__content " :src="character.image" :alt="character.name" />
      <div class="img__specie animate__animated animate__fadeInUp" :class="getColorSpecie(character.species)">
        <p>{{ character.species }}</p>
      </div>
    </div>

    <div class="info">
      <p class="info__name animate__animated animate__fadeInUp">{{ character.name }}</p>
      <h5>Gender: {{ character.gender }}</h5>
      <div class="info__status animate__animated animate__zoomIn animate__faster animate__delay-0s" :class="getColorStatus(character.status)">
        {{ character.status }}
      </div>
    </div>
  </div>
</template>
<script>
import mixinClasses from '../mixins';
export default {
  mixins: [mixinClasses],
  props: {
    customstyle:{
      type: String,
      required: false,
      default: ''
    },
    character: {
      type: Object,
      required: true,
    },
    
  },
  methods: {
 
    showInfoCharacter(){
      this.$emit('show-character')
    }
  },
};
</script>

