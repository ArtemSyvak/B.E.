import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueFullPage from "vue-fullpage.js";
import jQuery from "jquery";
import "bootstrap/dist/css/bootstrap.css";
global.$ = jQuery;
global.jQuery = jQuery;
// let Bootstrap = require("bootstrap");

Vue.use(VueFullPage);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
