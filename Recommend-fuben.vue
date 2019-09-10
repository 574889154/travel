<template>
  <div class="recommend-content">
    <div class="title">
      <img class="title-img" src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="本周热门榜单">
      <span class="title-hotrec">本周热门榜单</span>
      <span class="title-allrec">全部榜单</span>
    </div>
    <div class="wrapper" ref="wrapper">
      <ul class="recommend-flexbox" ref="cont">
        <li
          class="item-img-wrapper"
          v-for="item in recommendList"
          :key="item.id"
        >
          <img class="recommend-img" :src="item.itemUrl" alt="">
          <p class="recommend-desc">{{item.desc}}</p>
          <p><span class="recommend-money">￥{{item.money}}</span>起</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// eslint-disable-next-line no-unused-vars
const scroll = new BScroll('.wrapper', {
  scrollY: true,
  click: true
})
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        itemUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
        desc: '故宫',
        money: '60'
      }, {
        id: '0002',
        itemUrl: 'http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg',
        desc: '北京世园会',
        money: '108'
      }, {
        id: '0003',
        itemUrl: 'http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_250x250_6ec2f798.jpg',
        desc: '恭王府',
        money: '40'
      }, {
        id: '0004',
        itemUrl: 'http://img1.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_250x250_0565d534.jpg',
        desc: '京东石林峡',
        money: '58'
      }, {
        id: '0005',
        itemUrl: 'http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_250x250_63e3520a.jpg',
        desc: '圆明园',
        money: '25'
      }, {
        id: '0006',
        itemUrl: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_250x250_d76e727c.jpg',
        desc: '北京动物园',
        money: '25'
      }]
    }
  },
  methods: {
    verScroll () {
      let width = this.recommendList.length * 110// 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度
      this.$refs.cont.style.width = width + 'px' // 修改滚动区域的宽度
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0, // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical'
          })
        } else {
          this.scroll.refresh() // 如果dom结构发生改变调用该方法
        }
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      let timer = setTimeout(() => {
        if (timer) {
          clearTimeout(timer)
          this.verScroll()
        }
      }, 0)
    })
  }
}
</script>

<style lang="stylus" scoped>
  .recommend-content
    width 100%
    height 4.1rem
    position relative
    box-sizing border-box
    font-size .24rem
    border-bottom .2rem solid #F5F5F5
    .title
      position: relative
      display: flex
      padding: 12px 0
      box-sizing: border-box
      .title-img
        width .3rem
        height .3rem
      .title-hotrec
        font-size .32rem
        margin-left .04rem
      .title-allrec
        position absolute
        padding-top .04rem
        font-size .26rem
        right .4rem
        color gray
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
