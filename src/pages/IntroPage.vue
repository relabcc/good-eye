<template>
  <div>
    <h2 :style="{ color: colors.blue }">今天去哪裡好呢？</h2>
    <div class="intro-msg">
      <h3 :style="{ color: colors.grey }">動動手指選出喜歡的圖片，就能得到最適合你今日的推薦行程，準備好了嗎？</h3>
    </div>
    <div class="intro-img">
      <img src="static/man.png" />
    </div>
    <div class="action">
      <btn label="出發吧！" route="/question/1"></btn>
    </div>
  </div>
</template>

<script>
import colors from '../config/colors';
import Btn from '../components/Btn';
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
  width: 33.3%;
  margin: 28px auto;
}

.intro-img img {
  width: 100%;
}
</style>
