import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import {store} from './store/store';

Vue.use(VueRouter);
Vue.config.productionTip = false



const router = new VueRouter({
  routes, 
  mode: 'history'
})

new Vue({
  el: '#app', 
  router,
  store,
  render: h => h(App),
}).$mount('#app')
