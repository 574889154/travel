import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import motations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  actions: actions,
  mutations: motations
})
