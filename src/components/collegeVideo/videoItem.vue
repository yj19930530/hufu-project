<template>
  <div class="article-item-box">
    <image class="article-item-img" src="../../static/circle/back-img.png" />
    <div class="mr-t-6 box-width">
      <div class="box-width-padding">
        <div class="article-item-title">
          <text class="fz-14">标题：干！痒！红！是阿萨德萨达阿萨德</text>
        </div>
        <text class="fz-14 mr-4">作者：小初</text>
        <div class="fl-bt mr-t-16">
          <div class="article-item-btn fl-cen">
            <text class="fz-12 fc-fff">查看干货</text>
          </div>
          <div class="article-item-btn fl-cen">
            <text class="fz-12 fc-fff">立即分享</text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.article-item-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rpx;
  margin-bottom: 16rpx;
  width: 346rpx;
  height: 488rpx;
  border: 1rpx solid #626262;
  border-radius: 10rpx;
  background-color: #ffffff;
}
.article-item-img {
  width: 334rpx;
  height: 340rpx;
  border-radius: 10rpx;
}
.article-item-btn {
  width: 120rpx;
  height: 36rpx;
  border-radius: 18rpx 18rpx;
  background: linear-gradient(to right, #333333, #666666);
}
.box-width {
  width: 100%;
}
.box-width-padding {
  padding: 8rpx;
}
.article-item-title {
  width: 334rpx;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>