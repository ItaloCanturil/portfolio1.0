const $modal = document.querySelector('.modal__card'),
      $pomodoro = document.querySelector('.card--1__link'),
      $close = document.querySelector('.card__close');

$pomodoro.addEventListener('click', () => {
  $modal.classList.toggle('modal-show')
})

$close.addEventListener('click', () => {
  $modal.classList.toggle('modal-show')
})