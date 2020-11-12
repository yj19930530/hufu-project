<template>
  <div class="search-container">
    <!-- 搜索栏 -->
    <div class="search-top-box fl-al">
      <text class="iconfont iconsousuo fz-12 mr-l-20"></text>
      <input
        class="uni-input fz-12 mr-l-10 input-widht-style"
        v-model="inputVal"
        confirm-type="search"
        @confirm="searchHandle"
        placeholder="输入搜索内容"
      />
      <text class="fz-12 fc-999 mr-l-20" v-if="inputVal !== ''" @tap="clearVal"
        >清除</text
      >
    </div>
    <!-- 历史搜索列表 -->
    <div class="history-box" v-if="!goodsList.length">
      <div class="fl-bt">
        <text class="fz-15 fw-bold">历史搜索</text>
        <div class="fl-al" @tap="clearHistory">
          <image class="suosuo-icon" src="../../static/home/sousuo.png" />
          <text class="fz-12 fc-999 mr-l-4">清空历史记录</text>
        </div>
      </div>
      <div class="fl-btc mr-t-30">
        <div
          class="search-result fl-cen mr-r-20 mr-b-20"
          v-for="(item, index) in searchList"
          :key="index"
          @tap="hisValSearch(item)"
        >
          <text class="fz-14 fc-999">{{ item }}</text>
        </div>
      </div>
    </div>
    <!-- 搜索列表 -->
    <div class="goods-list" v-else>
      <div class="note-center-box">
        <NoteItem
          v-for="(item, index) in goodsList"
          :objData="item"
          :key="index"
          :numIndex="index"
        />
      </div>
      <div class="fl-cen mr-t-20" v-if="!more">
        <text class="fz-12 fc-999">没有更多了</text>
      </div>
    </div>
  </div>
</template>
<script>
const { toast } = require("../../utils/index");
export default {
  data() {
    return {
      inputVal: "",
      searchList: [],
      goodsList: [],
      labelName: "护肤日记",
      pageNo: 1,
      pageSize: 10,
      more: true,
    };
  },
  onLoad() {
    let val = uni.getStorageSync("search");
    if (val) this.searchList = JSON.parse(val);
  },
  // 上拉刷新
  async onPullDownRefresh() {
    await this.resetData();
    this.resetData();
    uni.stopPullDownRefresh();
  },
  async onReachBottom() {
    if (!this.more) return;
    this.pageNo++;
    this.getList();
  },
  onShareAppMessage() {
    return {
      path: `/pages/page/home`,
    };
  },
  methods: {
    // 清空历史记录
    clearHistory() {
      this.inputVal = "";
      this.goodsList.length = 0;
      this.searchList.length = 0;
      uni.removeStorageSync("search");
    },
    resetData() {
      this.goodsList = [];
      this.more = true;
      this.pageNo = 1;
      this.pageSize = 10;
    },
    clearVal() {
      this.inputVal = "";
      this.goodsList.length = 0;
    },
    async searchHandle() {
      this.searchList.push(this.inputVal);
      this.searchList = [...new Set(this.searchList)];
      uni.setStorageSync("search", JSON.stringify(this.searchList));
      this.getList();
    },
    async getList() {
      toast.showLoading("加载中");
      const { data } = await this.$api.getAboutAtc({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        title: this.inputVal,
      });
      if (this.pageNo * this.pageSize >= data.total) this.more = false;
      this.goodsList = this.goodsList.concat(data.list);
      uni.hideLoading();
    },
    // 历史搜索
    hisValSearch(val) {
      this.inputVal = val;
      this.getList();
    },
  },
};
</script>
<style scoped>
.search-container {
  padding-top: 10rpx;
}
.search-top-box {
  margin: auto;
  width: 710rpx;
  height: 64rpx;
  background-color: #eeeeee;
  border-radius: 10rpx;
}
.input-widht-style {
  width: 570rpx;
}
.history-box {
  margin: 30rpx auto 0;
  width: 710rpx;
}
.suosuo-icon {
  width: 26rpx;
  height: 26rpx;
}
.search-result {
  width: 132rpx;
  height: 40rpx;
  border-radius: 20rpx;
  background-color: #eeeeee;
}
.goods-list {
  padding: 20rpx 20rpx 30rpx;
  margin-top: 16rpx;
  width: 100%;
  background-color: #f8f8f8;
}
.goods-center-box {
  margin: auto;
  width: 710rpx;
}
/* 瀑布流布局 */
.note-center-box {
  column-count: 2;
  column-gap: 1;
}
</style>