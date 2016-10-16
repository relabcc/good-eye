<template>
  <div class="status-wrapper">
    <div class="status-item" v-for="n in total">
      <transition name="man-move">
        <div v-show="n === current" class="status-man">
          <!-- <img :src="man"> -->
          <walker></walker>
        </div>
      </transition>
      <div
        class="circle"
        :style="circleStyle(n)"
        @click="goTo(n)"
      >
      </div>
    </div >
  </div>
</template>

<script>
import colors from '../config/colors';
import man from '../assets/man.png';
import Walker from './Walker';

export default {
  props: {
    total: Number,
    current: Number,
    goTo: {
      type: [Function, Boolean],
      default: false,
    },
  },
  components: {
    Walker,
  },
  data() {
    return {
      colors,
      man,
    };
  },
  methods: {
    circleStyle(n) {
      const {
        current,
      } = this;
      if (n === current) {
        return {
          borderColor: colors.blue,
          transform: 'scale(1.2)',
        };
      } else if (n < current) {
        return {
          background: colors.yellow,
          borderColor: colors.blue,
        };
      }
      return {
        borderColor: colors.grey,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.status-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 32px;
}

.status-item {
  width: 100%;
}

.status-man {
  margin-bottom: 16px;
}

.circle {
  border-width: 3px;
  border-style: solid;
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: transform 200ms ease-in-out,
    border-color 200ms ease-in-out,
    background 200ms ease-in-out;
  box-sizing: border-box;
}

.circle:hover {
  transform: scale(1.2);
  transition: transform 200ms ease-in-out;
}

.man-move-enter-active, .man-move-leave-active {
  transition: opacity 200ms ease;
}

.man-move-enter, .man-move-leave-active {
  opacity: 0;
}
</style>
