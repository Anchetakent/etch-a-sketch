let container = document.querySelector('.js-container')


for(let i = 0; i < 256; i++){
  let j = document.createElement('div')
  j.classList.add('generatedDiv')
  container.appendChild(j);
}
let divs = document.querySelectorAll('.generatedDiv');

divs.forEach(function(squares){
  squares.style.width = (container.clientWidth / 16 + 'px')
  squares.style.height = (container.clientHeight / 16 + 'px')
 
})