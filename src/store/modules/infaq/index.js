import Vue from "vue";
import VueResource from "vue-resource";
import config from "@/config";

Vue.use && Vue.use(VueResource);

const state = {
  isiInfaq: [],
};

const mutations = {
  SET_DATA(state, value) {
    state.isiInfaq = value;
  },
  SET_DATA2(state, value) {
    state.isiInfaq = value;
  },
  SET_DATA3(state, value) {
    state.isiInfaq = value;
  },
  SET_DATA4(state, value) {
    state.isiInfaq = value;
  },
};

const actions = {
  getInfaq({ commit }) {
    return new Promise((resolve, reject) => {
      try {
        const response = Vue.http.get(config.api.infaq);
        commit("SET_DATA", response);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  },
  putInfaq: ({ commit }, { body, success, fail }) => {
    Vue.http.put(config.api.infaq + "/" + body.id, body.body).then(
      (response) => {
        success && success(response);
        commit("SET_DATA2", response);
      },
      (response) => {
        fail && fail(response);
      }
    );
  },
  deleteInfaq: ({ commit }, { body, success, fail }) => {
    Vue.http.delete(config.api.infaq + "/" + body, {}).then(
      (response) => {
        success && success(response);
        commit("SET_DATA3", response);
      },
      (response) => {
        fail && fail(response);
      }
    );
  },
  createInfaq: ({ commit }, { body, success, fail }) => {
    Vue.http.post(config.api.infaq, body).then(
      (response) => {
        success && success(response);
        commit("SET_DATA4", response);
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
