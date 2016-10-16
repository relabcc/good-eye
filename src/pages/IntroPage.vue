<template>
  <div>
    <h2 :style="{ color: colors.blue }">今天去哪裡好呢？</h2>
    <div class="intro-msg">
      <p :style="{ color: colors.grey }">動動手指選出喜歡的圖片，就能得到最適合你今日的推薦行程，準備好了嗎？</p>
    </div>
    <div class="intro-img">
      <walker></walker>
    </div>
    <div class="action">
      <btn label="出發吧！" route="/question/1"></btn>
    </div>
    <re-footer></re-footer>
  </div>
</template>

<script>
import ReFooter from '../components/ReFooter';
import colors from '../config/colors';
import Btn from '../components/Btn';
import Walker from '../components/Walker';
import man from '../assets/man.png';
export default {
  components: {
    Btn,
    ReFooter,
    Walker,
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
    openMenu() {
      this.$emit('openMenu');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro-msg {
  padding: 0 16px;
  text-align: justify;
}

.intro-img {
  width: 45%;
  margin: 28px auto;
}

.intro-img img {
  width: 100%;
}
</style>
