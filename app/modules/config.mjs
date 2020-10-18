import { img } from '../data/img.mjs';

const config = {
  galleryDir: './app/img/gal/',
  thumbDir:  './app/img/thumb/',
  galleryImg: img,
  glide: {
    type: 'carousel',
    perView: 8,
    focusAt: 'center',
    breakpoints: {
      800: {
        perView: 6
      },
      600: {
        perView: 4
      }
    }
  }
}

export { config }
