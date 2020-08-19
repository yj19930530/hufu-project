<template>
  <div id="archives-container">
    <!-- 头部评分 -->
    <div class="archives-bottom-score">
      <image class="archives-score-bj" src="../../static/me/bj.png" />
      <div class="archives-score-center fl-co">
        <div class="center-score-img">
          <image class="score-img-bj" src="../../static/me/yuanhuan.png" />
          <div class="score-img-text fl-co">
            <text class="fz-35 fc-fff mr-t-fu10">98</text>
            <text class="fz-12 fc-fff mr-t-fu10">综合得分</text>
          </div>
        </div>
        <text class="fz-12 fc-fff mr-t-10">得分仅供参考</text>
        <text class="fz-12 fc-fff mr-t-10">我的肤质得分击败了12886个用户</text>
      </div>
    </div>
    <!-- 项目打分 -->
    <div class="score-content">
      <div class="score-item-opt" v-for="item in 5" :key="item">
        <div class="score-opt-title">
          <image class="shu-img-style mr-l-20 mr-t-6" src="../../static/me/shu.png" />
          <text class="fz-15 fw-bold mr-l-10">痘痘</text>
          <div class="has-opt-box fl-cen mr-l-2">
            <text class="fz-11 fc-fff">重度</text>
          </div>
        </div>
        <image class="mr-l-40 item-score" src="../../static/circle/back-img.png" />
        <div class="score-opt-number fl-bt">
          <text class="mr-l-40 fw-bold fz-14">数量：3</text>
          <text class="mr-r-20 fw-bold fz-14">分数：96</text>
        </div>
      </div>
    </div>
    <!-- 产品推荐 -->
    <div class="recommend-content">
      <div class="score-opt-title">
        <image class="shu-img-style mr-t-6" src="../../static/me/shu.png" />
        <text class="fz-15 fw-bold mr-l-10">推荐产品</text>
      </div>
      <div class="score-product-box fl-btw">
        <div class="fl-co product-item-box" v-for="item in 6" :key="item">
          <image class="product-item-img" src="../../static/circle/back-img.png" />
          <div class="mr-t-20 product-item-text">
            <text class="fz-12">多效舒缓保湿水</text>
          </div>
        </div>
      </div>
      <div class="score-text-func fz-12 fc-999">
        <text>护肤方案为标准参照</text>
        <text>专业护肤老师定制方案及详细使用方法</text>
        <text>请点击咨询专业护肤导师</text>
      </div>
      <button open-type="contact" class="consulting-experts fl-cen mr-t-20 fz-15" type="primary">请咨询护肤专家</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    navToDetails() {
      uni.navigateTo({
        url: "/subPackages/me/archivesDetails",
      });
    },
  },
};
</script>
<style scoped>
#archives-container {
  padding-bottom: 20rpx;
}
.archives-title {
  height: 86rpx;
}
.archives-bottom-score {
  position: relative;
  width: 100%;
  height: 370rpx;
}
.archives-score-bj {
  width: 100%;
  height: 100%;
}
.archives-score-center {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.center-score-img {
  position: relative;
  width: 214rpx;
  height: 214rpx;
}
.score-img-bj {
  width: 100%;
  height: 100%;
}
.score-img-text {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.mr-t-fu10 {
  margin-top: -10rpx;
}
.score-item-opt {
  border-bottom: 1rpx solid #cccccc;
}
.score-opt-title {
  display: flex;
  align-items: center;
  width: 100%;
  height: 88rpx;
}
.score-content {
  display: flex;
  flex-direction: column;
}
.has-opt-box {
  width: 60rpx;
  height: 28rpx;
  border-radius: 14rpx 14rpx 14rpx 0;
  background: linear-gradient(to right, #333333, #666666);
}
.shu-img-style {
  width: 12rpx;
  height: 18rpx;
}
.item-score {
  width: 350rpx;
  height: 450rpx;
}
.score-opt-number {
  width: 100%;
  height: 86rpx;
}
.recommend-content {
  margin: auto;
  width: 710rpx;
}
.score-product-box {
}
.product-item-text {
  padding-bottom: 20rpx;
  width: 96rpx;
  text-align: center;
  line-height: 1.2;
}
.product-item-img {
  width: 100%;
  height: 200rpx;
}
.product-item-box {
  width: 200rpx;
}
.score-text-func {
  display: flex;
  flex-direction: column;
  line-height: 1.8;
}
.consulting-experts {
    width: 400rpx;
    height: 80rpx;
    border-radius: 40rpx 40rpx;
    background-color: #666666;
}
</style>