<template>
  <div class="article-item-box">
    <image mode="aspectFill" class="article-item-img" :src="atcImgUrl+detailInfo.preview" />
    <div class="mr-t-6 box-width">
      <div class="box-width-padding">
        <div class="article-item-title">
          <text class="fz-14">标题：{{detailInfo.title}}</text>
        </div>
        <text class="fz-14 mr-4">作者：{{detailInfo.sui.nickName}}</text>
        <div class="fl-bt mr-t-16">
          <div class="article-item-btn fl-cen" @tap="ganVideoDetai">
            <text class="fz-12 fc-fff">查看干货</text>
          </div>
          <div class="article-item-btn fl-cen">
            <text class="fz-12 fc-fff">立即分享</text>
            <button type="primary" class="share-visibiliti-btn" open-type="share"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { atcImgUrl } = require("../../config/develop");
export default {
   data() {
    return {
      atcImgUrl: atcImgUrl,
    };
  },
    props: {
    itemObj: {
      type: Object,
      default: {},
    },
  },
  onShareAppMessage() {
    return {
      title: this.detailInfo.title,
      path: "/subPackages/college/videoDetail",
    };
  },
  computed: {
    detailInfo() {
      return this.itemObj;
    },
  },
  methods: {
    ganVideoDetai() {
      uni.navigateTo({
        url: "/subPackages/college/videoDetail",
      });
    },
  },
};
</script>
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
  position: relative;
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
.share-visibiliti-btn {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
}
</style>