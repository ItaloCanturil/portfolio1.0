const title = document.querySelector('.main__name'),
      toggleInput = document.querySelector('.toggle'),
      $body = document.querySelector('body'),
      $header = document.querySelector('.header'),
      $menuNav = document.querySelectorAll('.nav__menu'),
      $figureCaption = document.querySelectorAll('.figure__caption'),

      
// Animation of the title name
function typeWriter(element){
  const textArray = element.innerHTML.split('');
  
  element.innerHTML = '';
  textArray.forEach((letra,i) => {
    setTimeout(() => element.innerHTML += letra, 250 * i)
  });
}

setInterval(() => typeWriter(title), 10000);

//switcher theme

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