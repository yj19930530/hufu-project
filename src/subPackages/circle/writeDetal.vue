<template>
  <div id="write-container">
    <image class="write-back-img" src="../../static/circle/back-img.png" />
    <div class="write-center-content">
      <div class="write-center-box">
        <textarea
          maxlength="300"
          placeholder="你的护肤历程是对其他初印象姐妹的鼓励,是变美的动力，大家渴望看到你洋洋洒洒的护肤记录，所以请不要吝啬你的文采哦~"
          class="textarea-content fz-14 fc-999"
          v-model="writeForm.content"
        />
        <div class="fl-bt mr-t-20">
          <text class="fz-14">上传多张照片更容易上热搜榜哦</text>
          <text class="fc-999 fz-14">0/9</text>
        </div>
        <!-- 上傳圖片 -->
        <div class="mr-t-30 fl-btc">
          <div
            v-if="imgList.length!==9"
            class="add-img-btn fl-cen mr-r-50 mr-b-20"
            @tap="uploadImgComment"
          >
            <text class="fz-20">+</text>
          </div>
          <image
            @longtap="logoTime(index)"
            v-for="(item,index) in imgList"
            @tap="preImage(index)"
            :key="index"
            class="img-updata-item"
            :src="item.imgPath"
          />
        </div>
        <div>
          <text class="fz-12 fc-999">提示：长按可删除图片</text>
        </div>
        <div class="sumit-btn fl-cen" @tap="submitWrite">
          <text class="fz-15 fc-fff">护肤打卡</text>
        </div>
      </div>
    </div>
    <div class="delete-content" v-if="deleteType">
      <div class="delete-bt-box" :class="[deleteType?'bot-style-1':'bot-style-2']">
        <div class="delete-btn fl-cen" @tap="deleteCommentImg">
          <text class="fz-15 fc-f1 text-letter-spc fw-bold">刪除</text>
        </div>
        <div class="delete-btn fl-cen" @click="closeType">
          <text class="fz-15 fc-999 text-letter-spc fw-bold">取消</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { common, toast } = require("../../utils/index");
export default {
  data() {
    return {
      deleteType: false,
      imgList: [],
      writeForm: {
        creatorNo: "",
        content: "",
        noteImgs: "",
      },
      nowIndex: 0,
    };
  },
  onLoad(obj) {
    if (obj.label) this.writeForm.label = obj.label;
    this.writeForm.creatorNo = uni.getStorageSync("userno");
  },
  methods: {
    logoTime(i) {
      this.nowIndex = i;
      this.deleteType = true;
    },
    // 删除图片
    deleteCommentImg() {
      this.imgList.splice(this.nowIndex, 1);
      this.deleteType = false;
    },
    closeType() {
      this.deleteType = false;
    },
    // 預覽圖片
    preImage(i) {
      uni.previewImage({
        urls: [this.imgList[i].imgPath],
      });
    },
    // 上传图片
    async uploadImgComment() {
      const imgOBj = await common.updataImg(9 - this.imgList.length);
      this.imgList = [...this.imgList, ...imgOBj];
    },
    // 发表
    submitWrite() {
      toast.showLoading("发表中");
      if (this.writeForm.content === "") return toast.showToast("内容不能为空");
      if (!this.imgList.length) {
        delete this.writeForm.noteImgs;
      } else {
        let imgArr = [];
        this.imgList.forEach((item) => {
          imgArr.push(item.imgObj);
        });
        this.writeForm.noteImgs = imgArr.join(",");
      }
      if (this.writeForm.label) {
        this.$api
          .addCircleNote(this.writeForm)
          .then((res) => {
            uni.showModal({
              title: "提示",
              content: "提交成功",
              showCancel: false,
              confirmText: "返回",
              success: function (res) {
                uni.navigateBack();
              },
            });
            uni.navigateBack();
            uni.hideLoading();
          })
          .catch(() => {
            uni.hideLoading();
          });
      } else {
        this.$api
          .addWriteNote(this.writeForm)
          .then((res) => {
            uni.showModal({
              title: "提示",
              content: "提交成功",
              showCancel: false,
              confirmText: "返回",
              success: function (res) {
                uni.navigateBack();
              },
            });
            uni.navigateBack();
            uni.hideLoading();
          })
          .catch(() => {
            uni.hideLoading();
          });
      }
    },
  },
};
</script>
<style scoped>
#write-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.write-back-img {
  width: 100%;
  height: 100%;
  display: block;
}
.write-center-content {
  position: absolute;
  left: 68rpx;
  top: 118rpx;
  right: 68rpx;
  bottom: 118rpx;
  border-radius: 20rpx;
  background-color: #ffffff;
}
.write-center-box {
  margin: auto;
  padding-top: 64rpx;
  width: 536rpx;
}
.textarea-content {
  padding: 10rpx;
  width: 516rpx;
  height: 206rpx;
  border-radius: 10rpx;
  border: 1rpx solid #979797;
}
.add-img-btn {
  width: 128rpx;
  height: 128rpx;
  border: 1rpx solid #999999;
}
.img-updata-item {
  margin-right: 50rpx;
  margin-bottom: 20rpx;
  width: 128rpx;
  height: 128rpx;
  border-radius: 10rpx;
}
.sumit-btn {
  margin: 64rpx auto 0;
  width: 346rpx;
  height: 80rpx;
  background: linear-gradient(to top, #333333, #666666);
  border-radius: 40rpx 40rpx;
}
.delete-content {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999999;
}
.delete-bt-box {
  position: absolute;
  left: 0;
  bottom: -200rpx;
  width: 100%;
}
.bot-style-1 {
  bottom: 0;
}
.bot-style-2 {
  bottom: -200rpx !important;
}

.delete-btn {
  width: 100%;
  height: 90rpx;
  background-color: #ffffff;
  border: 1rpx solid #999999;
}
.text-letter-spc {
  letter-spacing: 20rpx;
}
</style>