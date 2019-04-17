<template>
  <div class="mine">
    <div class="nav-all">
      <div class="nav-top">
        <div class="nav-my">我的</div>
        <div class="nav-top-right">
          <img :src="setting" width="13px">
          <span class="nav-top-set">编辑</span>
        </div>
      </div>
      <!-- 用户头像 -->
      <div class="mine-user">
        <div class="userimg">
          <img :src="touxiang" width="50px">
        </div>
        <div class="user-name">坐看云起时</div>
      </div>
    </div>
    <!-- 累计学习 -->
    <div class="user-center">
      <div class="study-item">
        <div class="study-times">20次</div>
        <div class="study-text">累计学习</div>
      </div>
      <div class="study-item">
        <div class="study-active">10086</div>
        <div class="study-text">我的活力</div>
      </div>
    </div>
    <!-- 我的班级 -->
    <div class="user-class">
      <div class="class-item">
        <img :src="myclass" width="50px">
        <div class="study-text">我的班级</div>
      </div>
      <div class="class-item">
        <img :src="liClass" width="50px" class="book-img">
        <div class="study-text">我的作业</div>
      </div>
    </div>
    <!-- 缘起会 -->
    <div class="user-class">
      <div class="class-item">
        <img :src="yuan" width="35px">
        <div class="study-text">缘起会</div>
      </div>
      <div class="class-item">
        <img :src="classRoom" width="28px">
        <div class="study-text">我的课程</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {
      setting: require("../assets/img/shezhi.png"),
      touxiang: require("../assets/img/touxiang.png"),
      yuan: require("../assets/img/yuan.png"),
      liClass: require("../assets/img/li-class.png"),
      myclass: require("../assets/img/myclass.png"),
      classRoom: require("../assets/img/class-room.png")
    };
  }
};
</script>
<style lang="scss" scoped>
.nav-all {
  width: 100%;
  height: 190px;
  background: url("../assets/img/mybanner.png") no-repeat top;
  background-size: 100%;
  .nav-top {
    width: 100%;
    height: 40px;
    text-align: center;
  }
  .nav-my {
    display: inline-block;
    line-height: 40px;
    font-size: 1rem;
    color: black;
  }
  .nav-top-right {
    position: absolute;
    display: inline-block;
    right: 0;
    margin: 10px 10px;
    .nav-top-set {
      color: rgb(94, 93, 93);
      font-size: 0.8rem;
    }
  }
  .mine-user {
    width: 100%;
    height: 50px;
    margin-top: 30%;
    display: flex;
    .userimg {
      flex: 0 0 68px;
      img {
        margin-left: 10px;
      }
    }
    .user-name {
      line-height: 50px;
      font-size: 0.95rem;
    }
  }
}
.user-center {
  width: 100%;
  height: 55px;
  margin: 20px 0;
  display: flex;
  .study-item {
    flex: 1;
    text-align: center;
    .study-text {
      margin: 6px;
      color: rgb(88, 88, 88);
      font-size: 13px;
    }
  }
}
// 我的班级
.user-class {
  width: 100%;
  height: 100px;
  margin: 20px 0;
  display: flex;
  .class-item {
    flex: 1;
    text-align: center;
    .study-text{
        margin-top: 15px;
        font-size: 14px;
    }
    .book-img{
        margin-top: 8px;
    }
  }
}
</style>

