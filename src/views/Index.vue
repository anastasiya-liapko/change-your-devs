<template>
  <div class="container container_index">
    <app-header :logoLink="'img/logo-black.svg'" @click.native="changeAnimation"></app-header>

    <!-- <transition name="slide-right" mode="out-in"> -->
      <router-view></router-view>
    <!-- </transition> -->

    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style lang="sass">
  .container_index
    height: 860px
    .text,
    .link,
    .icon-telephone-white::before
      color: #000000
    .title
      color: #1875f0

  @media(max-width: 991px)
    .container_index
      height: 910px

  @media(max-width: 767px)
    .container_index
      height: 1050px

  @media(max-width: 575px)
    .container_index
      height: 1170px

  @media(max-width: 475px)
    .container_index
      height: 1292px

  @media(max-width: 374px)
    .container_index
      height: 1405px

</style>
