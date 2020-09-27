<template>
  <div id="follow-container">
    <div class="follow-has-list">
      <div class="follow-item-content fl-bt" v-for="(item,index) in fansList" :key="index">
        <div class="mr-l-20 fl-al" @tap="lookUserDetail(item)">
          <image class="follow-left-header" :src="userImgUrl+item.fansUser.avatarUrl" />
          <text class="fz-15 fw-bold">{{item.fansUser.nickName}}</text>
        </div>
        <div
          class="mr-r-20 fl-cen follow-has-btn"
          v-if="!item.gzState"
          @tap="handleFollow(item.fansUser,index)"
        >
          <image class="fans-icon" src="../../static/me/huxiang.png" />
          <text class="fz-12 fc-999 mr-l-4">互相关注</text>
        </div>
        <div class="mr-r-20 fl-cen follow-has-btn" v-else @tap="closeFollow(item.fansUser,index)">
          <text class="fz-12 fc-999 mr-l-4">取消关注</text>
        </div>
      </div>
    </div>
    <div class="follow-no-more" v-if="!more">
      <text class="fc-999 fz-12">— 没有更多啦 —</text>
    </div>
  </div>
</template>
<script>
const {userImgUrl} = require('../../config/develop')
export default {
  data() {
    return {
      checkType: "left",
      pageNo: 1,
      pageSize: 10,
      userNo: "",
      total: 0,
      queryType: "获取粉丝",
      fansList: [],
      more: true,
      userImgUrl:userImgUrl
    };
  },
  onShow() {
    this.resetData();
    this.userNo = uni.getStorageSync('userno');
    this.getFansList();
  },
  // 上拉刷新
  async onPullDownRefresh() {
    await this.resetData();
    this.getFansList();
    uni.stopPullDownRefresh();
  },
  async onReachBottom() {
    if (!this.more) return;
    this.pageNo++;
    this.getFansList();
  },
  methods: {
    // 关注
    handleFollow(row, i) {
      if (row.userno === this.userNo) return;
      this.$api.articleGz({
        idol: row.userno,
        fans: this.userNo,
      });
      this.fansList[i].gzState = true;
    },
    // 取消关注
    closeFollow(row, i) {
      this.$api.articleCloseGz({
        currentUserNo: this.userNo,
        targetNo: row.userno,
      });
      this.fansList[i].gzState = false;
    },
    resetData() {
      this.pageNo = 1;
      this.pageSize = 10;
      this.fansList = [];
      this.more = true;
    },
    // 获取粉丝列表
    async getFansList() {
      const { data } = await this.$api.getUserFansOrAttentions({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        userNo: this.userNo,
        queryType: this.queryType,
      });
      this.fansList = this.fansList.concat(data.list);
      this.total = data.total;
      if (this.pageNo * this.pageSize >= this.total) return (this.more = false);
    },
    labelCheck(type) {
      this.checkType = type;
    },
    lookUserDetail(row) {
      uni.navigateTo({
        url: `/subPackages/me/personDetails?userno=${row.fans}`,
      });
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
.follow-item-content {
  width: 100%;
  height: 150rpx;
  background-color: #ffffff;
  border-bottom: 1rpx solid #f8f8f8;
}
.follow-has-list {
  margin-top: 18rpx;
}
.follow-left-header {
  width: 78rpx;
  height: 78rpx;
  border-radius: 50%;
  margin-right: 18rpx;
}
.follow-has-btn {
  width: 166rpx;
  height: 52rpx;
  border-radius: 26rpx 26rpx;
  border: 1rpx solid #999999;
}
.follow-no-more {
  text-align: center;
  padding: 22rpx 0;
}
.fans-icon {
  width: 24rpx;
  height: 24rpx;
}
</style>