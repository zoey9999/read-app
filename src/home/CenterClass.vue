<template>
  <div class="centerclass">
    <div class="nav">
      <img :src="backBtn" @click="backTo" class="nav-img">
      <div class="nav-class">课程中心</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'centerclass',
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
</style>

