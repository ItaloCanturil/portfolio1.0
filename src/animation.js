const title = document.querySelector('.main__name');

function typeWriter(element){
  const textArray = element.innerHTML.split('');
  
  element.innerHTML = '';
  textArray.forEach((letra,i) => {
    setTimeout(() => element.innerHTML += letra, 250 * i)
  });
}

setInterval(() => typeWriter(title), 10000);
