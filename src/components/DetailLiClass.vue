<template>
  <div>
    <div class="mrbooks-item">
      <div class="mrbooks-item-list">
        <img :src="liClass" width="100%">
      </div>
      <div class="mrbooks-item-right">
        <div class="mrbooks-item-title">清代《王阳明像》课</div>
        <div class="mrbooks-item-footer">
          <div class="mrbooks-item-time">开课时间： 2019-01-01</div>
          <div class="eyes-right">类型： 明道</div>
        </div>
      </div>
    </div>
    <!-- 复制以下三份 -->
    <div>
      <div class="mrbooks-item">
        <div class="mrbooks-item-list">
          <img :src="liclass1" width="100%">
        </div>
        <div class="mrbooks-item-right">
          <div class="mrbooks-item-title">清代《王阳明像》课浚县大伾山王阳明诗碑</div>
          <div class="mrbooks-item-footer">
            <div class="mrbooks-item-time">开课时间： 2019-01-01</div>
            <div class="eyes-right">类型： 蒙正</div>
          </div>
        </div>
      </div>
      <div class="mrbooks-item">
        <div class="mrbooks-item-list">
          <img :src="liClass" width="100%">
        </div>
        <div class="mrbooks-item-right">
          <div class="mrbooks-item-title">浚县大伾山王阳明诗碑</div>
          <div class="mrbooks-item-footer">
            <div class="mrbooks-item-time">开课时间： 2019-01-01</div>
            <div class="eyes-right">类型： 明道</div>
          </div>
        </div>
      </div>
      <div class="mrbooks-item">
        <div class="mrbooks-item-list">
          <img :src="liclass1" width="100%">
        </div>
        <div class="mrbooks-item-right">
          <div class="mrbooks-item-title">浚县大伾山王阳明诗碑</div>
          <div class="mrbooks-item-footer">
            <div class="mrbooks-item-time">开课时间： 2019-01-01</div>
            <div class="eyes-right">类型： 蒙正</div>
          </div>
        </div>
      </div>
    </div>
    <div class="read-more">查看更多 ></div>
    <div>
      <div class="li-answers">李里精彩问答</div>
      <div class="answers-item">
        <div class="answers-title">子非鱼，安知鱼之乐？</div>
        <div class="answers-dec">子非我，安知我不知鱼之乐？</div>
        <div class="answers-footer">
          <div>1,024赞同</div>
          <div>1,024评论</div>
        </div>
      </div>
    </div>
    <!-- 复制以下2份 -->
    <div>
      <div class="answers-item">
        <div class="answers-title">你不是鱼，怎么知道鱼的快乐呢？我不是你，本来就不知道你；你本来就不是鱼，你不知道鱼儿的快乐</div>
        <div class="answers-dec">
          庄子和朋友惠施出游，在濠水的一座桥梁上交谈。
          庄子看着水里的鲦鱼跃出说：“鲦鱼悠然自得，这是鱼的快乐啊。”
          惠子说：“你不是鱼，怎么知道鱼的快乐呢？”
          庄子说：“你不是我，怎么知道我不知道鱼的快乐呢？”
          惠子说：“我不是你，本来就不知道你；你本来就不是鱼，你不知道鱼儿的快乐，也是完全可以断定的。”
          庄子说：“请回到我们开头的话题。你说：‘你哪里知道鱼的快乐’等等，就是已经知道了我知道鱼跃出水面的快乐而问我，我是在濠水桥上知道的。”
        </div>
        <div class="answers-footer">
          <div>1,024赞同</div>
          <div>1,024评论</div>
        </div>
      </div>
      <div class="answers-item">
        <div class="answers-title">子非鱼，安知鱼之乐？</div>
        <div class="answers-dec">
          “鲦鱼悠然自得，这是鱼的快乐啊。”
          惠子说：“你不是鱼，怎么知道鱼的快乐呢？”
        </div>
        <div class="answers-footer">
          <div>1,024赞同</div>
          <div>1,024评论</div>
        </div>
      </div>
    </div>
    <div class="consult-teacher">请教老师</div>
    <div>
      <div class="li-answers">李里杂谈</div>
      <div>
        <div class="tolk-item">
          <div class="tolk-title">中国古代十大酒局</div>
          <div class="tolk-img">
            <img :src="liclass2">
            <img :src="liclass3">
            <img :src="liclass4">
          </div>
        </div>
      </div>
      <!-- 以下复制一份 -->
      <div>
        <div class="tolk-item">
          <div class="tolk-title">慈禧陵被盗的惊心动魄的过程</div>
          <div class="tolk-img">
            <img :src="liclass2">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailliclass",
  data() {
    return {
      liClass: require("../assets/img/liclass.png"),
      liclass1: require("../assets/img/liclass1.png"),
      liclass2: require("../assets/img/liclass2.png"),
      liclass3: require("../assets/img/liclass3.png"),
      liclass4: require("../assets/img/liclass4.png")
    };
  }
};
</script>
<style lang="scss" scoped>
.mrbooks-item {
  width: 100%;
  height: 50px;
  margin: 15px 0;
  display: flex;
  .mrbooks-item-list {
    flex: 0 0 22%;
  }
  .mrbooks-item-right {
    width: 100%;
    margin-left: 8px;
  }
  .mrbooks-item-title {
    font-size: 0.9rem;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .mrbooks-item-footer {
    width: 100%;
    height: 20px;
    display: flex;
    font-size: 12px;
    margin-top: 7px;
    color: rgb(109, 108, 108);
  }
  .mrbooks-item-time {
    flex: 0 0 68%;
  }
}
.read-more {
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: rgb(109, 109, 109);
  text-align: center;
  font-size: 0.9rem;
}
.li-answers {
  width: 100%;
  height: 30px;
  font-weight: 600;
  margin: 20px 0;
  font-size: 0.95rem;
}
.answers-item {
  width: 100%;
  height: 100%;
  margin: 10px 0;
  .answers-title {
    width: 100%;
    height: 18px;
    font-size: 0.8rem;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    text-overflow: -o-ellipsis-lastline;
    -webkit-box-orient: vertical;
  }
  .answers-dec {
    max-height: 48px;
    margin: 8px 0;
    font-size: 0.7rem;
    color: rgb(99, 98, 98);
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
  }
  .answers-footer {
    float: right;
    font-size: 0.7rem;
    color: rgb(99, 98, 98);
    margin-bottom: 20px;
    div {
      display: inline-block;
      margin-left: 10px;
    }
  }
}
.consult-teacher {
  width: 30%;
  height: 30px;
  line-height: 30px;
  color: red;
  text-align: center;
  font-size: 0.9rem;
  clear: both;
  margin: 0 auto;
}
.tolk-item {
  width: 100%;
  height: 100px;
  margin-bottom: 22px;
  .tolk-title {
    width: 100%;
    height: 20px;
    margin: 8px 0;
    font-size: 0.8rem;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    text-overflow: -o-ellipsis-lastline;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
  }
  .tolk-img {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      width: 29%;
    }
  }
}
</style>

