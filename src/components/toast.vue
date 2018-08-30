<template>
    <div class="toast">
        <div class="mask_bg"></div>
        <div class="toast-box">
            <div  class="head-bg">
                <img src="../../static/img/congratulation.png"/>
            </div>
            <div class="toast-content-box"></div>
            <div class="close-btn" @click="close">✘</div>
        </div>
    </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {}
  },
  created () {
  },
  computed: {},
  methods: {
    close () {
      this.$emit('close')
    }
  },
  watch: {},
  components: {}
}
</script>

<style scoped>
    .mask_bg{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: rgba(10, 10, 10, 0.5);
    }
    .toast-box{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        box-sizing: border-box;
        width: 240px;
        height: 180px;
    }
    .head-bg{
        width: 300px;
        height: 135px;
        display: block;
        position: absolute;
        top: -100px;
        left: -20px;
    }
    .head-bg img{
        width: 100%;
        display: block;
        bottom:0;
        left: 0;
        position: absolute;
    }
    .toast-content-box{
        width: 100%;
        height: 100%;
        background: #fff;
        margin: 0 auto;
    }
    .close-btn{
        position: absolute;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        color: #fff;
        background: rgba(0,0,0,0.8);
        text-align: center;
        line-height: 26px;
        top: -13px;
        right: -13px;
    }
</style>