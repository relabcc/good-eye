<template>
  <div>
    <h2 :style="{ color: colors.blue }">{{location}}</h2>
    <div v-for="(spot, index) in spots">
      <h2 :style="{ color: colors.grey }">{{spot.time}}</h2>
      <div class="description">
        <p :style="{ color: colors.blue }">{{spot.description}}</p>
      </div>
      <div class="img">
        <sprite :tour="direction" :index="~~index"></sprite>
      </div>
    </div>
    <div class="action">
      <btn :label="messages.about" route="/about"></btn>
    </div>
    <re-footer></re-footer>
  </div>
</template>

<script>
import ReFooter from '../components/ReFooter';
import Sprite from '../components/Sprite';
import Btn from '../components/Btn';
import colors from '../config/colors';
import tours from '../config/tours';
import { result as messages } from '../config/messages';

export default {
  components: {
    Btn,
    ReFooter,
    Sprite,
  },
  data() {
    return {
      colors,
      messages,
    };
  },
  computed: {
    isMobilePath() {
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
