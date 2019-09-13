<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .search
    padding 0 .1rem
    height .72rem
    background $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
      padding 0 .1rem
  ::-webkit-input-placeholder{/*Webkit browsers*/
    color:#666;
    font-size: .28rem;
  }
  :-moz-placeholder{/*Mozilla Firefox 4 to 8*/
    color:#666;
    font-size: .28rem;
  }
  ::moz-placeholder{/*Mozilla Firefox 19+*/
    color:#666;
    font-size: .28rem;
  }
  :-ms-input-placeholder{/*Internet Explorer 10+*/
    color:#666;
    font-size: .28rem;
  }
</style>
