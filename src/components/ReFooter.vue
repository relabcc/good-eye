<template>
  <div class="footer">
    <span :style="{ color: colors.blue }">
      Made by </span>
    <a target="_black" href="https://relab.cc" :style="{ color: colors.blue }"><img :src="logo" alt="Re-lab"></a>
  </div>
</template>

<script>
import colors from '../config/colors';
import logo from '../assets/logo.png';
export default {
  data() {
    return {
      colors,
      logo,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  margin: 4px auto 12px;
  font-size: 12px;
}

@media screen and (min-width: 640px) {
  .footer {
    font-size: 14px;
  }
}

span {
  vertical-align: middle;
}

a {
  text-decoration: none;
  font-weight: bold;
}

img {
  height: 2em;
  width: auto;
}

</style>
