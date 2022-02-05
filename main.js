let pairNum = 0

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

function displayCards() {
  main.innerHTML = ``
  let selectedCards = []
  let j = 0
  for (let i = 0; i < pairNum; i++) {
    selectedCards.push(backImgArr[i])
    selectedCards.push(backImgArr[i])
  }
  selectedCards = selectedCards.sort(() => Math.random() - 0.5)
  for (j = 0; j < selectedCards.length; j++) {
    let card = `<div class="card">
    <div class="flipper">
    <div class="cardFront">
    <img src="media/front.png" alt="papagaio verde fofinho"/>
    </div>
    <div class="cardBack">
    ${selectedCards[j]}
    </div>
    </div>
    </div>`
    main.innerHTML += card
  }
}
function gameSize() {
  pairNum = prompt(
    'Com quantos pares de cartas deseja jogar? (limite 2-7 pares)'
  )
  while (pairNum > 7 || pairNum < 2) {
    pairNum = parseInt(
      prompt('Com quantos pares de cartas deseja jogar? (limite 2-7 pares)')
    )
  }
  displayCards()
}
