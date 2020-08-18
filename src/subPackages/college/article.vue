<template>
  <div class="art-content fl-btw">
    <ArtItem v-for="item in 4" :key="item" />
  </div>
</template>
<script>
import ArtItem from "../../components/collegeArticle/articleItem";
export default {
  data() {
    return {};
  },
  components: {
    ArtItem,
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