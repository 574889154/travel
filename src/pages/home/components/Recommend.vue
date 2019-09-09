<template>
  <div class="recommend-content">
    <div class="recommend-title"><span class="iconfont">&#xe61b;</span>本周热门榜单</div>
    <div class="all-recommend-title">全部榜单 ></div>
    <div class="recommend-flexbox">
      <swiper class="recommend-wrapper" :options="swiperOption">
        <swiper-slide
          class="item-img-wrapper"
          v-for="item in recommendList"
          :key="item.id"
        >
          <img class="recommend-img" :src="item.itemUrl" alt="">
          <p class="recommend-desc">{{item.desc}}</p>
          <p><span class="recommend-money">{{item.money}}</span>起</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      swiperOption: {
        loop: false,
        autoplay: 1000
      },
      recommendList: [{
        id: '0001',
        itemUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
        desc: '故宫',
        money: '￥60'
      }, {
        id: '0002',
        itemUrl: 'http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg',
        desc: '北京世园会',
        money: '￥108'
      }, {
        id: '0003',
        itemUrl: 'http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_250x250_6ec2f798.jpg',
        desc: '恭王府',
        money: '￥40'
      }, {
        id: '0004',
        itemUrl: 'http://img1.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_250x250_0565d534.jpg',
        desc: '京东石林峡',
        money: '￥58'
      }, {
        id: '0005',
        itemUrl: 'http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_250x250_63e3520a.jpg',
        desc: '圆明园',
        money: '￥25'
      }, {
        id: '0006',
        itemUrl: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_250x250_d76e727c.jpg',
        desc: '北京动物园',
        money: '￥25'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper-pagination-bullet-active
    background: #ddd
  .recommend-content
    width 100%
    height 4.1rem
    position relative
    box-sizing border-box
    font-size .24rem
    .recommend-title
      line-height .8rem
      text-indent .2rem
    .all-recommend-title
      position: absolute
      top .26rem
      right .2rem
    .recommend-flexbox
      display flex
      margin-left .12rem
      .item-img-wrapper
        width 100%
        margin-left .12rem
        white-space no
        line-height .32rem
        text-align center
        .recommend-img
          width 2rem
          height 2rem
          margin-bottom .12rem
        .recommend-money
          color #FF8E16

</style>
