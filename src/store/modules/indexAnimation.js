const state = {
  animation: 'slide-left'
}

const mutations = {
  'SWITCH_ANIMATION' (state, value) {
    state.animation = value
  }
}

const actions = {
  switchAnimation: ({ commit }, value) => {
    commit('SWITCH_ANIMATION', value)
  }
}

const getters = {
  animation: state => {
    return state.animation
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
