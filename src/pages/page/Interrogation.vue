<template>
  <div id="ask-box-container" class="fl-co">
    <div class="fl-co">
      <image class="ask-content-img" src="../../static/ask/get-test.png" />
      <text class="mr-t-30 fz-14 fc-000">AI智能测肤 快速获取测试报告</text>
      <text class="mr-t-4 fz-12 fc-000">100万+真实数据库</text>
      <div class="fl-cen ask-next-btn mr-t-30" @tap="optNavigatorPath">
        <image class="ask-icon" src="../../static/ask/ask-icon.png" />
        <text class="mr-l-4 fz-13 fc-fff mr-l-8">立即测试</text>
      </div>
    </div>
    <div class="fl-co mr-t-130">
      <image class="ask-content-img2" src="../../static/ask/aks-doc.png" />
      <text class="mr-t-30 fz-14 fc-000"
        >百万用户信赖的在线护肤咨询服务平台</text
      >
      <text class="mr-t-4 fz-12 fc-000">一对一精准解决肌肤问题</text>
      <button class="fl-cen ask-next-btn mr-t-30" open-type="contact">
        <image class="ask-icon" src="../../static/ask/ask-icon.png" />
        <text class="mr-l-4 fz-13 fc-fff mr-l-8">立即咨询</text>
      </button>
    </div>
    <MovableTop />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  onLoad() {
    this.userNo = uni.getStorageSync("userno");
  },
  methods: {
    optNavigatorPath() {
      if (!this.userNo) {
        uni.reLaunch({
          url: "/pages/page/login",
        });
        return;
      }
      uni.navigateTo({
        url: "/subPackages/Interrogation/test",
      });
    },
  },
};
</script>
<style scoped>
#ask-box-container {
  height: 100%;
}
.ask-content-img {
  width: 192rpx;
  height: 198rpx;
}
.ask-content-img2 {
  width: 192rpx;
  height: 162rpx;
}
.ask-icon {
  width: 20rpx;
  height: 26rpx;
}
.ask-next-btn {
  width: 188rpx;
  height: 42rpx;
  background: linear-gradient(to right, #666666, #333333);
  border-radius: 21rpx 21rpx;
}
.mr-t-130 {
  margin-top: 130rpx;
}
</style>