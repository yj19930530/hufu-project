<template>
  <div id="archives-container">
    <div v-if="tableList.length">
      <div
        class="archives-item-content"
        v-for="item in tableList"
        :key="item.id"
        @tap="navToDetails(item.id)"
      >
        <div class="archives-title fl-bt">
          <text class="fz-15">{{dateTimeConver(item.createTime)}}</text>
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
      <div v-if="!this.more" class="fl-cen mr-t-20">
        <text class="fz-12 fc-999">没有更多</text>
      </div>
    </div>
    <div class="no-data-content" v-if="noData">
      <image class="no-data-img" src="../../static/notdata.png" />
    </div>
  </div>
</template>
<script>
const { toast } = require("../../utils/index");
export default {
  data() {
    return {
      pageNo: 1,
      pageSize: 10,
      tableList: [],
      more: true,
      noData: false,
    };
  },
  onLoad() {
    this.getSkinPage();
  },
  // 上拉刷新
  async onPullDownRefresh() {
    this.pageNo = 1;
    this.pageSize = 10;
    this.tableList = [];
    this.more = true;
    await this.getSkinPage();
    uni.stopPullDownRefresh();
  },
  async onReachBottom() {
    if (!this.more) return;
    this.pageNo++;
    this.getSkinPage();
  },
  methods: {
    // 获取肌肤测试分页列表
    getSkinPage() {
      toast.showLoading("加载中");
      this.$api
        .getSkinPage({
          pageNo: this.pageNo,
          pageSize: this.pageSize,
        })
        .then((res) => {
          uni.hideLoading();
          if (this.pageNo * this.pageSize >= res.data.total) {
            this.more = false;
          } else {
            this.more = true;
          }
          this.tableList = this.tableList.concat(res.data.list);
          if (!this.tableList.length) this.noData = true;
        })
        .catch(() => {
          uni.hideLoading();
        });
    },
    // 跳转时间
    navToDetails(id) {
      uni.navigateTo({
        url: `/subPackages/me/archivesDetails?id=${id}`,
      });
    },
    // 时间转换
    dateTimeConver(time) {
      let date = new Date(time);
      let year = date.getFullYear();
      let month =
        date.getMonth() + 1 >= 10
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1);
      let day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
      let h = date.getHours() >= 10 ? date.getHours() : "0" + date.getHours();
      let m =
        date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
      let s =
        date.getSeconds() >= 10 ? date.getSeconds() : "0" + date.getSeconds();
      return `${year}-${month}-${day} ${h}:${m}:${s}`;
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