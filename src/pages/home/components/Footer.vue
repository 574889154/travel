<template>
    <div class="qn_footer">
      <div class="main_nav_wrapper">
        <ul class="main_nav">
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
            <span class="iconfont">&#xe613;</span>
            <span class="">更多</span>
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
      <div class="copyright">
        <span>Qunar 京ICP备05021087</span>
        <span>意见反馈</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeFooter'
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
        height .5rem
        margin 0 auto
        padding 0.2rem 0.2rem 0 0.2rem
        overflow: hidden
        .flight
          margin 0
          padding-left 0.2rem
          height 0.62rem
          width 1.3rem
          float: left
          position: relative
    .footer_nav
      display block
      position: relative
      width 100%
      height .5rem
      margin 0 auto
      padding 0.2rem 0 0 0.4rem
      overflow: hidden
      border-bottom 1px solid #cacaca
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

</style>
