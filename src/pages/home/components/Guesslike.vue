<template>
  <div class="guess-content">
    <div class="title">
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
      <span class="title-hotrec">猜你喜欢</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeGuesslike'
}
</script>

<style lang="stylus" scoped>
  .guess-content
    width 100%
    height 4.1rem
    position relative
    box-sizing border-box
    font-size .24rem
    border-bottom .2rem solid #F5F5F5
    .title
      position: relative
      display: flex
      margin-left: .1rem
      padding: .24rem 0
      box-sizing: border-box
      .title-img
        width .3rem
        height .3rem
      .title-hotrec
        font-size .32rem
        margin-left .04rem
</style>
