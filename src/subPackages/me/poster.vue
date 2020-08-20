<template>
  <div id="poster-container">
    <div class="poster-title-top">
      <text class="fz-16 fw-bold">生成邀请卡</text>
      <text class="fz-12 fc-999 mr-t-6">分享你的专属海报，邀请好友检测肌肤</text>
    </div>
    <div class="canvas-content">
      <canvas style="height: 100%;width: 100%;" canvas-id="firstCanvas"></canvas>
    </div>
    <div @tap="schb" class="fl-cen mr-t-30">
      <div class="shar-btn-style fl-cen">
        <text class="fz-15 fc-fff">分享给好友</text>
      </div>
      <div class="shar-btn-style mr-l-100 fl-cen">
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
  onLoad() {
    this.init();
  },
  methods: {
    init() {
      let url = "/static/me/poster.png";
      let codeUrl = "/static/circle/back-img.png";
      let context = uni.createCanvasContext("firstCanvas", this);
      context.drawImage(url, 0, 0, uni.upx2px(532), uni.upx2px(942));
      context.drawImage(codeUrl, 100, 394, 90, 90);
      context.setTextAlign("center");
      context.setFontSize(12);
      context.setFillStyle("#999999");
      context.fillText("扫一扫，免费进行肌肤检测", 148, 500);
      context.draw();
    },
    schb() {
      uni.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 375,
        height: uni.upx2px(1020),
        destWidth: 375,
        destHeight: uni.upx2px(1020),
        canvasId: "firstCanvas",
        success: function (res) {
          uni.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function () {
              console.log("save success");
            },
          });
        },
        fail(e) {
          console.log(e);
          uni.showToast({
            title: "生成海报失败",
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
  padding: 32rpx 64rpx;
}
.shar-btn-style {
  width: 260rpx;
  height: 70rpx;
  border-radius: 35rpx 35rpx;
  background: linear-gradient(to right, #333333, #666666);
}
</style>