<template>
  <div id="pifu-test-container">
    <!-- 选择性别 -->
    <div class="sex-content fl-co">
      <text class="fz-15 mr-t-70">请选择你的性别</text>
      <div class="fl-cen mr-t-50">
        <div class="fl-co" @tap="checkSex('0')">
          <div class="sex-img-box">
            <image class="sex-img-item" src="../../static/ask/woman.png" />
            <image class="sex-img-check" v-if="sex==='0'" src="../../static/ask/check.png" />
          </div>
          <text class="fz-15">小姐姐</text>
        </div>
        <div class="fl-co right-man-mr" @tap="checkSex('1')">
          <div class="sex-img-box">
            <image class="sex-img-item" src="../../static/ask/man.png" />
            <image class="sex-img-check" v-if="sex==='1'" src="../../static/ask/check.png" />
          </div>
          <text class="fz-15">小哥哥</text>
        </div>
      </div>
    </div>
    <!-- 选择年纪 -->
    <picker @change="bindPickerChange" :value="ageindex" :range="age">
      <div class="picker-box-check">
        <text class="fz-15">请选择年纪：</text>
        <div class="age-list-choose fl-cen">
          <div class="fz-15 age-width-item fl-cen">{{ageValue}}</div>
          <image class="picker-more" src="../../static/ask/more.png" />
        </div>
      </div>
    </picker>
    <!-- 上传图片 -->
    <div class="photograph-content fl-co">
      <div class="photograph-img-choose fl-cen">
        <image class="img-choose-icon" src="../../static/ask/cameri.png" />
      </div>
      <text class="fz-12 fc-999 mr-t-30">请上传个人正面照，获取更加精准的测试结果</text>
    </div>
    <!-- 提交 -->
    <div class="submit-btn-content fl-cen">
      <text class="fz-15 fc-fff">提交检测</text>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sex: "0",
      age: ["24岁以下"],
      ageValue: "",
      ageindex:''
    };
  },
  onLoad() {
    this.getAgeList();
  },
  methods: {
    getAgeList() {
      for (let i = 23; i < 100; i++) {
        this.age.push(i);
      }
    },
    checkSex(type) {
      console.log(type);
      this.sex = type;
    },
    bindPickerChange(val) {
      this.ageValue = this.age[val.detail.value];
      this.ageindex = val.detail.value;
    },
  },
};
</script>
<style scoped>
.sex-img-box {
  position: relative;
  width: 160rpx;
  height: 160rpx;
}
.sex-img-item {
  width: 100%;
  height: 100%;
}
.sex-img-check {
  position: absolute;
  right: 10rpx;
  bottom: 26rpx;
  width: 30rpx;
  height: 30rpx;
}
.picker-box-check {
  margin-top: 70rpx;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.right-man-mr {
  margin-left: 224rpx;
}
.picker-more {
  margin-top: -10rpx;
  margin-left: 2rpx;
  width: 28rpx;
  height: 28rpx;
}
.age-list-choose {
  width: 162rpx;
  height: 44rpx;
  border: 1rpx solid #999999;
}
.photograph-img-choose {
  width: 370rpx;
  height: 370rpx;
  border: 3rpx dashed #999;
  border-radius: 20rpx;
}
.photograph-content {
  margin-top: 48rpx;
  margin-bottom: 72rpx;
}
.img-choose-icon {
  width: 180rpx;
  height: 130rpx;
}
.age-width-item {
  width: 126rpx;
  height: 100%;
}
.submit-btn-content {
  margin: auto;
  width: 620rpx;
  height: 80rpx;
  border-radius: 10rpx;
  background-color: #666666;
}
</style>