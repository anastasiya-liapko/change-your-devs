<template>
  <div class="container container_result" :class="'container_result-' + resultId">
    <app-header :logoLink="'img/logo-white.svg'"></app-header>

    <main class="main">
      <div class="avatar">
        <img :src="results[resultId - 1].img" alt="" width="192" height="192">
      </div>

      <div
        v-if="!btnData.showBtn"
        class="arrow arrow_1">
        <p class="arrow__text">Я проверил свою команду программистов. Вот результат теста.</p>
        <span class="icon icon-curved-arrow-with-broken-line"></span>
      </div>

      <h1 class="title">
        {{ results[resultId - 1].title }}
      </h1>
      <p class="text text_result" v-html="results[resultId - 1].dsc">
        <!-- {{ results[resultId - 1].dsc }} -->
      </p>

      <div
        v-if="!btnData.showBtn"
        class="arrow arrow_2">
        <p class="arrow__text">Если у вас есть команда пограммистов, жмите на кнопку</p>
        <span class="icon icon-turn-right-arrow-with-broken-line"></span>
      </div>

      <div class="buttons buttons_result row flex-column flex-sm-row justify-content-center">
        <router-link
          class="btn btn_repeat"
          :class="{'btn_repeat-long': !btnData.showBtn}"
          :to="btnData.btnUrl"
          tag="a">
          {{ btnData.btnContent }}
        </router-link>

        <button
          v-if="btnData.showBtn"
          class="btn btn_share"
          to="/"
          tag="a"
          @mouseenter="showSocial = true"
          @mouseleave="showSocial = false">
          <span class="btn_share__text row justify-content-center">
            Поделиться
            <span class="icon-share"></span>
          </span>

          <transition name="puff-social">
            <span
              class="social social_vk row align-items-center justify-content-center"
              v-if="showSocial"
              @click="showSocial = !showSocial">
              <social-sharing
                class="social_link"
                :url="results[resultId - 1].link"
                inline-template>
                <div>
                  <network
                    class="social_network row justify-content-center align-items-center"
                    network="vk">
                    <span class="icon icon-vk"></span>
                  </network>
                </div>
              </social-sharing>
            </span>
          </transition>

          <transition name="puff-social">
            <span
              class="social social_twitter row align-items-center justify-content-center"
              v-if="showSocial">
              <!-- <a class="social_network row justify-content-center align-items-center" :href="'https://twitter.com/intent/tweet?text=' + twitter" target="_blank" rel="noopener noreferrer"><span class="icon icon-twitter"></span></a> -->
              <social-sharing
                class="social_link"
                :url="results[resultId - 1].link"
                inline-template>
                <div>
                  <network
                    class="social_network row justify-content-center align-items-center"
                    network="twitter">
                    <span class="icon icon-twitter"></span>
                  </network>
                </div>
              </social-sharing>
            </span>
          </transition>

          <transition name="puff-social">
            <span
              class="social social_fb row align-items-center justify-content-center"
              v-if="showSocial">
              <social-sharing
                class="social_link"
                :url="results[resultId - 1].link"
                inline-template>
                <div>
                  <network
                    class="social_network row justify-content-center align-items-center"
                    network="facebook">
                    <span class="icon icon-facebook"></span>
                  </network>
                </div>
              </social-sharing>
            </span>
          </transition>
        </button>
      </div>
    </main>

    <app-footer></app-footer>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      showSocial: false,
      results: ''
    }
  },
  computed: {
    ...mapGetters([
      'isFinished'
    ]),
    resultId () {
      return parseInt(this.$route.params.id)
    },
    btnData () {
      return this.isFinished
    },
    twitter () {
      return 'ТЕСТ. ПРОВЕРЬТЕ ВАШУ IT-КОМАНДУ, ДАЖЕ ЕСЛИ ВЫ НЕ ПРОГРАММИСТ ' + this.results[this.resultId - 1].link
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      var context = this

      axios.get('/post.php?request=3')
        .then(res => {
          console.log(res)
          context.results = res.data
        })
        .catch(error => console.log(error))
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style lang="sass">
  .container_result
    .main
      position: relative
    .title,
    .text,
    .link
      color: #ffffff
    .avatar
      margin-bottom: 15px
    .text
      margin-top: 36px
      margin-bottom: 46px

  .arrow
    position: absolute
  .arrow__text
    font-family: inherit
    font-size: 20px
    line-height: 20px
    font-weight: 700
    color: #ffffff
  .arrow_1
    top: 30px
    left: 50%
    width: 290px
    margin-left: -500px
    text-align: right
    .arrow__text
      text-align: right
  .arrow_2
    top: 330px
    right: 50%
    width: 370px
    margin-right: -750px
    .arrow__text
      text-align: left

  .icon-curved-arrow-with-broken-line
    margin-right: -80px
    font-size: 130px

  .icon-turn-right-arrow-with-broken-line
    margin-left: -100px
    font-size: 40px

  .avatar
    width: 192px
    height: 192px

  .icon-share
    margin-left: 20px
    font-size: 36px

  .social
    position: absolute
    z-index: 1
    top: 0
    width: 34%
    height: 100%
    .icon
      font-size: 36px
      &::before
        color: #ffffff

  .social_link,
  .social_network
    width: 100%
    height: 100%

  .social_vk
    left: 0px
    background-color: #4c75a3

  .social_twitter
    left: 34%
    background-color: #00acee

  .social_fb
    left: 67%
    background-color: #3c5a99

  @media(max-width: 1599px)
    .arrow_2
      margin-right: -650px

    .icon-turn-right-arrow-with-broken-line
      margin-left: 0px

  @media(max-width: 1439px)
    .arrow_2
      position: relative
      top: 0
      right: 0
      display: flex
      width: 510px
      height: 160px
      margin-right: 0
      margin-left: -250px

    .icon-turn-right-arrow-with-broken-line
      transform: rotate(-90deg)

  @media(max-width: 1199px)
    .arrow_1
      position: relative
      top: 0
      left: 0
      display: flex
      width: 420px
      margin-left: 0
      margin-right: -450px
      text-align: left
      .arrow__text
        order: 2

    .icon-curved-arrow-with-broken-line
      order: 1
      margin-right: 0
      transform: rotate(90deg)

  @media(max-width: 991px)
    .arrow_1
      flex-direction: column
      align-items: center
      width: 290px
      margin-right: 0
      .arrow__text
        order: 1
        text-align: center

    .icon-curved-arrow-with-broken-line
      order: 2
      margin-top: 50px
      transform: rotate(30deg)
      transform-origin: 130px

    .arrow_2
      margin-left: 0

    @media(max-width: 575px)
      .container_result
        .text
          margin-bottom: 0
        .buttons
          margin-top: 45px

      .arrow_1
        width: 100%
        .arrow__text
          width: 290px
          font-size: 16px

      .arrow_2
        width: 100%
        .arrow__text
          align-self: center
          width: 370px
          font-size: 16px

      .icon-curved-arrow-with-broken-line
        font-size: 100px

      .icon-turn-right-arrow-with-broken-line
        width: 40px
        font-size: 25px
        transform-origin: 70px

</style>
