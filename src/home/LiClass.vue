<template>
  <div class="liclass">
    <div class="nav">
      <img :src="backBtn" @click="backTo" class="nav-img">
      <div class="nav-class">李里课堂</div>
    </div>
    <div class="second-nav">
      <div class="nav-item" @click.prevent="comName='DetailLiClass'">
        <div class="nav-item-text" :class="comName=='DetailLiClass'? 'titlered' :''">全部</div>
      </div>
      <div class="nav-item" @click.prevent="comName='GuoStudy'">
        <div class="nav-item-text"  :class="comName=='GuoStudy'? 'titlered' :''">国学精义</div>
      </div>
      <div class="nav-item" @click.prevent="comName='ThirteenClassics'">
        <div class="nav-item-text"  :class="comName=='ThirteenClassics'? 'titlered' :''">十三经</div>
      </div>
      <div class="nav-item" @click.prevent="comName='ThreeCharacter'">
        <div class="nav-item-text"  :class="comName=='ThreeCharacter'? 'titlered' :''">三字经</div>
      </div>
      <div class="nav-item" @click.prevent="comName='Confucianism'">
        <div class="nav-item-text"  :class="comName=='Confucianism'? 'titlered' :''">精讲儒释道</div>
      </div>
    </div>
    <component :is="comName"></component>
  </div>
</template>

<script>
import DetailLiClass from "../components/DetailLiClass.vue";
import GuoStudy from "../components/GuoStudy.vue";
import ThirteenClassics from "../components/ThirteenClassics.vue";
import ThreeCharacter from "../components/ThreeCharacter.vue";
import Confucianism from "../components/Confucianism.vue";
export default {
  name: "liclass",
  data() {
    return {
      backBtn: require("../assets/img/back.png"),
      comName: "DetailLiClass"
    };
  },
  methods: {
    backTo() {
      this.$router.back();
    }
  },
  components: {
    DetailLiClass,
    GuoStudy,
    ThirteenClassics,
    ThreeCharacter,
    Confucianism
  }
};
</script>

<style lang="scss" scoped>
.liclass{
  width: 94%;
  margin: 10px auto;
}
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
    width: 90%;
    line-height: 40px;
    text-align: center;
  }
}
.second-nav {
  width: 90%;
  height: 30px;
  line-height: 20px;
  margin: 13px auto 0 auto;
  .nav-item{
    height: 30px;
    display: inline-block;
    font-size: 0.85rem;
    margin: 0 5px;
    color: rgb(74, 75, 75);
  }
  .nav-item-text.titlered{
      color: red;
      border-bottom: 2px solid red;
  }
}
</style>

