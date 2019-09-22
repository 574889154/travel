<template>
  <div>
    <router-link tag="div" to="/home" class="header-abs" v-show="showAbs">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/home" class="back">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
      <div>景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      console.log(scroll)
      const top = document.documentElement.scrollTop
      if (top > 40) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity: opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 解绑全局滚动事件
  deactivated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .header-abs
    position: absolute
    top .1rem
    left .1rem
    width.7rem
    height .7rem
    line-height .7rem
    text-align center
    border-radius 50%
    background rgba(0,0,0,.5)
    .back-icon
      color #fff
  .header-fixed
    z-index 2
    position fixed
    top 0
    left 0
    right 0
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
