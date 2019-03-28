<template>
  <header class="header row justify-content-between align-items-end">
    <a
      class="header__logo logo"
      :href="'https://' + site">
      <img
        :src="logoLink"
        alt="Alef development"
        width="109"
        height="35">
    </a>

    <app-link
      class="header__link row align-items-center"
      :link="'tel:8' + phone"
      :design="'link_bold'">
      <span class="icon-telephone-white"></span>
      <span>8{{ phone.split('7').pop() }}</span>
    </app-link>

  </header>
</template>

<script>
import axios from 'axios'
import Link from '@/components/Link.vue'

export default {
  data () {
    return {
      phone: '',
      site: ''
    }
  },
  props: ['logoLink'],
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      var context = this

      axios.get('/post.php?request=1')
        .then(res => {
          console.log(res)
          context.phone = res.data[0].phone
          context.site = res.data[0].site
        })
        .catch(error => console.log(error))
    }
  },
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
