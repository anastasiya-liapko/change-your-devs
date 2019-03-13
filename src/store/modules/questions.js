import questions from '@/data/questions'

const state = {
  questions: questions
}

const mutations = {

}

const actions = {

}

const getters = {
  questions: state => {
    return state.questions
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
