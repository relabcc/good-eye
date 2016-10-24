<template>
  <div class="walker" :style="{ backgroundImage: `url(${walker})` }"></div>
</template>

<script>
import walker from '../assets/walker.png';

export default {
  data() {
    return {
      walker,
    };
  },
};
</script>

<style scoped>
.walker {
  width: 100%;
  padding-top: 112.847222%;
  background-size: cover;
  animation: play 1.1s steps(6) infinite;
}

@keyframes play {
 from { background-position: 0; }
   to { background-position: 120%; }
}

</style>
