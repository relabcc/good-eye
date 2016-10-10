<template>
  <div class="status-wrapper">
    <div class="status-item" v-for="n in total">
      <div v-show="n === current" class="status-man">
        <img src="static/man.png">
      </div>
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
export default {
  props: {
    total: Number,
    current: Number,
    goTo: {
      type: [Function, Boolean],
      default: false,
    },
  },
  data() {
    return {
      colors,
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
  margin-bottom: 32px;
}

.circle {
  border-width: 3px;
  border-style: solid;
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: transform 100ms ease-in-out;
  box-sizing: border-box;
}

.circle:hover {
  transform: scale(1.2);
  transition: transform 100ms ease-in-out;
}
</style>
