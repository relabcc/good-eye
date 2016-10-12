<template>
  <div class="drawer">
    <div :style="{ color: colors.grey }" class="menu-title sub-header">菜單</div>
    <nav>
      <dl>
        <menu-list-item
          v-for="item in menuItems"
          :title="item.title"
          :onClick="item.onClick"
          v-on:closeMenu="closeMenu"
        ></menu-list-item>
      </dl>
    </nav>
  </div>
</template>

<script>
import colors from '../config/colors';
import share from '../utils/share';

import MenuListItem from './MenuListItem';
export default {
  components: {
    MenuListItem,
  },
  data() {
    return {
      colors,
    };
  },
  computed: {
    menuItems() {
      const m1 = [
        {
          title: '回到首頁',
          onClick: () => {
            this.$router.push('/');
          },
        },
        {
          title: '關於這個計畫',
          onClick: () => {
            this.$router.push('/about');
          },
        },
      ];
      return m1.concat(this.$store.state.done && {
        title: '我的行程',
        onClick: () => {
          const {
            $store,
            $router,
          } = this;
          $router.push(`/tour/${$store.state.result}${$store.state.isMobile.any ? '/1' : ''}`);
        },
      }, {
        title: '分享出去',
        onClick: share,
      });
    },
  },
  methods: {
    closeMenu() {
      this.$emit('closeMenu');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.drawer {
  height: 100%;
  width: 200px;
  left: 0;
  position: fixed;
  z-index: 200;
  background: white;
  box-shadow: 0 0 3px rgba(0,0,0,.35),0 2px 2px rgba(0,0,0,.2);
}

.drawer-enter-active, .drawer-leave-active {
  transition: left 250ms ease-in-out;
}

.drawer-enter, .drawer-leave-active {
  left: -200px;
}

.menu-title {
  font-size: 20px;
  height: 48px;
  border-bottom: 1px solid #e0e0e0;
  padding-left: 12px;
  box-sizing: border-box;
  text-align: left;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
