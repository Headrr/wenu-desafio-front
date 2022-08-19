<template>
  <div class="dashboard">
    <div class="cards ">
      <h1 v-if="favs.length == 0">No tienes favoritos</h1>
      <template v-for="(character, index) in favs">
        <Card :character="character" :key="index" />
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/CardFav.vue";
export default {
  data() {
    return {
      favs: [],
    };
  },
  components: {
    Card
  },

  created() {
    this.listarFav();
  },
  methods: {
    listarFav() {
      const emailUser = localStorage.getItem("user")
      axios.get(`http://localhost:3001/api/user/favMail/${emailUser}`
      )
        .then((response) => {
          this.favs = response.data;
        })
        .catch((e) => {
          console.log('error' + e);
        })
    },
  }
};
</script>