<template>
  <div class="videoseeding">
    <div class="nav-top">
      <div class="home-text">直播</div>
    </div>
    <img :src="zhiboImg" width="100%" height="100%">
    <div class="zhibo-center">
      <div class="study-top">
        <div class="study-pre"></div>
        <span class="study">直播列表</span>
      </div>

      <div class="zhibo-item">
        <div class="zhibo-img">
          <img :src="zhibo1" width="100%">
        </div>
        <div>
          <div class="zhibo-title">从天气项目入手Spring Cloud 微服务治理</div>
          <div class="zhibo-name">主讲人： 陶渊明</div>
          <div class="zhibo-name">观看人数： 10086人</div>
        </div>
      </div>
      <div class="zhibo-item">
        <div class="zhibo-img">
          <img :src="zhibo2" width="100%">
        </div>
        <div>
          <div class="zhibo-title">从天气项目入手Spring Cloud 微服务治理</div>
          <div class="zhibo-name">主讲人： 陶渊明</div>
          <div class="zhibo-name">观看人数： 10086人</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoseeding",
  data() {
    return {
      zhiboImg: require("../assets/img/zhibo-banner.png"),
      zhibo1: require("../assets/img/zhibo1.png"),
      zhibo2: require("../assets/img/zhibo2.png")
    };
  }
};
</script>
<style lang="scss" scoped>
.nav-top {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  .home-text {
    font-size: 16px;
  }
}
.zhibo-center {
  width: 94%;
  margin: 15px auto;
  .study-top {
    width: 100%;
    height: 35px;
    margin: 20px 10px;
    .study-pre {
      width: 3px;
      height: 20px;
      background-color: red;
      display: inline-block;
    }
    .study {
      display: inline-block;
      font-size: 0.93rem;
      vertical-align: top;
      margin-left: 8px;
    }
  }
}
.zhibo-item {
  width: 100%;
  height: 110px;
  display: flex;
  .zhibo-img {
    flex: 0 0 30%;
    padding: 0 10px;
  }
  .zhibo-title {
    font-size: 14px;
  }
  .zhibo-name {
    font-size: 12px;
    color: rgb(78, 77, 77);
    margin: 10px 0;
  }
}
</style>

