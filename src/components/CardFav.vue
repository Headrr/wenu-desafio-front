<template>

  <div class="container-main animate__animated animate__fadeInUp" :class="customstyle">
    <div class="favorite-icon me-3 container-main-icon card-icon-favorite" @click="eliminarFav(character._id)">
      <i class="favorite-icon__principal-2">
        <i class="fa fa-trash fa-3x" aria-hidden="false"></i>
      </i>
    </div>
    <div class="image">
      <img class="img__content " :src="character.image" :alt="character.name" />
      <div class="img__specie animate__animated animate__fadeInUp" :class="getColorSpecie(character.species)">
        <p>{{ character.gender }}</p>
      </div>
    </div>

    <div class="info">
      <p class="info__name animate__animated animate__fadeInUp">{{ character.name }}</p>
      <h5>
        <ul>
          <li>
            Status: {{ character.status }}
          </li>
        </ul>
      </h5>
    </div>
  </div>
</template>
<script>
import mixinClasses from '../mixins';
import axios from "axios";
export default {
  mixins: [mixinClasses],
  props: {
    customstyle: {
      type: String,
      required: false,
      default: ''
    },
    character: {
      type: Object,
      required: true,
    },

  },
  data() {
    return {
      checked: false
    }
  },
  created() {
    this.eliminarFav();
  },
  methods: {

    showInfoCharacter() {
      this.$emit('show-character')
    },

    selectFavorite() {
      this.checked = !this.checked
      this.$emit('select-favorite')
    },
    eliminarFav(id) {
      axios.delete(`http://localhost:3001/api/user/favorito/${id}`)
        .then(res => {
          this.$fire({
            title: "Oops!",
            text: `Eliminado de tus favoritos`,
            type: "error",
            timer: 3000
          })
          this.characters.findIndex(character => character._id === res.data._id)
        })
        .catch(e => {
          console.log(e.response);
        })

    },
  },
};
</script>

<style>
.favorite-icon__principal-2 {
  color: #d65858;
}
</style>