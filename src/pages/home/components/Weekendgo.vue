<template>
    <div class="weekend-content">
      <div class="weekend-title">
        <span>周末去哪儿</span>
      </div>
      <div class="weekend-list">
        <div>
          <div class="mp-product-item"
               v-for="item in list"
                :key="item.id"
          >
            <div class="product-img">
              <img class="pro-img" :src="item.proUrl">
            </div>
            <div class="product-info">
              <p class="product-name">{{item.proName}}</p>
              <p class="product-desc">{{item.proDesc}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mp-price-desc">
        <span class="mp-price-desc-icon">◎</span>
        <div class="mp-price-desc-info">
          <span class="mp-price-desc-highlight">票面价</span>
          是指通过景区指定窗口售卖的纸质门票上标注的价格
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekendgo',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .weekend-content
    width 100%
    position relative
    box-sizing border-box
    font-size .24rem
    border-bottom .2rem solid #F5F5F5
    .weekend-title
      width 100%
      padding .2rem 0 .2rem .24rem
      font-size 0.32rem
  .weekend-list
    width 100%
    position relative
    box-sizing border-box
    font-size .24rem
    border-bottom .2rem solid #F5F5F5
    .mp-product-item .pro-img
      position relative
      margin-bottom .1rem
      width 100%
      height 2.76rem
    .product-info
      position relative
      padding .14rem .2rem .2rem .2rem
      .product-name
        overflow hidden
        padding-right 1.4rem
        color #212121
        font-size .28rem
        line-height .48rem
        white-space nowrap
        text-overflow ellipsis
      .product-desc
        overflow hidden
        padding-right 1.4rem
        color #616161
        font-size .24rem
        line-height .42rem
        white-space nowrap
        text-overflow ellipsis
  .mp-price-desc
    margin-top .1rem
    padding .14rem .1rem
    font-size .24rem
    line-height .32rem
    color #616161
    .mp-price-desc-icon
      width .24rem
      display block
      float: left
      line-height .32rem
    .mp-price-desc-highlight
      font-weight bold
</style>
