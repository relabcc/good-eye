<template>
  <div>
    <h2 :style="{ color: colors.blue }">{{location}}</h2>
    <div v-for="(spot, index) in spots">
      <h2 :style="{ color: colors.grey }">{{spot.time}}</h2>
      <div class="description">
        <p :style="{ color: colors.blue }">{{spot.description}}</p>
      </div>
      <div class="img">
        <img :src="'static/' + isMobile + direction + '/' + index + '.png'">
      </div>
    </div>
    <div class="action">
      <btn label="關於這個計畫" route="/about"></btn>
    </div>
  </div>
</template>

<script>
import Btn from '../components/Btn';
import colors from '../config/colors';
import tours from '../config/tours';

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
    isMobile() {
      const { isMobile } = this.$store.state;
      return isMobile.any ? 'mobile/' : '';
    },
    direction() {
      const { direction } = this.$route.params;
      return direction;
    },
    location() {
      return tours[this.direction].location;
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

.img {
  margin: -48px 0;
}
</style>
