<template>
  <div class="service-box" @touchmove.stop.prevent="move" :style="[{ left: x + 'px', top: y + 'px' }]">
    <image
      class="service-img"
      src="../../static/service-png.png"
    />
  </div>
</template>
<script>
let pingX = getApp().globalData.pingWidth - 70;
let pingY = getApp().globalData.windowHeight - 75;
export default {
  data() {
    return {
      x: pingX - 10,
      y: pingY - 10,
    };
  },
  props: {
    isTop: {
      type: String,
      default: "no",
    },
  },
  computed: {
    pingWidth() {
      return getApp().globalData.pingWidth;
    },
    pingHeight() {
      return getApp().globalData.pingHeight;
    },
    navHeight() {
      return getApp().globalData.navHeight;
    },
  },
  methods: {
    move(e) {
      console.log(this.navHeight)
      const startPage = e.changedTouches[0];
      if (startPage.pageX > 34 && startPage.pageX < this.pingWidth - 34)
        this.x = startPage.pageX - 35;
      if (startPage.pageY > 37 && startPage.pageY < this.pingHeight - 37) {
        this.y = startPage.pageY - 38;
      }
    },
  },
};
</script>
<style scoped>
.service-box {
  position: fixed;
  width: 140rpx;
  height: 150rpx;
  z-index: 999999999999999;
}
.service-img {
  width: 100%;
  height: 100%;
  animation: mymove 2s infinite;
}
@keyframes mymove {
  0%{
    transform: scale(.9);
  }
  50%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(.9);
  }
}
</style>