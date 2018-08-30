<template>
    <div class="wheel-box">
        <div class='canvas-content'>
            <div v-if="mode==1">
                <img class='canvas-bg' src='../../static/img/lottery-turn.png'/>
                <div @click="lotteryTurn" class="canvas-btn" :style="{transform:rotate_angle,transition:rotate_transition}">
                    <img src="../../static/img/turn1.png"/>
                </div>
            </div>
            <div v-else-if="mode==2">
                <img class='canvas-bg' src='../../static/img/lottery-turn.png' :style="{transform:rotate_angle,transition:rotate_transition}"/>
                <div @click="lotteryTurn" class="canvas-btn" >
                    <img src="../../static/img/turn1.png"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: '',
  // props: ['awardLists', 'mode'],
  props: {
    awardLists: Array,
    mode: {
      type: Number,
      default: function () {
        return 1
      }
    },
    // rotate_transition: {
    //   type: String,
    //   default: function () {
    //     return 'transform 4s ease-in-out'
    //   }
    // }
  },
  data () {
    return {
      showToast: false,
      rotate_angle: 0, // 将要旋转的角度
      start_rotating_degree: 0, // 初始旋转角度
      click_flag: true, // 是否可以旋转
      end_angle: 0, // 显示的角度（360之内）
      rotate_transition: 'transform 4s ease-in-out',
      awardsList: []
    }
  },
  created () {
    // this.rotate_transition = ''
    // this.rotate_angle = 0
    // this.start_rotating_degree = 0
    // setTimeout(() => {
    //   this.rotate_transition = 'transform 4s ease-in-out'
    // }, 1000)
  },
  computed: {},
  methods: {
    lotteryTurn () {
      if (!this.click_flag) return
      this.rotate_transition = 'transform 4s ease-in-out'
      let len = this.awardLists.length
      // 设置随机获奖index
      var awardIndex = Math.random() * len >>> 0
      // 表面上的旋转角度（0-360）
      let end_angle = awardIndex * (360 / len)
      // 实际的旋转角度（实际多转了8圈）
      // this.start_rotating_degree - this.end_angle表示每次旋转都从0方位开始
      if (this.mode === 1) {
        // var rotate_angle = this.start_rotating_degree - this.end_angle + 360 * 8 + end_angle
        var rotate_angle = 360 * 8 + end_angle
      } else if (this.mode === 2) {
        // rotate_angle = this.start_rotating_degree + this.end_angle + 360 * 8 - end_angle
        rotate_angle = 360 * 8 - end_angle
      }
      console.log('角度', rotate_angle, end_angle)
      this.end_angle = end_angle
      this.start_rotating_degree = rotate_angle
      // 旋转结束前，不允许再次触发
      this.click_flag = false
      this.rotate_angle = `rotate(${rotate_angle}deg)`
      setTimeout(() => {
        this.click_flag = true
        this.showToast = true
        this.rotate_angle = `rotate(0deg)`
        this.rotate_transition = `tramsform 0s`
        this.$emit('getWard', {index: awardIndex})
      }, 4500)
      console.log(this.awardLists[awardIndex].name)
    }
  },
  watch: {},
  components: {}
}
</script>

<style scoped>
    .canvas-content{
        width: 333px;
        height: 333px;
        border-radius: 50%;
        position: relative;
        margin: 0 auto;
    }
    .canvas-bg{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .canvas-btn{
        position:absolute;
        /*z-index:1;*/
        left:50%;
        top:50%;
        width:75px;
        height:75px;
        margin-top:-37.5px;
        margin-left:-37.5px;
        line-height:80px;
        text-align:center;
        font-size:20px;
        text-decoration:none;
    }
    .canvas-btn img{
        width: 52px;
        height: 82.5px;
        position: absolute;
        left: 12px;
        top: -17px;
    }
</style>