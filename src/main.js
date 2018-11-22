import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueFullPage from "vue-fullpage.js";
import DirectionReveal from "direction-reveal";
import jQuery from "jquery";
import "bootstrap/dist/css/bootstrap.css";
import VueParticles from "vue-particles";

global.$ = jQuery;
global.jQuery = jQuery;
/* eslint-disable no-unused-vars */
let Bootstrap = require("bootstrap");
const directionRevealSwing = DirectionReveal();
// const directionRevealSwing = DirectionReveal({
//   selector: ".direction-reveal", // Container element selector.
//   itemSelector: ".direction-reveal__card", // Item element selector.
//   animationName: "swing", // Animation CSS class.
//   enableTouch: true, // Adds touch event to show content on first click then follow link on the second click.
//   touchThreshold: 250 // Touch length must be less than this to trigger reveal which prevents the event triggering if user is scrolling.
// });
/* eslint-enable no-unused-vars */
Vue.use(VueFullPage);
Vue.use(VueParticles);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
