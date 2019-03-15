<template>
  <main class="main main_answer">
    <h2 class="subtitle">
        Проверьте ваших программистов
    </h2>

    <div class="count">
      <span class="count__current">{{ currentQuestion.id }}</span>
      <span>/</span>
      <span class="count__total">{{ totalQuestions }}</span>
    </div>

    <h1 class="title">
        {{ currentQuestion.question }}
    </h1>

    <div class="buttons buttons_answer row justify-content-between">
      <button
        class="btn btn_yes"
        @click="getAnswer(1)">
        Да
      </button>
      <button
        class="btn btn_no"
        @click="getAnswer(0)">
        Нет
      </button>
    </div>

    <p class="text">
        {{ currentQuestion.comment }}
    </p>
  </main>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      id: 0,
      answers: [],
      resultId: '',
      questions: ''
      // questions: JSON.parse(localStorage.getItem('change-your-devs-questions'))
    }
  },
  computed: {
    totalQuestions () {
      return this.questions.length
    },
    currentQuestion () {
      return this.questions[this.id]
    }
  },
  created () {
    console.log('created answer')
    this.fetch()
  },
  watch: {
    '$route' (to, from) {
      this.fetch()
    }
  },
  methods: {
    ...mapActions([
      'setFinished'
    ]),
    getAnswer (value) {
      var answer = {
        id: this.id,
        answer: value
      }
      this.answers.push(answer)

      if (this.id === (this.totalQuestions - 1)) {
        this.setFinished('true')
        // quantity of 'no' answers
        var quantity = 0
        this.answers.forEach(function (elem, i) {
          if (elem.answer === 0) {
            quantity += 1
          }
        })
        this.resultId = quantity >= 3 ? 4 : quantity + 1
        this.send(this.resultId)
        this.$router.push({ name: 'result', params: { id: this.resultId } })
      }

      this.id += 1
    },
    fetch () {
      console.log('fetch')
      var context = this

      axios.post('post.php', {
        request: 2
      })
        .then(res => {
          console.log(res)
          context.questions = res.data
          console.log(context.questions)
          // localStorage.setItem('change-your-devs-questions', JSON.stringify(res.data))
        })
        .catch(error => console.log(error))
    },
    send (value) {
      axios.post('post.php', {
        request: 4,
        id: value
      })
        .then(res => {
          console.log(res)
        })
        .catch(error => console.log(error))
    },
    setData (value) {
      this.questions = value
    }
  }
}
</script>

<style lang="sass">
  .main_answer
    min-height: 550px
    .subtitle
      margin-top: 35px
      text-align: center
    .title
      width: 864px
      height: 50px
      margin-top: 54px
      margin-bottom: 67px
    .text
      margin-top: 60px
      // height: 130px

  .subtitle,
  .count
    font-family: inherit
    font-size: 18px
    line-height: 18px
    font-weight: 700
    color: #000000

  @media(max-width: 991px)
    .main_answer
      .title
        width: 100%
        height: 130px

  @media(max-width: 767px)
    .main_answer
      min-height: 650px

  // @media(max-width: 767px)
  //   .main_answer
  //     .text
  //       height: 320px
</style>
