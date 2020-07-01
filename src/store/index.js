import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app,
    settings,
    user
  },
  getters
})
