<template>
  <div class="container container_index">
    <app-header :logoLink="'img/logo-black.svg'" @click.native="changeAnimation"></app-header>

    <transition :name="animation" mode="out-in">
      <router-view></router-view>
    </transition>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'animation'
    ])
  },
  methods: {
    ...mapActions([
      'switchAnimation'
    ]),
    changeAnimation () {
      this.switchAnimation('slide-left')
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style lang="sass">
  .container_index
    .text,
    .link,
    .icon-telephone-white::before
      color: #000000
    .title
      color: #1875f0
</style>
