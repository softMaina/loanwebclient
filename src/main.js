import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import { store } from './store/store'
import routes from './routes/routes'
import VueFlashMessage from 'vue-flash-message';
require('vue-flash-message/dist/vue-flash-message.min.css');

Vue.config.productionTip = false

Vue.use(VueAxios,axios)
// Vue.prototype.$axios = axios;
Vue.use(VueRouter)
Vue.use(VueFlashMessage);

const router = new VueRouter({routes});

new Vue({
  store,
  router,
  render: h => h(App),
 
}).$mount('#app')
