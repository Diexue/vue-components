<template>
    <div class="toast">
        <div class="mask_bg"></div>
        <div class="toast-box">

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
  methods: {},
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
    }
</style>