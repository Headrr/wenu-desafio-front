<template>
  <modal name="modal-character" height="400" :adaptive="true">
    <div class="modal modal-banner">
      <!-- <img src="@/assets/img/rick-and-morty-100.jpg" alt="banner-img" /> -->
    </div>

    <img :src="character.image" class="modal-photo animate__animated animate__fadeInDown m-2" :alt="character.name" />

    <div class="modal-status animate__animated animate__fadeInDown">
      <div class="d-flex justify-content-center align-items-center">
        <h2 class="text-center  me-2">{{ character.name }}</h2>
        <h5 class="text-center">({{ character.species }})</h5>
      </div>
    </div>
    <div class="d-flex justify-content-center animate__animated animate__fadeInUp">
      <button class="btn btn-success btn-lg animate__animated animate__zoomIn animate__delay-0s  me-2"
        @click="displayEpisodes">
        <i class="fa fa-video-camera" aria-hidden="true"></i>
        Ver episodios
      </button>
      <span> </span>
      <button class="btn btn-success btn-lg animate__animated animate__zoomIn animate__delay-0s  me-2" @click="saveFavo(character.id.toString(), character.name, character.status, character.gender,
      character.image)">
        <i class="fa fa-heart fa-1x favorite-icon__principal"></i>
        Favoritos
      </button>
    </div>

    <div class="modal-episodes mt-4">
    </div>
  </modal>
</template>
<script>
import mixinClasses from "../mixins";
export default {
  mixins: [mixinClasses],
  props: {
    character: {
      type: Object
    },
    interestingCharacters: {
      type: Array
    }
  },
  methods: {
    displayEpisodes() {
      this.$emit('display-episodes');
    },

    showInfoCharacter() {
      this.$emit('show-character')
    },
    setFav() {
      this.$modal.show("modal-character");
    },
    saveFavo(favId, favName, favStatus, favGender, favImage) {
      const emailUser = localStorage.getItem("user")
      const data = {
        email: emailUser,
        id: favId,
        name: favName,
        status: favStatus,
        gender: favGender,
        image: favImage,
      }

      fetch('http://localhost:3001/api/user/nuevo', {
        //mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .catch(error => console.log('Error:', error.res))
        this.$fire({
        title: "¡Enhorabuena!",
        text: `${favName} ahora en tus favoritos`,
        type: "success",
        timer: 3000
      })
    }
  }
};
</script>
