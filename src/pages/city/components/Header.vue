<template>
  <div class="header">
    <router-link to="/">
      <span class="back">〈</span>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .header
    position relative
    overflow hidden
    height .86rem
    line-height: .86rem
    background: $bgColor
    color : #fff
    text-align center
    font-size .32rem
    .back
      position absolute
      left 0
      padding-left .2rem
      color #fff
</style>
