const board = document.querySelector('#board')
const colors = ['#f1b668', '#c8f168', '#68f1af', '#68d8f1', '#df87f5', '#f58787']
const SQUARES_NUMBER = 600

for (let i=0; i <SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave',removeColor)

    board.append(square)
}

function setColor(event){
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 8px ${color}`
}
function removeColor(event){
    const element = event.target
    element.style.backgroundColor = '#515A3F'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(){
   return colors[Math.floor(Math.random()*colors.length)]
}