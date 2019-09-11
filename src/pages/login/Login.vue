<template>
  <div id="loginController">
    <div class="log_main">
      <div class="log_header">
        <div class="header-left">
          <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-middle">登录</div>
        <div class="header-right">注册</div>
      </div>
      <div class="log-tab">
        <div class="tab">
          <div class="log-use-code">短信验证码登录</div>
          <div class="log-use-account">账号登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="stylus" scoped>
  #loginController
    height 100%
    background #F3F9FC
  .log_main
    position relative
    height 100%
    color #19a9ba
    background #f3f9fc
    font-size .36rem
    border-bottom .02rem solid #75ffff
    .log_header
      position: relative
      height .88rem
      background #18a9b9
      line-height .88rem
      display flex
      color #fff
      font-size .36rem
      .header-left
        width 15%
        padding-left .2rem
      .header-middle
        width 70%
        text-align center
      .header-right
        width 15%
        font-size .32rem
        color #75ffff
        padding-right .2rem
        text-align right
    .log-tab
      height .88rem
      background #18a9b9
      line-height .88rem
      font-size .36rem
      color: #fff;
      padding: .05rem .1rem 0;

</style>
