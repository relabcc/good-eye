<template>
  <div class="sprite" :style="getStyle">
  </div>
</template>

<script>
import sprites from '../spritesmith-generated/sprites.json';
import spritesImg from '../spritesmith-generated/sprites.png';

export default {
  props: {
    tour: String,
    index: [String, Number],
  },
  computed: {
    getStyle() {
      const { size } = sprites.meta;
      const data = sprites.frames[`${this.tour}-${this.index}`].frame;
      const splice = {
        x: size.w / data.w,
        y: size.h / data.h,
      };
      const offset = {
        x: data.x / data.w * 100 / (splice.x - 1),
        y: data.y / data.h * 100 / (splice.y - 1),
      };

      return {
        backgroundPosition: `${offset.x}% ${offset.y}%`,
        backgroundSize: `${splice.x * 100}% ${splice.y * 100}%`,
        backgroundImage: `url('${spritesImg}')`,
      };
    },
  },
};
</script>

<style>

.sprite {
  width: 100%;
  padding-top: 100%;
}

</style>
