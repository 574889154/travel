<template>
  <div class="mp-list-con">
    <!--打卡必游-->
    <div class="clock-list">
      <div class="list-title">—— 打卡必游 ——</div>
      <div class="list-intro">
        帝都，全球世界遗产数最多的城市之一，隐藏了无数的美丽与故事。
      </div>
      <ul class="mp-sub-list">
        <li>
          <div class="list-top">
            <div class="list-pic">
              <img src="//img1.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_280x200_62be0382.jpg" alt="">
            </div>
            <div class="list-info">
              <div>古北水镇</div>
              <div>13131条评论</div>
              <div>★★★★★ 5.0分</div>
              <div>￥140起</div>
            </div>
          </div>
          <div class="list-middle">
            <div>必去理由</div>
            <div>长城下的红叶小镇</div>
            <div>建议游玩时长：4~6小时</div>
          </div>
          <div class="list-footer">
            <span>去看看</span>
          </div>
        </li>
      </ul>
    </div>
    <!--亲子出游-->
    <div class="offspring-list">
      <div class="list-title">—— 亲子出游 ——</div>
      <div class="list-intro">
        精选在北京宝贝们最爱的打卡地儿，这个周末再也不用窝在家啦！
      </div>
      <ul class="mp-sub-list">
        <li>
          <div class="list-top">
            <div class="list-pic">
              <img src="//img1.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_280x200_62be0382.jpg" alt="">
            </div>
            <div class="list-info">
              <div>古北水镇</div>
              <div>13131条评论</div>
              <div>★★★★★ 5.0分</div>
              <div>￥140起</div>
            </div>
          </div>
          <div class="list-middle">
            <div>必去理由</div>
            <div>长城下的红叶小镇</div>
            <div>建议游玩时长：4~6小时</div>
          </div>
          <div class="list-footer">
            <span>去看看</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <img src="//s.qunarzz.com/piao_topic/image/touch/custom/2018/2916bangdan/more.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopicMplist'
}
</script>

<style lang="stylus" scoped>
.mp-list-con
  width 100%
  height 100%
  /*background url(//s.qunarzz.com/piao_topic/image/touch/custom/2018/2916bangdan/tab_desc.jpg) no-repeat;*/
  background #333333
  .list-title
    color white
    height .86rem
    line-height .86rem
    text-align center
  .list-intro
    padding .2rem .5rem
    margin 0 auto
    width 80%
    border .01rem dotted #fff
    color white
  .mp-sub-list
    padding .1rem
    width 90%
    margin .2rem auto
    background white
    border-radius .02rem
  .mp-sub-list li
    padding .1rem
    .list-top
      width 100%
      display flex
      .list-pic img
        width 2.8rem
        height 2rem
  .footer
    width 93%
    margin 0 auto
  .footer img
    width 100%
</style>
