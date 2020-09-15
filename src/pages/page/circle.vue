<template>
  <div id="circle-box-container" @tap="resetMoreType">
    <!-- 头部tab -->
    <div class="circle-top-content" :style="[{height:488+navHeight+'rpx'}]">
      <image class="circle-top-back" src="../../static/circle/back-img.png" />
      <div class="circle-top-center fl-co">
        <div class="fl-co circle-top-title mr-t-70">
          <text class="fz-15 fc-fff">初印象粉丝共同见证</text>
          <text class="fz-18 fw-bold mr-t-10 fc-fff">肌肤蜕变之旅</text>
        </div>
        <div class="fl-cen mr-t-70">
          <div
            class="fl-cen circle-change-label"
            :class="[optName==='left'?'circle-change-boder':'circle-change-boder2']"
            @tap="tabChange('left')"
          >
            <text class="fz-12" :class="[optName==='left'?'fc-7d':'fc-fff']">初印象圈</text>
          </div>
          <div class="yuandian"></div>
          <div
            class="fl-cen circle-change-label"
            :class="[optName==='right'?'circle-change-boder':'circle-change-boder2']"
            @tap="tabChange('right')"
          >
            <text class="fz-12" :class="[optName==='right'?'fc-7d':'fc-fff']">初印象笔记</text>
          </div>
        </div>
      </div>
    </div>
    <!-- 输入框 -->
    <div class="comment-box fl-cen" v-if="commentType">
      <textarea
        :fixed="true"
        :adjust-position="true"
        :placeholder="huifuName"
        :cursor-spacing="commentHeight+20"
        @keyboardheightchange="getHeigth"
        maxlength="300"
        @blur="inputBlurChange"
        @confirm="sumitForm"
        :auto-height="true"
        class="comment-content-input"
        :focus="commentType"
        v-model="userCommentForm.content"
      />
    </div>
    <!-- 评论 -->
    <div class="circle-left-content" v-if="optName==='left'">
      <div class="circle-opt-content fl-bt">
        <div class="circle-opt-item fl-co circle-icon-left" @tap="circleChange('护肤日记')">
          <image class="circle-opt-icon" src="../../static/circle/riji.png" />
          <text class="fz-10 mr-t-10 fc-000">护肤日记</text>
          <div
            class="choose-icon"
            :class="[labelName==='护肤日记'?'choose-icon-color2':'choose-icon-color']"
          ></div>
        </div>
        <div class="circle-opt-item fl-co" @tap="circleChange('新品测试')">
          <image class="circle-opt-icon" src="../../static/circle/xinpin.png" />
          <text class="fz-10 mr-t-10 fc-000">新品测试</text>
          <div
            class="choose-icon"
            :class="[labelName==='新品测试'?'choose-icon-color2':'choose-icon-color']"
          ></div>
        </div>
        <div class="circle-opt-item fl-co" @tap="circleChange('回访记录')">
          <image class="circle-opt-icon" src="../../static/circle/jilu.png" />
          <text class="fz-10 mr-t-10 fc-000">回访记录</text>
          <div
            class="choose-icon"
            :class="[labelName==='回访记录'?'choose-icon-color2':'choose-icon-color']"
          ></div>
        </div>
        <div class="circle-opt-item fl-co circle-icon-right" @tap="circleChange('限时活动')">
          <image class="circle-opt-icon" src="../../static/circle/xianshi.png" />
          <text class="fz-10 mr-t-10 fc-000">限时活动</text>
          <div
            class="choose-icon"
            :class="[labelName==='限时活动'?'choose-icon-color2':'choose-icon-color']"
          ></div>
        </div>
      </div>
      <div class="comment-content" v-for="(item,index) in circleList" :key="index">
        <div class="comment-item-box">
          <image class="header-img mr-l-20" :src="item.createUser.avatarUrl" />
          <div class="item-right-coentent mr-r-20">
            <text class="fc-5d fz-15">{{item.createUser.nickName}}</text>
            <text class="fz-14 mr-t-10">{{item.content}}</text>
            <div class="more-btn-box">
              <div class="more-menu-content">
                <div
                  class="more-btn-menu fl-cen"
                  :class="[showIndex===index?'right-position':'right-position2']"
                >
                  <div v-if="item.dzState" class="more-menu-item fl-al">
                    <image class="menu-icon" src="../../static/circle/zan.png" />
                    <text class="fz-14 mr-l-8 fc-fff">已赞</text>
                  </div>
                  <div
                    v-else
                    class="more-menu-item fl-al"
                    @tap.native.stop="circleFabulousHandle(item,index)"
                  >
                    <image class="menu-icon" src="../../static/circle/zan.png" />
                    <text class="fz-14 fc-fff mr-l-8">赞</text>
                  </div>
                  <div
                    class="more-menu-item fl-al menu-icon-left"
                    @tap.native.stop="getComHeight(index)"
                  >
                    <image class="menu-icon2" src="../../static/circle/pinlun.png" />
                    <text class="fz-14 fc-fff mr-l-8">评论</text>
                  </div>
                </div>
              </div>
              <div class="more-img" @tap.native.stop="moreChange(item,index)">
                <image class="more-btn-img" src="../../static/circle/more.png" />
              </div>
            </div>
            <div class="has-zan-list text-lang-dian2 mr-b-10" v-if="item.likeUsers.length">
              <text
                class="fz-12 fc-5d"
                v-for="(zRow,zIx) in item.likeUsers"
                :key="zIx"
              >{{zRow.nickName}},</text>
            </div>
            <div class="communication-content" v-for="(row,x) in item.noteComments" :key="x">
              <div
                class="communication-item"
                v-if="row.commentType===0"
              >
                <text
                  class="fz-13 fc-5d"
                  @tap.native.stop="commentUser(row)"
                >{{row.fromUserNickName}}：</text>
                <text class="fz-13">{{row.content}}</text>
              </div>
              <div class="communication-item mr-t-10" v-else>
                <text
                  class="fz-13 fc-5d"
                  @tap.native.stop="commentUser(row)"
                >{{row.fromUserNickName}}</text>
                <text class="fz-13 fc-5d mr-l-10 mr-r-10">回复</text>
                <text
                  class="fz-13 fc-5d"
                  @tap.native.stop="commentUser2(row)"
                >{{row.toUserNickName}}：</text>
                <text class="fz-13">{{row.content}}</text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!more" class="fl-cen mr-t-20">
        <text class="fc-999 fz-12">没有更多</text>
      </div>
    </div>
    <!-- 笔记 -->
    <div class="note-content" v-if="optName==='right'">
      <div class="note-title-content fl-al">
        <text class="fz-15 fw-bold">初印象笔记</text>
      </div>
      <div class="note-center-box">
        <NoteItem
          v-for="(item,index) in circleList"
          :objData="item"
          :key="index"
          :numIndex="index"
        />
      </div>
      <div v-if="!more" class="fl-cen mr-t-20">
        <text class="fc-999 fz-12">没有更多</text>
      </div>
    </div>
    <image @tap="writeFunc" class="write-img" src="../../static/circle/write.png" />
  </div>
