<template>
  <transition
    @before-leave="beforeLeave"
    @before-enter="beforeEnter"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      direction: 'next',
    };
  },
  /* eslint-disable no-param-reassign */
  methods: {
    beforeEnter(el) {
      const className = this.$router.direction === 'next' ? 'fadeInRight' : 'fadeInLeft';
      el.className = `animated ${className}`;
    },
    beforeLeave(el) {
      const className = this.$router.direction === 'next' ? 'fadeOutLeft' : 'fadeOutRight';
      el.className = `animated ${className}`;
    },
  },
};
</script>

<style scoped>
</style>
