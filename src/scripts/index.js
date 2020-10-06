const toggleInput = document.querySelector('.toggle'),
      $body = document.querySelector('body'),
      $header = document.querySelector('.header'),
      $figureCaption = document.querySelectorAll('.figure__caption'),
      $portfolio = document.querySelector('.nav__portfolio'),
      $lang = document.querySelectorAll('.nav__lang');

toggleInput.addEventListener('change', () =>{
  switchTheme();
})

function switchTheme(){
  $body.classList.toggle('light--mode');
  $header.classList.toggle('header--light');

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

function switchLang(){
  const $aboutTitle = document.querySelector('.about__title'),
        $description = document.querySelector('.main__about'),
        $history = document.querySelector('.main__history');

        console.log($description)
  $lang.forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.active').classList.remove('active');

      item.classList.add('active');

      const attr = item.getAttribute('language');
      
      $aboutTitle.textContent = dados[attr].title;
      $description.textContent = dados[attr].description;
      $history.textContent = dados[attr].history;
    });
  });
};

switchLang();

let dados = {
  'portugues': {
    'title': 'Sobre',
    'description': 'Um pouco sobre mim: Desde pequeno tenho muita curiosidade quando o assunto é tecnologia e dessa curiosidade surgio a paixão por computadores e games, eu amo ficar horas e horas sentado em frente ao computador jogando, estudando ou assistindo.',
    'history': 'Como eu comecei a programar: No meu curso técnico eu fui bolsista de iniciação cientifica onde eu tive contato com a IDE do arduino, codando em C, gostei como as coisas eram feitas e pesquisando mais eu comecei a estudar python porem não gostei muito, logo depois no começo da pandemia eu comecei a estudar a apostila da Caelum de HTML, CSS e Javascript e me apixonei pelas tecnologias Front-end onde o foco dos meu estudos está até hoje'
  },

  'english': {
    'title': 'About me',
    'description': 'A little about myself: Since I was little I have a lot of curiosity when it comes to technology and from this curiosity arises the passion for computers and games, I love to spend hours and hours sitting at the computer playing, studying or watching.',
    'history': "How I started programming: In my technical course I got a scientific initiation scholarship where I had contact with the Arduino IDE, coding in C, I liked how things were done and researching more I started studying python but I didn't like it very much, right after the beginning of the pandemic I I started studying Caelum's handout of HTML, CSS and Javascript and I fell in love with Front-end technologies where the focus of my studies is still today."
  } 
}