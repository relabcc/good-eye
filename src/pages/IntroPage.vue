<template>
  <div>
    <h2 :style="{ color: colors.blue }">{{messages.title}}</h2>
    <div class="intro-msg">
      <p :style="{ color: colors.grey }">{{messages.content}}</p>
    </div>
    <div class="intro-img">
      <walker></walker>
    </div>
    <div class="action">
      <btn :label="messages.action" route="/question/1"></btn>
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
import messages from '../config/messages';

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
  computed: {
    messages() {
      return messages[this.$store.state.locale].intro;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro-msg {
  padding: 0 16px;
  text-align: center;
  white-space: pre;
}

.intro-img {
  width: 45%;
  margin: 28px auto;
}

.intro-img img {
  width: 100%;
}
</style>
