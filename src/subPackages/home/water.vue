<template>
  <div id="water-container" class="fl-btw">
    <WaterItem v-for="(item,index) in allList" :key="index" />
  </div>
</template>
<script>
import WaterItem from "../../components/waterItem/water";
export default {
  data() {
    return {
      allList: [],
    };
  },
  onLoad() {
    this.getTableList();
  },
  components: {
    WaterItem,
  },
  methods: {
    // 获取商品列表
    async getTableList() {
      const { data } = await this.$api.getClassList();
      this.allList = data.all;
    },
  },
};
</script>
<style>
page {
  background-color: #f8f8f8;
}
</style>
<style scoped>
#water-container {
  padding-top: 20rpx;
  margin: auto;
  width: 710rpx;
}
</style>