<template>
  <footer class="footer row flex-column flex-sm-row justify-content-center justify-content-md-end align-items-center">
    <app-link
      class="email"
      :link="'mailto:contact@alef.im'">
      contact@alef.im
    </app-link>
    <app-link
      class="site"
      :link="'https://alef.im'">
      www.alef.im
    </app-link>
    <app-link
      class="phone"
      :link="'tel:84952302268'">
      8(495) 230-22-68
    </app-link>
  </footer>
</template>

<script>
import Link from '@/components/Link.vue'

export default {
  components: {
    'app-link': Link
  }
}
</script>

<style lang="sass">
  .footer
    margin-top: auto
    padding-top: 45px
    padding-bottom: 45px

  .footer_index
    .link
      color: #000000

  .footer_result
    .link
      color: #ffffff

  @media(max-width: 991px)
    .footer
      .phone
        margin-left: auto

  @media(max-width: 767px)
    .footer
      padding-bottom: 120px
      .phone
        margin-left: 50px

  @media(max-width: 575px)
    .footer
      .phone
        margin-left: 0
</style>
