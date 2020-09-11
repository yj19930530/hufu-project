<template>
  <div class="note-item-box" @tap="lookDetail">
    <image
      class="note-item-img"
      :class="[index===0?'note-item-height':'']"
      :src="atcImgUrl+objDetail.displayimg"
    />
    <div class="note-item-bot">
      <div class="fz-12 text-lang-dian2">{{objDetail.title}}</div>
      <div class="fl-bt mr-t-10">
        <div class="fl-ff text-lang-dian">
          <image class="note-item-header" :src="objDetail.sui.avatarUrl" />
          <text class="fz-10 fc-999 mr-l-10">{{objDetail.sui.nickName}}</text>
        </div>
        <div class="fl-al">
          <text class="iconfont iconweibiaoti-- fc-999 fz-14"></text>
          <text class="fz-10 fc-999 mr-l-10">{{objDetail.smallPraisNum}}</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { atcImgUrl } = require("../../config/develop");
export default {
  data() {
    return {
      atcImgUrl: atcImgUrl,
    };
  },
  props: {
    numIndex: {
      type: Number,
      default: 0,
    },
    objData: {
      type: Object,
      default: 0,
    },
  },
  computed: {
    index() {
      return this.numIndex;
    },
    objDetail() {
      return this.objData;
    },
  },
  methods: {
    lookDetail() {
      uni.navigateTo({
        url: `/subPackages/college/atcDetail?id=${this.objDetail.id}`,
      });
    },
  },
};
</script>
<style scoped>
.note-item-box {
  break-inside: avoid;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 20rpx;
  width: 342rpx;
  background-color: #ffffff;
  border-radius: 10rpx;
}
.note-item-height {
  height: 346rpx !important;
}
.note-item-img {
  width: 100%;
  height: 342rpx;
  height: 460rpx;
}
.note-item-bot {
  padding: 10rpx 18rpx 20rpx 18rpx;
}
.note-item-header {
  width: 36rpx;
  height: 36rpx;
  border-radius: 50%;
}
</style>