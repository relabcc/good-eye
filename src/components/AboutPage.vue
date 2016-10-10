<template>
  <div>
    <h2 :style="{ color: colors.blue }">關於這個計畫</h2>
    <div class="description">
      <h3 :style="{ color: colors.grey }">
        《Good Eye 台北挑剔指南》<br>
        第一本由台灣團隊製作的中英文設計旅遊書，為了讓這本書能順利在國內外上市，我們還需要同樣喜愛旅遊、認真生活，想讓世界認識真實台北的你，贊助此次計畫。請上嘖嘖網站理解更多細節！</h3>
    </div>
    <div class="intro-img">
      <img src="static/man.png" />
    </div>
    <div class="action">
      <btn label="分享出去" :action="share"></btn>
      <btn label="重新開始" route="/"></btn>
    </div>
  </div>
</template>

<script>
import Btn from './Btn';
import colors from '../config/colors';
import share from '../utils/share';
export default {
  components: {
    Btn,
  },
  data() {
    return {
      colors,
      btnStyle: {
        color: colors.blue,
        borderColor: colors.blue,
      },
    };
  },
  methods: {
    share,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro-img {
  width: 33.3%;
  margin: 28px auto;
}

.intro-img img {
  width: 100%;
}

.description {
  text-align: justify;
  margin: 0 8px;
}

@media screen and (min-width: 640px) {
  .description {
    margin: 0 16px;
  }
}
</style>
