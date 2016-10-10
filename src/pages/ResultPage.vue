<template>
  <div v-if="result">
    <h1 :style="{ color: colors.blue }">就決定去 {{tours[result].direction}} 了</h1>
    <h2 :style="{ color: colors.blue }">{{tours[result].location}}</h2>
    <div class="description">
      <p :style="{ color: colors.grey }">{{tours[result].description}}</p>
    </div>
    <div class="result-img">
      <img :src="resultPic" />
    </div>
    <div class="actions">
      <btn label="立即探索" :route="tourRoute"></btn>
      <btn label="關於這個計畫" route="/about"></btn>
    </div>
  </div>
</template>

<script>
import { forEach, reduce } from 'lodash';

import Btn from '../components/Btn';
import colors from '../config/colors';
import tours from '../config/tours';

export default {
  beforeMount() {
    if (!Object.keys(this.$store.state.answers).length) {
      this.$router.push('/');
    }
  },
  components: { Btn },
  data() {
    return {
      colors,
      tours,
    };
  },
  computed: {
    result() {
      /* eslint-disable no-param-reassign */
      const sum = reduce(this.$store.state.answers, (result, value) => {
        result[value] = (result[value] + 1) || 1;
        return result;
      }, {});
      /* eslint-enable no-param-reassign */

      const max = {
        value: 0,
        key: null,
      };

      forEach(sum, (value, key) => {
        if (value > max.value) {
          max.value = value;
          max.key = key;
        }
      });

      return max.key;
    },
    resultPic() {
      return `static/${this.result}/1.png`;
    },
    tourRoute() {
      const { isMobile } = this.$store.state;
      return `/tour/${this.result}${isMobile.any ? '/1' : ''}`;
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
