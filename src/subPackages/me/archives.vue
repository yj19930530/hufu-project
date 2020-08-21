<template>
  <div id="archives-container">
    <div class="archives-item-content" v-for="item in tableList" :key="item.id" @tap="navToDetails">
      <div class="archives-title fl-bt">
        <text class="fz-15">{{item.createTime}}</text>
        <text class="iconfont iconshanchu fz-18"></text>
      </div>
      <div class="archives-bottom-score">
        <image class="archives-score-bj" src="../../static/me/bj.png" />
        <div class="archives-score-center fl-co">
          <div class="center-score-img">
            <image class="score-img-bj" src="../../static/me/yuanhuan.png" />
            <div class="score-img-text fl-co">
              <text class="fz-35 fc-fff mr-t-fu10">{{item.score}}</text>
              <text class="fz-12 fc-fff mr-t-fu10">综合得分</text>
            </div>
          </div>
          <text class="fz-12 fc-fff mr-t-30">我的肤质得分击败了{{item.rank_num}}个用户</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { toast } = require("../../utils/index");
export default {
  data() {
    return {
      openId: "",
      pageNo: 1,
      pageSize: 10,
      tableList: [],
    };
  },
  onLoad() {
    this.openId = uni.getStorageSync("opId");
    this.getSkinPage();
  },
  // 上拉刷新
  async onPullDownRefresh() {
    this.pageNo = 1;
    this.pageSize = 10;
    await this.getSkinPage();
    uni.stopPullDownRefresh();
  },
  async onReachBottom() {

  },
  methods: {
    // 获取肌肤测试分页列表
    getSkinPage() {
      toast.showLoading("加载中");
      this.$api
        .getSkinPage({
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          openId: this.openId,
        })
        .then((res) => {
          uni.hideLoading();
          this.tableList = res.data.list;
        })
        .catch(() => {
          uni.hideLoading();
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
  padding-top: 50rpx;
  padding-bottom: 20rpx;
  margin: auto;
  width: 710rpx;
}
.archives-title {
  height: 86rpx;
}
.archives-bottom-score {
  position: relative;
  width: 100%;
  height: 338rpx;
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
</style>