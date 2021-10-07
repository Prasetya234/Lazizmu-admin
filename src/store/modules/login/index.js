import Vue from "vue";
import VueResource from "vue-resource";
import config from "@/config";

Vue.use && Vue.use(VueResource);

const state = {
  dataLOgin: [],
};

const mutations = {
  setUserData(state, value) {
    state.dataLOgin = value;
  },
  setUserData2(state, value) {
    state.dataLOgin = value;
  },
  setUserData3(state, value) {
    state.dataLOgin = value;
  },
  setUserData4(state, value) {
    state.dataLOgin = value;
  },
};

const actions = {
  login: ({ commit }, { headers, success, fail }) => {
    Vue.http
      .post(
        config.api.login,
        {},
        {
          headers,
        }
      )
      .then(
        (response) => {
          success && success(response);
          commit("setUserData", response);
        },
        (response) => {
          fail && fail(response);
        }
      );
  },
  code: ({ commit }, { headers, success, fail }) => {
    Vue.http
      .post(
        config.api.requestChange,
        {},
        {
          headers,
        }
      )
      .then(
        (response) => {
          success && success(response);
          commit("setUserData2", response);
        },
        (response) => {
          fail && fail(response);
        }
      );
  },
  validCode: ({ commit }, { data, success, fail }) => {
    Vue.http.get(config.api.validCode1 + data.code).then(
      (response) => {
        success && success(response);
        commit("setUserData3", response);
      },
      (response) => {
        fail && fail(response);
      }
    );
  },
  changePAssword: ({ commit }, { data, success, fail }) => {
    Vue.http.post(config.api.chanePassword, data).then(
      (response) => {
        success && success(response);
        commit("setUserData4", response);
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
