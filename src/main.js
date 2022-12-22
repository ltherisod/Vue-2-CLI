import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import router from './router'
import VueToastr from "vue-toastr";
import store from './store'
Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
