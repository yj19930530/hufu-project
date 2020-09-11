<template>
  <div id="person-detail-container">
    <!-- 頭部 -->
    <div class="detail-top-content">
      <div class="fl-bt">
        <div class="user-img-box fl-al">
          <image class="detail-user-img" :src="userInfo.avatarUrl" />
          <text class="mr-l-30 fz-15">{{userInfo.nickName}}</text>
        </div>
        <div class="fl-cen follow-btn" v-if="isGz" @tap="closeFollow">
          <text class="fz-12">已关注</text>
        </div>
        <div class="fl-cen follow-btn" v-else @tap="handleFollow">
          <text class="fz-12">关注</text>
        </div>
      </div>
      <div class="mr-t-50 fl-bt">
        <div class="fl-co detail-has-opt">
          <text class="fz-17 fw-bold">{{userInfo.gzNum}}</text>
          <text class="fz-13 fc-999">关注</text>
        </div>
        <div class="fl-co detail-has-opt">
          <text class="fz-17 fw-bold">{{userInfo.fsNum}}</text>
          <text class="fz-13 fc-999">粉丝</text>
        </div>
        <div class="fl-co detail-has-opt">
          <text class="fz-17 fw-bold">{{userInfo.scNum}}</text>
          <text class="fz-13 fc-999">收藏</text>
        </div>
      </div>
    </div>
    <!-- tab 切換 -->
    <div class="fl-cen mr-t-30 mr-b-10">
      <div class="fl-co" @tap="checkFunc('left')">
        <text class="fz-14" :class="[checkType==='left'?'fc-333':'fc-999']">动态</text>
        <div
          class="heng-style"
          :class="[checkType==='left'?'heng-style-color1':'heng-style-color2']"
        ></div>
      </div>
      <div class="fl-co mr-left-132" @tap="checkFunc('center')">
        <text class="fz-14" :class="[checkType==='center'?'fc-333':'fc-999']">收藏</text>
        <div
          class="heng-style"
          :class="[checkType==='center'?'heng-style-color1':'heng-style-color2']"
        ></div>
      </div>
      <div class="fl-co mr-left-132" @tap="checkFunc('right')">
        <text class="fz-14" :class="[checkType==='right'?'fc-333':'fc-999']">赞过</text>
        <div
          class="heng-style"
          :class="[checkType==='right'?'heng-style-color1':'heng-style-color2']"
        ></div>
      </div>
    </div>
    <!-- 列表 -->
    <div class="collection-content-left">
      <div class="fl-al all-collection">
        <text class="iconfont iconjurassic_danju fz-11 fc-999"></text>
        <text class="fz-12 mr-l-4">全部{{titleText}}({{atcList.length}})</text>
      </div>
      <div class="note-center-box">
        <NoteItem v-for="(item,index) in atcList" :key="index" :numIndex="index" :objData="item" />
      </div>
    </div>
    <div class="follow-no-more" v-if="!more">
      <text class="fc-999 fz-12">— 没有更多啦 —</text>
    </div>
    <!-- <div class="no-data-content">
        <image class="no-data-img" src="../../static/notdata.png" />
    </div>-->
  </div>
</template>
<script>
import NoteItem from "../../components/noteItem/note";
export default {
  data() {
    return {
      checkType: "left",
      userNo: "",
      userInfo: {},
      pageNo: 1,
      pageSize: 10,
      atcList: [],
      total: 0,
      more: true,
      titleText: "动态",
      isGz: false,
      userNoMy: "",
    };
  },
  components: {
    NoteItem,
  },
  // 上拉刷新
  async onPullDownRefresh() {
    await this.resetData();
    if (this.checkType === "left") {
      this.getDongtaiAtcList();
    } else {
      this.getIsZanAndShouList();
    }
    uni.stopPullDownRefresh();
  },
  async onReachBottom() {
    if (!this.more) return;
    this.pageNo++;
    if (this.checkType === "left") {
      this.getDongtaiAtcList();
    } else {
      this.getIsZanAndShouList();
    }
  },
  onLoad(obj) {
    this.userNoMy = uni.getStorageSync("userno");
    this.userNo = obj.userno;
    this.getUserInfo();
    this.getDongtaiAtcList();
    this.isUserGz();
  },
  methods: {
    // 取消关注
    async closeFollow() {
      await this.$api.articleCloseGz({
        currentUserNo: this.userNoMy,
        targetNo: this.userNo,
      });
      this.isUserGz();
    },
    // 关注
    async handleFollow() {
      await this.$api.articleGz({
        idol: this.userNo,
        fans: this.userNoMy,
      }); 
      this.isUserGz();
    },
    async isUserGz() {
      const { data } = await this.$api.judgeUserGz({
        currentNo: this.userNoMy,
        targetUserNo: this.userNo,
      });
      this.isGz = data;
    },
    resetData() {
      this.pageNo = 1;
      this.pageSize = 10;
      this.atcList = [];
      this.more = true;
    },
    async getUserInfo() {
      const { data } = await this.$api.getAllUserInfo({
        userNo: this.userNo,
      });
      this.userInfo = data;
    },
    async checkFunc(type) {
      if (this.checkType === type) return;
      this.checkType = type;
      await this.resetData();
      if (type === "left") {
        this.getDongtaiAtcList();
      } else {
        this.getIsZanAndShouList();
      }
      this.getText(type);
    },
    getText(type) {
      switch (type) {
        case "left": {
          this.titleText = "动态";
          break;
        }
        case "center": {
          this.titleText = "收藏";
          break;
        }
        case "right": {
          this.titleText = "赞过";
          break;
        }
      }
    },
    // 获取动态列表
    async getDongtaiAtcList() {
      const { data } = await this.$api.getCirleNoteList({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        userNo: this.userNo,
      });
      this.atcList = this.atcList.concat(data.list);
      this.total = data.total;
      if (this.pageNo * this.pageSize >= this.total) return (this.more = false);
    },
    // 获取赞过 收藏的文章列表
    async getIsZanAndShouList() {
      const { data } = await this.$api.findCollectionOrDzArticlePage({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        userNo: this.userNo,
        queryType: this.checkType === "center" ? "收藏" : "赞过",
      });
      this.atcList = this.atcList.concat(data.list);
      this.total = data.total;
      if (this.pageNo * this.pageSize >= this.total) return (this.more = false);
    },
  },
};
</script>
<style scoped>
.detail-top-content {
  padding-top: 10rpx;
  width: 100%;
  height: 288rpx;
  background-color: #ffffff;
  border-radius: 0 0 100rpx 100rpx;
}
.detail-user-img {
  width: 112rpx;
  height: 112rpx;
  border-radius: 50%;
}
.user-img-box {
  margin-left: 60rpx;
}
.follow-btn {
  margin-right: 60rpx;
  width: 128rpx;
  height: 52rpx;
  border-radius: 26rpx 26rpx 26rpx 0;
  border: 1rpx solid #333333;
}
.detail-has-opt {
  width: 33.3%;
}
.heng-style {
  margin-top: 8rpx;
  width: 56rpx;
  height: 4rpx;
  border-radius: 2rpx 2rpx;
}
.heng-style-color1 {
  background-color: #f11b20;
}
.heng-style-color2 {
  background-color: #f8f8f8;
}
.mr-left-132 {
  margin-left: 132rpx;
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
.follow-no-more {
  text-align: center;
  padding: 22rpx 0;
}
</style>
<style>
page {
  background-color: #f8f8f8;
}
</style>