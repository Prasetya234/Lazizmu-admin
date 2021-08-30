import Vue from "vue";
import VueResource from "vue-resource";
import config from "@/config";

Vue.use && Vue.use(VueResource);

const state = {
  login: {
    email: null,
    password: null,
  },
};

const mutations = {
  setUserData(state, value) {
    state.login = value;
  },
};

const actions = {
  login: ({ commit }, { reqBody, success, fail }) => {
    Vue.http.post(config.api.login, reqBody).then(
      (response) => {
        success && success(response);
        commit("setUserData", response);
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