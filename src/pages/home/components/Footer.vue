<template>
    <div class="qn_footer">
      <div class="main_nav_wrapper">
        <ul class="main_nav" :style="{ height: height + 'rem' }" >
          <li class="flight">
            <span class="iconfont">&#xe70e;</span>
            <span class="">机票</span>
          </li>
          <li class="flight">
            <span class="iconfont">&#xe654;</span>
            <span class="">酒店</span>
          </li>
          <li class="flight">
            <span class="iconfont">&#xe8e9;</span>
            <span class="">公寓</span>
          </li>
          <li class="flight">
            <span class="iconfont">&#xe643;</span>
            <span class="">团购</span>
          </li>
          <li class="flight">
            <span class="iconfont">&#xe623;</span>
            <span class="">景点</span>
          </li>
          <li class="flight">
            <span class="iconfont">&#xe638;</span>
            <span class="">火车票</span>
          </li>
          <li class="flight">
            <span class="iconfont">&#xe6d1;</span>
            <span class="">接送机</span>
          </li>
          <li class="flight">
            <span class="iconfont">&#xe616;</span>
            <span class="">度假</span>
          </li>
          <li class="flight">
            <span class="iconfont">&#xe619;</span>
            <span class="">攻略</span>
          </li>
          <li class="flight">
            <span class="iconfont">&#xe60d;</span>
            <span class="">旅图</span>
          </li>
          <li class="flight">
            <span class="iconfont">&#xe610;</span>
            <span class="">车车</span>
          </li>
          <li class="flight">
            <span class="iconfont">&#xe600;</span>
            <span class="">当地人</span>
          </li>
          <li class="tag" @click="qnFooterToggle" :style="{ top: top + 'rem' }">
            <span>|</span>
            <span class="iconfont">{{message}}</span>
          </li>
        </ul>
      </div>
      <ul class="footer_nav">
        <li class="nav_flight">登录</li>
        <li class="nav_flight">我的订单</li>
        <li class="nav_flight" style="display: none">个人中心</li>
        <li class="nav_flight">最近浏览</li>
        <li class="nav_flight">关于我们</li>
      </ul>
      <ul class="mobile_pc">
        <li class="mobile_pc-01">触屏版</li>
        <li class="mobile_pc-01">电脑版</li>
      </ul>
      <div class="copyright">
        <span>Qunar 京ICP备05021087</span>
        <span>意见反馈</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeFooter',
  data () {
    return {
      isShow: false,
      message: '∨ 更多',
      height: 0.5,
      top: 0.18
    }
  },
  methods: {
    qnFooterToggle: function () {
      this.isShow = !this.isShow
      if (this.isShow) {
        this.message = '∧ 收起'
        this.height = 2.3
        this.top = 1.94
      } else {
        this.message = '∨ 更多'
        this.height = 0.5
        this.top = 0.18
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .qn_footer
    position relative
    width 100%
    box-sizing border-box
    .main_nav_wrapper
      display block
      .main_nav
        position: relative
        width 6rem
        margin 0 auto
        padding 0.2rem 0.2rem 0 0.2rem
        overflow: hidden
        color #9e9e9e
        .flight
          margin 0
          padding-left 0.2rem
          height 0.62rem
          width 1.3rem
          float: left
          position: relative
          background none
        .tag
          position: absolute
          right .42rem
          background #fff
          height 0.62rem
          width 1.3rem
          line-height .36rem
          text-align center
          .iconfont
            font-size .31rem
    .footer_nav
      display block
      position: relative
      width 100%
      height .5rem
      margin 0 auto
      padding 0.2rem 0 0 0.4rem
      overflow: hidden
      border-bottom 0.01rem solid #cacaca
      .nav_flight
        margin 0
        padding-left 0.2rem
        height 0.62rem
        width 1.3rem
        float: left
        color #25A4BB
        text-align center
        position: relative
    .copyright
      color #9e9e9e
      text-align center
      font-size .28rem
      padding 0.2rem
    .mobile_pc
      padding .2rem 0 0 0
      text-align center
      .mobile_pc-01
        display inline-block
        margin 0 .3rem
</style>
