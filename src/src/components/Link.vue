<template>
  <a
    :href="link"
    class="link"
    :class="design">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    link: String,
    design: String
  }
}
</script>

<style lang="sass">
  .link
    position: relative
    z-index: 1
    margin-left: 50px
    font-family: inherit
    font-size: 14px
    line-height: 14px
    font-weight: 400
    text-shadow: 0 0 0 rgba(0, 0, 0, 0)
    transition: all 0.2s ease
    animation: scale-out-center 0.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both
    &:first-child
      margin-left: 0
    &:hover
      animation: scale-in-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
      text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.6)

  @keyframes scale-in-center
    0%
      transform: scale(1)
      opacity: 1

    100%
      transform: scale(1.02)
      opacity: 1

  @keyframes scale-out-center
    0%
      transform: scale(1.02)
      opacity: 1

    100%
      transform: scale(1)
      opacity: 1

  .link_bold
    font-size: 16px
    line-height: 16px
    font-weight: 500

  @media(max-width: 575px)
    .link
      margin-left: 0
      margin-bottom: 20px
      &:last-child
        margin-bottom: 0
</style>
