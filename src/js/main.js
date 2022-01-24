const $viewImagesButton = document.querySelector('.js-view-images-button')
const $imageSlider = document.querySelector('.js-image-slider')
const $emblaNode = $imageSlider.querySelector('.js-embla')
const $captionContainer = $imageSlider.querySelector('.js-caption-container')
const $progress = $imageSlider.querySelector('.js-progress')
const $cursor = $imageSlider.querySelector('.js-cursor')
const images = $imageSlider.querySelectorAll('img')

const embla = EmblaCarousel($emblaNode, {
  align: 'start',
  loop: true,
})

document.addEventListener('mouseleave', () => {
  $cursor.style.opacity = 0
})

document.addEventListener('mouseenter', () => {
  $cursor.style.opacity = 1
})

$viewImagesButton.addEventListener('click', () => {
  $imageSlider.classList.remove('is-hidden')
})

$imageSlider.addEventListener('click', () => {
  if (window.innerWidth < 701) return

  switch ($cursor.dataset.hover) {
    case 'next':
      embla.scrollNext()
      break
    case 'prev':
      embla.scrollPrev()
      break
    case 'close':
      $imageSlider.classList.add('is-hidden')
      break
  }
})

document.addEventListener('mousemove', (event) => {
  const isHoveringImage = event.target.closest('.js-image-slider img')

  if (isHoveringImage) {
    if (event.clientX > window.innerWidth / 2) {
      $cursor.setAttribute('data-hover', 'next')
    } else {
      $cursor.setAttribute('data-hover', 'prev')
    }
  } else {
    $cursor.setAttribute('data-hover', 'close')
  }

  $cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
})

embla.on('select', update)
update()

imagesLoaded(document.body, () => {
  document.body.classList.remove('is-loading')
})

function update() {
  const index = embla.selectedScrollSnap()
  const $currentSlide = embla.slideNodes()[index]
  const $currentCaption = $currentSlide.querySelector('.js-caption')

  $progress.textContent = index + 1
  $captionContainer.innerHTML = $currentCaption.innerHTML
}
