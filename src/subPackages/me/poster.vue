<template>
  <div id="poster-container">
    <div class="poster-title-top">
      <text class="fz-16 fw-bold">生成邀请卡</text>
      <text class="fz-12 fc-999 mr-t-6">分享你的专属海报，邀请好友检测肌肤</text>
    </div>
    <div class="canvas-content">
      <canvas style="height: 100%;width: 100%;" canvas-id="firstCanvas"></canvas>
    </div>
    <div class="fl-cen mr-t-20">
      <div class="shar-btn-style fl-cen">
        <button class="share-btn-style" open-type="share"></button>
        <text class="fz-15 fc-fff">分享给好友</text>
      </div>
      <div class="shar-btn-style mr-l-100 fl-cen" @tap="saveImage">
        <text class="fz-15 fc-fff">保存到相册</text>
      </div>
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
      title: '首页',
      path: `/pages/page/home`,
    };
  },
  onLoad() {
    this.initPoster();
  },
  methods: {
    //  生成海报
    initPoster() {
      let url = "/static/me/poster.png";
      let codeUrl = "/static/me/wecatimg.jpg";
      let context = uni.createCanvasContext("firstCanvas", this);
      context.drawImage(url, 0, 0, uni.upx2px(532), uni.upx2px(942));
      context.drawImage(
        codeUrl,
        uni.upx2px(200),
        uni.upx2px(720),
        uni.upx2px(140),
        uni.upx2px(140)
      );
      context.setTextAlign("center");
      context.setFontSize(12);
      context.setFillStyle("#999999");
      context.fillText(
        "扫一扫，免费进行肌肤检测",
        uni.upx2px(266),
        uni.upx2px(900)
      );
      context.draw();
    },
    // 保存海报
    saveImage() {
      uni.canvasToTempFilePath({
        x: 0,
        y: 0,
        canvasId: "firstCanvas",
        success: function (res) {
          uni.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function () {
              uni.showToast({
                title: "保存成功",
                icon: "none",
              });
            },
          });
        },
        fail(e) {
          uni.showToast({
            title: "保存失败",
            icon: "none",
          });
        },
      });
    },
  },
};
</script>
<style scoped>
.canvas-content {
  margin: auto;
  width: 532rpx;
  height: 942rpx;
  background-color: #ffffff;
}
.poster-title-top {
  display: flex;
  flex-direction: column;
  padding: 12rpx 64rpx;
}
.shar-btn-style {
  position: relative;
  width: 260rpx;
  height: 70rpx;
  border-radius: 35rpx 35rpx;
  background: linear-gradient(to right, #333333, #666666);
}
.share-btn-style {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
</style>