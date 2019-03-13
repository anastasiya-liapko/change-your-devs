import Vue from 'vue'
import Vuex from 'vuex'
import questions from './modules/questions'
import results from './modules/results'
import indexAnimation from './modules/indexAnimation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: {
    questions,
    results,
    indexAnimation
  }
})
