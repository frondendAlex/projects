// Бургер меню
let menuBurger = document.querySelector('.menu__burger'),
    menu = document.querySelector('.menu__item');

    menuBurger.addEventListener('click', () => {
      menu.classList.toggle('menu__active');
    });

// Projects tabs
let menuProjects = document.querySelectorAll('.projects__menu-text'),
    menuImg = document.querySelectorAll('.projects__wrap-item');

  for (i = 0; i < menuProjects.length; i++) {
    menuProjects[i].addEventListener('click', (event) => {

      for (let item of menuProjects) {
        item.addEventListener('click', () => {
          for (let elem of menuProjects) {
            elem.classList.remove('projects-active');
          }
          item.classList.add('projects-active');
        });
      };

      let menuShow = event.target.dataset.all;

      for (y = 0; y < menuImg.length; y++) {
        menuImg[y].style.display = 'none';

        if (menuShow === menuImg[y].dataset.img) {
          menuImg[y].style.display = 'block';

        } else if (menuShow === menuImg[y].dataset.alls) {
          menuImg[y].style.display = 'block';
        }
      }
    })
  }

// Scroll top
let scrollTop = document.querySelector('.scroll');

    window.addEventListener('scroll', () => {

      if (window.pageYOffset > 700) {
        scrollTop.classList.add('scroll-active');
      } else if (window.pageYOffset < 700) {
        scrollTop.classList.remove('scroll-active');
      }

      scrollTop.addEventListener('click', () => {
        window.scrollTo(0, 0);
      })
    });

// Window Show
const windowShow = document.querySelector('.block'),
       close = document.querySelector('.block__close'),
       overBody = document.body;

function windShow() {
  windowShow.classList.add('block-active');
  overBody.style.overflow = 'hidden';
}
setTimeout(windShow, 5000);

    close.addEventListener('click', () => {
      windowShow.style.display = 'none';
      overBody.style.overflow = '';
    });

// Слайдер
$(document).ready(function() {

  $('.services').slick({

    prevArrow: `<button type="button" class="services__btn services__prev"></button>`,
    nextArrow: `<button type="button" class="services__btn services__next"></button>`,

    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 980,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
});