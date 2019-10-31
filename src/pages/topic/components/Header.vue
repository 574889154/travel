<template>
  <div class="topic-header">
    <div class="iconfont header-left">&#xe624;</div>
    <div class="topic-title">必游榜单</div>
    <div class="iconfont header-right">&#xe623;</div>
  </div>
</template>

<script>
export default {
  name: 'TopicHeader'
}
</script>

<style lang="stylus" scoped>
.topic-header
  color #eaeaea
  width 100%
  height .86rem
  line-height .86rem
  display flex
  text-align center
  font-size .32rem
  background #25A4BB
  .header-left
    padding 0rem .3rem
  .topic-title
    width 100%
  .header-right
    padding 0rem .3rem
</style>
