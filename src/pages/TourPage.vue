<template>
  <div>
    <div class="tour-nav">
      <div class="action" @click="goBack">
        <svg :style="{ fill: colors.blue }" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
      <div class="time">
        <h2 :style="{ color: colors.grey }">{{spot.time}}</h2>
      </div>
      <div class="action" @click="goNext">
        <svg :style="{ fill: colors.blue }" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </div>
    <div class="description">
      <p :style="{ color: colors.blue }">{{spot.description}}</p>
    </div>
    <div class="img">
      <img :src="spot.img">
    </div>
    <div class="status">
      <status-bar
        :total="spotLength"
        :current="parseInt($route.params.id, 10)"
        :goTo="goTo"
      ></status-bar>
    </div>
  </div>
</template>

<script>
import Hammer from 'hammerjs';
import StatusBar from '../components/StatusBar';

import colors from '../config/colors';
import tours from '../config/tours';

export default {
  mounted() {
    this.hammertime = new Hammer(this.$el);
    this.hammertime.on('swipeleft', this.goNext);
    this.hammertime.on('swiperight', this.goBack);
  },
  beforeDestroy() {
    this.hammertime.off('swipeleft, swiperight');
  },
  components: {
    StatusBar,
  },
  data() {
    return {
      colors,
    };
  },
  computed: {
    spotLength() {
      const { direction } = this.$route.params;
      return Object.keys(tours[direction].spots).length;
    },
    spot() {
      const { direction, id } = this.$route.params;
      const isMobilePath = this.$store.state.isMobile.any ? '/mobile' : '';
      return {
        ...tours[direction].spots[id],
        img: `static${isMobilePath}/${direction}/${id}.png`,
      };
    },
  },
  methods: {
    goBack() {
      const { $route, $router } = this;
      const { direction, id } = $route.params;
      let index = parseInt(id, 10);
      if (--index > 0) {
        $router.push(`/tour/${direction}/${index}`);
      } else {
        $router.push('/result');
      }
    },
    goNext() {
      const { $route, $router } = this;
      const { direction, id } = $route.params;
      let index = parseInt(id, 10);
      if (++index < this.spotLength) {
        $router.push(`/tour/${direction}/${index}`);
      } else {
        $router.push('/about');
      }
    },
    goTo(index) {
      const { direction } = this.$route.params;
      this.$router.push(`/tour/${direction}/${index}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tour-nav {
  margin-top: 14px;
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.description {
  text-align: justify;
  padding: 8px 36px;
}

.action {
  cursor: pointer;
  margin: 0 8px;
}

.img {
  margin: -48px 0 -32px;
}
</style>
