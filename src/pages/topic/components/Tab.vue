<template>
    <div class="tab">
      <div class="clock-in">打卡必游</div>
      <div class="offspring">亲子出游</div>
    </div>
</template>

<script>
export default {
  name: 'Topictab'
}
</script>

<style lang="stylus" scoped>
.tab
  height .86rem
  display flex
  line-height .86rem
  text-align center
  .clock-in
    color white
    font-weight bold
    width 50%
    background #E86947
  .offspring
    width:50%
    background #F1C354
</style>
