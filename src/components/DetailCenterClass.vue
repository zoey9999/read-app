<template>
  <div>
    <div>
      <img :src="centImg" width="100%">
      <div class="img-red"></div>
    </div>
    <div class="center-container">
      <div class="today-class">
        <div class="today-top">
          <div class="today-title">今日课程</div>
          <div class="today-more">更多 ></div>
        </div>
        <div class="today-contain">
          <div class="today-item">
            <img :src="centclass1">
            <div class="today-text">RabbitMQ</div>
          </div>
          <div class="today-item">
            <img :src="centclass2">
            <div class="today-text">JavescriptJavescript</div>
          </div>
          <div class="today-item">
            <img :src="centclass3">
            <div class="today-text">vue.js教程</div>
          </div>
        </div>
      </div>

      <!-- 推荐课程 -->
      <div class="recommand-class">
        <div class="recommand-top">
          <div class="recommand-title">推荐课程</div>
          <div class="recommand-more">更多 ></div>
        </div>
        <div class="recommand-contain">
          <div class="recommand-item">
            <img :src="centclass4" class="item-img">
            <div class="recommand-text">MYCAT+MYSQL 搭建高可用企业级数据库集群</div>
            <div class="recommand-num">
              <img :src="centerNumber" width="12px">
              <span>225人</span>
            </div>
          </div>
          <div class="recommand-item">
            <img :src="centclass5" class="item-img">
            <div class="recommand-text">MYCAT+MYSQL 搭建高可用企业级数据库集群</div>
            <div class="recommand-num">
              <img :src="centerNumber" width="12px">
              <span>225人</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 所有课程 -->
      <div class="all-class">
        <div class="all-title">所有课程</div>
        <div class="all-item">
          <div class="item-img">
            <img :src="centclass6" width="90%">
          </div>
          <div class="item-right">
            <div class="item-title">从天气项目入门Sping Cloud 微服务治理</div>
            <div class="item-center">
              <div>开课时间： 2019-01-01</div>
              <div>2018人报名</div>
            </div>
            <div>报名</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centImg: require("../assets/img/centclass.png"),
      centclass1: require("../assets/img/centclass1.png"),
      centclass2: require("../assets/img/centclass2.png"),
      centclass3: require("../assets/img/centclass3.png"),
      centclass4: require("../assets/img/centclass4.png"),
      centclass5: require("../assets/img/centclass5.png"),
      centclass6: require("../assets/img/centclass6.png"),
      centclass7: require("../assets/img/centclass7.png"),
      centerNumber: require("../assets/img/centernumber.png")
    };
  }
};
</script>
<style lang="scss" scoped>
.img-red {
  width: 15px;
  height: 3px;
  background-color: red;
  border-radius: 30px;
  margin: 10px auto;
}
.center-container {
  width: 94%;
  margin: 10px auto;
}
.today-class {
  width: 100%;
  height: 100%;
  .today-top {
    width: 100%;
    height: 30px;
    .today-title {
      display: inline-block;
      font-size: 0.95rem;
      font-weight: 550;
    }
    .today-more {
      font-size: 0.8rem;
      float: right;
      color: rgb(96, 97, 97);
      margin-right: 8px;
    }
  }
  .today-contain {
    width: 100%;
    .today-item {
      width: 32%;
      display: inline-block;
      img {
        width: 95%;
        border-radius: 10px;
        margin-right: 8px;
      }
      .today-text {
        font-size: 0.7rem;
        padding: 0 5px;
        margin: 6px 0;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
  }
}
.recommand-class {
  width: 100%;
  height: 100%;
  margin: 25px 0;
  .recommand-top {
    width: 100%;
    height: 30px;
    .recommand-title {
      display: inline-block;
      font-size: 0.95rem;
      font-weight: 550;
    }
    .recommand-more {
      font-size: 0.8rem;
      float: right;
      color: rgb(96, 97, 97);
      margin-right: 8px;
    }
  }
  .recommand-contain {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .recommand-item {
      width: 45%;
      .item-img {
        width: 98%;
        border-radius: 4px;
      }
      .recommand-text {
        font-size: 0.7rem;
        padding: 0 5px;
        margin: 6px 0;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .recommand-num {
        margin: 8px 0;
        color: rgb(89, 90, 90);
        font-size: 0.55rem;
      }
    }
  }
}
.all-class {
  width: 100%;
  height: 100%;
  margin: 25px 0;
  .all-title {
    font-size: 0.95rem;
    font-weight: 550;
    width: 100%;
    height: 30px;
  }
  .all-item{
      display: flex;
      .item-img{
        flex: 0 0 25%;
        img{
          margin: 5px auto;
        }
      }
    }
    .item-title{
      font-size: 0.85rem;
      margin: 7px 0;
    }
    .item-center{
      div{
        display: inline-block;
        color: #5e5d5d;
        font-size: 0.65rem;
      }
    }
}
</style>

