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
    <Home-mustsee></Home-mustsee>
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
import HomeMustSee from './components/MustSee'
import axios from 'axios'
import { mapState } from 'vuex'
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
    HomeFooter,
    HomeMustSee
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      productList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
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
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 使用keep-alive新增的生命周期函数
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
<style lang="stylus">
  .bg-color
    background-color #fff
</style>
