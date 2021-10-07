// *** Слайдер***

const slides = document.querySelectorAll('.gallary__slide')
const leftBtn = document.querySelector('.gallary__btn-left')
const rightBtn = document.querySelector('.gallary__btn-right')

let index =0

const activeSlide = (n)=>{
  for (slide of slides) {
    slide.classList.remove('gallary__slide-active')
  }
  slides[n].classList.add('gallary__slide-active')
}

const nextSlide =()=>{
  if (index==slides.length-1) {
    index=0
    activeSlide(index)
  } else {
    index++
    activeSlide(index)
  }
}

const prevSlide =()=>{
  if (index==0) {
    index==slides.length-1
    activeSlide(index)
  } else {
    index--
    activeSlide(index)
  }
}
leftBtn.addEventListener('click', prevSlide)
rightBtn.addEventListener('click', nextSlide)
