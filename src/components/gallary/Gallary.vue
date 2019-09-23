<template>
  <div class="gallary_con" @click="close">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item,index) in imgs"
          :key="index"
        >
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        paginationType: 'fraction'
      }
    }
  },
  methods: {
    close () {
      this.$emit('gallaryClose')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallary_con >>> .swiper-pagination
    overflow: inherit
  .gallary_con
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position: fixed
    top 0
    left 0
    right 0
    bottom 0
    background rgba(0,0,0,.9)
    .wrapper
      width 100%
      height 0
      padding-bottom 100%
      .gallary-img
        width 100%
      .swiper-pagination
        width 100%
        color #fff
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
