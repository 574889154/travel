<template>
  <div class="bg-color">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-mplist></home-mplist>
    <home-recommend></home-recommend>
    <home-guesslike></home-guesslike>
    <home-weekendgo></home-weekendgo>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeMplist from './components/Mplist'
import HomeRecommend from './components/Recommend'
import HomeGuesslike from './components/Guesslike'
import HomeWeekendgo from './components/Weekendgo'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeMplist,
    HomeRecommend,
    HomeGuesslike,
    HomeWeekendgo
  }
}
</script>
<style lang="stylus">
  .bg-color
    background-color #fff
</style>
