const state = {
  isFinished: {
    btnContent: 'Пройти тестирование',
    btnUrl: '/',
    showBtn: false
  }
}

const mutations = {
  'SET_FINISHED' (state, value) {
    state.isFinished.btnContent = 'Повторить'
    state.isFinished.btnUrl = '/answer'
    state.isFinished.showBtn = value
  }
}

const actions = {
  setFinished: ({ commit }, value) => {
    commit('SET_FINISHED', value)
  }
}

const getters = {
  isFinished: state => {
    return state.isFinished
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
