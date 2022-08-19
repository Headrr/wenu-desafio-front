import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "../views/Welcome.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Favoritos from "../views/Favoritos.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    // meta: {requireAuth: true}
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/favoritos",
    name: "favoritos",
    component: Favoritos,
    // meta: {requireAuth: true}
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some((record) => record.meta.requireAuth);

  if (rutaProtegida && store.state.token === null) {
    next({ name: "welcome" });
  } else {
    next();
  }
});
export default router;
