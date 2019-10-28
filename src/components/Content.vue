<template>
  <div class="container">
    <div class="row">
      <div class="col-6"></div>
      <div class="col-6 play-list">
        <div class="title">Play list</div>
        <ItemPlayList></ItemPlayList>
      </div>
    </div>
  </div>
</template>
<script>
import ItemPlayList from "./Item-PlayList";
export default {
  name: "Content",
  components: {
    ItemPlayList
  }
};
</script>

<style lang="scss" scoped>
.container {
  border-top: 1px solid #707070;
  .play-list {
    padding-right: 0;

    .title {
      padding-top: 10px;
      font-size: 14px;
      padding-bottom: 22px;
      border-bottom: 1px solid #707070;
    }
  }
}
</style>