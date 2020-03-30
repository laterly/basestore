// Import Vue
import Vue from 'vue';
import router from "./router";
import App from "./app.vue";
import store from './vuex'
import VueLazyload from 'vue-lazyload'
import './utils/base';
Vue.use(VueLazyload)

// Init App
new Vue({
  el: "#app",
  router,
  store,
  // Register App Component
  render: h => h(App)
});
