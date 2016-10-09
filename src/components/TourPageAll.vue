<template>
  <div>
    <div v-for="(spot, index) in spots">
      <h2 :style="{ color: colors.grey }">{{spot.time}}</h2>
      <div class="description">
        <p :style="{ color: colors.blue }">{{spot.description}}</p>
      </div>
      <img :src="'static/' + direction + '/' + index + '.png'">
    </div>
    <div class="action">
      <btn label="關於這個計畫" route="/about"></btn>
    </div>
  </div>
</template>

<script>
import colors from '../config/colors';
import tours from '../config/tours';
import Btn from './Btn';

export default {
  components: {
    Btn,
  },
  data() {
    return {
      colors,
    };
  },
  computed: {
    direction() {
      const { direction } = this.$route.params;
      return direction;
    },
    spots() {
      return tours[this.direction].spots;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.description {
  text-align: left;
  padding: 8px 36px;
}
.action {
  margin-bottom: 60px;
}
</style>
