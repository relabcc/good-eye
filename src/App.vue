<template>
  <div id="app">
    <transition v-if="$store.state.animation" name="drawer">
      <drawer v-on:closeMenu="closeMenu" v-show="drawerOpen"></drawer>
    </transition>
    <div v-else>
      <drawer v-on:closeMenu="closeMenu" v-show="drawerOpen"></drawer>
    </div>
    <app-bar v-on:openMenu="openMenu"></app-bar>
    <div class="container">
      <div class="transition-wrapper">
        <transition-manager :transitionDirection="transitionDirection">
          <router-view></router-view>
        </transition-manager>
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import TransitionManager from './components/TransitionManager';

const data = {
  drawerOpen: false,
  transitionDirection: 'left',
};

let overlayDiv;
const hideOverlay = () => {
  if (!overlayDiv) return;
  overlayDiv.className = 'black-overlay';
  data.drawerOpen = false;
};
const initOverlay = () => {
  overlayDiv = document.createElement('div');
  overlayDiv.className = 'black-overlay';
  overlayDiv.addEventListener('click', hideOverlay);
  document.body.appendChild(overlayDiv);
};
const showOverlay = () => {
  if (!overlayDiv) {
    initOverlay();
  }
  overlayDiv.className += ' active';
};

export default {
  mounted() {
    window.setTimeout(() => {
      this.$el.className = 'show';
    }, 100, this);
  },
  components: {
    AppBar,
    Drawer,
    TransitionManager,
  },
  data() {
    return data;
  },
  methods: {
    openMenu() {
      this.drawerOpen = true;
      showOverlay();
    },
    closeMenu() {
      this.drawerOpen = false;
      hideOverlay();
    },
  },
};
</script>

<style lang="scss">
$font-family: "Lantinghei TC", "Microsoft YaHei", sans-serif;
html {
  height: 100%;
}

body {
  height: 100%;
  font-family: $font-family;
}

h1 {
  font-size: 32px;
  font-weight: bold;
  font-family: $font-family;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  font-family: $font-family;
}

h3 {
  font-size: 20px;
  font-weight: normal;
  font-family: $font-family;
}

p {
  font-size: 16px;
}

img {
  width: 100%;
}

#app {
  opacity: 0;
  text-align: center;
  height: 100%;
  transition: opacity 0.5s ease;
  overflow-x: hidden;
}

#app.show {
  opacity: 1;
}

.container {
  max-width: 640px;
  margin: 0 auto;
  padding: 0 14px;
  background: white;
}

.transition-wrapper > .animation-checker {
  position: relative;
}

.transition-wrapper > .animation-checker > div {
  width: 100%;
  position: absolute;
  top: 48px;
  left: 0;
}

.action {
  margin: 36px auto;
}

.black-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  background: black;
  transition: opacity 250ms ease-in-out;
}

.black-overlay.active {
  opacity: 0.5;
  z-index: 50;
  visibility: visible;
  transition: opacity 250ms ease-in-out;
}

</style>
