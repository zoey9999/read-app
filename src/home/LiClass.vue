<template>
  <div class="liclass">
    <div class="nav">
      <img :src="backBtn" @click="backTo" class="nav-img">
      <div class="nav-class">李里课堂</div>
    </div>
    <!-- <div class="second-nav">
      <router-link to="/detailliclass" tag="div" class="nav-item">
        <div class="text">全部</div>
      </router-link>
      <router-link to="/guostudy" tag="div" class="nav-item">
        <div class="text">国学精义</div>
      </router-link>
      <router-link to="/meeting" tag="div" class="nav-item">
        <div class="text">十三经</div>
      </router-link>
      <router-link to="/database" tag="div" class="nav-item">
        <div class="text">三字经</div>
      </router-link>
      <router-link to="/mine" tag="div" class="nav-item">
        <div class="text">精讲儒释道</div>
      </router-link>
    </div>
    <router-view/> -->
    <div class="second-nav">
      <div class="nav-item" @click.prevent="comName='DetailLiClass'">
        <div class="nav-item-text" :class="comName=='DetailLiClass'? 'titlered' :''">全部</div>
        <div class="nav-item-red" v-show="comName=='DetailLiClass'"></div>
      </div>
      <div class="nav-item" @click.prevent="comName='GuoStudy'">
        <div class="nav-item-text"  :class="comName=='GuoStudy'? 'titlered' :''">国学精义</div>
        <div class="nav-item-red" v-show="comName=='GuoStudy'"></div>
      </div>
      <div class="nav-item" @click.prevent="comName='DetailLiClass'">
        <div class="nav-item-text"  :class="comName=='DetailLiClass'? 'titlered' :''">十三经</div>
        <div class="nav-item-red" v-show="comName=='DetailLiClass'"></div>
      </div>
      <div class="nav-item" @click.prevent="comName='DetailLiClass'">
        <div class="nav-item-text"  :class="comName=='DetailLiClass'? 'titlered' :''">三字经</div>
        <div class="nav-item-red" v-show="comName=='DetailLiClass'"></div>
      </div>
      <div class="nav-item" @click.prevent="comName='DetailLiClass'">
        <div class="nav-item-text"  :class="comName=='DetailLiClass'? 'titlered' :''">精讲儒释道</div>
        <div class="nav-item-red" v-show="comName=='DetailLiClass'"></div>
      </div>
    </div>
    <component :is="comName"></component>
  </div>
</template>

<script>
import DetailLiClass from "../components/DetailLiClass.vue";
import GuoStudy from "../components/GuoStudy.vue";
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
    GuoStudy
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
.second-nav {
  width: 90%;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  .nav-item{
    height: 30px;
    display: inline-block;
    font-size: 0.7rem;
    margin: 0 5px;
    color: rgb(74, 75, 75);
  }
  .nav-item-text.titlered{
      color: red;
      border-bottom: 2px solid red;
  }
}
</style>

