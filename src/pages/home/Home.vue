<template>
  <div class="bg-color">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-mplist></home-mplist>
    <home-recommend :list="recommendList"></home-recommend>
    <home-guesslike></home-guesslike>
    <home-weekendgo :list="productList"></home-weekendgo>
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
import axios from 'axios'
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
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      productList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.productList = data.productList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style lang="stylus">
  .bg-color
    background-color #fff
</style>
