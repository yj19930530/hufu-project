<template>
  <div id="follow-container">
    <!-- 关注tab 选项 -->
    <div class="follow-top-label fl-al">
      <div class="follow-label-check fl-co" @tap="labelCheck('left')">
        <text class="fz-14" :class="[checkType === 'left' ? '' : 'fc-999']"
          >收藏</text
        >
        <div
          class="follow-check"
          :class="[
            checkType === 'left'
              ? 'follow-check-color1'
              : 'follow-check-color2',
          ]"
        ></div>
      </div>
      <div class="follow-label-check fl-co" @tap="labelCheck('right')">
        <text class="fz-14" :class="[checkType === 'right' ? '' : 'fc-999']"
          >赞过</text
        >
        <div
          class="follow-check"
          :class="[
            checkType === 'right'
              ? 'follow-check-color1'
              : 'follow-check-color2',
          ]"
        ></div>
      </div>
    </div>
    <div class="collection-content-left" v-if="atcList.length">
      <div class="fl-al all-collection">
        <text class="iconfont iconjurassic_danju fz-11 fc-999"></text>
        <text class="fz-12 mr-l-4"
          >全部{{ checkType === "left" ? "收藏" : "赞过" }}({{
            atcList.length
          }})</text
        >
      </div>
      <div class="note-center-box">
        <NoteItem
          v-for="(item, index) in atcList"
          :key="index"
          :numIndex="index"
          :objData="item"
        />
      </div>
    </div>
    <div class="follow-no-more">
      <text class="fc-999 fz-12">— 没有更多啦 —</text>
    </div>
  </div>
</template>
<script>
import NoteItem from "../../components/noteItem/note";
export default {
  data() {
    return {
      checkType: "left",
      atcList: [],
      pageNo: 1,
      pageSize: 10,
      total: 0,
      more: true,
      userNoMy: "",
    };
  },
  onLoad() {
    this.userNoMy = uni.getStorageSync("userno");
  },
  onShareAppMessage() {
    return {
      path: `/pages/page/home`,
    };
  },
  async onShow() {
    await this.resetData();
    this.getIsZanAndShouList();
  },
  // 上拉刷新
  async onPullDownRefresh() {
    await this.resetData();
    this.getIsZanAndShouList();
    uni.stopPullDownRefresh();
  },
  async onReachBottom() {
    if (!this.more) return;
    this.pageNo++;
    this.getIsZanAndShouList();
  },
  components: {
    NoteItem,
  },
  methods: {
    resetData() {
      this.pageNo = 1;
      this.pageSize = 10;
      this.atcList = [];
      this.more = true;
    },
    // 获取赞过 收藏的文章列表
    async getIsZanAndShouList() {
      const { data } = await this.$api.findCollectionOrDzArticlePage({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        userNo: this.userNoMy,
        queryType: this.checkType === "left" ? "收藏" : "赞过",
      });
      this.atcList = this.atcList.concat(data.list);
      let arr1 = [],
        arr2 = [];
      this.atcList.forEach((item, index) => {
        if (index % 2 === 0) {
          arr1.push(item);
        } else {
          arr2.push(item);
        }
      });
      this.atcList = [...arr1, ...arr2];
      this.total = data.total;
      if (this.pageNo * this.pageSize >= this.total) return (this.more = false);
    },
    async labelCheck(type) {
      if (this.checkType === type) return;
      this.checkType = type;
      await this.resetData();
      this.getIsZanAndShouList();
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
.follow-top-label {
  width: 100%;
  height: 90rpx;
  background-color: #ffffff;
}
.follow-label-check {
  width: 50%;
}
.follow-check {
  margin-top: 8rpx;
  width: 56rpx;
  height: 4rpx;
  border-radius: 2rpx 2rpx;
}
.follow-check-color1 {
  background-color: #f11b20;
}
.follow-check-color2 {
  background-color: #ffffff;
}
.follow-no-more {
  text-align: center;
  padding: 22rpx 0;
}
/* 瀑布流布局 */
.note-center-box {
  column-count: 2;
  column-gap: 1;
}
.collection-content-left {
  margin: auto;
  width: 710rpx;
}
.all-collection {
  width: 100%;
  height: 84rpx;
}
</style>