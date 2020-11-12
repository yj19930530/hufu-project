<template>
  <div>
    <div class="art-content fl-btw">
      <ArtItem v-for="item in ganAtc" :key="item.id" :itemObj="item" />
    </div>
    <div class="fl-cen mr-t-30" v-if="!more && ganAtc.length">
      <text class="fz-12 fc-999">没有更多了</text>
    </div>
    <div class="fl-cen" style="margin-top: 200rpx" v-if="!ganAtc.length">
      <image class="no-data-img" src="../../static/notdata.png" />
    </div>
  </div>
</template>
<script>
import ArtItem from "../../components/collegeArticle/articleItem";
const { toast } = require("../../utils/index");
export default {
  data() {
    return {
      ganAtc: [],
      more: true,
      pageNo: 1,
      pageSize: 10,
    };
  },
  components: {
    ArtItem,
  },
  // 下拉刷新
  async onPullDownRefresh() {
    await this.resetData();
    await this.getAtc();
    uni.stopPullDownRefresh();
  },
  // 上拉加载更多
  onReachBottom() {
    if (!this.more) return;
    this.pageNo++;
    this.getAtc();
  },
  onLoad() {
    this.getAtc();
  },
  onShareAppMessage() {
    return {
      path: `/pages/page/home`,
    };
  },
  methods: {
    resetData() {
      this.ganAtc = [];
      this.more = true;
      this.pageNo = 1;
      this.pageSize = 4;
    },
    async getAtc() {
      toast.showLoading("加载中");
      const { data } = await this.$api.getCollegeList({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        index: 2,
      });
      this.ganAtc = this.ganAtc.concat(data["hfxy-hfwz"]);
      if (
        data["hfxy-hfwz"].length === 0 ||
        this.pageNo * this.pageSize > this.ganAtc.length
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