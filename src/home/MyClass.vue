<template>
  <div class="myclass">
    <div class="nav">
      <img :src="backBtn" @click="backTo" class="nav-img">
      <div class="nav-class">我的班级</div>
    </div>
    <div class="class-item">
      <div class="class-left">
        <img :src="mingDao" @click="backTo" class="class-img">
        <div class="img-text">蒙正</div>
      </div>
      <div class="class-right">
        <div class="class-up">
          <div class="class-title">中华上下五千年班</div>
          <div class="studying">学习中</div>
        </div>
        <div class="class-foot">
          <div class="open-time">开班时间: 2019-01-01</div>
          <div class="num">人数： 18人</div>
        </div>
      </div>
    </div>
    <!-- 以下重复 -->
    <div class="class-item">
      <div class="class-left">
        <img :src="mingDao" @click="backTo" class="class-img">
        <div class="img-text">明道</div>
      </div>
      <div class="class-right">
        <div class="class-up">
          <div class="class-title">缘起会学院立志班</div>
          <div class="studying">已结业</div>
        </div>
        <div class="class-foot">
          <div class="open-time">开班时间:2019-01-01</div>
          <div class="num">人数： 1008人</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myclass",
  data() {
    return {
      backBtn: require("../assets/img/back.png"),
      mingDao: require("../assets/img/mingdao.png")
    };
  },
  methods: {
    backTo() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 40px;
  display: flex;
  .nav-img {
    height: 18px;
    margin: 10px 10px;
    flex: 0 0 10px;
  }
  .nav-class {
    width: 100%;
    line-height: 40px;
    text-align: center;
  }
}
.class-item {
  width: 100%;
  height: 60px;
  display: flex;
  margin-top: 15px;
  .class-left {
    flex: 0 0 10%;
    .class-img {
      height: 40px;
      margin: 10px 10px;
    }
    .img-text {
      position: absolute;
      color: white;
      font-size: 14px;
      margin: -42px 16px;
      z-index: 10;
    }
  }

  .class-right {
    margin-left: 10px;
    width: 100%;
    .class-up {
      display: flex;
      width: 100%;
      height: 27px;
      margin-top: 10px;
      .class-title {
        flex: 0 0 80%;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 14px;
      }
      .studying {
        width: 45px;
        height: 20px;
        font-size: 11px;
        border: 1px solid #ccc;
        border-radius: 4px;
        line-height: 20px;
        text-align: center;
        color: rgb(88, 88, 88);
      }
    }

    .class-foot {
      width: 100%;
      display: flex;
      font-size: 11px;
      color: rgb(88, 88, 88);
      .open-time {
        flex: 0 0 65%;
      }
    }
  }
}
</style>

