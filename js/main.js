const menuIcon = document.querySelector('.menu__icon');
const body = document.querySelector('body');
const header = document.querySelector('.header');

menuIcon.addEventListener('click',(e)=>{
    body.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    const top = getCoords(header).top;
    if (top >=80) {
        header.classList.add('_header-scroll');
    } else {
        header.classList.remove('_header-scroll');
    }
})

const actionsHeader = document.querySelector('.actions-header');
const search = document.querySelectorAll('.actions-header__form')

if (actionsHeader) {
    document.addEventListener('click',(e) => {
        if (e.target.closest('.actions-header__form')) {
            e.preventDefault()
            actionsHeader.classList.add('_active');
        } else {
            actionsHeader.classList.remove('_active');
        }
    });
}



  const shop = document.querySelector('.shop');
  const goto = document.querySelector('.goto__button')
  
  if (shop && goto) {
    goto.addEventListener('click',(e) => {
      const headerHeight = document.querySelector('.header').offsetHeight || 0;
      const top = getCoords(shop).top;
      window.scrollTo({
        top: top-headerHeight,
        left: 0,
        behavior: "smooth",
      })
    });
  }

  function getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  }


  const catalogNavigation = document.querySelector('.catalog__navigation');
  const filterBackButton = document.querySelector('.filters__title');

  filterBackButton.addEventListener('click', (e) => {
    catalogNavigation.classList.remove('_active');
  })

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-open')) {
      catalogNavigation.classList.add('_active');
    } else {
      catalogNavigation.classList.remove('_active');
    }
  })





  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed:1000,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



