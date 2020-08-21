<template>
  <div id="archives-container">
    <!-- 头部评分 -->
    <div class="archives-bottom-score">
      <image class="archives-score-bj" src="../../static/me/bj.png" />
      <div class="archives-score-center fl-co">
        <div class="center-score-img">
          <image class="score-img-bj" src="../../static/me/yuanhuan.png" />
          <div class="score-img-text fl-co">
            <text class="fz-35 fc-fff mr-t-fu10">{{objDetal.score}}</text>
            <text class="fz-12 fc-fff mr-t-fu10">综合得分</text>
          </div>
        </div>
        <text class="fz-12 fc-fff mr-t-10">得分仅供参考</text>
        <text class="fz-12 fc-fff mr-t-10">我的肤质得分击败了12886个用户</text>
      </div>
    </div>
    <!-- 项目打分 -->
    <div class="score-content">
      <!-- 痘痘 -->
      <div class="score-item-opt">
        <div class="score-opt-title">
          <image class="shu-img-style mr-l-20 mr-t-6" src="../../static/me/shu.png" />
          <text class="fz-15 fw-bold mr-l-10">{{objDetal.pockmark.name}}</text>
          <div class="has-opt-box fl-cen mr-l-2">
            <text class="fz-11 fc-fff">{{objDetal.pockmark.level}}</text>
          </div>
        </div>
        <image class="mr-l-40 item-score" :src="objDetal.pockmark.imgUrl" />
        <div class="score-opt-number fl-bt">
          <text class="mr-l-40 fw-bold fz-14">数量：{{objDetal.pockmark.count}}</text>
          <text class="mr-r-20 fw-bold fz-14">分数：{{objDetal.pockmark.score}}</text>
        </div>
      </div>
      <!-- 皱纹 -->
      <div class="score-item-opt">
        <div class="score-opt-title">
          <image class="shu-img-style mr-l-20 mr-t-6" src="../../static/me/shu.png" />
          <text class="fz-15 fw-bold mr-l-10">{{objDetal.wrinkle.name}}</text>
          <div class="has-opt-box fl-cen mr-l-2">
            <text class="fz-11 fc-fff">{{objDetal.wrinkle.level}}</text>
          </div>
        </div>
        <image class="mr-l-40 item-score" :src="objDetal.wrinkle.imgUrl" />
        <div class="score-opt-number fl-bt">
          <text class="mr-l-40 fw-bold fz-14">数量：{{objDetal.wrinkle.count}}</text>
          <text class="mr-r-20 fw-bold fz-14">分数：{{objDetal.wrinkle.score}}</text>
        </div>
      </div>
      <!-- 黑头 -->
      <div class="score-item-opt">
        <div class="score-opt-title">
          <image class="shu-img-style mr-l-20 mr-t-6" src="../../static/me/shu.png" />
          <text class="fz-15 fw-bold mr-l-10">{{objDetal.blackhead.name}}</text>
          <div class="has-opt-box fl-cen mr-l-2">
            <text class="fz-11 fc-fff">{{objDetal.blackhead.level}}</text>
          </div>
        </div>
        <image class="mr-l-40 item-score" :src="objDetal.blackhead.imgUrl" />
        <div class="score-opt-number fl-bt">
          <text class="mr-l-40 fw-bold fz-14">数量：{{objDetal.blackhead.count}}</text>
          <text class="mr-r-20 fw-bold fz-14">分数：{{objDetal.blackhead.score}}</text>
        </div>
      </div>
      <!-- 毛孔 -->
      <div class="score-item-opt">
        <div class="score-opt-title">
          <image class="shu-img-style mr-l-20 mr-t-6" src="../../static/me/shu.png" />
          <text class="fz-15 fw-bold mr-l-10">{{objDetal.pore.name}}</text>
          <div class="has-opt-box fl-cen mr-l-2">
            <text class="fz-11 fc-fff">{{objDetal.pore.level}}</text>
          </div>
        </div>
        <image class="mr-l-40 item-score" :src="objDetal.pore.imgUrl" />
        <div class="score-opt-number fl-bt">
          <text class="mr-l-40 fw-bold fz-14">数量：{{objDetal.pore.count}}</text>
          <text class="mr-r-20 fw-bold fz-14">分数：{{objDetal.pore.score}}</text>
        </div>
      </div>
      <!-- 黑眼圈 -->
      <div class="score-item-opt">
        <div class="score-opt-title">
          <image class="shu-img-style mr-l-20 mr-t-6" src="../../static/me/shu.png" />
          <text class="fz-15 fw-bold mr-l-10">{{objDetal.dark_circle.name}}</text>
          <div class="has-opt-box fl-cen mr-l-2">
            <text class="fz-11 fc-fff">{{objDetal.dark_circle.level}}</text>
          </div>
        </div>
        <image class="mr-l-40 item-score" :src="objDetal.dark_circle.imgUrl" />
        <div class="score-opt-number fl-bt">
          <text class="mr-l-40 fw-bold fz-14">数量：{{objDetal.dark_circle.count}}</text>
          <text class="mr-r-20 fw-bold fz-14">分数：{{objDetal.dark_circle.score}}</text>
        </div>
      </div>
      <!-- 纹理 -->
      <div class="score-item-opt">
        <div class="score-opt-title">
          <image class="shu-img-style mr-l-20 mr-t-6" src="../../static/me/shu.png" />
          <text class="fz-15 fw-bold mr-l-10">{{objDetal.dark_circle.name}}</text>
          <div class="has-opt-box fl-cen mr-l-2">
            <text class="fz-11 fc-fff">{{objDetal.dark_circle.level}}</text>
          </div>
        </div>
        <image class="mr-l-40 item-score" :src="objDetal.dark_circle.imgUrl" />
        <div class="score-opt-number fl-bt">
          <text class="mr-l-40 fw-bold fz-14">数量：{{objDetal.dark_circle.count}}</text>
          <text class="mr-r-20 fw-bold fz-14">分数：{{objDetal.dark_circle.score}}</text>
        </div>
      </div>
      <!-- 水分圈 -->
      <div class="score-item-opt">
        <div class="score-opt-title">
          <image class="shu-img-style mr-l-20 mr-t-6" src="../../static/me/shu.png" />
          <text class="fz-15 fw-bold mr-l-10">{{objDetal.moisture.name}}</text>
          <div class="has-opt-box fl-cen mr-l-2">
            <text class="fz-11 fc-fff">{{objDetal.moisture.level}}</text>
          </div>
        </div>
        <image class="mr-l-40 item-score" :src="objDetal.moisture.imgUrl" />
        <div class="score-opt-number fl-bt">
          <text class="mr-l-40 fw-bold fz-14">数量：{{objDetal.moisture.count}}</text>
          <text class="mr-r-20 fw-bold fz-14">分数：{{objDetal.moisture.score}}</text>
        </div>
      </div>
      <!-- 棕色班 -->
      <div class="score-item-opt">
        <div class="score-opt-title">
          <image class="shu-img-style mr-l-20 mr-t-6" src="../../static/me/shu.png" />
          <text class="fz-15 fw-bold mr-l-10">{{objDetal.chloasma.name}}</text>
          <div class="has-opt-box fl-cen mr-l-2">
            <text class="fz-11 fc-fff">{{objDetal.chloasma.level}}</text>
          </div>
        </div>
        <image class="mr-l-40 item-score" :src="objDetal.chloasma.imgUrl" />
        <div class="score-opt-number fl-bt">
          <text class="mr-l-40 fw-bold fz-14">数量：{{objDetal.chloasma.count}}</text>
          <text class="mr-r-20 fw-bold fz-14">分数：{{objDetal.chloasma.score}}</text>
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
      <button
        open-type="contact"
        class="consulting-experts fl-cen mr-t-20 fz-15"
        type="primary"
      >请咨询护肤专家</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detailId: "",
      objDetal: {},
    };
  },
  onLoad(obj) {
    this.detailId = obj.id;
    this.getSkinInfo();
  },
  methods: {
    // 获取info
    getSkinInfo() {
      this.$api
        .getSkinInfo({
          id: this.detailId,
        })
        .then((res) => {
          this.objDetal = res.data;
          console.log(res);
        });
    },
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