<template>
  <div class="bg-color">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-mplist></home-mplist>
    <home-recommend></home-recommend>
    <home-guesslike></home-guesslike>
    <home-weekendgo></home-weekendgo>
    <home-footer></home-footer>
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
import HomeFooter from './components/Footer'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeMplist,
    HomeRecommend,
    HomeGuesslike,
    HomeWeekendgo,
    HomeFooter
  }
}
</script>
<style lang="stylus">
  .bg-color
    background-color #fff
</style>
