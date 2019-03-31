<template>
  <footer class="footer row flex-column flex-sm-row justify-content-center justify-content-md-end align-items-center">
    <app-link
      class="email"
      :link="'mailto:' + email">
      {{ email }}
    </app-link>
    <app-link
      class="site"
      :link="'https://' + site">
      {{ site }}
    </app-link>
    <app-link
      class="phone"
      :link="'tel:' + phoneCall">
      8{{ phone.split('7').pop() }}
    </app-link>
  </footer>
</template>

<script>
import axios from 'axios'
import Link from '@/components/Link.vue'

export default {
  data () {
    return {
      phone: '',
      email: '',
      site: ''
    }
  },
  computed: {
    phoneCall () {
      var firstPart = this.phone.split('(').pop().split(')').shift()
      var secondPart = this.phone.split(')').pop()
      var thirdPart = secondPart.split(' ').pop().split('-')
      return 8 + firstPart + thirdPart[0] + thirdPart[1] + thirdPart[2]
    }
  },
  components: {
    'app-link': Link
  },
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      var context = this

      axios.get('/post.php?request=1')
        .then(res => {
          console.log(res)
          context.email = res.data[0].email
          context.phone = res.data[0].phone
          context.site = res.data[0].site
        })
        .catch(error => console.log(error))
    }
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
