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
          <div class="log-use-code same cur">短信验证码登录</div>
          <div class="log-use-account same">账号登录</div>
        </div>
      </div>
      <div class="form-style">
        <form action="">
          <div class="form-control">
            <label class="control-label">手机号</label>
            <div class="control-container">
              <input class="control-text" type="text" maxlength="11" name="mobile" placeholder="请输入手机号">
            </div>
          </div>
          <div class="form-control">
            <label class="control-label">验证码</label>
            <div class="control-container">
              <input class="control-text code" type="text" maxlength="6" name="randcode" placeholder="请输入验证码">
              <span class="right-btn btn-getrandcode ng-binding disabled">获取验证码</span>
            </div>
          </div>
        </form>
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
    .log_header
      position: relative
      height .89rem
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
      line-height .72rem
      font-size .36rem
      color #fff
      padding .05rem .1rem 0
      .tab
        position relative
        display flex
        border .01rem solid #fff
        border-radius .1rem
        font-size .32rem
        .same
          width 50%
          text-align center
        .cur
          background #fff
          color #25a4bb
    .form-style
      border-top .01rem solid #ccc
      border-bottom .01rem solid #ccc
      margin-top .2rem
      padding-left .2rem
      background #fff
      font-size .32rem
      .form-control
        display flex
        width 100%
        border-bottom .01rem solid #ddd
        line-height .9rem
        .control-label
          display block
          width 1.9rem
          .control-container
            position relative
            border 0
            display flex
            vertical-align middle
          .control-text
            flex 1
            display block
            margin-top .08rem
            width .01rem
            height .3rem
            border 0
            line-height 1.5
            color #000
        .right-btn
          position absolute
          right 0
          top 3.1rem
          padding .14rem .3rem
          margin-right .2rem
          border-radius .05rem
        .btn-getrandcode
          border .01rem solid #25a4bb
          font-size .28rem
          text-align center
          line-height .3rem
</style>
