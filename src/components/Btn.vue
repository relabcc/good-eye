<template>
  <div class="btn-wrapper">
    <button class="btn" @click="onClick" :style="btnStyle">{{label}}<slot></slot></button>
  </div>
</template>

<script>
import colors from '../config/colors';
export default {
  props: {
    label: String,
    action: {
      type: [Function, Boolean],
      default: false,
    },
    route: {
      type: [String, Boolean],
      default: false,
    },
    href: {
      type: [String, Boolean],
      default: false,
    },
  },
  data() {
    return {
      btnStyle: {
        color: colors.blue,
        borderColor: colors.blue,
      },
    };
  },
  methods: {
    onClick() {
      const {
        action,
        route,
        href,
        $router,
      } = this;
      if (route) {
        $router.push(route);
      } else if (action) {
        action();
      } else if (href) {
        window.open(href, '_blank');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-wrapper {
  margin-bottom: 16px;
}

.btn {
  border-width: 2px;
  border-style: solid;
  padding: 16px 32px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  transition: transform 100ms ease-in-out;
  box-sizing: border-box;
  font-family: "Noto Sans CJK TC", "source-han-sans-traditional", sans-serif;
}

.btn:hover {
  transform: scale(1.1);
  transition: transform 100ms ease-in-out;
}
</style>
