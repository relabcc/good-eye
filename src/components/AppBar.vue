<template>
  <div class="nav-wrapper">
    <div class="app-bar">
      <div class="bar-left">
        <button @click="openMenu" class="bar-action">
          <svg :style="{ fill: colors.blue }" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </button>
      </div>
      <div class="bar-title">
        <span :style="{ color: colors.blue }" @click="titleClick" class="bar-action">
          《Good Eye 台北挑剔指南》
        </span>
      </div>
      <div class="bar-right">
        <button class="bar-action" @click="share">
          <svg :style="{ fill: colors.blue }" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import colors from '../config/colors';
import share from '../utils/share';
export default {
  data() {
    return {
      colors,
    };
  },
  methods: {
    openMenu() {
      this.$emit('openMenu');
    },
    titleClick() {
      this.$router.push('/');
    },
    share,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-wrapper {
  padding-top: 48px;
}

.app-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: white;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 2px rgba(0,0,0,.12),0 2px 2px rgba(0,0,0,.2);
}

.bar-action {
  cursor: pointer;
}

.bar-left {
  margin: 0 6px;
}

.bar-title {
  font-size: 16px;
  font-weight: bold;
}

.bar-right {
  margin: 0 6px;
}
</style>
