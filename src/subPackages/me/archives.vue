<template>
  <div id="archives-container">
    <div class="archives-item-content" v-for="item in tableList" :key="item.id" @tap="navToDetails">
      <div class="archives-title fl-bt">
        <text class="fz-15">2020-08-20 16：34：42</text>
        <text class="iconfont iconshanchu fz-18"></text>
      </div>
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
          <text class="fz-12 fc-fff mr-t-30">我的肤质得分击败了12886个用户</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
    this.getSkinPage()
  },
  methods: {
    // 获取肌肤测试分页列表
    getSkinPage() {
      this.$api
        .getSkinPage({
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          openId: this.openId,
        })
        .then((res) => {
          this.tableList = res.data;
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