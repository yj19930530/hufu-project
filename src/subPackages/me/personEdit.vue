<template>
  <div id="person-edit-container">
    <div class="zhanwei"></div>
    <div class="person-edit-item fl-bt">
      <text class="fz-15 mr-l-30">修改头像</text>
      <div class="fl-al mr-r-30">
        <image class="edit-item-img" src="../../static/circle/back-img.png" />
        <text class="iconfont iconyoujiantou fz-14 fc-999 mr-l-4"></text>
      </div>
    </div>
    <div class="person-edit-item fl-bt">
      <text class="fz-15 mr-l-30">昵称</text>
      <div class="fl-al mr-r-30">
        <input
          class="uni-input input-style fl-al fz-15"
          maxlength="12"
          v-model="name"
          placeholder="自动获得焦点"
        />
        <text class="iconfont iconyoujiantou fz-14 fc-999 mr-l-4"></text>
      </div>
    </div>
    <picker @change="bindPickerChange" :value="sexIndex" :range="sexList" range-key="name">
      <div class="person-edit-item fl-bt">
        <text class="fz-15 mr-l-30">性别</text>
        <div class="fl-al mr-r-30">
          <text class="fz-15">{{sexList[sexIndex].name}}</text>
          <text class="iconfont iconyoujiantou fz-14 fc-999 mr-l-4"></text>
        </div>
      </div>
    </picker>
    <div class="person-edit-item fl-bt">
      <text class="fz-15 mr-l-30">手机号</text>
      <div class="fl-al mr-r-30">
        <input
          class="uni-input input-style fl-al fz-15"
          maxlength="11"
          v-model="pho"
          placeholder="请输入手机号"
        />
        <text class="iconfont iconyoujiantou fz-14 fc-999 mr-l-4"></text>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "初印象",
      num: "",
      pho: "158",
      sexList: [
        {
          name: "男",
          value: "1",
        },
        {
          name: "女",
          value: "0",
        },
      ],
      sexIndex: 0,
    };
  },
  methods: {
    bindPickerChange(val) {
      this.sexIndex = val.detail.value;
    },
  },
};
</script>
<style scoped>
#person-edit-container {
  height: 100%;
  background-color: #f8f8f8;
}
.person-edit-item {
  width: 100%;
  height: 108rpx;
  background-color: #ffffff;
  border-bottom: 1rpx solid #f8f8f8;
}
.edit-item-img {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
}
.input-style {
  text-align: right;
}
.zhanwei {
    width: 100%;
    height: 20rpx;
}
</style>