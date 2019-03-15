import results from '@/data/results'

const state = {
  isFinished: {
    btnContent: 'Пройти тестирование',
    btnUrl: '/',
    showBtn: false
  },
  // resultId: results[0].id,
  // results: results
}

const mutations = {
  'SET_FINISHED' (state, value) {
    state.isFinished.btnContent = 'Повторить'
    state.isFinished.btnUrl = '/answer'
    state.isFinished.showBtn = value
  }
  // 'GET_RESULT' (state, value) {
  //   var quantity = 0
  //   value.forEach(function (elem, i) {
  //     if (elem.answer === 0) {
  //       quantity += 1
  //     }
  //   })
  //   if (quantity >= 3) {
  //     state.result = results[3].id
  //   } else {
  //     state.result = results[quantity].id
  //   }
  // }
}

const actions = {
  setFinished: ({ commit }, value) => {
    commit('SET_FINISHED', value)
  }
  // getResult: ({ commit }, value) => {
  //   commit('GET_RESULT', value)
  // }
}

const getters = {
  isFinished: state => {
    return state.isFinished
  },
  // resultId: state => {
  //   return state.resultId
  // },
  // results: state => {
  //   return state.results
  // }
}

export default {
  state,
  mutations,
  actions,
  getters
}
