<template>
  <div class="bg-color">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-mplist></home-mplist>
    <home-recommend></home-recommend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeMplist from './components/Mplist'
import HomeRecommend from './components/Recommend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeMplist,
    HomeRecommend
  }
}
</script>
<style lang="stylus">
  .bg-color
    background-color #fff
</style>
