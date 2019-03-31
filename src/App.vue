<template>
  <div id="app">
      <transition name="puff" mode="out-in">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
  html,
  body
    height: 100%
    margin: 0

  #app
    // position: relative
    display: flex
    flex-direction: column
    min-width: 320px
    min-height: 100%
    margin: 0 auto
    font-family: 'Montserrat', sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    font-size: 16px
    line-height: normal
    font-weight: 400
    overflow-x: hidden
    img
      width: 100%
      height: auto
    button
      &:focus
        outline: none
    a
      &:hover
        text-decoration: none
    a:not([href]):hover
      cursor: default
  .row
    margin: 0

  .container
    // position: absolute
    flex-grow: 1
    display: flex
    flex-direction: column
    justify-content: stretch
    max-width: 100%
    min-height: 100%
    height: auto
    padding-left: 45px
    padding-right: 45px
    transition: all 0.5s ease

  .container
    position: relative
    background-position: top right
    background-repeat: no-repeat
    background-size: auto 100%
    &::before,
    &::after
        content: ""
        position: absolute
        left: 50%
        width: 2px
        height: 91px
    &::before
        top: 0
    &::after
        bottom: 0

  .container_index
    color: #000000
    background-color: #fafafa
    background-image: url('/img/back-index.png')
    &::before,
    &::after
      background-color: #979797

  .container_result-1
    color: #ffffff
    background-color: #1875f0
    background-image: url('/img/back-result-4.png')
    &::before,
    &::after
      background-color: #ffffff
    .btn_repeat
      color: #ffffff
      &:hover
        color: #1875f0

  .container_result-2
    color: #ffffff
    background-color: #21a487
    background-image: url('/img/back-result-3.png')
    &::before,
    &::after
      background-color: #ffffff
    .btn_repeat
      color: #ffffff
      &:hover
        color: #21a487

  .container_result-3
    color: #ffffff
    background-color: #f07f18
    background-image: url('/img/back-result-2.png')
    &::before,
    &::after
      background-color: #ffffff
    .btn_repeat
      color: #ffffff
      &:hover
        color: #f07f18

  .container_result-4
    color: #ffffff
    background-color: #d22f14
    background-image: url('/img/back-result-1.png')
    &::before,
    &::after
      background-color: #ffffff
    .btn_repeat
      color: #ffffff
      &:hover
        color: #d22f14

  .header,
  .footer
    width: 1349px
    margin: 0 auto

  .main
    display: flex
    flex-direction: column
    align-items: center
    flex-grow: 1
    width: 100%
    height: auto

  .title
    font-family: inherit
    font-size: 24px
    line-height: 24px
    font-weight: 700
    text-align: center

  .title_uppercase
    text-transform: uppercase

  .text
    width: 864px
    font-family: inherit
    font-size: 16px
    line-height: 22px
    font-weight: 400
    text-align: left

  .text_answer
    font-family: 'Roboto Slab', serif
    text-align: center
    height: 200px
    transition: all 0.5s ease

  .text_result
    text-align: center

  .buttons
    width: 565px
    .btn
      width: 272px
    .btn_repeat-long
      width: 512px

  .btn
    padding: 0
    padding-top: 27px
    padding-bottom: 27px
    font-family: inherit
    font-size: 18px
    line-height: 20px
    font-weight: 700
    text-transform: uppercase
    text-align: center
    -webkit-border-radius: 50px
    -moz-border-radius: 50px
    border-radius: 50px
    &:focus,
    &.focus
      box-shadow: none

  .btn_index
    width: 512px
    color: #ffffff
    background-color: #1875f0
    border: 3px solid #1875f0
    transition: all 0.5s ease
    &:hover
      color: #1875f0
      border: 3px solid #1875f0
      background-color: transparent

  .btn_yes
    color: #1875f0
    background-color: transparent
    border: 3px solid #1875f0
    transition: all 0.5s ease
    &:hover
      color: #1875f0
    &.hover
      color: #ffffff
      background-color: #1875f0
      border: 3px solid #1875f0

  .btn_no
    color: #d22f14
    background-color: transparent
    border: 3px solid #d22f14
    transition: all 0.5s ease
    &:hover
      color: #d22f14
    &.hover
      color: #ffffff
      background-color: #d22f14
      border: 3px solid #d22f14

  .btn_repeat
    color: #ffffff
    background-color: transparent
    border: 3px solid #ffffff
    transition: all 0.5s ease
    &:hover
      color: #1875f0
      background-color: #ffffff
      border: 3px solid #ffffff

  .btn_share
    z-index: 1
    position: relative
    margin-left: auto
    padding-top: 19px
    padding-bottom: 19px
    line-height: 36px
    color: #ffffff
    background-color: transparent
    border: 3px solid #ffffff
    overflow: hidden
    &:hover
      color: #ffffff

  .slide-right-enter-active
    -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
    animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

  .slide-right-leave-active
    -webkit-animation: slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both
    animation: slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

  @-webkit-keyframes slide-in-right
    0%
      -webkit-transform: translateX(1000px)
      transform: translateX(1000px)
      opacity: 0

    100%
      -webkit-transform: translateX(0)
      transform: translateX(0)
      opacity: 1

  @keyframes slide-in-right
    0%
      -webkit-transform: translateX(1000px)
      transform: translateX(1000px)
      opacity: 0

    100%
      -webkit-transform: translateX(0)
      transform: translateX(0)
      opacity: 1

  @-webkit-keyframes slide-out-left
    0%
      -webkit-transform: translateX(0)
      transform: translateX(0)
      opacity: 1

    100%
      -webkit-transform: translateX(-1000px)
      transform: translateX(-1000px)
      opacity: 0

  @keyframes slide-out-left
    0%
      -webkit-transform: translateX(0)
      transform: translateX(0)
      opacity: 1

    100%
      -webkit-transform: translateX(-1000px)
      transform: translateX(-1000px)
      opacity: 0

  .puff-enter-active
    -webkit-animation: puff-in-center 0.1s cubic-bezier(0.470, 0.000, 0.745, 0.715) both
    animation: puff-in-center 0.1s cubic-bezier(0.470, 0.000, 0.745, 0.715) both

  .puff-leave-active
    -webkit-animation: puff-out-center 0.15s cubic-bezier(0.165, 0.840, 0.440, 1.000) both
    animation: puff-out-center 0.15s cubic-bezier(0.165, 0.840, 0.440, 1.000) both

  .puff-social-enter-active
    -webkit-animation: puff-in-center 0.2s cubic-bezier(0.470, 0.000, 0.745, 0.715) both
    animation: puff-in-center 0.2s cubic-bezier(0.470, 0.000, 0.745, 0.715) both

  .puff-social-leave-active
    -webkit-animation: puff-out-center 0.4s cubic-bezier(0.165, 0.840, 0.440, 1.000) both
    animation: puff-out-center 0.4s cubic-bezier(0.165, 0.840, 0.440, 1.000) both

  @-webkit-keyframes puff-in-center
    0%
      -webkit-transform: scale(2)
      transform: scale(2)
      opacity: 0

    100%
      -webkit-transform: scale(1)
      transform: scale(1)
      opacity: 1

  @keyframes puff-in-center
    0%
      -webkit-transform: scale(2)
      transform: scale(2)
      opacity: 0

    100%
      -webkit-transform: scale(1)
      transform: scale(1)
      opacity: 1

  @-webkit-keyframes puff-out-center
    0%
      -webkit-transform: scale(1)
      transform: scale(1)
      opacity: 1

    100%
      -webkit-transform: scale(2)
      transform: scale(2)
      opacity: 0

  @keyframes puff-out-center
    0%
      -webkit-transform: scale(1)
      transform: scale(1)
      opacity: 1

    100%
      -webkit-transform: scale(2)
      transform: scale(2)
      opacity: 0

  @media(max-width: 1439px)
    .header,
    .footer
      width: 100%

  @media(max-width: 991px)
    .text
      width: 100%

  @media(max-width: 767px)
    .container
      padding-left: 15px
      padding-right: 15px
      background-position: center

    .text_answer
      height: 270px

  @media(max-width: 600px)
    .buttons_answer
      width: 100%
      .btn
        width: 47%
        padding-top: 20px
        padding-bottom: 20px

    .buttons_result
      width: 100%
      .btn
        width: 100%
        &:first-child
          margin-bottom: 15px

    .text
      text-align: justify

  @media(max-width: 575px)
    .title
      font-size: 20px

    .btn
      width: 100%

    .btn_index
      font-size: 14px

    .text_answer
      height: 300px

  @media(max-width: 475px)
    .text_answer
      height: 420px

  @media(max-width: 374px)
    .text_answer
      height: 450px

</style>
