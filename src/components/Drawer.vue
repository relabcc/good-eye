<template>
  <div class="drawer">
    <div :style="{ color: colors.blue }" class="menu-title sub-header">Menu</div>
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
import MenuListItem from './MenuListItem';
export default {
  components: {
    MenuListItem,
  },
  data() {
    return {
      colors,
      menuItems: [
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
      ],
    };
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
  z-index: 100;
  background: white;
  /*border-right-width: 10px;*/
  /*border-right-style: solid;*/
}

.drawer-enter-active, .drawer-leave-active {
  transition: left 250ms ease-in-out;
}

.drawer-enter, .drawer-leave-active {
  left: -200px;
}

.menu-title {
  height: 48px;
  border-bottom: 1px solid #e0e0e0;
  padding-left: 12px;
  box-sizing: border-box;
  text-align: left;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /*color: white;*/
}
</style>
