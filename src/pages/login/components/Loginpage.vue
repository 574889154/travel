<template>
  <div id="loginController">
    <div class="log_main">
      <div class="log_header">
        <div class="header-left">
          <router-link to="/">
            <div class="iconfont back-icon">
            〈
            </div>
          </router-link>
        </div>
        <div class="header-middle">登录</div>
        <div class="header-right">注册</div>
      </div>
      <div class="log-tab">
        <div class="tab">
          <div @click="cur=0" :class="{active:cur===0}" class="log-use-code same cur">短信验证码登录</div>
          <div @click="cur=1" :class="{active:cur===1}" class="log-use-account same">账号登录</div>
        </div>
      </div>
      <div class="form-style" v-show="cur===0">
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
      <div class="form-style" v-show="cur===1">
        <form action="">
          <div class="form-control">
            <label class="control-label">账号</label>
            <div class="control-container">
              <input class="control-text" type="text" name="username" placeholder="手机号/邮箱/用户名">
            </div>
          </div>
          <div class="form-control">
            <label class="control-label">密码</label>
            <div class="control-container">
              <input class="control-text" type="password" maxlength="6" name="password" placeholder="请输入密码">
            </div>
          </div>
        </form>
      </div>
      <div class="operate">
        <button class="btn-submit">登录</button>
      </div>
      <div class="find-pwd" v-show="cur===1">
        <span class="find-pwd-a">找回密码</span>
      </div>
      <div class="protocal">
        登录即同意去哪儿
        <span>用户服务协议</span>
        和
        <span>隐私政策</span>
      </div>
      <div class="qn_footer">
        <ul class="mobile_pc">
          <li class="copysame">电脑版</li>
          <li class="copysame">关于我们</li>
        </ul>
        <div class="copyright">
          <span>Qunar 京ICP备05021087</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      cur: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
  #loginController
    height 100%
  .log_main
    position relative
    height 100%
    color #19a9ba
    font-size .36rem
    background #f3f9fc
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
        .iconfont
          color #fff
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
      padding .13rem .1rem 0
      .tab
        position relative
        display flex
        border .01rem solid #fff
        border-radius .1rem
        font-size .32rem
        .active
          background #fff
          color #25a4bb
        .same
          width 50%
          text-align center
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
          top 3.2rem
          padding .14rem .3rem
          margin-right .2rem
          border-radius .1rem
        .btn-getrandcode
          border .01rem solid #25a4bb
          font-size .28rem
          text-align center
          line-height .3rem
    .operate
      position relative
      left 0.3rem
      margin-top 0.3rem
      width 90%
      height 1rem
      .btn-submit
        font-family Arial
        color #ffffff
        width 100%
        height 100%
        border-radius .1rem
        background #25a4bb
    .find-pwd
      overflow hidden
      margin-top .3rem
      .find-pwd-a
        font-size .3rem
        float right
        padding .1rem .3rem 0 0
    .protocal
      color #9e9e9e
      font-size .24rem
      margin-top .5rem
      text-align center
    .qn_footer
      position absolute
      bottom 0
      width 100%
      .mobile_pc
        display flex
        font-size .26rem
        border-bottom 0.01rem solid #ccc
        padding .2rem 0
        text-align center
      .copyright
        color #d4d9de
        text-align center
        font-size .24rem
        padding .2rem .2rem .4rem
      .copysame
        width 100%
</style>
