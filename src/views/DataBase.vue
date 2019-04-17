<template>
  <div class="database">
    <div class="data-nav">
      <div class="nav-item" @click.prevent="comName='MyNotes'">
        <div class="nav-item-text" :class="comName=='MyNotes'? 'titlered' :''">我的笔录</div>
        <div class="nav-item-red" v-show="comName=='MyNotes'"></div>
      </div>
      <div class="nav-item" @click.prevent="comName='UpcomingClass'">
        <div class="nav-item-text"  :class="comName=='UpcomingClass'? 'titlered' :''">课程预告</div>
        <div class="nav-item-red" v-show="comName=='UpcomingClass'"></div>
      </div>
      <div class="nav-item" @click.prevent="comName='MrBooks'">
        <div class="nav-item-text"  :class="comName=='MrBooks'? 'titlered' :''">先生书籍</div>
        <div class="nav-item-red" v-show="comName=='MrBooks'"></div>
      </div>
    </div>
    <component :is="comName"></component>
  </div>
</template>

<script>
import MyNotes from "../components/MyNotes.vue";
import UpcomingClass from "../components/UpcomingClass.vue";
import MrBooks from "../components/MrBooks.vue";
export default {
  name: "database",
  data() {
    return {
      comName: "MyNotes"
    };
  },
  components: {
    MyNotes,
    UpcomingClass,
    MrBooks
  }
};
</script>

<style lang="scss" scoped>
.data-nav {
  width: 100%;
  height: 40px;
  display: flex;
  .nav-item {
    flex: 1;
  }
  .nav-item-text.titlered{
      color: red;
  }
  .nav-item-text {
    width: 60%;
    height: 38px;
    margin: 0 auto;
    text-align: center;
    line-height: 40px;
    font-size: 0.93rem;
  }
  .nav-item-red {
    width: 49%;
    height: 2px;
    margin: 0 auto;
    background-color: red;
  }
}
</style>

