

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
  modalBtns = document.querySelectorAll('.services__button'),
  modalClose = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
  mb.addEventListener('click', () => {
    modal(i)
  })
})

modalClose.forEach(mc => {
  mc.addEventListener('click', () => {
    modalViews.forEach(mv => {
      mv.classList.remove('active-modal')
    })
  })
})



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  deplay: 400
  // reset: true
})

sr.reveal(``)
sr.reveal(`.home__handle,.home__data`, { deplay: 700 })
sr.reveal(`.home__social, .home__scroll`, { deplay: 900, origin: 'bottom' })
sr.reveal(``)
sr.reveal(` .homeCourse__title, .about`);
sr.reveal(`.skills__container, .footer__info`, { delay:500});
sr.reveal(`.home__search, .homeCourse__social`, { delay:600});
sr.reveal(`.services__container, .homeCourse__value`, { delay:700});
sr.reveal(`.home__images, .homeCourse__images, .card__article`, { delay:800, origin:'bottom'});
sr.reveal(`.logos__img, .steps__card, .questions__group`,{interval:100});
sr.reveal(`.value__images, .contact__content, .about__img`,{origin:'left'});
sr.reveal(`.value__content, .contact__images, .about__data`,{origin:'rigth'});