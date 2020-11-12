<template>
  <div id="setting-container">
    <div class="setting-item fl-bt" @tap="navPathToUs">
      <text class="mr-l-30 fz-15">关于我们</text>
      <text class="iconfont iconyoujiantou mr-r-30 fc-999"></text>
    </div>
    <div class="setting-item fl-bt" @tap="navPathToUs2">
      <text class="mr-l-30 fz-15">隐私协议</text>
      <text class="iconfont iconyoujiantou mr-r-30 fc-999"></text>
    </div>
    <div class="setting-item fl-cen mr-t-20" @tap="loginOut">
      <text class="mr-l-30 fz-15">退出账号</text>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  onShareAppMessage() {
    return {
      path: `/pages/page/home`,
    };
  },
  methods: {
    navPathToUs() {
      uni.navigateTo({
        url: `/subPackages/me/textDetail`,
      });
    },
    navPathToUs2() {
      uni.navigateTo({
        url: `/subPackages/me/textDetail2`,
      });
    },
    loginOut() {
      const _this = this;
      uni.showModal({
        title: "提示",
        content: "是否退出账号",
        success: function (res) {
          if (res.confirm) {
            uni.clearStorageSync();
            uni.reLaunch({
              url: "/pages/page/login",
            });
          } else if (res.cancel) {
            return;
          }
        },
      });
    },
  },
};
</script>
<style>
page {
  background-color: #f8f8f8;
}
</style>
<style scoped>
#setting-container {
  margin-top: 20rpx;
}
.setting-item {
  width: 100%;
  height: 108rpx;
  border-bottom: 1px solid #f8f8f8;
  background-color: #ffffff;
}
</style>