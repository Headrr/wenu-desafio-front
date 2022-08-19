<template>
  <div id="app">
    <b-navbar type="light" variant="warning" toggleable="md" justified sticky>
      <b-navbar-nav tag="h5" justified>
        <b-nav-item active-class :to="{ name: 'welcome' }" variant="dark" exact v-if="verificarSesionFalse">Home
        </b-nav-item>
        <b-nav-item active-class :to="{ name: 'home' }" variant="dark" v-if="verificarSesion">Home</b-nav-item>
        <b-nav-item active-class :to="{ name: 'favoritos' }" variant="dark" v-if="verificarSesion">Favoritos
        </b-nav-item>
        <span>{{ " " }}</span>
        <b-nav-item-dropdown text="Acceso" v-if="verificarSesionFalse" right>
          <b-dropdown-item active-class :to="{ name: 'login' }">Inciar sesión</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'register' }">Registro</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown v-bind:text="user" right v-if="verificarSesion">
          <b-dropdown-item @click="cerrarSesion">Cerrar Sesion</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>

import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["obtenerToken", "cerrarSesion"]),
  },
  created() {
    this.obtenerToken();
  },
  computed: {
    verificarSesion: function () {
      return localStorage.getItem("token2") != null;
    },
    verificarSesionFalse: function () {
      return localStorage.getItem("token2") == null;
    },
  },

  data() {
    const user = localStorage.getItem("user")
    return { user }
  },
};
</script>

<style>
.nav-item.nav-item.nav-item a {
  color: black;
}

.nav-item a {
  justify-self: end;
}
</style>