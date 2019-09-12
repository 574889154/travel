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
          v-for="(item,index) in list"
          :key="item.id"
        >
          <div class="mp-hotsale-tag">
            <img v-if="index === 0"
              class="mp-hotsale-tagimg"
              src="http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png"
            >
            <img v-if="index === 1"
              class="mp-hotsale-tagimg"
              src="http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png"
            >
            <img v-if="index === 2"
              class="mp-hotsale-tagimg"
              src="http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png"
            >
          </div>
          <img class="recommend-img" :src="item.itemUrl" alt="">
          <p class="recommend-desc">{{item.desc}}</p>
          <p><span class="recommend-money">￥{{item.money}}</span>起</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
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
      margin-left: .1rem
      padding: .24rem 0
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
      height 3rem
      margin .12rem
      overflow-x scroll
      .item-img-wrapper
        position relative
        width 100%
        margin-left .12rem
        white-space no
        line-height .32rem
        text-align center
        .mp-hotsale-tag
          position absolute
          top 0
          left 0
          z-index 1
          width .84rem
          height .4rem
          overflow hidden
          .mp-hotsale-tagimg
            width 100%
        .recommend-img
          width 2rem
          height 2rem
          margin-bottom .12rem
        .recommend-money
          color #FF8E16
</style>
