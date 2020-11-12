<template>
  <div id="write-container">
    <div class="write-center-content">
      <div class="write-center-box">
        <div class="write-title-box fl-al">
          <input
            v-model="writeForm.title"
            class="title-input-style fz-17"
            placeholder="添加标题"
          />
        </div>
        <textarea
          maxlength="300"
          placeholder="这一刻的想法…"
          class="textarea-content fz-14 fc-999 mr-t-30"
          v-model="writeForm.content"
        />
        <!-- 上傳圖片 -->
        <div class="mr-t-30 fl-btc" style="width: 100%">
          <image
            mode="widthFix"
            @longtap="logoTime(index)"
            v-for="(item, index) in imgList"
            @tap="preImage(index)"
            :key="index"
            class="img-updata-item"
            :src="item.imgPath"
          />
          <div
            v-if="imgList.length !== 9"
            class="add-img-btn fl-cen mr-b-20"
            @tap="uploadImgComment"
          >
            <image class="add-style" src="../../static/circle/add.png" />
          </div>
        </div>
        <div class="delete-img-title">
          <text class="fz-12 fc-999">提示：长按可删除图片</text>
        </div>
        <div class="sumit-btn fl-cen" @tap="submitWrite">
          <text class="fz-20 fc-fff">发表</text>
        </div>
      </div>
    </div>
    <div class="delete-content" v-if="deleteType">
      <div
        class="delete-bt-box"
        :class="[deleteType ? 'bot-style-1' : 'bot-style-2']"
      >
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
        title: "",
      },
      nowIndex: 0,
    };
  },
  onLoad(obj) {
    this.writeForm.creatorNo = uni.getStorageSync("userno");
  },
  onShareAppMessage() {
    return {
      path: `/pages/page/home`,
    };
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
      const imgOBj = await common.updataImg(
        9 - this.imgList.length,
        "前台文章"
      );
      this.imgList = [...this.imgList, ...imgOBj];
    },
    // 发表
    submitWrite() {
      toast.showLoading("发表中");
      if (this.writeForm.title === "") return toast.showToast("标题不能为空");
      if (this.writeForm.content === "") return toast.showToast("内容不能为空");
      if (!this.imgList.length) return toast.showToast("图片不能为空");
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
              content: "护肤笔记已提交后台审核，后台审核成功后可见",
              showCancel: false,
              confirmText: "返回",
              success: function (res) {
                uni.navigateBack();
              },
            });
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
              content: "护肤笔记已提交后台审核，后台审核成功后可见",
              showCancel: false,
              confirmText: "返回",
              success: function (res) {
                uni.navigateBack();
              },
            });
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
  left: 30rpx;
  top: 0rpx;
  right: 30rpx;
  bottom: 118rpx;
  border-radius: 20rpx;
  background-color: #ffffff;
}
.write-center-box {
  margin: auto;
  width: 606rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.textarea-content {
  padding: 10rpx;
  width: 100%;
  height: 206rpx;
}
.add-img-btn {
  width: 606rpx;
  height: 260rpx;
  background-color: #f8f8f8;
}
.img-updata-item {
  margin-bottom: 10rpx;
  width: 606rpx;
  border-radius: 10rpx;
}
.sumit-btn {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 108rpx;
  background: linear-gradient(to right, #333333, #666666);
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
  border: 1px solid #999999;
}
.text-letter-spc {
  letter-spacing: 20rpx;
}
.write-title-box {
  width: 606rpx;
  height: 120rpx;
  border-bottom: 1px solid #f5f5f5;
}
.title-input-style {
  width: 100%;
}
.add-style {
  width: 100rpx;
  height: 100rpx;
}
.delete-img-title {
  margin-top: 300rpx;
  width: 606rpx;
}
</style>