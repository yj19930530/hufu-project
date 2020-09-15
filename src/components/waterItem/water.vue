<template>
  <div class="water-item-content" @tap="openWecat">
    <image class="water-item-img" :src="httpImg+detailData.gimg" />
    <div class="water-item-describe">
      <text class="fz-15">{{detailData.gname}}</text>
      <div class="mr-t-44">
        <text class="fz-17 fw-bold fc-f1">¥{{detailData.bprice}}</text>
        <text class="fz-14 fc-999 mr-l-20 text-through">¥{{detailData.price4}}</text>
      </div>
    </div>
  </div>
</template>
<script>
import { httpDetailImg, httpImg } from "../../config/develop";
export default {
  data() {
    return {
      httpImg: httpImg, // 图片路径
      httpDetailImg: httpDetailImg, // 图片路径
    };
  },
  props: {
    objData: {
      type: Object,
      default: {},
    },
  },
  computed: {
    detailData() {
      return this.objData;
    },
  },
  methods: {
    openWecat() {
      uni.navigateToMiniProgram({
        appId: "wxc55777954099b5a6",
        path: `/subPackages/home/shopDetail?gId=${this.detailData.gid}`,
      });
    },
  },
};
</script>
<style scoped>
.water-item-content {
  margin-bottom: 30rpx;
  width: 332rpx;
  height: 544rpx;
  background-color: #ffffff;
}
.water-item-img {
  width: 332rpx;
  height: 332rpx;
}
.water-item-describe {
  padding: 14rpx 20rpx;
}
.text-through {
  text-decoration: line-through;
}
</style>