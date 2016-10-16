<template>
  <div class="walker"></div>
</template>

<style scoped>
.walker {
  width: 100%;
  padding-top: 112.847222%;
  background-image: url('../assets/walker.png');
  background-size: cover;
  animation: play 1.2s steps(8) infinite;
}

@keyframes play {
 from { background-position: 0; }
   to { background-position: 114.6%; }
}

</style>
