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

    <h1 class="title" v-html="currentQuestion.question">
        <!-- {{ currentQuestion.question }} -->
    </h1>

    <div class="buttons buttons_answer row justify-content-between">
      <button
        class="btn btn_yes"
        :class="{'hover': yes}"
        @click="getAnswer(1)"
        @mouseover="yes=true"
        @mouseleave="yes=false">
        Да
      </button>
      <button
        class="btn btn_no"
        :class="{'hover': no}"
        @click="getAnswer(0)"
        @mouseover="no=true"
        @mouseleave="no=false">
        Нет
      </button>
    </div>

    <p class="text text_answer" v-html="currentQuestion.comment">
        <!-- {{ currentQuestion.comment }} -->
    </p>
  </main>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import { scrollMixin } from '@/scrollMixin.js'

export default {
  data () {
    return {
      yes: false,
      no: false,
      device: '',
      id: 0,
      answers: [],
      resultId: '',
      questions: ''
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
    this.fetch()
    this.checkDevice()
    window.addEventListener('resize', this.checkDevice)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkDevice)
  },
  methods: {
    ...mapActions([
      'setFinished'
    ]),
    checkDevice () {
      this.device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
    },
    getAnswer (value) {
      this.scroll(0)
      // window.scrollTo({
      //     top: 0,
      //     behavior: "smooth"
      // })
      var context = this
      if (value && this.device) {
        this.yes = true

        setTimeout(function () {
          context.yes = false
        }, 200)
      } else if (!value && this.device) {
        this.no = true

        setTimeout(function () {
          context.no = false
        }, 200)
      }

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
      var context = this

      axios.get('/post.php?request=2')
        .then(res => {
          console.log(res)
          context.questions = res.data
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
  },
  mixins: [scrollMixin]
}
</script>

<style lang="sass">
  .main_answer
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
</style>
