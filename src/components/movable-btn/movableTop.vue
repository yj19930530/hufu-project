<template>
  <view
    class="scan-fixed"
    :style="[{ bottom: bottom + 'px', right: right + 'px' }]"
    @touchstart="start"
    @touchmove.stop.prevent="move"
  >
    <image class="service-img" src="../../static/service-png.png" />
    <button class="share-btn" open-type="contact"></button>
  </view>
</template>

<script>
export default {
  data() {
    let bottom = 10;
    let right = 10;
    return {
      bottom: bottom,
      right: right,
      pageX: 0,
      pageY: 0,
    };
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
    start(e) {
      let page = e.changedTouches[0];
      this.pageX = page.pageX;
      this.pageY = page.pageY;
    },
    move(e) {
      let { pageX, pageY, bottom, right } = this;
      let page = e.changedTouches[0];
      let x = page.pageX - pageX;
      let y = page.pageY - pageY;
      this.pageX = page.pageX;
      this.pageY = page.pageY;
      if (right - x > 0 && right - x < this.pingWidth - 70)
        this.right = right - x;
      if (
        bottom - y > 0 &&
        this.pingHeight - this.navHeight - 75 > bottom - y
      ) {
        this.bottom = bottom - y;
      }
    },
  },
};
</script>

<style scoped>
.scan-fixed {
  position: fixed;
  width: 140rpx;
  height: 150rpx;
  z-index: 99999999999999;
}
.service-img {
  width: 100%;
  height: 100%;
  animation: mymove 2s infinite;
}
@keyframes mymove {
  0% {
    transform: scale(.9);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(.9);
  }
}
.share-btn {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: 999999999999999;
}
</style>