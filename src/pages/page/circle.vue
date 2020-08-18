<template>
  <div id="circle-box-container" @tap="touchstartHandle">
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
        :show-confirm-bar="false"
        :cursor-spacing="commentHeight+20"
        @keyboardheightchange="getHeigth"
        maxlength="300"
        @blur="inputBlurChange"
        :auto-height="true"
        class="comment-content-input"
        :focus="commentType"
        v-model="commentValue"
      />
    </div>
    <!-- 评论 -->
    <div class="circle-left-content" v-if="optName==='left'">
      <div class="circle-opt-content fl-bt">
        <div class="circle-opt-item fl-co circle-icon-left" @tap="circleChange('riji')">
          <image class="circle-opt-icon" src="../../static/circle/riji.png" />
          <text class="fz-10 mr-t-10 fc-000">护肤日记</text>
          <div
            class="choose-icon"
            :class="[labelName==='riji'?'choose-icon-color2':'choose-icon-color']"
          ></div>
        </div>
        <div class="circle-opt-item fl-co" @tap="circleChange('ceshi')">
          <image class="circle-opt-icon" src="../../static/circle/xinpin.png" />
          <text class="fz-10 mr-t-10 fc-000">新品测试</text>
          <div
            class="choose-icon"
            :class="[labelName==='ceshi'?'choose-icon-color2':'choose-icon-color']"
          ></div>
        </div>
        <div class="circle-opt-item fl-co" @tap="circleChange('jilu')">
          <image class="circle-opt-icon" src="../../static/circle/jilu.png" />
          <text class="fz-10 mr-t-10 fc-000">回访记录</text>
          <div
            class="choose-icon"
            :class="[labelName==='jilu'?'choose-icon-color2':'choose-icon-color']"
          ></div>
        </div>
        <div class="circle-opt-item fl-co circle-icon-right" @tap="circleChange('huodong')">
          <image class="circle-opt-icon" src="../../static/circle/xianshi.png" />
          <text class="fz-10 mr-t-10 fc-000">限时活动</text>
          <div
            class="choose-icon"
            :class="[labelName==='huodong'?'choose-icon-color2':'choose-icon-color']"
          ></div>
        </div>
      </div>
      <div class="comment-content" v-for="item in 4" :key="item">
        <div class="comment-item-box">
          <image class="header-img mr-l-20" src="../../static/circle/back-img.png" />
          <div class="item-right-coentent mr-r-20">
            <text class="fc-5d fz-15">评论</text>
            <text class="fz-14 mr-t-10">自从用了初印象之后，其他的护肤品可基本上都是摆设了，庆幸自己遇到这么好的产品！</text>
            <div class="fl-btw mr-t-20">
              <image class="comment-img-item" src="../../static/circle/back-img.png" />
              <image class="comment-img-item" src="../../static/circle/back-img.png" />
              <image class="comment-img-item" src="../../static/circle/back-img.png" />
              <image class="comment-img-item" src="../../static/circle/back-img.png" />
            </div>
            <div class="more-btn-box">
              <div class="more-menu-content">
                <div class="more-btn-menu fl-cen" :style="[moreType?{right:'0'}:{right:'-358rpx'}]">
                  <div class="more-menu-item fl-al">
                    <image class="menu-icon" src="../../static/circle/zan.png" />
                    <text class="fz-14 fc-fff mr-l-8">赞</text>
                  </div>
                  <div class="more-menu-item fl-al menu-icon-left" @tap.native.stop="getComHeight">
                    <image class="menu-icon2" src="../../static/circle/pinlun.png" />
                    <text v-if="moreType" class="fz-14 fc-fff mr-l-8">评论</text>
                  </div>
                </div>                
              </div>

              <div class="more-img" @tap.native.stop="moreChange">
                <image class="more-btn-img" src="../../static/circle/more.png" />
              </div>
            </div>
            <div class="communication-content">
              <div class="communication-item">
                <text class="fz-13 fc-5d">初印象的小助理：</text>
                <text class="fz-13">恭喜宝贝，获得笔者权限啦，快来参加活动吧！超多好礼等你来拿哦！</text>
              </div>
              <div class="communication-item mr-t-10">
                <text class="fz-13 fc-5d">包饺子铺</text>
                <text class="fz-13 fc-5d mr-l-10 mr-r-10">回复</text>
                <text class="fz-13 fc-5d">初印象的小助理：</text>
                <text class="fz-13">恭喜宝贝，获得笔者权限啦，快来参加活动吧！超多好礼等你来拿哦！</text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 笔记 -->
    <div class="note-content" v-if="optName==='right'">
      <div class="note-title-content fl-al">
        <text class="fz-15 fw-bold">初印象笔记</text>
      </div>
      <div class="note-center-box">
        <NoteItem v-for="item in 8" :key="item" :numIndex="item" />
      </div>
    </div>
  </div>
</template>
<script>
import NoteItem from "../../components/noteItem/note";
export default {
  data() {
    return {
      optName: "left",
      labelName: "riji",
      moreType: false,
      commentValue: "",
      commentType: false,
      commentHeight: 0,
    };
  },
  components: {
    NoteItem,
  },
  onLoad() {},
  computed: {
    navHeight() {
      return getApp().globalData.navHeight;
    },
  },
  methods: {
    getComHeight() {
      if (this.moreType) {
        this.commentType = true;
      } else {
        this.commentType = false;
      }
      this.moreType = !this.moreType;
    },
    getHeigth(val) {
      this.commentHeight = val.detail.height;
    },
    tabChange(type) {
      this.optName = type;
    },
    circleChange(type) {
      this.labelName = type;
    },
    moreChange() {
      this.moreType = !this.moreType;
    },
    touchstartHandle() {
      this.moreType = false;
    },
    inputBlurChange() {
      this.commentType = false;
    },
  },
};
</script>
<style scoped>
#circle-box-container {
  height: 100%;
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
  margin:0 auto 20rpx;
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
  padding: 20rpx 0 0 0;
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
</style>