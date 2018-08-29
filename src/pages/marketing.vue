<template>
    <div class="marketing-page">
        <wheel :awardLists="awards" @getWard="getWard"></wheel>
        <!--<toast></toast>-->
    </div>
</template>

<script>
import wheel from '@/components/wheel'
import toast from '@/components/toast'
export default {
  name: '',
  props: {},
  data () {
    return {
      awards: [
        { 'index': 0, 'name': '小雨' },
        { 'index': 1, 'name': '大雨' },
        { 'index': 2, 'name': '中雨' },
        { 'index': 3, 'name': '阵雨' },
        { 'index': 4, 'name': '阴天' },
        { 'index': 5, 'name': '多云' },
        { 'index': 6, 'name': '晴天' },
        { 'index': 7, 'name': '雷阵雨' }
      ],
      myAward: null
    }
  },
  created () {},
  computed: {},
  methods: {
    getWard (e) {
      console.log('返回的数据', e)
      let index = e.index
      console.log('中奖', this.awards[index].name)
      this.myAward = this.awards[index].name
      this.showToast = true
    }
  },
  watch: {},
  components: {
    wheel,
    toast
  }
}
</script>

<style scoped>

</style>