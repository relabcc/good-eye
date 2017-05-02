<template>
  <div v-if="result">
    <h1 :style="{ color: colors.blue }">{{title}}</h1>
    <h2 :style="{ color: colors.blue }">{{tours[result].location}}</h2>
    <div class="description">
      <p :style="{ color: colors.grey }">{{tours[result].description}}</p>
    </div>
    <div class="result-img">
      <sprite :tour="result" index="1"></sprite>
    </div>
    <div class="actions">
      <btn :label="messages.explore" :route="tourRoute"></btn>
      <btn :label="messages.about" route="/about"></btn>
    </div>
    <re-footer></re-footer>
  </div>
</template>

<script>
import { reduce } from 'lodash';

import ReFooter from '../components/ReFooter';
import Sprite from '../components/Sprite';
import Btn from '../components/Btn';
import colors from '../config/colors';
import { result as messages } from '../config/messages';
import tours from '../config/tours';

export default {
  beforeMount() {
    if (!Object.keys(this.$store.state.answers).length) {
      this.$router.push('/');
    }
    const { $store } = this;
    const max = {
      value: 0,
      key: null,
    };
    /* eslint-disable no-param-reassign */
    reduce($store.state.answers, (result, key) => {
      result[key] = (result[key] + 1) || 1;
      if (result[key] > max.value) {
        max.value = result[key];
        max.key = key;
      }
      return result;
    }, {});
    /* eslint-enable no-param-reassign */

    $store.commit('setResult', { result: max.key });
  },
  components: {
    Btn,
    ReFooter,
    Sprite,
  },
  data() {
    return {
      colors,
      tours,
      result: false,
      messages,
    };
  },
  computed: {
    result() {
      return this.$store.state.result;
    },
    tourRoute() {
      const { isMobile } = this.$store.state;
      return `/tour/${this.result}${isMobile.any ? '/1' : ''}`;
    },
    title() {
      const { title } = messages;
      return title.replace('%l', tours[this.result].direction);
    },
  },
};
</script>

<style scoped>
.description p {
  margin-bottom: -20px;
}

.result-img {
  width: 75%;
  margin: 0 auto;
}

.result-img img {
  width: 100%;
}
</style>
