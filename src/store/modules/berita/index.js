import Vue from "vue";
import VueResource from "vue-resource";
import config from "@/config";

Vue.use && Vue.use(VueResource);

const state = {
  isiBerita: [],
};

const mutations = {
  SET_DATA(state, value) {
    state.isiBerita = value;
  },
  SET_DATA2(state, value) {
    state.isiBerita = value;
  },
  SET_DATA3(state, value) {
    state.isiBerita = value;
  },
  SET_DATA4(state, value) {
    state.isiBerita = value;
  },
  SET_DATA5(state, value) {
    state.isiBerita = value;
  },
};

const actions = {
  getIsiBerita({ commit }) {
    return new Promise((resolve, reject) => {
      try {
        const response = Vue.http.get(config.api.berita);
        commit("SET_DATA", response);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  },
  getIsiKategori({ commit }) {
    return new Promise((resolve, reject) => {
      try {
        const response = Vue.http.get(config.api.kategori);
        commit("SET_DATA2", response);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  },
  setBerita({ commit }, { body }) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Vue.http.post(config.api.berita, body);
        commit("SET_DATA3", response);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  },
  deleteBerita: ({ commit }, { id, success, fail }) => {
    Vue.http.delete(config.api.berita + "/" + id, {}).then(
      (response) => {
        success && success(response);
        commit("SET_DATA4", response);
      },
      (response) => {
        fail && fail(response);
      }
    );
  },
  postBerita: ({ commit }, { body, success, fail }) => {
    Vue.http.post(config.api.berita, body).then(
      (response) => {
        success && success(response);
        commit("SET_DATA5", response);
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
