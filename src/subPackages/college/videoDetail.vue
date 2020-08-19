<template>
  <div id="ganhuo-container">
    <div class="video-item-box mr-t-20" v-for="item in 4" :key="item">
      <div class="video-item-cover">
        <image class="cover-img" src="../../static/circle/back-img.png" />
        <div class="video-item-center">
          <text class="fz-14 fc-fff">脸上不长痘了</text>
          <div class="fl-cen">
            <image class="video-player" src="../../static/college/ganhuovideo.png" />
          </div>
          <div class="fl-bt decribe-text-style">
            <text class="fz-12 fc-fff">802万次观看</text>
            <text class="fz-12 fc-fff">0:51</text>
          </div>
        </div>
      </div>
      <div class="video-item-user fl-bt">
        <div class="fl-al">
          <image class="video-user-img" src="../../static/circle/back-img.png" />
          <text class="fz-15">初印象的小助理</text>
        </div>
        <text class="iconfont iconfenxiang fz-20 fc-333"></text>
      </div>
    </div>
  </div>
</template>
<style>
page {
  background-color: #f8f8f8;
}
</style>
<style scoped>
.video-item-box {
  padding: 20rpx 20rpx 0 20rpx;
  background-color: #ffffff;
}
.video-item-cover {
  position: relative;
  width: 710rpx;
  height: 400rpx;
}
.cover-img {
  width: 100%;
  height: 100%;
  border-radius: 20rpx;
}
.video-item-center {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 30rpx;
  top: 14rpx;
  right: 30rpx;
  bottom: 18rpx;
}
.video-player {
  margin: 114rpx 0 114rpx 0;
  width: 68rpx;
  height: 68rpx;
}
.decribe-text-style {
  width: 100%;
}
.video-item-user {
  height: 120rpx;
}
.video-user-img {
  margin-right: 18rpx;
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
}
</style>