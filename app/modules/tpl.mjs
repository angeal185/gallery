import { x } from './xscript.mjs';
import { config } from './config.mjs';

window.lgImg = x('div', {class: 'lg-img'},
  x('span', {
    class: 'icon-cancel close-ico',
    onclick(evt){
      lgImg.classList.remove('fadeIn');
      lgImg.classList.add('fadeOut');
    }
  }),
  x('img', {class: 'img-fluid'})
)

window.mainImg = x('img', {
  class: 'img-fluid gal-sel',
  onclick(evt){
    console.log(lgImg)
    lgImg.lastChild.src = evt.target.src;
    lgImg.classList.add('fadeIn')
    lgImg.classList.remove('fadeOut');
  },
  onload(){
    if(!window.isLoaded){
      window.isLoaded = true;
      loader.classList.add('fadeOut');
      setTimeout(function(){
        loader.remove();
        window.loader = null;
        window.mainImg.onload = null;
        console.log('loaded')
      })
    }
  }
});


const tpl = {
  base(){
    let item = x('app-main',
      x('nav', {class: 'navbar navbar-expand-lg top-nav'},
        x('h3', 'Gallery')
      ),
      x('div', {class: 'container-fluid'},
        x('div', {class: 'text-center'},
          mainImg
        ),
        tpl.gallery()
      ),
      lgImg
    )

    return item;
  },
  gallery(){

    return x('div', {class: 'glide'},
      x('div', {class: 'glide__track', 'data-glide-el': 'track'},
        function(){
          let items = x('ul', {class: 'glide__slides'});
          for (let i = 0; i < config.galleryImg.length; i++) {
            items.append(x('li', {class: 'glide__slide'},
              x('img', {
                class: 'img-fluid gal-img sh-95',
                src: config.thumbDir + 'thumb-' + config.galleryImg[i],
                onclick(){
                  glide.index = i;
                  mainImg.src = config.galleryDir + config.galleryImg[i];
                }
              })
            ))
          }
          return items;
        }
      ),
      tpl.controlls()
    )
  },
  controlls(){
    return x('div', {class: 'glide__arrows', 'data-glide-el': 'controls'},
      x('button', {
        type: 'button',
        class: 'glide__arrow glide__arrow--left', 'data-glide-dir': '<'
      }, x('span', {class: 'icon-left-open'})),
      x('button', {
        class: 'glide__arrow glide__arrow--right',
        'data-glide-dir': '>'
      }, x('span', {class: 'icon-right-open'}))
    )
  }
}

export { tpl }
