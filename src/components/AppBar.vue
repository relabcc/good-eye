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
          {{messages.title}}
        </span>
      </div>
      <div class="bar-right">
        <a href="http://www.books.com.tw/products/0010791864" target="_blank" class="bar-action buy">
          <div :style="{ color: colors.blue }">{{messages.purchase}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import colors from '../config/colors';
import messages from '../config/messages';
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
  computed: {
    messages() {
      return messages[this.$store.state.locale].appBar;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: white;
  width: 100%;
  height: 48px;
  display: flex;
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
  flex: 1;
}

.bar-right {
  margin-left: 12px;
  margin-right: 12px;
  font-size: 12px;
}

.language-toggle {
  margin-right: 8px;
}

.buy {
  font-family: "Lantinghei TC", "Microsoft YaHei", sans-serif;
  text-decoration: none;
  white-space: pre;
}
</style>
