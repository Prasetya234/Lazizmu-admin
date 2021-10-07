import Vue from "vue";
import VueResource from "vue-resource";
import config from "@/config";

Vue.use && Vue.use(VueResource);

const state = {
  dataUser: [],
};

const mutations = {
  SET_USER_REG(state, value) {
    state.dataUser = value;
  },
};

const actions = {
  getRegister: ({ commit }, { body, success, fail }) => {
    Vue.http.post(config.api.register, body).then(
      (response) => {
        success && success(response);
        commit("SET_USER_REG", response);
      },
      (response) => {
        fail && fail(response);
      }
    );
  },
};
const getters = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
