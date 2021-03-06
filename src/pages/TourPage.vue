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
        <div
          v-for="(spot, index) in spots"
          v-if="$route.params.id === index"
        >
          <h2 :style="{ color: colors.grey }">{{spot.time}}</h2>
        </div>
      </div>
      <div class="action" @click="goNext">
        <svg :style="{ fill: colors.blue }" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </div>
    <div class="tour-wrapper">
      <transition-manager>
        <div
          v-for="(spot, index) in spots"
          v-if="$route.params.id === index"
        >
          <div class="tour">
            <div class="description">
              <p :style="{ color: colors.blue }">{{spot.description}}</p>
            </div>
            <div class="img">
              <sprite :tour="direction" :index="~~index"></sprite>
            </div>
          </div>
        </div>
      </transition-manager>
    </div>
    <div class="status">
      <status-bar
        :total="spotLength"
        :current="~~$route.params.id"
        :goTo="goTo"
      ></status-bar>
    </div>
    <modal v-if="!$store.state.tourHinted && !$store.state.inTransition">
      <h3 slot="body" :style="{ color: colors.blue }">{{messages.hint}}</h3>
      <btn slot="footer" :action="hintRead">OK!</btn>
    </modal>
  </div>
</template>

<script>
import Hammer from 'hammerjs';

import ReFooter from '../components/ReFooter';
import Sprite from '../components/Sprite';
import StatusBar from '../components/StatusBar';
import Modal from '../components/Modal';
import Btn from '../components/Btn';
import TransitionManager from '../components/TransitionManager';

import colors from '../config/colors';
import tours from '../config/tours';
import messages from '../config/messages';

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
    Btn,
    Modal,
    StatusBar,
    TransitionManager,
    ReFooter,
    Sprite,
  },
  data() {
    return {
      colors,
    };
  },
  computed: {
    tours() {
      return tours[this.$store.state.locale];
    },
    direction() {
      return this.$route.params.direction;
    },
    spotLength() {
      return Object.keys(this.tours[this.direction].spots).length;
    },
    spots() {
      return this.tours[this.direction].spots;
    },
    messages() {
      return messages[this.$store.state.locale].tour;
    },
  },
  methods: {
    goBack() {
      const { $route, $router } = this;
      const { id } = $route.params;
      let index = parseInt(id, 10);
      if (--index > 0) {
        $router.push(`/tour/${this.direction}/${index}`);
      } else {
        $router.push('/result');
      }
    },
    goNext() {
      const { $route, $router } = this;
      const { id } = $route.params;
      let index = parseInt(id, 10);
      if (++index < this.spotLength) {
        $router.push(`/tour/${this.direction}/${index}`);
      } else {
        $router.push('/about');
      }
    },
    goTo(index) {
      this.$router.push(`/tour/${this.direction}/${index}`);
    },
    hintRead() {
      this.$store.commit('tourHint');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tour-wrapper {
  position: relative;
}

.tour-nav {
  margin-top: 14px;
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tour {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
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
  margin: -60px 0 0;
}

.status {
  margin-top: 20vw;
  position: relative;
  z-index: 20;
  padding-top: 100%;
}
</style>