</template>
<script>
const { toast } = require("../../utils/index");
export default {
  data() {
    return {
      optName: "left",
      labelName: "护肤日记",
      commentType: false,
      commentHeight: 0,
      pageNo: 1,
      pageSize: 10,
      total: 0,
      circleList: [], // 列表
      userCommentForm: {
        noteId: "", // 印圈Id
        commentType: "", // 1回复 0评论
        content: "", // 内容
        fromNo: "", // 评论人id
        toNo: "", // 目标人id
      },
      userNo: "",
      showIndex: -1,
      huifuName: "",
      more: false,
    };
  },
  onLoad() {
    this.userNo = uni.getStorageSync("userno");
  },
  onShow() {
    this.resetData();
    if (this.optName === "left") {
      this.getCirleLeftList();
    } else {
      this.getCirleRightList();
    }
  },
  // 上拉刷新
  async onPullDownRefresh() {
    await this.resetData();
    if (this.optName === "left") {
      this.getCirleLeftList();
    } else {
      this.getCirleRightList();
    }
    uni.stopPullDownRefresh();
  },
  async onReachBottom() {
    if (!this.more) return;
    this.pageNo++;
    if (this.optName === "left") {
      this.getCirleLeftList2();
    } else {
      this.getCirleRightList2();
    }
  },
  computed: {
    navHeight() {
      return getApp().globalData.navHeight;
    },
  },
  methods: {
    resetData() {
      this.circleList = [];
      this.more = true;
      this.pageNo = 1;
      this.pageSize = 10;
    },
    // 获取印圈列表
    async getCirleLeftList() {
      toast.showLoading("加载中");
      const { data } = await this.$api.getCirleNoteData({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        label: this.labelName,
      });
      this.circleList = data.list;
      if (this.pageNo * this.pageSize >= data.total) this.more = false;
      this.total = data.total;
      uni.hideLoading();
    },
    async getCirleLeftList2() {
      toast.showLoading("加载中");
      const { data } = await this.$api.getCirleNoteData({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        label: this.labelName,
      });
      this.circleList = this.circleList.concat(data.list);
      if (this.pageNo * this.pageSize >= data.total) this.more = false;
      this.total = data.total;
      uni.hideLoading();
    },
    // 查询初映象笔记列表
    async getCirleRightList() {
      toast.showLoading("加载中");
      const { data } = await this.$api.getCirleNoteList({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
      });
      if (this.pageNo * this.pageSize >= data.total) this.more = false;
      this.circleList = data.list;
      this.total = data.total;
      uni.hideLoading();
    },
    async getCirleRightList2() {
      toast.showLoading("加载中");
      const { data } = await this.$api.getCirleNoteList({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
      });
      this.circleList = this.circleList.concat(data.list);
      if (this.pageNo * this.pageSize >= data.total) this.more = false;
      this.total = data.total;
      uni.hideLoading();
    },
    // 寫評論
    writeFunc() {
      if (this.optName === "left") {
        uni.navigateTo({
          url: `/subPackages/circle/writeDetal?label=${this.labelName}`,
        });
      } else {
        uni.navigateTo({
          url: "/subPackages/me/publishAtc",
        });
      }
    },
    getComHeight(i) {
      if (this.circleList[i].moreType) {
        this.commentType = true;
      } else {
        this.commentType = false;
      }
      this.circleList[i].moreType = !this.circleList[i].moreType;
    },
    getHeigth(val) {
      this.commentHeight = val.detail.height;
    },
    tabChange(type) {
      if (this.optName === type) return;
      this.optName = type;
      if (this.optName === "left") {
        this.getCirleLeftList();
      } else {
        this.getCirleRightList();
      }
    },
    circleChange(type) {
      if (this.labelName === type) return;
      this.labelName = type;
      this.getCirleLeftList();
    },
    resetMoreType() {
      this.showIndex = -1;
    },
    moreChange(item, i) {
      if (this.showIndex === i) {
        this.showIndex = -1;
      } else {
        this.showIndex = i;
      }
      this.userCommentForm.noteId = item.id;
      this.userCommentForm.commentType = 0;
      this.userCommentForm.fromNo = this.userNo;
      this.userCommentForm.toNo = item.createNo;
    },
    inputBlurChange() {
      this.commentType = false;
      this.huifuName = "";
      this.sumitForm();
    },
    // 发布评论
    async sumitForm() {
      await this.$api.noteCommentSend(this.userCommentForm);
      if (this.userCommentForm.content === "") return;
      this.getCirleLeftList();
      this.showIndex = -1;
      this.userCommentForm = {
        noteId: "", // 印圈Id
        commentType: "", // 1回复 0评论
        content: "", // 内容
        fromNo: "", // 评论人id
        toNo: "", // 目标人id
      };
      this.huifuName = "";
    },
    // 回复用户
    commentUser(row) {
      if (row.fromNo === this.userNo) return;
      this.huifuName = "回复 " + row.fromUserNickName;
      this.userCommentForm.noteId = row.noteId;
      this.userCommentForm.commentType = 1;
      this.userCommentForm.fromNo = this.userNo;
      this.userCommentForm.toNo = row.toNo;
      this.commentType = true;
    },
    commentUser2(row) {
      if (row.toNo === this.userNo) return;
      this.huifuName = "回复 " + row.toUserNickName;
      this.userCommentForm.noteId = row.noteId;
      this.userCommentForm.commentType = 1;
      this.userCommentForm.fromNo = this.userNo;
      this.userCommentForm.toNo = row.toNo;
      this.commentType = true;
    },
    // 点赞
    async circleFabulousHandle(row, i) {
      await this.$api.circleFabulous({
        circleNoteId: row.id,
        likeNo: this.userNo,
      });
      this.showIndex = -1;
      this.getCirleLeftList();
    },
  },
};
</script>
<style scoped>
#circle-box-container {
  padding-bottom: 20rpx;
  background-color: #f8f8f8;
}
.circle-top-content {
  position: relative;
  width: 100%;
}
.circle-top-back {
  width: 100%;
  height: 100%;
}
.circle-top-center {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.circle-top-title {
  width: 482rpx;
  height: 130rpx;
  border: 1rpx solid #ffffff;
}
.yuandian {
  margin: 0 26rpx;
  width: 8rpx;
  height: 8rpx;
  border-radius: 50%;
  background-color: #ffffff;
}
.circle-change-label {
  width: 206rpx;
  height: 60rpx;
}
.circle-change-boder {
  border: 1px solid #7dca91;
}
.circle-change-boder2 {
  border: 1px solid #ffffff;
}
.circle-opt-content {
  margin: 0 auto 20rpx;
  width: 710rpx;
  height: 152rpx;
  background-color: #ffffff;
  border-radius: 20rpx;
}
.circle-opt-icon {
  width: 64rpx;
  height: 64rpx;
}
.circle-left-content {
  position: relative;
  top: -38rpx;
}
.circle-icon-left {
  margin-left: 86rpx;
}
.circle-icon-right {
  margin-right: 86rpx;
}
.choose-icon {
  margin-top: 4rpx;
  width: 46rpx;
  height: 3rpx;
  border-radius: 1.5rpx 1.5rpx;
}
.choose-icon-color {
  background-color: #ffffff;
}
.choose-icon-color2 {
  background-color: #7dca91;
}
.comment-content {
  padding: 20rpx 0 30rpx 0;
  background-color: #ffffff;
}
.header-img {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
}
.comment-item-box {
  padding-bottom: 20rpx;
  display: flex;
  justify-content: space-between;
  border-bottom: 1rpx solid #f8f8f8;
}
.item-right-coentent {
  display: flex;
  flex-direction: column;
  margin-top: 18rpx;
  width: 610rpx;
}
.comment-img-item {
  margin-bottom: 6rpx;
  width: 200rpx;
  height: 200rpx;
  border-radius: 10rpx;
}
.more-btn-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 74rpx;
}
.more-menu-content {
  position: relative;
  overflow: hidden;
  width: 358rpx;
  height: 70rpx;
  border-radius: 10rpx;
  z-index: 99999999;
}
.more-btn-menu {
  transition: all 0.1s;
  position: absolute;
  top: 0;
  right: -358rpx;
  width: 358rpx;
  right: 70rpx;
  height: 74rpx;
  border-radius: 10rpx;
  background-color: #666666;
}
.more-img {
  z-index: 999;
  width: 60rpx;
  height: 36rpx;
}
.more-btn-img {
  width: 100%;
  height: 100%;
}
.menu-icon-left {
  margin-left: 94rpx;
}
.menu-icon {
  width: 32rpx;
  height: 30rpx;
}
.menu-icon2 {
  width: 31rpx;
  height: 30rpx;
}
.communication-content {
  padding: 10rpx;
  background-color: #f8f8f8;
}
.communication-item {
  line-height: 1.2;
}
.note-content {
  padding: 0 20rpx;
}
.note-title-content {
  height: 80rpx;
}
/* 瀑布流布局 */
.note-center-box {
  column-count: 2;
  column-gap: 1;
}
.comment-content-input {
  font-size: 28rpx;
  padding: 10rpx;
  border-radius: 10rpx;
  width: 690rpx;
  height: 70rpx;
  background-color: #ffffff;
}
.comment-box {
  padding: 20rpx;
  width: 100%;
  /* height: 90rpx; */
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  background-color: #eeeeee;
  z-index: 999999999;
}
.write-img {
  position: fixed;
  right: 20rpx;
  bottom: 20rpx;
  width: 80rpx;
  height: 80rpx;
  z-index: 99999999;
}
.has-zan-list {
  width: 500rpx;
}
.right-position {
  right: 0;
}
.right-position2 {
  right: -358rpx;
}
</style>