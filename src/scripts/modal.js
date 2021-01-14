const $modal = document.querySelector('.modal__card'),
      $modalTwo = document.querySelector('.modal__card--2'),
      $pomodoro = document.querySelector('.card--1__link'),
      $habitTracker = document.querySelectorAll('.card--2__link'),
      $close = document.querySelector('.card__close'),
      $closeTwo = document.querySelector('.card__close--2');

$pomodoro.addEventListener('click', () => {
  $modal.classList.toggle('modal-show')
})

$close.addEventListener('click', () => {
  $modal.classList.toggle('modal-show')
})

$habitTracker.addEventListener('click', () => {
  $modalTwo.classList.toggle('modal-show')
})

$closeTwo.addEventListener('click', () => {
  $modalTwo.classList.toggle('modal-show')
})