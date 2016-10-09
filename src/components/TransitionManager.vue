<!-- <template>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:after-enter="afterEnter"
    :name="transitionName"
  >
    <slot></slot>
  </transition>
</template> -->

<template>
  <div>
    <slot></slot>
  </div>
</template>


<script>
export default {
  methods: {
    beforeEnter() {
    },
    afterEnter() {
    },
  },
  props: {
    transitionName: String,
  },
};
</script>

<style scoped>
.slide-left-enter-active {
  position: absolute;
  right: 0;
  transition: right 0.5s ease;
  background: red;
}

.slide-left-leave-active {
  position: absolute;
  left: -100%;
  opacity: 0;
  transition: left 0.5s ease, opacity 0.5s ease;
  background: green;
}

.slide-left-enter {
  right: -100%;
}

.slide-left-leave {
  left: 0;
}

.slide-right-enter-active {
  position: absolute;
  left: 0;
  transition: left 0.5s ease;
  background: red;
}

.slide-right-leave-active {
  position: absolute;
  right: -100%;
  transition: right 0.5s ease;
  background: green;
}

.slide-right-enter {
  left: -100%;
}

.slide-right-leave {
  right: 0;
}
</style>
