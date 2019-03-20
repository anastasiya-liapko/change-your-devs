<template>
  <main class="main main_index">
    <h1 class="title title_uppercase">
        Тест. Проверьте вашу IT-команду, даже если вы не программист
    </h1>
    <p class="text">
        Представьте, что все данные вашей компании были потеряны в один день. Или вы год оплачивали разработку мобильного приложения, но так и не запустились. Или персональные данные ваших клиентов были украдены.
    </p>
    <p class="text">
        Ужасные картины! И кажется, что совершенно неожиданные. Но это не так. Все эти ситуации могут произойти в реальной жизни, если вовремя не заметить их причину — некомпетентных программистов и технических менеджеров. Как понять, что ваши программисты и менеджеры не профессионалы, если вы сами не умеете читать код?
    </p>
    <p class="text">
        Этот тест рассчитан на людей, которые работают с программистами либо в качестве начальников, либо в качестве заказчиков. Пройдите его, и если хотя бы на один вопрос вы ответите отрицательно — задумайтесь. Если на два — начните волноваться. Если на три — поменяйте IT-команду, пока не стало слишком поздно.
    </p>

    <router-link
      class="btn btn_index"
      :to="'/answer'"
      tag="a"
      @click.native="changeAnimation">
      Проверить своих программистов
    </router-link>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'switchAnimation'
    ]),
    changeAnimation () {
      this.switchAnimation('slide-right')
    }
  }
}
</script>

<style lang="sass">
  .main_index
    .title
      width: 505px
      margin-top: 15px
      margin-bottom: 48px
    .btn
      margin-top: 48px

  @media(max-width: 575px)
    .main_index
      .title
        width: 100%
</style>
