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
  name: 'Mplist'
}
</script>

<style lang="stylus" scoped>
  .mp-list-item
    overflow hidden
    border 0.01rem solid #ddd
  .mp-list-item > li
    display inline
    float left
    color #333
    font-size .32rem
    width 50%
    height .98rem
    box-sizing border-box
    text-align center
    line-height .98rem
  .mp-local
    border-right 0.01rem solid #ddd
</style>
