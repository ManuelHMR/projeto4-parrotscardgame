let num = 0;
let myInterval;
let tick = document.querySelector(".clock");
let counter = document.querySelector(".moves");
let flipped = document.querySelectorAll(".flip");
let boardLocker = false;
const backImg0 =
  '<img src="media/bobrossparrot.gif" alt="gif de papagaio bob ross"/'
const backImg1 =
  '<img src="media/explodyparrot.gif" alt=" gif de papagaio explosivo"/>'
const backImg2 =
  '<img src="media/fiestaparrot.gif" alt="gif de papagaio festeiro"/>'
const backImg3 =
  '<img src="media/revertitparrot.gif" alt="gif de papagaio marujo"/>'
const backImg4 =
  '<img src="media/tripletsparrot.gif" alt="gif de tres papagaios"/>'
const backImg5 =
  '<img src="media/unicornparrot.gif" alt="gif de papagaio unicornio"/>'
const backImg6 =
  '<img src="media/metalparrot.gif" alt="gif de papagaio mateleiro"/>'
let backImgArr = [
  backImg0,
  backImg1,
  backImg2,
  backImg3,
  backImg4,
  backImg5,
  backImg6
]
backImgArr = backImgArr.sort(() => Math.random() - 0.5)
const main = document.querySelector('main')
gameSize()
function displayCards() {
  main.innerHTML = ``
  let selectedCards = []
  let j = 0
  for (let i = 0; i < num/2; i++) {
    selectedCards.push(backImgArr[i])
    selectedCards.push(backImgArr[i])
  }
  selectedCards = selectedCards.sort(() => Math.random() - 0.5)
  for (j = 0; j < selectedCards.length; j++) {
    let card = `<div class="card" onclick="flipCard(this)" data-identifier="card">
    <div class="cardFront">
    <img src="media/front.png" alt="papagaio verde fofinho"/ data-identifier="front-face">
    </div>
    <div class="cardBack" data-identifier="back-face">
    ${selectedCards[j]}
    </div>
    </div>`
    main.innerHTML += card
  }
}
 function gameTimer(){
  tick.innerHTML = parseInt(tick.innerHTML) + 1
 }
function gameSize() {
  num = parseInt(prompt(
    'Com quantas cartas deseja jogar? (4-14 cartas, pares)'
  ))
  while (num < 4 || num > 14 || num%2 != 0) {
    num = parseInt(
      prompt('Com quantos pares de cartas deseja jogar? (limite 4-14 cartas, pares)')
    )
  }
  displayCards()
  tick.innerHTML = 0;
  counter.innerHTML = 0;
  clearInterval(myInterval)
  myInterval = setInterval(gameTimer, 1000)
}
 function flipCard(e){
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
  let classCheck = e.classList.contains('selected')
  if (boardLocker === true){
    return;
  }
  if(classCheck === false){
    e.classList.add("selected")
  }
  let selected = document.querySelectorAll(".selected")
  if(selected.length === 1){}
  if(selected.length === 2){
    if(selected[0].innerHTML === selected[1].innerHTML){document.querySelectorAll(".selected").forEach(e => e.classList.remove("selected"))}
    if(selected [0].innerHTML !== selected[1].innerHTML){
      setTimeout(function(){
        document.querySelectorAll(".selected").forEach(e => e.classList.remove("flip"))
        document.querySelectorAll(".selected").forEach(e => e.classList.remove("selected"))},
        1000)
    }
  }
  if(selected.length >= 2){
    boardLocker = true;
    setTimeout(function(){
      boardLocker = false
    }, 1000)
  }
  e.classList.add("flip");
  flipped = document.querySelectorAll(".flip")
  checkFinish()
 }
function checkFinish(){
  if(flipped.length === num && flipped.length !== 0){
    setTimeout(victoryAlert, 1000)
  } 
}

function victoryAlert(){
  alert(`Você ganhou em ${counter.innerHTML} jogadas!

  Tempo de jogo: ${tick.innerHTML} segundos`)
  let restart = prompt('Deseja jogar novamente? (S ou N)')
  while(restart !== 'S'){
    restart = prompt('Deseja jogar novamente? (S ou N)')
  }
  gameSize()
}
