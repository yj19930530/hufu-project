<template>
  <div id="atc-detail-container" @tap="touchstartHandle">
    <!-- 头部标题 -->
    <div class="atc-detail-title">
      <text class="fz-17 fw-bold">30种自制面膜，总有一种适合你，献给和敏感油痘肌战斗的筒子们</text>
      <div class="mr-t-30 fl-bt">
        <text class="fz-12 fc-999">浏览 99+</text>
        <text class="fz-12 fc-999">坐着： 某某某</text>
      </div>
    </div>
    <!-- 内容 -->
    <div class="atc-detail-content fl-co">
      <text
        class="fz-15"
      >如果把人比作植物，脸就是植物顶端的嫩叶，如果忘了浇水或者到了秋冬季节，顶部的叶子往往是最先干枯的，因为它离根最远，根茎吸收的水分经过一路的消耗到达顶部已经所剩无几了。 我们平时喝的水经过食管、胃肠、肾脏等通道，不断被吸收和过滤，大部分水分带着身体的废物，通过汗液、尿液、粪便排出体外，留给皮肤的只有一点点了。</text>
    </div>
    <!-- 用户 -->
    <div class="atc-user-content fl-bt">
      <div class="mr-l-30 fl-al">
        <image class="user-left-img" src="../../static/circle/back-img.png" />
        <text class="fz-15 fw-bold">初印象的小助理</text>
      </div>
      <div class="follow-btn mr-r-30 fl-cen">
        <text class="fz-12 fc-fff">关注</text>
      </div>
    </div>
    <!-- 输入框 -->
    <div class="comment-box fl-cen" v-if="commentType">
      <textarea
        :fixed="true"
        :adjust-position="true"
        :show-confirm-bar="true"
        :cursor-spacing="commentHeight+20"
        @keyboardheightchange="getHeigth"
        maxlength="300"
        @blur="inputBlurChange"
        :auto-height="true"
        class="comment-content-input"
        :focus="commentType"
        v-model="commentValue"
        @confirm="getText"
      />
    </div>
    <!-- 精选评论 -->
    <div class="fl-bt comment-title">
      <text class="fz-15 fw-bold">精选评论</text>
      <div class="fl-al" @tap.native.stop="getComHeight">
        <text class="iconfont iconziyuan fz-17 fc-999"></text>
        <text class="fz-14 fc-999 mr-l-10">写评论</text>
      </div>
    </div>
    <div class="comment-content" v-for="item in 4" :key="item">
      <div class="comment-item-box">
        <image class="header-img mr-l-20" src="../../static/circle/back-img.png" />
        <div class="item-right-coentent mr-r-20">
          <text class="fc-333 fz-15">评论</text>
          <text class="fz-14 mr-t-10">自从用了初印象之后，其他的护肤品可基本上都是摆设了，庆幸自己遇到这么好的产品！</text>
          <div class="fl-btw mr-t-20">
            <image class="comment-img-item" src="../../static/circle/back-img.png" />
            <image class="comment-img-item" src="../../static/circle/back-img.png" />
            <image class="comment-img-item" src="../../static/circle/back-img.png" />
            <image class="comment-img-item" src="../../static/circle/back-img.png" />
          </div>
          <div class="communication-content mr-t-20">
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
    <!-- 底部 操作栏 -->
    <div class="arc-bottom-content fl-bt">
      <div class="fl-co left-home-btn mr-l-30">
        <image class="left-home-img" src="../../static/tabar/homeo.png" />
        <text class="fz-12">首页</text>
      </div>
      <div class="fl-cen right-opt-list mr-r-30">
        <div class="fl-al">
          <text class="iconfont iconweibiaoti-- fz-16"></text>
          <text class="fz-12 mr-l-6">6.0k</text>
        </div>
        <div class="fl-al mr-l-8">
          <text class="iconfont iconshoucang fz-16"></text>
          <text class="fz-12 mr-l-6">608.5w</text>
        </div>
        <div class="fl-al mr-l-8">
          <text class="iconfont iconpinglun fz-20"></text>
          <text class="fz-12 mr-l-2">320</text>
        </div>
        <div class="fl-al mr-l-8">
          <text class="iconfont iconfenxiang fz-20"></text>
          <text class="fz-12 mr-l-2">120</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      commentType: false,
      commentValue: "",
      commentHeight: 0,
      moreType: false,
    };
  },
  methods: {
    getHeigth(val) {
      this.commentHeight = val.detail.height;
    },
    inputBlurChange() {
      this.commentType = false;
    },
    getComHeight() {
      this.commentType = true;
    },
    touchstartHandle() {
      this.moreType = false;
    },
    getText(){
        console.log(this.commentValue)
    }
  },
};
</script>
<style scoped>
#atc-detail-container {
  padding-bottom: 150rpx;
}
.atc-detail-title {
  margin: auto;
  padding: 34rpx 0;
  width: 690rpx;
}
.atc-detail-content {
  margin: auto;
  width: 690rpx;
}
.atc-user-content {
  margin-top: 40rpx;
  width: 100%;
  height: 150rpx;
  background-color: #f8f8f8;
}
.follow-btn {
  width: 128rpx;
  height: 52rpx;
  border-radius: 26rpx 26rpx 26rpx 0;
  background-color: #7e6b5a;
}
.user-left-img {
  margin-right: 20rpx;
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
}
.arc-bottom-content {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 140rpx;
  background-color: #f8f8f8;
  z-index: 9999999;
}
.left-home-btn {
  width: 90rpx;
  height: 90rpx;
  border-radius: 10rpx;
  box-shadow: 0 0 2rpx #999999;
  background-color: #ffffff;
}
.right-opt-list {
  width: 490rpx;
  height: 90rpx;
  border-radius: 10rpx;
  box-shadow: 0 0 2rpx #999999;
  background-color: #ffffff;
}
.left-home-img {
  width: 38rpx;
  height: 38rpx;
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
.communication-content {
  padding: 20rpx;
  background-color: #f8f8f8;
}
.communication-item {
  line-height: 1.2;
}
.comment-title {
  margin: 30rpx 0 44rpx 0;
  padding: 0 30rpx;
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