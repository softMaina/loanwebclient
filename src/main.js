import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import { store } from './store/store'
import routes from './routes/routes'
import VueFlashMessage from 'vue-flash-message';
import ImageUploader from 'vue-image-upload-resize'
require('vue-flash-message/dist/vue-flash-message.min.css');



Vue.config.productionTip = false

Vue.use(VueAxios,axios)
// Vue.prototype.$axios = axios;
Vue.use(VueRouter)
Vue.use(VueFlashMessage);
Vue.use(ImageUploader);
// const token = localStorage.getItem('token')
// if(token){
//   axios.defaults.headers.common['Authorization'] = token
// }


const router = new VueRouter({routes});

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(store.getters.isLoggedIn){
      next()
      return
    }
    next('/login')
  }else{
    next()
  }
})

new Vue({
  beforeCreate:function(){
    
  },
  store,
  router,
  render: h => h(App),
 
}).$mount('#app')
