<template>
  <div>
    <div class="art-content fl-btw">
      <VideoItem v-for="item in ganVideo" :key="item.id" :itemObj="item" />
    </div>
    <div class="fl-cen mr-t-30" v-if="!more&&ganVideo.length">
      <text class="fz-12 fc-999">没有更多了</text>
    </div>
    <div class="fl-cen" style="margin-top:200rpx" v-if="!ganVideo.length">
      <image class="no-data-img" src="../../static/notdata.png" />
    </div>
  </div>
</template>
<script>
import videoItem from "../../components/collegeVideo/videoItem";
const { toast } = require("../../utils/index");
export default {
  data() {
    return {
      ganVideo: [],
      more: true,
      pageNo: 1,
      pageSize: 10,
    };
  },
  components: {
    videoItem,
  },
  // 下拉刷新
  async onPullDownRefresh() {
    await this.resetData();
    await this.getVideo();
    uni.stopPullDownRefresh();
  },
  // 上拉加载更多
  onReachBottom() {
    if (!this.more) return;
    this.pageNo++;
    this.getVideo();
  },
  onLoad() {
    this.getVideo();
  },
  methods: {
    resetData() {
      this.ganVideo = [];
      this.more = true;
      this.pageNo = 1;
      this.pageSize = 4;
    },
    async getVideo() {
      toast.showLoading("加载中");
      const { data } = await this.$api.getCollegeList({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        index: 2,
      });
      this.ganVideo = this.ganVideo.concat(data.ghsp);
      if (
        data.ghsp.length === 0 ||
        this.pageNo * this.pageSize > this.ganVideo.length
      ) {
        this.more = false;
      }
      uni.hideLoading();
    },
  },
};
</script>
<style scoped>
.art-content {
  margin: auto;
  padding-top: 20rpx;
  width: 710rpx;
}
</style>