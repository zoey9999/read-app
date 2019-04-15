<template>
  <div>
    <div class="upcoming-all">
      <img :src="upcomingImg" width="100%">
      <div class="upcoming-title">从历史故事解读职场智慧-张良篇</div>
      <div class="upcoming-time">开课日期： 2019-01-01</div>
      <div class="upcoming-footer">
        <div class="footer-left">学期： 100天</div>
        <div class="footer-right">报名人数： 10086人</div>
      </div>
    </div>
    <!-- 后面复制的 -->
    <div class="upcoming-all">
      <img :src="upcomingImg" width="100%">
      <div class="upcoming-title">从历史故事解读职场智慧-张良篇</div>
      <div class="upcoming-time">开课日期： 2019-01-01</div>
      <div class="upcoming-footer">
        <div class="footer-left">学期： 100天</div>
        <div class="footer-right">报名人数： 10086人</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upcomingImg: require("../assets/img/upcoming.png")
    };
  }
};
</script>

<style lang="scss" scoped>
.upcoming-all {
  width: 96%;
  height: 190px;
  margin: 15px auto;
  .upcoming-title {
    font-size: 14px;
    margin: 10px 0;
  }
  .upcoming-time {
    font-size: 12px;
    color: rgb(102, 101, 101);
  }
  .upcoming-footer {
    font-size: 10px;
    margin-top: 15px;
    color: rgb(102, 101, 101);
    display: flex;
    .footer-left {
      flex: 0 0 40%;
    }
  }
}
</style>

