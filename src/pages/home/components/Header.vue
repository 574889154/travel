<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="city">
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe615;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .header
    display: flex
    height .86rem
    line-height: .86rem
    background: $bgColor
    color : #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-bottom: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      color #fff
      min-width: 1.04rem
      padding 0 .1rem
      float: right
      text-align: center
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
