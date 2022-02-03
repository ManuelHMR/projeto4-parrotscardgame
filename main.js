let pairNum = 0
const main = document.querySelector('main')
function displayCards() {
  main.innerHTML = ``
  for (let i = 0; i < pairNum*2; i++) {
    main.innerHTML = main.innerHTML + `<div class="card">
    <div class="flipper">
    <div class="cardFront">
    <img class="frontImg" src="media/front.png" alt="papagaio verde fofinho"/>
    </div>
    <div class="cardBack">
    <img class="frontImg" src="media/bobrossparrot.gif" alt="papagaio verde fofinho"/>
    </div>
    </div>
    </div>`
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
