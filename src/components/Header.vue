<template>
  <header class="header row justify-content-between align-items-end">
    <router-link
      class="header__logo logo"
      to="/"
      tag="a">
      <img
        :src="logoLink"
        alt="Alef development"
        width="109"
        height="35">
    </router-link>

    <app-link
      class="header__link row align-items-center"
      :link="'tel:84952302268'"
      :design="'link_bold'">
      <span class="icon-telephone-white"></span>
      <span>8(495) 230-22-68</span>
    </app-link>

  </header>
</template>

<script>
import Link from '@/components/Link.vue'

export default {
  props: ['logoLink'],
  components: {
    'app-link': Link
  }
}
</script>

<style lang="sass">
  .header
    padding-top: 40px
    padding-bottom: 40px

  .logo
    position: relative
    z-index: 1
    width: 109px
    height: 35px

  .icon-telephone-white
    margin-right: 15px
    font-size: 20px

  @media(max-width: 575px)
    .header
      .link
        font-size: 12px

    .logo
      width: 130px
      height: 42px

    .icon-telephone-white
      margin-right: 5px
</style>
