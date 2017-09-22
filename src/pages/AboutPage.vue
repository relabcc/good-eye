<template>
  <div>
    <h2 :style="{ color: colors.blue }">{{messages.title}}</h2>
    <div class="description">
      <p :style="{ color: colors.grey }">
       {{messages.content}}</p>
    </div>
    <div class="intro-img">
      <img :src="man" />
    </div>
    <div class="action">
      <btn :label="messages.purchase" href="http://www.books.com.tw/products/0010743506"></btn>
      <btn :label="messages.share" :action="share"></btn>
      <btn :label="messages.facebook" href="https://www.facebook.com/goodeyetaipei/"></btn>
    </div>
    <re-footer></re-footer>
  </div>
</template>

<script>
import ReFooter from '../components/ReFooter';

import Btn from '../components/Btn';
import colors from '../config/colors';
import messages from '../config/messages';
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
  computed: {
    messages() {
      return messages[this.$store.state.locale].about;
    },
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
  text-align: center;
  margin: 0 16px;
}
</style>
