<template>
  <div class="guess-content">
    <div class="title">
      <img
        class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
        alt="猜你喜欢">
      <span class="title-hotrec">猜你喜欢</span>
    </div>
    <ul class="guess-like-list"
        v-for="item in gussList"
        :key="item.id">
      <li class="guess-like-item">
        <div class="guess-imgcon">
          <img class="guess-like-img" :src="item.guessImg">
        </div>
        <div class="guess-info">
          <div class="guess-like-title">{{item.guessTitle}}</div>
          <div class="guess-like-comment">
            <span class="mpf-starlevel">
              <strong class="like-star">★★★★★</strong>
            </span>
            <span class="like-comment-num">{{item.commentNum}}</span>条评论
          </div>
          <div class="guess-like-price">
            <span class="mpg-price">
              ￥
              <em class="mpg-price-num">{{item.guessPrice}}</em>
            </span>
            起
            <span class="like-address">{{item.likeAddress}}</span>
          </div>
          <div class="guess-like-feature">
            <div class="guess-like-ellipsis">{{item.likeDesc}}</div>
          </div>
        </div>
      </li>
    </ul>
    <div class="like-more">
      <span>查看所有产品</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeGuesslike',
  data () {
    return {
      gussList: [{
        id: '0001',
        guessImg: 'http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_200x200_32e22bed.jpg',
        guessTitle: '奥林匹克塔',
        commentNum: '463',
        guessPrice: '121.9',
        likeAddress: '海淀区',
        likeDesc: '08北京奥运匹克塔'
      }, {
        id: '0002',
        guessImg: 'http://img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_200x200_ce3d2658.jpg',
        guessTitle: '北京海洋馆',
        commentNum: '7631',
        guessPrice: '175',
        likeAddress: '西城区',
        likeDesc: '奇幻海洋之旅，在帝都感受大海的魅力'
      }, {
        id: '0003',
        guessImg: 'http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg',
        guessTitle: '金海湖风景区',
        commentNum: '11233',
        guessPrice: '31.9',
        likeAddress: '昌平区',
        likeDesc: ''
      }, {
        id: '0004',
        guessImg: 'http://img1.qunarzz.com/sight/p0/1608/4f/4fc3f5a1b838f279a3.water.jpg_200x200_e6528ef6.jpg',
        guessTitle: '北京杜莎蜡像馆',
        commentNum: '9446',
        guessPrice: '144.5',
        likeAddress: '前门大街',
        likeDesc: '听说能遇到结论哟'
      }, {
        id: '0005',
        guessImg: 'http://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_200x200_3165123d.jpg',
        guessTitle: '什刹海',
        commentNum: '4195',
        guessPrice: '10',
        likeAddress: '西城区',
        likeDesc: ''
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .guess-content
    width 100%
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
    .guess-like-list
      margin-left .24rem
      border-bottom .01rem solid #F5F5F5
      .guess-like-item
        position relative
        overflow hidden
        padding .2rem 0
        display flex
        .guess-imgcon
          width 2rem
          height 2rem
          .guess-like-img
            width 2rem
            height 2rem
        .guess-info
          width 100%
          overflow hidden
          padding-left .22rem
          .guess-like-title
            margin-top .26rem
            height .44rem
            font-size .32rem
            color #212121
            line-height .44rem
          .guess-like-comment
            margin-top .14rem
            height .34rem
            .mpf-starlevel
              display inline-block
              position relative
              width 1.5rem
              height .28rem
              line-height .28rem
              font-size .28rem
              letter-spacing .02rem
              .like-star
                color #FFB436
                position: absolute
                top .04rem
                left 0
                height .28rem
              .like-comment-num
                color #616161
                font-size .24rem
                line-height .34rem
                vertical-align bottom
          .guess-like-price
            position relative
            margin-top .22rem
            color #616161
            font-size .24rem
            line-height .4rem
            .mpg-price
              color #ff8300
              .mpg-price-num
                font-size .4rem
            .like-address
              position absolute
              right .24rem
              bottom 0
          .guess-like-feature
            display inline-block
            margin-top .48rem
            margin-right .24rem
            background #fff9f9
            padding .04rem .1rem
            color #f55
            font-size .24rem
            line-height .34rem
    .like-more
      width 100%
      color #00afc7
      font-size .28rem
      line-height .4rem
      text-align center
      padding .2rem 0
</style>
