const toggleInput = document.querySelector('.toggle'),
      $body = document.querySelector('body'),
      $header = document.querySelector('.header'),
      $figureCaption = document.querySelectorAll('.figure__caption'),
      $portfolio = document.querySelector('.nav__portfolio'),
      $about = document.querySelector('.nav__about'),
      $social = document.querySelectorAll('.fig__svg'),
      $lang = document.querySelectorAll('.nav__lang'),
      $modalOne = document.querySelector('.modal__card'),
      $modalSecond = document.querySelector('.modal__card--2');

toggleInput.addEventListener('change', () =>{
  switchTheme();
})

function switchTheme(){
  $body.classList.toggle('light--mode');
  $header.classList.toggle('header--light');
  $modalOne.classList.toggle('modal--light');
  $modalSecond.classList.toggle('modal--light-2');

  $social.forEach(item => {
    item.classList.toggle('svg-light')
  })
}

$about.addEventListener('click', () => {
  window.scrollTo({
    top: 640,
    behavior: 'smooth'
  });
})

$portfolio.addEventListener('click', () => {
  window.scrollTo({
    top: 1280,
    behavior: 'smooth'
  })
})

function switchLang(){
  const $aboutTitle = document.querySelector('.about__title'),
        $description = document.querySelector('.main__about'),
        $projects = document.querySelector('.portfolio__title'),
        $pomodoroDescription = document.querySelector('.card--1__description'),
        $skillsTitle = document.querySelector('.skills__title'),
        $skillText = document.querySelector('.skills__text'),
        $habitDescription = document.querySelector('.card--2__description');

  $lang.forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.active').classList.remove('active');

      item.classList.add('active');

      const attr = item.getAttribute('language');
      
      $aboutTitle.textContent = dados[attr].title;
      $description.textContent = dados[attr].description;
      $projects.textContent = dados[attr].project;
      $pomodoroDescription.textContent = dados[attr].countdown;
      $habitDescription.textContent = dados[attr].habit;
      $skillsTitle.textContent = dados[attr].skills;
      $skillText.textContent = dados[attr].text;
    });
  });
};

switchLang();

let dados = {
  'portugues': {
    'title': 'Sobre',
    'description': 'Um pouco sobre mim: Desde pequeno tenho muita curiosidade quando o assunto é tecnologia e dessa curiosidade surgio a paixão por computadores e games, eu amo ficar horas e horas sentado em frente ao computador jogando, estudando ou assistindo.',
    'project': 'Projetos',
    'countdown': 'Um cronometro para usar a técnica de estudos Pomodoro',
    'habit': 'Um projeto parecido com um To-do só que melhorado',
    'skills': 'Habilidades',
    'text': 'Através do meus estudos ganhei uma base sólida das skills do Front-end e com essa base tenho dedicado meu tempo livre para aplicar esses conceitos em cenarios reais e aplicações.'
  },

  'english': {
    'title': 'About me',
    'description': 'A little about myself: Since I was little I have a lot of curiosity when it comes to technology and from this curiosity arises the passion for computers and games, I love to spend hours and hours sitting at the computer studying, playing or watching.',
    'project': 'Projects',
    'countdown': 'A countdown that use the Pomodoro tecnic for studies',
    'habit': 'A project like a To-do list but better',
    'skills': 'Skills',
    'text': "Through my studies I've made a strong knowledge base and with it and through dedication I've improved creating real concept projects"
  } 
}