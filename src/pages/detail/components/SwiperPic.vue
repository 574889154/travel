<template>
    <div class="detail_con">
      <div class="detail_head">
        <div class="swiper_pic"  @click="gallaryVisible">
          <img :src="bannerImg" alt="">
        </div>
        <div class="headfeagure-info">
          <div>{{sightName}}</div>
        </div>
        <div class="imgswipeicon">
          <span class="imgswipeicon-icon iconfont">&#xe60d;</span>
          <em>11</em>
        </div>
        <div class="headfigure_shadow"></div>
      </div>
      <fade-animation>
        <gallary :imgs="gallaryImgs" v-if="visible" @gallaryClose="gallaryClose"></gallary>
      </fade-animation>
    </div>
</template>

<script>
import Gallary from 'components/gallary/Gallary'
import FadeAnimation from 'components/fade/fadeAnimation'
export default {
  name: 'SwiperPic',
  components: {
    Gallary,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
    list: Array
  },
  data () {
    return {
      imgs: [
        'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_r_800x800_5f03ad73.jpg',
        'http://img1.qunarzz.com/sight/p0/1907/ca/ca68bd95bc36bdba3.img.jpg_r_800x800_33169c4b.jpg'
      ],
      visible: false
    }
  },
  methods: {
    gallaryVisible () {
      this.visible = true
    },
    gallaryClose () {
      this.visible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .detail_con
    width 100%
    height 100%
    .detail_head
      overflow hidden
      width 100%
      height 0
      padding-bottom 55%
      .swiper_pic
        position relative
        img
          width 100%
      .headfeagure-info
        position absolute
        top 3.4rem
        left .2rem
        color #fff
        font-size .35rem
      .imgswipeicon
        position absolute
        top 3.4rem
        right .2rem
        width 1.2rem
        height .4rem
        color #fff
        text-align center
        line-height .4rem
        background rgba(0,0,0,.5)
        border-radius .2rem
      .headfigure_shadow
        position: absolute
        top 3.35rem
        width 100%
        height .76rem
        background linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
</style>
