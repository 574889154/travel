<template>
    <div class="weekend-content">
      <div class="weekend-title">
        <span>周末去哪儿</span>
      </div>
      <div class="weekend-list">
        <div>
          <div class="mp-product-item"
               v-for="item in productList"
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
  data () {
    return {
      productList: [{
        id: '0001',
        proUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        proName: '京城周末撒欢',
        proDesc: '在帝都过周末，不仅仅是城中游！'
      }, {
        id: '0002',
        proUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
        proName: '京城溜娃必去',
        proDesc: '德智体美劳全面发展的亲子日，这些地方该去看看…'
      }, {
        id: '0003',
        proUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        proName: '帝都必打卡',
        proDesc: '来北京必去的景点非这些地方莫属'
      }, {
        id: '0004',
        proUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
        proName: '漂流勇进，烧烤露营',
        proDesc: '轻松水上漂，任我乐逍遥'
      }, {
        id: '0005',
        proUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
        proName: '北京清凉避暑胜地',
        proDesc: '到大自然中享受“天然空调”的清凉'
      }]
    }
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
