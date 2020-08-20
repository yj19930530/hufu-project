<template>
  <div id="college-container">
    <!-- 头部banner -->
    <div class="college-top-banner">
      <image class="college-banner-img" src="../../static/college/co-img.png" />
    </div>
    <!-- 咨询老师 -->
    <div class="Interrogation-content mr-t-20">
      <scroll-view class="scroll-box" scroll-x="true">
        <div class="doc-item-person" v-for="item in 5" :key="item">
          <div class="fl-co">
            <image class="doc-header-img" src="../../static/circle/back-img.png" />
            <text class="fz-13 mr-t-4">小凤老师</text>
            <text class="fz-10 fc-999 mr-t-6">高级专家护肤导师</text>
            <text class="fz-10 fc-999 mr-t-6">特聘专业护肤师</text>
            <button class="handle-btn fz-11 fl-cen" type="primary">立即咨询</button>
          </div>
        </div>
      </scroll-view>
    </div>
    <!-- 相关文章 -->
    <div class="about-atc-content">
      <div class="about-atc-title fl-al">
        <text class="fz-15 mr-l-10 fw-bold">相关文章</text>
      </div>
      <div class="mr-t-20">
        <div class="mr-t-20 fl-ff about-atc-item" v-for="item in 2" :key="item">
          <image class="atc-left-img" src="../../static/circle/back-img.png" />
          <div class="atc-right-content">
            <div class="text-lang-dian2 mr-t-6">
              <text class="fz-15">30种自制面膜，总有一种适合你，献给和敏感油痘肌战斗的如果把人比作植物，脸就是植物顶端的嫩叶，如果忘了浇水或者到了秋冬季筒子们…</text>
            </div>
            <div class="mr-t-10 text-lang-dian2">
              <text
                class="fz-12 fc-999"
              >如果把人比作植物，脸就是植物顶端的嫩叶，如果忘了浇水或者到了秋冬如果把人比作植物，脸就是植物顶端的嫩叶，如果忘了浇水或者到了秋冬季季</text>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 产品推荐 -->
    <div class="chanpin-atc-content">
      <div class="about-atc-title fl-bt">
        <text class="fz-15 mr-l-10 fw-bold">产品推荐</text>
        <div class="fl-al mr-r-10">
          <text class="fz-12 fc-999">查看更多</text>
          <text class="iconfont iconyoujiantou fz-12 fc-999"></text>
        </div>
      </div>
      <div class="fl-btw mr-t-20">
        <WaterItem v-for="item in 4" :key="item" />
      </div>
    </div>
  </div>
</template>
<script>
import WaterItem from "../../components/waterItem/water";
export default {
  data() {
    return {};
  },
  components: {
    WaterItem,
  },
  methods: {
    scroll(e) {
      console.log(e);
    },
    optNavigatorPath(path) {
      switch (path) {
        case "atc": {
          uni.navigateTo({
            url: "/subPackages/college/article",
          });
          break;
        }
        case "vid": {
          uni.navigateTo({
            url: "/subPackages/college/video",
          });
          break;
        }
        default: {
          break;
        }
      }
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
.college-top-banner {
  width: 100%;
  height: 646rpx;
}
.college-banner-img {
  width: 100%;
  height: 100%;
}
.scroll-box {
  white-space: nowrap;
}
.doc-item-person {
  display: inline-block;
  margin: 0 10rpx;
  width: 226rpx;
  height: 322rpx;
  background-color: #ffffff;
}
.doc-header-img {
  margin-top: 24rpx;
  width: 90rpx;
  height: 90rpx;
  border-radius: 50%;
}
.handle-btn {
  margin-top: 26rpx;
  width: 188rpx;
  height: 44rpx;
  border-radius: 22rpx 22rpx;
  background: linear-gradient(to right, #333333, #666666);
}
.about-atc-content {
  margin: auto;
  padding-top: 40rpx;
  width: 710rpx;
}
.chanpin-atc-content {
  padding-top: 20rpx;
  margin: auto;
  width: 710rpx;
}
.about-atc-title {
  width: 100%;
  height: 62rpx;
  border-radius: 20rpx;
  background-color: #eeeeee;
}
.about-atc-item {
  padding: 20rpx;
  background-color: #ffffff;
}
.atc-left-img {
  width: 186rpx;
  height: 186rpx;
}
.atc-right-content {
  margin-left: 20rpx;
  width: 464rpx;
  height: 100%;
}
</style>