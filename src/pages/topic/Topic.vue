<template>
  <div class="topic">
    <topic-header></topic-header>
    <topic-tab></topic-tab>
    <topic-mplist></topic-mplist>
  </div>
</template>

<script>
import TopicHeader from './components/Header'
import TopicTab from './components/Tab'
import TopicMplist from './components/Mplist'
export default {
  name: 'Topic',
  components: {
    TopicHeader,
    TopicTab,
    TopicMplist
  }
}
</script>

<style scoped>

</style>
