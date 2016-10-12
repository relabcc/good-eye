<template>
  <dt v-if='title' :style="{ color: colors.blue }" class="menu-item" @click="click">{{title}}</dt>
</template>

<script>
import colors from '../config/colors';
export default {
  props: {
    title: String,
    onClick: Function,
  },
  data() {
    return {
      colors,
    };
  },
  methods: {
    click() {
      this.onClick();
      this.$emit('closeMenu');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-item {
  height: 48px;
  padding-left: 12px;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}
</style>
