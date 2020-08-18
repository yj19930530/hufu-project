<template>
  <div class="art-content fl-btw">
    <videoItem v-for="item in 4" :key="item" />
  </div>
</template>
<script>
import videoItem from "../../components/collegeVideo/videoItem";
export default {
  data() {
    return {};
  },
  components: {
    videoItem,
  },
};
</script>
<style scoped>
.art-content {
  margin: auto;
  padding-top: 20rpx;
  width: 710rpx;
}
</style>