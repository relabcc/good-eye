<template>
  <div class="animation-checker">
    <transition
      v-if="$store.state.animation"
      @before-leave="beforeLeave"
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
    >
      <slot></slot>
    </transition>
    <slot v-else></slot>
  </div>
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
    afterEnter() {
      this.$store.commit('transitionEnd');
    },
    beforeEnter(el) {
      const className = this.$router.direction === 'next' ? 'fadeInRight' : 'fadeInLeft';
      el.className = `animated ${className}`;
    },
    beforeLeave(el) {
      this.$store.commit('transitionStart');
      const className = this.$router.direction === 'next' ? 'fadeOutLeft' : 'fadeOutRight';
      el.className = `animated ${className}`;
    },
  },
};
</script>
