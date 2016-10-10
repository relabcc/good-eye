<template>
  <div id="app">
    <transition name="drawer">
      <drawer v-on:closeMenu="closeMenu" v-show="drawerOpen"></drawer>
    </transition>
    <app-bar v-on:openMenu="openMenu"></app-bar>
    <div class="container">
      <transition-manager :transitionDirection="transitionDirection">
        <router-view></router-view>
      </transition-manager>
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

<style>
html {
  height: 100%;
}

body {
  height: 100%;
}

h1, .heading {
  font-size: 36px;
  font-weight: bold;
}

h2, .header {
  font-size: 28px;
  font-weight: bold;
}

h3, .sub-header {
  font-size: 20px;
  font-weight: normal;
}

p {
  font-size: 16px;
}

img {
  width: 100%;
}

.action {
  margin: 36px auto;
}

#app {
  font-family: sans-serif;
  text-align: center;
  height: 100%;
}

.container {
  max-width: 640px;
  height: 100%;
  margin: 0 auto;
  z-index: 1;
  padding: 0 14px;
  background: white;
  position: relative;
}

.container > div {
  width: 100%;
  position: absolute;
  top: 48px;
  left: 0;
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
  opacity: 0.7;
  z-index: 50;
  visibility: visible;
  transition: opacity 250ms ease-in-out;
}

</style>
