<template>
  <div id="college-container">
    <!-- 头部banner -->
    <div class="college-top-banner">
      <image class="college-banner-img" src="../../static/college/co-img.png" />
    </div>
    <!-- 护肤文章 -->
    <div class="article-content">
      <div class="article-top-title fl-bt" @tap="optNavigatorPath('atc')">
        <div class="mr-l-10">
          <text class="fz-15 fw-400">护肤学院</text>
          <text class="fz-12 mr-l-10">护肤文章</text>
        </div>
        <div class="mr-r-10 fl-al">
          <text class="fz-12 fc-999">查看更多</text>
          <text class="iconfont iconyoujiantou fz-12 fc-999 mr-l-4"></text>
        </div>
      </div>
      <div class="article-list-content fl-btw mr-t-6">
        <ArtItem v-for="item in ganAtc" :key="item.id" :itemObj="item" />
      </div>
    </div>
    <!-- 干货视频 -->
    <div class="article-content">
      <div class="article-top-title fl-bt" @tap="optNavigatorPath('vid')">
        <div class="mr-l-10">
          <text class="fz-15 fw-400">干货视频</text>
        </div>
        <div class="mr-r-10 fl-al">
          <text class="fz-12 fc-999">查看更多</text>
          <text class="iconfont iconyoujiantou fz-12 fc-999 mr-l-4 mr-t-2"></text>
        </div>
      </div>
      <div class="article-list-content fl-btw mr-t-6">
        <VideoItem v-for="item in ganVideo" :key="item.id" />
      </div>
    </div>
  </div>
</template>
<script>
import ArtItem from "../../components/collegeArticle/articleItem";
import VideoItem from "../../components/collegeVideo/videoItem";
export default {
  data() {
    return {
      ganVideo: [], // 干货视频列表
      ganAtc: [], // 干货文章列表
    };
  },
  onLoad() {
    this.getList();
  },
  components: {
    ArtItem,
    VideoItem,
  },
  methods: {
    // 获取文章列表
    async getList() {
      const { data } = await this.$api.getCollegeList({
        pageNo: 1,
        pageSize: 4,
      });
      this.ganVideo = data.ghsp;
      this.ganAtc = data["hfxy-hfwz"];
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
<style scoped>
#college-container {
  background-color: #f8f8f8;
}
.college-top-banner {
  width: 100%;
  height: 646rpx;
}
.college-banner-img {
  width: 100%;
  height: 100%;
}
.article-content {
  padding-top: 48rpx;
  margin: auto;
  width: 710rpx;
}
.article-top-title {
  width: 100%;
  height: 62rpx;
  background-color: #eeeeee;
  border-radius: 20rpx;
}
</style>