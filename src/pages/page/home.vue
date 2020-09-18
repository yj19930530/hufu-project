<template>
  <!--pages/range/range.wxml-->
  <view :style="[{marginTop:navHeight+'px'}]">
    <!-- 头部导航 -->
    <Nav class="nav-position" />
    <!-- 搜索 -->
    <view class="top-search-opt">
      <view class="fl-bt">
        <image @tap="openWecat" class="left-img-btn mr-l-20" src="../../static/home/liwu.png" />
        <view class="fl-al search-content" @tap="optNavigatorPath('ss')">
          <image class="search-style mr-l-30" src="../../static/home/ss.png" />
          <text class="fz-12 fc-89 mr-l-10">请输入文章名称</text>
        </view>
        <div class="message-content fl-al" @tap="optNavigatorPath('msg')">
          <view class="message-number fl-cen fz-10" v-if="msgNumber>0">{{msgNumber}}</view>
          <image class="right-message-btn mr-r-20" src="../../static/home/xinxi.png" />
        </div>
      </view>
    </view>
    <!-- icon 功能 -->
    <view class="option-content">
      <view class="fl-co" @tap="optNavigatorPath('test')">
        <image class="opt-item" src="../../static/home/icon2.png" />
        <text class="mr-t-10 fz-11">魔镜测试</text>
      </view>
      <view class="fl-co" v-for="item in iconList" :key="item.id" @tap="optNavigatorPath('water',item.id)">
        <image class="opt-item" :src="uploadImgUrl+item.icoPath" />
        <text class="mr-t-10 fz-11">{{item.infoName}}</text>
      </view>
    </view>
    <!-- banner -->
    <view class="zixun-content mr-t-30">
      <image class="zixun-banner" src="../../static/home/9.png" />
      <view class="zixun-content-center">
        <view class="zixun-banner-content fl-fc">
          <view class="kuang-content">
            <view class="kuang-content-text fl-fc">
              <text class="fz-15 fc-666">初印象私人定制</text>
              <text class="fz-15 fw-400 fc-333 mr-t-4">一对一精细化护肤咨询</text>
              <text class="fz-15 fc-666 mr-t-4">解决各种肌肤问题</text>
            </view>
          </view>
          <span class="fc-666 fz-12 mr-l-10 mr-t-10">?不了解自己肌肤状态</span>
          <span class="fc-666 fz-12 mr-l-10">?盲目选择肌肤产品</span>
          <span class="fc-666 fz-12 mr-l-10">?肌肤问题顽固难解决</span>
          <image class="more-style" src="../../static/home/more.png" />
        </view>
      </view>
    </view>
    <!-- 咨询流程 -->
    <view class="process-content">
      <view class="process-title fl-co">
        <text class="fc-666 fz-14 mr-t-30">初印象护肤</text>
        <text class="fc-333 fw-400 fz-18 mr-t-4">一对一护肤指导流程</text>
        <text class="fc-666 fz-6 mr-t-4">ONE TO ONE SKIN CARE GUIDANCE PROCESS</text>
        <view class="fl-cen liji-zx mr-t-10">
          <image class="doc-img" src="../../static/home/dctor.png" />
          <text class="fz-15 fc-fff">立即咨询</text>
          <button type="primary" class="concat-visibiliti-btn" open-type="contact"></button>
        </view>
      </view>
      <view class="mr-t-30">
        <view class="fl-bt">
          <view class="process-item mr-l-20">
            <view class="process-number fz-10 fc-fff mr-t-10 fl-cen">01</view>
            <view class="fz-11 fc-666 rigth-pro-text mr-t-10">专业的护肤咨询 团队，独特的一 对一顾问式服务</view>
          </view>
          <image class="left-jiantou" src="../../static/home/left.png" />
          <view class="process-item">
            <view class="process-number fz-10 fc-fff mr-t-10 fl-cen">02</view>
            <view class="fz-11 fc-666 rigth-pro-text mr-t-10">根据不同得肌肤 状态与问题，进 行精准皮肤判断</view>
          </view>
          <image class="left-jiantou" src="../../static/home/left.png" />
          <view class="process-item mr-r-20">
            <view class="process-number fz-10 fc-fff mr-t-10 fl-cen">03</view>
            <view class="fz-11 fc-666 rigth-pro-text mr-t-10">综合用户肤质、年龄并结合护肤习惯等进行数据分析</view>
          </view>
        </view>
        <view class="fl-bt mr-t-16">
          <view class="process-item2 mr-l-20 visi-none"></view>
          <image class="left-jiantou visi-none" src="../../static/home/left.png" />
          <view class="process-item2 visi-none"></view>
          <image class="left-jiantou visi-none" src="../../static/home/left.png" />
          <view class="process-item2 mr-r-20">
            <image class="left-jiantou xuanzhuan" src="../../static/home/left.png" />
          </view>
        </view>
        <view class="fl-bt">
          <view class="process-item mr-l-20">
            <view class="process-number fz-10 fc-fff mr-t-10 fl-cen">06</view>
            <view class="fz-11 fc-666 rigth-pro-text mr-t-10">根据回访反馈 及时调整方案，达 到效果最优化</view>
          </view>
          <image class="left-jiantou xuanzhuan2" src="../../static/home/left.png" />
          <view class="process-item">
            <view class="process-number fz-10 fc-fff mr-t-10 fl-cen">05</view>
            <view class="fz-11 fc-666 rigth-pro-text mr-t-10">甄选天然的护肤 原料，一种肌肤问 题一个解决方案</view>
          </view>
          <image class="left-jiantou xuanzhuan2" src="../../static/home/left.png" />
          <view class="process-item mr-r-20">
            <view class="process-number fz-10 fc-fff mr-t-10 fl-cen">04</view>
            <view class="fz-11 fc-666 rigth-pro-text mr-t-10">为每一位女性量 肤定制，提供个性化 护肤管理方案</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 品牌介绍 -->
    <view class="brand-content">
      <view class="aks-title-box fl-al">
        <text class="fc-333 fz-15 fw-bold mr-l-20">品牌介绍</text>
      </view>
      <view class="fl-bt mr-t-20">
        <view class="brand-item-content">
          <button type="primary" class="concat-visibiliti-btn" open-type="contact"></button>
          <image class="brand-item-img" src="../../static/home/pinpai1.png" />
          <view class="fl-co">
            <text class="fz-14 mr-t-6">一对一服务>></text>
            <text class="fz-10 mr-t-4">ONE-TO-ONE SERVICE</text>
          </view>
        </view>
        <view class="brand-item-content">
          <image class="brand-item-img" src="../../static/home/pinpai2.png" />
          <view class="fl-co">
            <text class="fz-14">定制解决方案>></text>
            <text class="fz-10">CUSTOM SOLUTIONS</text>
          </view>
        </view>
        <view class="brand-item-content" @tap="openWecat">
          <image class="brand-item-img" src="../../static/home/pinpai3.png" />
          <view class="fl-co">
            <text class="fz-14">初印象商城>></text>
            <text class="fz-10">FIRSTYINAS MALL</text>
          </view>
        </view>
      </view>
    </view>
    <!-- 印象圈 -->
    <view class="circle-content" v-if="bannerList.length">
      <view class="aks-title-box fl-bt">
        <view>
          <text class="fc-333 fz-15 fw-bold mr-l-20">印象圈</text>
          <text class="fz-12 mr-l-10">护肤心得分享，赢福利</text>
        </view>
        <text class="fz-12 fc-999 mr-r-10" @tap="getMoreNote">查看更多></text>
      </view>
      <view class="swiper-content mr-t-10">
        <swiper
          style="height:100%;"
          class="swiper"
          :indicator-dots="indicatorDots"
          :autoplay="autoplay"
          :interval="interval"
          :duration="duration"
          indicator-active-color="#626262"
        >
          <swiper-item>
            <image class="circle-show-img" src="../../static/home/9.png" />
          </swiper-item>
          <swiper-item>
            <image class="circle-show-img" src="../../static/home/9.png" />
          </swiper-item>
          <swiper-item>
            <image class="circle-show-img" src="../../static/home/9.png" />
          </swiper-item>
        </swiper>
      </view>
    </view>
    <!-- 问诊专区 -->
    <view class="special-content">
      <view class="aks-title-box fl-al">
        <text class="fc-333 fz-15 fw-bold mr-l-20">肌肤问诊专区</text>
      </view>
      <view
        class="special-item-box mr-t-20"
        @tap="optNavigatorPath('ask','祛痘咨询专区')"
      >
        <view class="fl-bt">
          <view class="fl-fc mr-l-30">
            <text class="fz-18 fc-333 fw-bold">祛痘咨询专区</text>
            <text class="fz-10 fc-333 mr-t-4">REMOVE ACNE</text>
            <text class="fz-14 fc-333 mr-t-20">量肤修护 袪痘抗痘</text>
          </view>
          <view class="fl-al mr-r-20">
            <image class="yisheng-img mr-l-50" src="../../static/home/yisheng.png" />
            <view class="next-page fl-cen">
              <text class="fz-12 fc-fff">立即前往></text>
            </view>
          </view>
        </view>
        <view class="special-item-bottom fl-co">
          <view class="fz-14 fc-333 bottom-spe-style">·你的下巴为何反复长痘？</view>
          <view class="fz-14 fc-333 bottom-spe-style">·脸部不同部位长痘是怎么回事？</view>
        </view>
      </view>
      <view
        class="special-item-box mr-t-20"
        @tap="optNavigatorPath('ask','淡斑咨询专区')"
      >
        <view class="fl-bt">
          <view class="fl-fc mr-l-30">
            <text class="fz-18 fc-333 fw-bold">淡斑咨询专区</text>
            <text class="fz-10 fc-333 mr-t-4">PALE ACNE</text>
            <text class="fz-14 fc-333 mr-t-20">淡化现有斑 预防未来斑</text>
          </view>
          <view class="fl-al mr-r-20">
            <image class="yisheng-img mr-l-50" src="../../static/home/yisheng.png" />
            <view class="next-page fl-cen">
              <text class="fz-12 fc-fff">立即前往></text>
            </view>
          </view>
        </view>
        <view class="special-item-bottom fl-co">
          <view class="fz-14 fc-333 bottom-spe-style">·长斑是什么原因引起的？</view>
          <view class="fz-14 fc-333 bottom-spe-style">·色斑雀斑等斑点应该怎么淡化去除？</view>
        </view>
      </view>
      <view
        class="special-item-box mr-t-20"
        @tap="optNavigatorPath('ask','美白咨询专区')"
      >
        <view class="fl-bt">
          <view class="fl-fc mr-l-30">
            <text class="fz-18 fc-333 fw-bold">美白咨询专区</text>
            <text class="fz-10 fc-333 mr-t-4">WHITENING</text>
            <text class="fz-14 fc-333 mr-t-20">精准定位 创新美白概念</text>
          </view>
          <view class="fl-al mr-r-20">
            <image class="yisheng-img mr-l-50" src="../../static/home/yisheng.png" />
            <view class="next-page fl-cen">
              <text class="fz-12 fc-fff">立即前往></text>
            </view>
          </view>
        </view>
        <view class="special-item-bottom fl-co">
          <view class="fz-14 fc-333 bottom-spe-style">·夏天晒黑？教你一招美白肌肤。</view>
          <view class="fz-14 fc-333 bottom-spe-style">·肌肤暗黄？教你告别“小黄人”。</view>
        </view>
      </view>
      <view
        class="special-item-box mr-t-20"
        @tap="optNavigatorPath('ask','抗皱咨询专区')"
      >
        <view class="fl-bt">
          <view class="fl-fc mr-l-30">
            <text class="fz-18 fc-333 fw-bold">抗皱咨询专区</text>
            <text class="fz-10 fc-333 mr-t-4">ANTI WRINKLE</text>
            <text class="fz-14 fc-333 mr-t-20">轻松护理肌肤 扫除岁月痕迹</text>
          </view>
          <view class="fl-al mr-r-20">
            <image class="yisheng-img mr-l-50" src="../../static/home/yisheng.png" />
            <view class="next-page fl-cen">
              <text class="fz-12 fc-fff">立即前往></text>
            </view>
          </view>
        </view>
        <view class="special-item-bottom fl-co">
          <view class="fz-14 fc-333 bottom-spe-style">·皱纹是如何生长的？</view>
          <view class="fz-14 fc-333 bottom-spe-style">·皱纹越来越多，你怕了吗？</view>
        </view>
      </view>
      <view
        class="special-item-box mr-t-20"
        @tap="optNavigatorPath('ask','修敏咨询专区')"
      >
        <view class="fl-bt">
          <view class="fl-fc mr-l-30">
            <text class="fz-18 fc-333 fw-bold">修敏咨询专区</text>
            <text class="fz-10 fc-333 mr-t-4">REPAIR SENTITIVE</text>
            <text class="fz-14 fc-333 mr-t-20">修复新定义 拒绝敏感肌</text>
          </view>
          <view class="fl-al mr-r-20">
            <image class="yisheng-img mr-l-50" src="../../static/home/yisheng.png" />
            <view class="next-page fl-cen">
              <text class="fz-12 fc-fff">立即前往></text>
            </view>
          </view>
        </view>
        <view class="special-item-bottom fl-co">
          <view class="fz-14 fc-333 bottom-spe-style">·皮肤经常红痒干痛怎么办？</view>
          <view class="fz-14 fc-333 bottom-spe-style">·如何觉醒肌肤原力，无惧敏感肌？</view>
        </view>
      </view>
    </view>
    <!-- 用户展览 -->
    <view class="user-case" v-for="(item,index) in ganVideo" :key="index" @tap="lookDetail(item)">
      <view class="fl-bt" style="height:104rpx;padding:0 20rpx">
        <view class="fl-al" @tap.native.stop="userDetailNext(item)">
          <image class="img-header" :src="userImgUrl+item.sui.avatarUrl" />
          <text class="fz-15 mr-l-20 fc-000">{{item.sui.nickName}}</text>
        </view>
        <view class="follow-btn fl-cen" v-if="!item.isGz" @tap.native.stop="gzUserHandle(item)">
          <text class="fz-12 fc-fff">关注</text>
        </view>
        <view class="follow-btn fl-cen" v-else @tap.native.stop="closeGzHandle(item)">
          <text class="fz-12 fc-fff">已关注</text>
        </view>
      </view>
      <div style="height:20rpx;background-color: #ffffff;"></div>
      <view class="video-style-box" v-if="!playerType" @tap.native.stop="playerVideo">
        <image class="video-style-img" :src="atcImgUrl+item.imgShow" />
        <image class="video-player-btn" src="../../static/home/player.png" />
      </view>
      <video
        v-else
        id="myVideo"
        class="video-style"
        controls
        :src="atcImgUrl+item.video"
        @fullscreenchange="videoChange"
      ></video>
      <view class="describe-text fl-al">
        <text
          class="fz-15 fw-bold fc-000"
        >{{item.title}}</text>
      </view>
    </view>
  </view>
