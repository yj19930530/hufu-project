<template>
  <div id="water-container" class="fl-btw">
    <WaterItem v-for="item in 4" :key="item" />
  </div>
</template>
<script>
import WaterItem from "../../components/waterItem/water";
export default {
  data() {
    return {};
  },
  components: {
    WaterItem,
  },
  methods: {},
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