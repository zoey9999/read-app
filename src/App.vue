<template>
  <div id="app">
    <router-view/>

    <div class="navFoot" v-show="footShow">
      <router-link to="/" tag="div" class="foot-item imghome">
        <div class="text">首页</div>
      </router-link>
      <router-link to="/videoseeding" tag="div" class="foot-item imgvideo">
        <div class="text">直播</div>
      </router-link>
      <router-link to="/meeting" tag="div" class="foot-item imgmeeting">
        <div class="meeting-circle">
          <img :src="centerCircle" width="20px" height="20px">
        </div>
        <div class="text">缘起会</div>
      </router-link>
      <router-link to="/database" tag="div" class="foot-item imgdata">
        <div class="text">资料库</div>
      </router-link>
      <router-link to="/mine" tag="div" class="foot-item imgmine">
        <div class="text">我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      footShow: true,
      centerCircle: require("./assets/img/center-circle.png")
    };
  },
  watch: {
    $route(e) {
      if (
        e.name == "home" ||
        e.name == "videoseeding" ||
        e.name == "meeting" ||
        e.name == "database" ||
        e.name == "mine"
      ) {
        this.footShow = true;
      } else {
        this.footShow = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
}
.navFoot {
  left: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  width: 100%;
  height: 50px;
  background-color: white;

  .foot-item {
    flex: 1;
    text-align: center;
  }
  .text {
    margin-top: 25px;
    font-size: 10px;
  }

  .imghome {
    background: url("./assets/img/home1.png") no-repeat top;
    background-size: 20px 20px;
    color: #9a9a9a;
    margin-top: 4px;
  }
  .imghome.active {
    background: url("./assets/img/home-red.png") no-repeat top;
    background-size: 20px 20px;
    color: red;
    margin-top: 4px;
  }
  .imgvideo {
    background: url("./assets/img/video.png") no-repeat top;
    background-size: 20px 20px;
    color: #9a9a9a;
    margin-top: 4px;
  }
  .imgvideo.active {
    background: url("./assets/img/video-red.png") no-repeat top;
    background-size: 20px 20px;
    color: red;
    margin-top: 4px;
  }
  .imgmeeting {
    color: #9a9a9a;
  }
  .imgmeeting.active {
    color: red;
  }
  .meeting-circle {
    margin-top: 0;
    width: 30px;
    height: 30px;
    background-color: red;
    border-radius: 50%;
    margin: -13px auto;
    img {
      margin-top: 5px;
    }
  }
  .imgdata {
    background: url("./assets/img/data.png") no-repeat top;
    background-size: 20px 20px;
    color: #9a9a9a;
    margin-top: 4px;
  }
  .imgdata.active {
    background: url("./assets/img/nor.png") no-repeat top;
    background-size: 20px 20px;
    color: red;
    margin-top: 4px;
  }
  .imgmine {
    background: url("./assets/img/mine.png") no-repeat top;
    background-size: 20px 20px;
    color: #9a9a9a;
    margin-top: 4px;
  }
  .imgmine.active {
    background: url("./assets/img/mine-red.png") no-repeat top;
    background-size: 20px 20px;
    color: red;
    margin-top: 4px;
  }
}
</style>