</template>
<script>
const { toast } = require("../../utils/index");
const {atcImgUrl,uploadImgUrl,userImgUrl} = require('../../config/develop')
import Nav from "../../components/navbar/nav";
export default {
  data() {
    return {
      playerType: false,
      videoContext: null,
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500,
      msgNumber: 0, // 消息数量
      iconList: [], // icon list
      bannerList:[],
      ganVideo:[],
      atcImgUrl:atcImgUrl,
      uploadImgUrl:uploadImgUrl,
      userImgUrl:userImgUrl,
      userNo:'',
    };
  },
  components: {
    Nav,
  },
  computed: {
    navHeight() {
      return getApp().globalData.navHeight;
    },
  },
  onShow() {
    this.getMsgNumber();
    this.getVideo();
  },
  onLoad() {
    this.userNo = uni.getStorageSync("userno");
    this.getIconData();
    this.getBannerData();
  },
  methods: {
    userDetailNext(row) {
      if (!this.userNo) {
        uni.reLaunch({
          url: "/pages/page/login",
        });
        return;
      }
      uni.navigateTo({
        url: `/subPackages/me/personDetails?userno=${row.userno}`,
      });
    },
    lookDetail(row) {
      uni.navigateTo({
        url: `/subPackages/college/atcDetail?id=${row.id}`,
      });
    },
    async getVideo(){
      const { data } = await this.$api.getAboutAtc({
        pageNo: 1,
        pageSize: 1,
        // index: 2,
        label: "首页单条文章",
        currentUserNo: this.userNo
        // currentNo: this.userNo
      });
      this.ganVideo = data.list;
      if(this.ganVideo.displayimg){
        let arr = this.ganVideo[0].displayimg.split(',')
        this.ganVideo[0].imgShow = arr[0]
      }{
        let arr = this.ganVideo[0].preview.split(',')
        this.ganVideo[0].imgShow = arr[0]
      }
    },
    // 跳转商城
    openWecat(){
       uni.navigateToMiniProgram({
        appId: "wxc55777954099b5a6",
        extraData:{
          userno:this.userNo,
          usernoType:true
        },
      });
    },
    getMoreNote(){
      uni.switchTab({
        url: '/pages/page/circle'
      });
    },
    async gzUserHandle(row){
      if (!this.userNo) {
        uni.reLaunch({
          url: "/pages/page/login",
        });
        return;
      }
      if (row.userno === this.userNo) return;
      await this.$api.articleGz({
        idol: row.userno,
        fans: this.userNo,
      });
      this.getVideo();
    },
    async closeGzHandle(row){
      if (!this.userNo) {
        uni.reLaunch({
          url: "/pages/page/login",
        });
        return;
      }
      await this.$api.articleCloseGz({
        currentUserNo: this.userNo,
        targetNo: row.userno,
      });
      this.getVideo();
    },
    async getBannerData(){
      const {data} = await this.$api.pullBannerAd();
      this.bannerList = data
    },
    async getIconData() {
      toast.showLoading("加载中");
      const { data } = await this.$api.getIconList();
      this.iconList = data;
      uni.hideLoading();
    },
    // 获取消息数量
    async getMsgNumber() {
      const { data } = await this.$api.getMessageCount();
      this.msgNumber = data;
    },
    playerVideo() {
      this.playerType = true;
      const timer = setTimeout(()=>{
        this.videoContext = uni.createVideoContext("myVideo");
        this.videoContext.requestFullScreen();
        this.videoContext.play();
        clearTimeout(timer)
      },500)
    },
    videoChange(e) {
      if (!e.detail.fullScreen) {
        this.playerType = false;
        this.videoContext.stop();
      }
    },
    optNavigatorPath(path,text) {
      switch (path) {
        case "water": {
          uni.navigateTo({
            url: `/subPackages/home/water?id=${text}`,
          });
          break;
        }
        case "msg": {
          this.$api.readAll({
            currentUserNo:this.userNo
          })
          uni.navigateTo({
            url: "/subPackages/me/message",
          });
          break;
        }
        case "test": {
          if (!this.userNo) {
            uni.reLaunch({
              url: "/pages/page/login",
            });
            return;
          }          
          uni.navigateTo({
            url: "/subPackages/Interrogation/test",
          });
          break;
        }
        case "ask": {
          uni.navigateTo({
            url: `/subPackages/home/Interrogation?text=${text}`,
          });
          break;
        }
        case "ss": {
          uni.navigateTo({
            url: "/subPackages/home/search",
          });
          break;
        }
        default: {
          break;
        }
      }
    },
  },
};
</script>
<style scoped>
/* pages/range/range.wxss */
page {
  background-color: #ebedec;
}
.top-search-opt {
  padding-top: 50rpx;
  width: 100%;
  height: 220rpx;
  /* background: linear-gradient(to right, #333333, #444444); */
  border-radius: 0 0 50rpx 50rpx;
}
.left-img-btn {
  width: 66rpx;
  height: 66rpx;
}
.right-message-btn {
  width: 56rpx;
  height: 56rpx;
}
.search-content {
  width: 530rpx;
  height: 60rpx;
  background-color: #eeeeee;
  border-radius: 20rpx;
}
.search-style {
  width: 26rpx;
  height: 26rpx;
}
.message-content {
  position: relative;
}
.message-number {
  position: absolute;
  right: 20rpx;
  top: 0;
  width: 22rpx;
  height: 22rpx;
  background-color: #ffffff;
  border-radius: 50%;
}
.option-content {
  position: relative;
  top: -122rpx;
  margin: auto;
  width: 710rpx;
  /* height: 192rpx; */
  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #ffffff;
  border-radius: 20px;
}
.opt-item {
  margin-top: 20rpx;
  width: 94rpx;
  height: 94rpx;
}
.zixun-content {
  position: relative;
  width: 100%;
  height: 480rpx;
  top: -112rpx;
}
.zixun-content-center {
  position: absolute;
  left: 20rpx;
  top: 64rpx;
}
.zixun-banner {
  width: 100%;   
  height: 100%;
}
.kuang-content {
  position: relative;
  width: 566rpx;
  height: 266rpx;
}
.zixun-banner-kuang {
  width: 100%;
  height: 100%;
}
.heng-style {
  margin-top: 28rpx;
  width: 26rpx;
  height: 7rpx;
  background-color: #aaaaaa;
}
.yuan-style {
  width: 15rpx;
  height: 15rpx;
  background-color: #aaaaaa;
  border-radius: 50%;
}
.mr-t-4 {
  margin-top: 4rpx;
}
.circle-content {
  position: relative;
  top: -60rpx;
  margin: auto;
  width: 710rpx;
}
.kuang-content-text {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding-left: 12rpx;
  padding-top: 50rpx;
}
.zixun-banner-content {
  position: relative;
}
.more-style {
  margin-top: 14rpx;
  width: 23rpx;
  height: 15rpx;
}
.process-content {
  position: relative;
  top: -112rpx;
}
.process-item {
  display: flex;
  justify-content: center;
  width: 204rpx;
  height: 108rpx;
  border-radius: 8rpx;
  border: 1px solid #aaaaaa;
}
.process-item2 {
  display: flex;
  justify-content: center;
  width: 204rpx;
  height: 36rpx;
}
.visi-none {
  visibility: hidden;
}
.xuanzhuan {
  transform: rotate(90deg);
}
.mr-t-16 {
  margin-top: 16rpx;
}
.xuanzhuan2 {
  transform: rotate(180deg);
}
.process-number {
  width: 28rpx;
  height: 26rpx;
  /* background-color: #7e6b5a; */
  background: linear-gradient(top, #666666, #333333);
  border-radius: 50%;
}
.rigth-pro-text {
  width: 176rpx;
  height: 88rpx;
}
.left-jiantou {
  width: 35rpx;
  height: 25rpx;
}
.special-content {
  position: relative;
  top: -20rpx;
  margin: auto;
  width: 710rpx;
}
.aks-title-box {
  width: 100%;
  height: 62rpx;
  border-radius: 10px;
  background-color: #eeeeee;
}
.yisheng-img {
  width: 282rpx;
  height: 300rpx;
}
.special-item-box {
  background-color: #f6f6f6;
  border-radius: 20rpx;
}
.next-page {
  margin-top: -50rpx;
  margin-left: -62rpx;
  width: 136rpx;
  height: 36rpx;
  /* background-color: #7e6b5a; */
  background: linear-gradient(to right, #333333, #666666);
  border-radius: 9rpx;
}
.special-item-bottom {
  width: 100%;
  height: 126rpx;
  background-color: #ffffff;
  border-radius: 20rpx;
}
.bottom-spe-style {
  padding-left: 10rpx;
  width: 682rpx;
  border-bottom: 1px solid #aaaaaa;
}
.img-header {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
}
.liji-zx {
  position: relative;
  width: 186rpx;
  height: 42rpx;
  border-radius: 17rpx 17rpx 17rpx 17rpx;
  background: linear-gradient(to right, #666666, #333333);
}
.doc-img {
  width: 30rpx;
  height: 34rpx;
}
.liji-zx text {
  margin-left: 6rpx;
}
.follow-btn {
  width: 128rpx;
  height: 52rpx;
  border-radius: 30rpx 30rpx 30rpx 0;
  background: linear-gradient(to right, #333333, #666666);
}
.user-case {
  position: relative;
  top: 16rpx;
  margin: auto;
  /* padding: 10rpx 20rpx 30rpx 20rpx; */
  width: 710rpx;
  background-color: #ebedec;
}
.video-style {
  width: 710rpx;
  height: 360rpx;
}
.video-style-box {
  position: relative;
  width: 710rpx;
  height: 360rpx;
}
.video-style-img {
  width: 100%;
  height: 100%;
}
.video-player-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -25rpx;
  margin-top: -31rpx;
  width: 50rpx;
  height: 62rpx;
  z-index: 99;
}
.describe-text {
  line-height: 1.5;
  padding: 10rpx 10rpx;
}
.brand-content {
  position: relative;
  top: -72rpx;
  margin: auto;
  width: 710rpx;
}
.brand-item-content {
  position: relative;
  width: 230rpx;
}
.brand-item-img {
  width: 100%;
  height: 290rpx;
}
.swiper-content {
  overflow: hidden;
  width: 100%;
  height: 270rpx;
  border: 1px solid #626262;
  border-radius: 20rpx;
}
.circle-show-img {
  width: 100%;
  height: 100%;
  border-radius: 20rpx;
}
.concat-visibiliti-btn {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
}
</style>