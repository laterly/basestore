// Import Vue
import Vue from 'vue';
import router from "./router";
import App from "./app.vue";
// Init App
new Vue({
  el: "#app",
  router,
  // Register App Component
  render: h => h(App)
});
