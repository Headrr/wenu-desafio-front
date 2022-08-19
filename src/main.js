import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '../src/api';
import vmodal from 'vue-js-modal';
import VueSimpleAlert from "vue-simple-alert";

// // CSS Globales
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/global.css';

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

// Configuración Global Axios
Vue.prototype.$http = axios;

Vue.use(BootstrapVue);
Vue.use(vmodal);
Vue.use(VueSimpleAlert);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
