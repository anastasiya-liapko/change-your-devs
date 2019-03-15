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
      :link="'tel:8' + phone">
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
      phone: localStorage.getItem('phone'),
      email: localStorage.getItem('email'),
      site: localStorage.getItem('site')
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
      axios.post('post.php', {
        request: 1
      })
        .then(res => {
          localStorage.setItem('phone', res.data[0].phone)
          localStorage.setItem('email', res.data[0].email)
          localStorage.setItem('site', res.data[0].site)
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
