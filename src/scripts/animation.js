const title = document.querySelector('.main__name'),
      $language = document.querySelectorAll('.nav__lang');
      

function typeWriter(element){
  const textArray = element.innerHTML.split('');
  
  element.innerHTML = '';
  textArray.forEach((letra,i) => {
    setTimeout(() => element.innerHTML += letra, 250 * i)
  });
}

setInterval(() => typeWriter(title), 10000);

function switchLanguage(){
  const $title = document.querySelector('.main__title'),
        $description = document.querySelector('.main__description'),
        $about = document.querySelector('.nav__sobre');

  $language.forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.active').classList.remove('active');

      item.classList.add('active');

      const attr = item.getAttribute('language');
      
      $title.textContent = data[attr].title;
      $description.textContent = data[attr].description;
      $about.textContent = data[attr].about;
    })
  })
}

switchLanguage()

let data = {
  'portugues': {
    'title': 'Olá, meu nome é:',
    'description': 'Sou um apaixonado por estudar tecnologias Front-end e colocar esses estudos em prática.',
    'about': 'Sobre'
  },

  'english': {
    'title': 'Hello, my name is:',
    'description': 'I am passionate about studying Front-end technologies and putting these studies into practice.',
    'about': 'About me'
  } 
}