<template>
    <ul class="mp-list-item">
      <li class="mp-local">
        <span class="iconfont">&#xe61b;</span>
        定位
      </li>
      <li class="must-see">
        <span class="iconfont">&#xe77a;</span>
        必游榜单
      </li>
    </ul>
</template>

<script>
export default {
  name: 'HomeMplist'
}
</script>

<style lang="stylus" scoped>
  .mp-list-item
    overflow hidden
    border-top 0.01rem solid #FAFAFA
    border-bottom .2rem solid #F5F5F5
  .mp-list-item > li
    display inline
    float left
    color #333
    font-size .28rem
    width 50%
    height .98rem
    box-sizing border-box
    text-align center
    line-height .98rem
  .mp-local
    border-right 0.01rem solid #FAFAFA
</style>
