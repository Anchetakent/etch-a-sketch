let container = document.querySelector('.js-container')
let resetButton = document.querySelector('.js-btn')

resetButton.addEventListener('click',function(){
  let userInput = prompt("Enter number of squares per side (max 100):");
  container.innerHTML = ""

  generateSquare(userInput);
  let divs = document.querySelectorAll('.generatedDiv');

  divs.forEach(function(square){
    square.addEventListener('mouseenter', function(){
      square.style.backgroundColor = 'lightblue'
    })
  })

  divs.forEach(function(squares){
    squares.style.width = (container.clientWidth / userInput + 'px')
    squares.style.height = (container.clientHeight / userInput + 'px')
  })
})

function generateSquare(px){
    for(let i = 0; i < px*px; i++){
    let j = document.createElement('div')
    j.classList.add('generatedDiv')
    container.appendChild(j);
  }
}
generateSquare(16);

let divs = document.querySelectorAll('.generatedDiv');

divs.forEach(function(squares){
  squares.style.width = (container.clientWidth / 16 + 'px')
  squares.style.height = (container.clientHeight / 16 + 'px')
})

divs.forEach(function(square){
  square.addEventListener('mouseenter', function(){
    square.style.backgroundColor = 'lightblue'
  })
})

