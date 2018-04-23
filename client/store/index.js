import axios from "axios";
import jwtDecode from "jwt-decode";
import Cookie from 'js-cookie';

export const state = () => ({
  authUser: null,
  token: null
});

let instance = axios.create({
  timeout: 1000
});

export const mutations = {
  SET_USER: function(state, user) {
    state.authUser = user;
  },

  SET_TOKEN: function(state, token) {
    state.token = token;
  }
};

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { $axios, req }) {
    try {
      const jwtCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("token="));
      if (jwtCookie) {
        let token = jwtCookie.split("=")[1];
        //$axios.defaults.headers.common['Authorization'] = "Bearer " + token;
        let payload = jwtDecode(token);
        let date = Date.now() / 1000;
        if (payload.exp > date) {
          commit("SET_USER", payload.user);
          commit("SET_TOKEN", token);
        }
      }
    } catch (error) {}
  },
  async login({ commit }, { username, password }) {
    try {
      const { data } = await axios.post("/api/login", { username, password });
      let payload = jwtDecode(data.token);
      Cookie.set('token', data.token, { expires: 1 / 24 * 3 });
      commit("SET_USER", payload.user);
      commit("SET_TOKEN", data.token);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error("Bad credentials");
      }
      throw error;
    }
  },

  async logout({ commit }) {
    await axios.post("/api/logout");
    commit("SET_USER", null);
    commit("SET_TOKEN", null);
  }
};
