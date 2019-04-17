<template>
  <div class="mrbooks">
    <div class="mrbooks-item">
      <div class="mrbooks-item-list">
        <img :src="mrbook" width="100%">
      </div>
      <div class="mrbooks-item-right">
        <div class="mrbooks-item-title">浚县大伾山王阳明诗碑</div>
        <div class="mrbooks-item-text">明宪宗成化八年（1472年），王守仁出身于浙江余姚一个显赫的家庭,王守仁出身于浙江余姚一个显赫的家庭</div>
        <div class="mrbooks-item-footer">
          <div class="mrbooks-item-author">作者： 王阳明</div>
          <div>
            <img :src="eyes" width="15px">
            <span class="eyes-right">1,024</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 以下复制的 -->
    <div class="mrbooks-item">
      <div class="mrbooks-item-list">
        <img :src="mrbooks" width="100%">
      </div>
      <div class="mrbooks-item-right">
        <div class="mrbooks-item-title">清代焦秉贞绘《王阳明像》清代焦秉贞绘《王阳明像》</div>
        <div class="mrbooks-item-text">王守仁出身于浙江余姚显赫的家庭</div>
        <div class="mrbooks-item-footer">
          <div class="mrbooks-item-author">作者： 王阳明</div>
          <div>
            <img :src="eyes" width="15px">
            <span class="eyes-right">1,024</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mrbooks-item">
      <div class="mrbooks-item-list">
        <img :src="mrbook" width="100%">
      </div>
      <div class="mrbooks-item-right">
        <div class="mrbooks-item-title">浚县大伾山王阳明诗碑</div>
        <div class="mrbooks-item-text">明宪宗成化八年（1472年），王守仁出身于浙江余姚一个显赫的家庭,王守仁出身于浙江余姚一个显赫的家庭</div>
        <div class="mrbooks-item-footer">
          <div class="mrbooks-item-author">作者： 王阳明</div>
          <div>
            <img :src="eyes" width="15px">
            <span class="eyes-right">1,024</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MrBooks",
  data() {
    return {
      mrbook: require("../assets/img/mrbook.png"),
      mrbooks: require("../assets/img/mrbook1.png"),
      eyes: require("../assets/img/eyes.png")
    };
  }
};
</script>

<style lang="scss" scoped>
.mrbooks {
  width: 97%;
  height: 100%;
  margin: 0 auto;
  .mrbooks-item {
    width: 100%;
    height: 80px;
    margin: 25px 0;
    display: flex;
    .mrbooks-item-list {
      flex: 0 0 33%;
    }
    .mrbooks-item-right {
      width: 100%;
      margin-left: 8px;
    }
    .mrbooks-item-title {
      font-size: 0.9rem;
      height: 20px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
    }
    .mrbooks-item-text {
      width: 100%;
      height: 36px;
      margin-top: 3px;
      font-size: 13px;
      color: rgb(109, 108, 108);
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
    }
    .mrbooks-item-footer {
      width: 100%;
      height: 20px;
      display: flex;
      font-size: 12px;
      margin-top: 4px;
    }
    .mrbooks-item-author {
      flex: 0 0 68%;
    }
    .eyes-right {
      color: rgb(109, 108, 108);
    }
  }
}
</style>

