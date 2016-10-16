import spritesImg from '../spritesmith-generated/sprites.png';
import walker from '../assets/walker.png';
import logo from '../assets/logo.png';

function preloaderBg(img) {
  return `url(${img}) no-repeat -9999px -9999px`;
}

const dom = document.getElementById('preloader');
dom.style.background = [spritesImg, walker, logo].map(preloaderBg).join(',');
