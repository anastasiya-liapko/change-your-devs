<template>
  <div class="container container_result" :class="'container_result-' + resultId">
    <app-header :logoLink="'img/logo-white.svg'"></app-header>

    <main class="main">
      <div class="avatar">
        <img :src="results[resultId - 1].img" alt="" width="192" height="192">
      </div>

      <h1 class="title">
        {{ results[resultId - 1].title }}
      </h1>
      <p class="text text-center">
        {{ results[resultId - 1].dsc }}
      </p>

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
          class="btn btn_share position-relatives"
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
                :url="shareLink"
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
              <social-sharing
                class="social_link"
                :url="shareLink"
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
                :url="shareLink"
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
    }
  },
  created () {
    console.log('created result')
    this.fetch()
  },
  methods: {
    fetch () {
      console.log('fetch')
      var context = this

      axios.get('/post.php?request=3')
        .then(res => {
          console.log(res)
          context.results = res.data
          console.log(context.results)
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
    .title,
    .text,
    .link
      color: #ffffff
    .avatar
      margin-bottom: 15px
    .text
      margin-top: 36px
      margin-bottom: 46px

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
</style>
