<template>
    <div class="marketing-page">
        <div class="btn-box">
            <div class="btn" @click="selectWay('1')">指针转</div>
            <div class="btn" @click="selectWay('2')">转盘转</div>
        </div>
        <wheel :awardLists="awards" @getWard="getWard" :mode="mode"></wheel>
        <toast v-if="showToast" @close="close"></toast>
    </div>
</template>

<script>
import wheel from '@/components/wheel'
import toast from '@/components/toast'
// import {wheel, toast} from '../../dist/cs-components.min.js'
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
      myAward: null,
      showToast: false,
      mode: 1
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
    },
    close (e) {
      this.showToast = false
    },
    selectWay (e) {
      e = parseInt(e)
      console.log('e->', typeof e, e)
      if (e === 1) this.mode = 1
      else if (e === 2) this.mode = 2
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
.btn-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
}
    .btn{
        /*width: 60px;*/
        /*height: 30px;*/
        /*line-height: 30px;*/
        padding: 8px;
        text-align: center;
        background: #ef7555;
        color: #fff;
        border-radius: 5px;
        box-shadow: 2px 2px 2px 2px #ef5350;
    }
</style>