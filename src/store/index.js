import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import router from "../router";
Vue.use(Vuex);
Vue.use(VueRouter);

export default new Vuex.Store({
  state: {
    token: null,
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async login({ commit }, usuario) {
      try {
        const res = await fetch("http://localhost:3001/api/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        });
        const usuarioDB = await res.json();
        console.log(usuarioDB.data.token);
        commit("setToken", usuarioDB.data.token);
        localStorage.setItem("token2", usuarioDB.data.token);
        localStorage.setItem("user", usuario.email);
        router.push("/home");
        location.reload()
      } catch (error) {
        console.log("error: ", error);
      }
    },
    obtenerToken({ commit }) {
      if (localStorage.getItem("token")) {
        commit("setToken", localStorage.getItem("token"));
        location.reload()
      } else {
        commit("setToken", null);
      }
    },
    cerrarSesion({ commit }) {
      commit("setToken", null);
      localStorage.removeItem("token2");
      router.push("/login");
      location.reload()
    },
  },
});
