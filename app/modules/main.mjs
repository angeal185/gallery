
import { x } from './xscript.mjs';

document.head.append(
  x('link', {rel: 'stylesheet', href: './app/css/main.min.css'})
)

window.loader = x('div', {class: 'loader'},
  x('div', {class: 'gooey'},
    x('div', {class: 'ball ball-1'}),
    x('div', {class: 'ball ball-2'})
  )
)

document.body.append(loader)

import { config } from './config.mjs';
import { tpl } from './tpl.mjs';
import Glide from './glide.mjs';

//for i in *.jpg; do convert "$i" -resize 800 "$i"; done

// for i in *.jpg; do jpegoptim --size=250k "$i"; done


const app = {
  load(){

    document.body.append(tpl.base())
    window.glide = new Glide('.glide', config.glide)
    .on(['move.after'], function() {
      mainImg.src = config.galleryDir + config.galleryImg[glide.index];
    })
    .mount()
  },
  init(){
    let sel = this;
    window.onload = function(){
      sel.load()
    }
  }
}


app.init()
