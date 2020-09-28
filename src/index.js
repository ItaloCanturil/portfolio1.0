const toggleInput = document.querySelector('.toggle'),
      $body = document.querySelector('body'),
      $header = document.querySelector('.header'),
      $menuNav = document.querySelectorAll('.nav__menu'),
      $figureCaption = document.querySelectorAll('.figure__caption'),
      $portfolio = document.querySelector('.nav__portfolio');

toggleInput.addEventListener('change', () =>{
  switchTheme();
})

function switchTheme(){
  $body.classList.toggle('light--mode');
  $header.classList.toggle('header--light');

  $menuNav.forEach(item =>{
    item.classList.toggle('nav__menu--light')
  })

  $figureCaption.forEach(item =>{
    item.classList.toggle('figure__caption--light')
  })

}

$portfolio.addEventListener('click', () => {
  window.scrollTo({
    top: 640,
    behavior: 'smooth'
  });
})