<template>
  <div class="mynotes">
    <div class="mynotes-item">
      <div class="mynotes-item-list">
        <img :src="notes" width="100%" height="100%">
      </div>
      <div class="mynotes-item-right">
        <div class="mynotes-item-text">
          夫以铜为镜，可以正衣冠；以古为镜，可以知兴替；
          以人为镜，可以知得失。我常保此三镜，以防己过。今魏征殂逝，遂亡一镜矣。
        </div>
        <div class="mynotes-item-time">2019.01.01</div>
      </div>
    </div>
    <!-- 后面重复的 -->
    <div class="mynotes-item">
      <div class="mynotes-item-list">
        <img :src="notes" width="100%" height="100%">
      </div>
      <div class="mynotes-item-right">
        <div class="mynotes-item-text">
          以人为镜，可以知得失。我常保此三镜，以防己过。今魏征殂逝，遂亡一镜矣。
        </div>
        <div class="mynotes-item-time">2019.01.01</div>
      </div>
    </div>
    <div class="mynotes-item">
      <div class="mynotes-item-list">
        <img :src="notes" width="100%" height="100%">
      </div>
      <div class="mynotes-item-right">
        <div class="mynotes-item-text">
          我常保此三镜，以防己过。今魏征殂逝，遂亡一镜矣。
        </div>
        <div class="mynotes-item-time">2019.01.01</div>
      </div>
    </div>
    <div class="mynotes-item">
      <div class="mynotes-item-list">
        <img :src="notes" width="100%" height="100%">
      </div>
      <div class="mynotes-item-right">
        <div class="mynotes-item-text">
          以人为镜，可以知得失。我常保此三镜，以防己过。今魏征殂逝，遂亡一镜矣。
        </div>
        <div class="mynotes-item-time">2019.01.01</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyNotes",
  data() {
    return {
      notes: require("../assets/img/notes.png")
    };
  }
};
</script>
<style lang="scss" scoped>
.mynotes {
  width: 97%;
  height: 100%;
  margin: 0 auto;
  .mynotes-item {
    width: 100%;
    height: 52px;
    margin: 20px 0;
    display: flex;
    .mynotes-item-list {
      flex: 0 0 26%;
    }
    .mynotes-item-right{
        margin-left: 8px;
    }
    .mynotes-item-text {
      width: 100%;
      height: 36px;
      line-height: 18px;
      font-size: 12px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .mynotes-item-time {
      font-size: 11px;
      color: rgb(95, 94, 94);
    }
  }
}
</style>
