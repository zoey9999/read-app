<template>
  <div id="home">
    <div class="nav-top">
      <div class="home-text">首页</div>
    </div>
    <div>
      <img :src="centImg" width="100%">
      <div class="img-red"></div>
    </div>
    <div class="center-contain">
      <!-- 组1 -->
      <div class="nav-next">
        <div class="next-line">
          <div class="next-item" @click="toSystemClass">
            <img :src="classRoom" width="25px" height="28px" class="next-img">
            <span class="next-item-text">四阶系统学堂</span>
          </div>
          <div class="next-item" @click="tomyClass">
            <img :src="myclass" width="38px" height="25px" class="next-img next-img2">
            <span class="next-item-text">我的班级</span>
          </div>
        </div>
        <div class="next-line">
          <div class="next-item" @click="toLiClass">
            <img :src="liClass" width="40px" height="18px" class="next-img">
            <span class="next-item-text">李里课堂</span>
          </div>
          <div class="next-item" @click="toCenterClass">
            <img :src="classCenter" width="28px" height="26px" class="next-img next-img2">
            <span class="next-item-text">课程中心</span>
          </div>
        </div>
      </div>
      <!-- 组2 -->
      <div class="today-study">
        <div class="study-top">
          <div class="study-pre"></div>
          <span class="study">今日学习</span>
        </div>
        <img :src="todayStudy" width="100%" >
        <div class="study-title">浚县大伾山王阳明诗碑</div>
        <div class="study-footer">
          <div class="study-footer-item">
            <img :src="shu" width="15px">
            <span>课程时间： 2019-01-01</span>
          </div>
          <div>
            <img :src="zuoyerili" width="13px" class="tolker-img">
            <span class="tolker">主讲： 陶渊明</span>
          </div>
        </div>
      </div>
      <!-- 组3 -->
      <div class="commend-class">
        <div class="study-top">
          <div class="study-pre"></div>
          <span class="study">推荐课程</span>
        </div>
        <div class="class-last">
          <div class="class-last-item">
            <img :src="commend" width="100%">
            <div class="study-title">浚县大伾山王阳明诗碑</div>
          </div>
          <div class="class-last-item">
            <img :src="commend" width="100%">
            <div class="study-title">浚县大伾山王阳明诗碑</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      centImg: require("../assets/img/banner1.png"),
      classCenter: require("../assets/img/class-center.png"),
      liClass: require("../assets/img/li-class.png"),
      myclass: require("../assets/img/myclass.png"),
      classRoom: require("../assets/img/class-room.png"),
      todayStudy: require("../assets/img/study.png"),
      commend: require("../assets/img/commend.png"),
      shu: require("../assets/img/shu.png"),
      zuoyerili: require("../assets/img/zuoyerili.png")
    }
  },
  methods: {
    tomyClass() {
      this.$router.push({name: "myclass"})
    },
    toCenterClass() {
      this.$router.push({name: "centerclass"})
    },
    toSystemClass() {
      this.$router.push({name: "systemclass"})
    },
    toLiClass() {
      this.$router.push({name: "liclass"})
    }
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
    font-size: 17px;
  }
}

.img-red {
  width: 17px;
  height: 5px;
  background-color: red;
  border-radius: 20px;
  margin: 15px auto;
}
.center-contain {
  width: 94%;
  height: 100%;
  margin: 0 auto;
  // 组1
  .nav-next {
    width: 100%;
    height: 100px;
    .next-line {
      width: 100%;
      height: 60px;
      display: flex;
    }
    .next-item {
      flex: 1;
      line-height: 60px;
      margin: 0 8px;
    }
    .next-img {
      display: inline-block;
      vertical-align: middle;
    }
    .next-img2 {
      margin-left: 20px;
    }
    .next-item-text {
      display: inline-block;
      margin: 0 5px;
      vertical-align: top;
      font-size: 13px;
    }
  }
  // 组2
  .today-study {
    width: 100%;
    height: 250px;
    margin-top: 30px;
    .study-title {
      margin: 15px 0;
      color: rgb(88, 87, 87);
      font-size: 14px;
    }
    .study-footer {
      width: 100%;
      height: 28px;
      display: flex;
      font-size: 12px;
      vertical-align: top;
      color: rgb(88, 87, 87);
    }
    .study-footer-item {
      flex: 0 0 65%;
    }
    .tolker-img{
      margin-top: 1px;
    }
    .tolker{
      display: inline-block;
      vertical-align: top;
    }
  }
  // 组3
  .commend-class {
    width: 100%;
    height: 250px;
    margin: 30px 0;
    .class-last {
      width: 100%;
      height: 200px;
      display: flex;
      .class-last-item {
        flex: 1;
        margin: 0 5px;
      }
      .study-title {
        font-size: 13px;
        color: rgb(88, 87, 87);
      }
    }
  }
  //今日学习   头部共同样式
  .study-top {
    width: 100%;
    height: 45px;
    .study-pre {
      width: 3px;
      height: 20px;
      background-color: red;
      display: inline-block;
      margin-top: 3px;
    }
    .study {
      display: inline-block;
      font-size: 17px;
      vertical-align: top;
      margin: 0 10px;
    }
  }
}
</style>
