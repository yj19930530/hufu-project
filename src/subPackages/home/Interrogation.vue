<template>
  <div id="college-container">
    <!-- 头部banner -->
    <div class="college-top-banner">
      <image class="college-banner-img" src="../../static/college/co-img.png" />
    </div>
    <!-- 咨询老师 -->
    <swiper
      class="swiper-block"
      previous-margin="90rpx"
      next-margin="90rpx"
      :current="swiperIndex"
      @change="swiperChange"
      :circular="true"
    >
      <block v-for="(item, index) in askData" :key="index">
        <swiper-item class="swiper-item" @tap="checkIndex(index)">
          <div
            class="slide-image"
            :class="[swiperIndex === index ? 'active' : '']"
          >
            <div class="fl-co">
              <image
                v-if="item.avatarUrl"
                class="doc-header-img"
                mode="aspectFill"
                :src="userImgUrl + item.avatarUrl"
              />
              <image
                v-else
                class="doc-header-img"
                mode="aspectFill"
                src="../../static/default-header.png"
              />
              <text class="fz-13 mr-t-4">{{ item.nickName }}</text>
              <text class="fz-10 fc-999 mr-t-6">高级专家护肤导师</text>
              <text class="fz-10 fc-999 mr-t-6">特聘专业护肤师</text>
              <button
                class="handle-btn fz-11 fl-cen"
                open-type="contact"
                type="primary"
              >
                立即咨询
              </button>
            </div>
          </div>
        </swiper-item>
      </block>
    </swiper>
    <!-- 相关文章 -->
    <div class="about-atc-content" v-if="atcList.length">
      <div class="about-atc-title fl-bt">
        <text class="fz-15 mr-l-10 fw-bold">相关文章</text>
        <div class="fl-al mr-r-10">
          <text class="fz-12 fc-999">查看更多</text>
          <text class="iconfont iconyoujiantou fz-12 fc-999"></text>
        </div>
      </div>
      <div class="mr-t-20">
        <div
          class="mr-t-20 fl-ff about-atc-item"
          v-for="item in atcList"
          :key="item.id"
          @tap="lookDetail(item)"
        >
          <image class="atc-left-img" :src="atcImgUrl + item.displayimg" />
          <div class="atc-right-content">
            <div class="text-lang-dian2 text-lang-height mr-t-16">
              <text class="fz-15">{{ item.title }}</text>
            </div>
            <div class="liulan-box">
              <image
                class="liulan-icon mr-r-10"
                src="../../static/college/liulan.png"
              />
              <text class="fz-12 fc-999">{{ item.browse }}</text>
            </div>
            <!-- <div class="mr-t-10 text-lang-dian2">
              <text class="fz-12 fc-999">{{item.contens}}</text>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- 产品推荐 -->
    <div class="chanpin-atc-content">
      <div class="about-atc-title fl-al">
        <text class="fz-15 mr-l-10 fw-bold">产品推荐</text>
      </div>
      <div class="fl-btw mr-t-20">
        <WaterItem v-for="item in allList" :key="item.id" :objData="item" />
      </div>
    </div>
    <MovableTop />
  </div>
</template>
<script>
const { atcImgUrl, userImgUrl } = require("../../config/develop");
import WaterItem from "../../components/waterItem/water";
export default {
  data() {
    return {
      swiperIndex: 0,
      atcList: [],
      allList: [],
      atcImgUrl: atcImgUrl,
      userImgUrl: userImgUrl,
      labelText: "",
      askData: [],
    };
  },
  onShareAppMessage() {
    return {
      path: `/pages/page/home`,
    };
  },
  onLoad(obj) {
    this.labelText = obj.text;
    this.aboutAtc();
    this.getTableList();
    this.askList();
  },
  components: {
    WaterItem,
  },
  methods: {
    async askList() {
      const { data } = await this.$api.getAskList({
        pageNo: 1,
        pageSize: 999,
        platform: 3,
      });
      this.askData = data.list;
    },
    lookDetail(row) {
      uni.navigateTo({
        url: `/subPackages/college/atcDetail?id=${row.id}`,
      });
    },
    // 获取商品列表
    async getTableList() {
      const { data } = await this.$api.getClassList();
      this.allList = data.all;
      this.allList.length = 4;
    },
    //获取相关文章
    async aboutAtc(text) {
      const { data } = await this.$api.getAboutAtc({
        pageNo: 1,
        pageSize: 2,
        label: this.labelText,
        // brand: text,
      });
      this.atcList = data.list;
      let re = new RegExp("<[^<>]+>", "g");
      this.atcList.forEach((item) => {
        item.contens = item.contens.replace(re, "");
      });
    },
    checkIndex(i) {
      this.swiperIndex = i;
    },
    swiperChange(e) {
      this.swiperIndex = e.detail.current;
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
/* 名片滑动 */
.swiper-block {
  height: 518rpx;
}
.swiper-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: unset;
  width: 334rpx !important;
  margin-left: 116rpx;
}
.slide-image {
  width: 258rpx;
  height: 334rpx;
  border-radius: 9rpx;
  box-shadow: 0px 0px 30rpx rgba(0, 0, 0, 0.2);
  margin: auto;
  z-index: 1;
}
.active {
  transform: scale(1.4);
  transition: all 0.2s ease-in 0s;
  z-index: 20;
}
.liulan-box {
  margin-top: 42rpx;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.liulan-icon {
  width: 36rpx;
  height: 26rpx;
}
.text-lang-height {
  height: 84rpx;
}
</style>