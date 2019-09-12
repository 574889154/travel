<template>
    <div class="content">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) in pages" :key="index">
          <div
            class="icon"
            v-for="item in page"
            :key="item.id"
          >
            <div class="icon-img">
              <img
                class="icon-imgcontent"
                :src="item.iconUrl"
              >
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content >>> .swiper-pagination
    position unset
  .content >>> .swiper-pagination-bullets
    padding-bottom: 0
  .content
    padding .2rem 0 .2rem 0
    margin-top: 0.15rem
    background #fff
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    margin-top: -0.15rem
    text-align: center
    .icon-img
      position: absulote
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      margin: 0.2rem
      .icon-imgcontent
        width: 1.1rem
        height: 1.1rem
    .icon-desc
      color: #333333
      white-space: nowrap
</style>
