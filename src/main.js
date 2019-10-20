import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins";
import vuetify from "./plugins/vuetify";
import { sync } from "vuex-router-sync";
import "./assets/styles/styles.scss";

sync(store, router);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
