<template>
  <div>
    <h2 :style="{ color: colors.blue }">支持《Good Eye 台北挑剔指南》</h2>
    <div class="description">
      <p :style="{ color: colors.grey }">
       為了讓本書順利在國內外上市，請上嘖嘖贊助此次計畫，跟著指南一起探索台北吧！</p>
    </div>
    <div class="intro-img">
      <img :src="man" />
    </div>
    <div class="action">
      <btn label="前往贊助" route="/"></btn>
      <btn label="分享出去" :action="share"></btn>
    </div>
    <re-footer></re-footer>
  </div>
</template>

<script>
import ReFooter from '../components/ReFooter';

import Btn from '../components/Btn';
import colors from '../config/colors';
import share from '../utils/share';
import man from '../assets/man.png';

export default {
  components: {
    Btn,
    ReFooter,
  },
  data() {
    return {
      colors,
      btnStyle: {
        color: colors.blue,
        borderColor: colors.blue,
      },
      man,
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
  margin: 0 16px;
}
</style>
