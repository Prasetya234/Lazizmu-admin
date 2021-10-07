import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login";
import berita from "./modules/berita";
import register from "./modules/register";
import infaq from "./modules/infaq";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    berita,
    register,
    infaq,
  },
});
