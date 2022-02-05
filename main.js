let pairNum = 0
const main = document.querySelector('main')
function displayCards() {
  main.innerHTML = ``
  for (let i = 0; i < pairNum*2; i++) {
    main.innerHTML = main.innerHTML + `<div class="card">
    <div class="flipper">
    <div class="cardFront">
    <img src="media/front.png" alt="papagaio verde fofinho"/>
    </div>
    <div class="cardBack">
    ${backImgArr}
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
//<img src="media/bobrossparrot.gif" alt="gif de papagaio bob ross"/>
//<img src="media/explodyparrot.gif" alt=" gif de papagaio explosivo"/>
//<img src="media/fiestaparrot.gif" alt="gif de papagaio festeiro"/>
//<img src="media/metalparrot.gif" alt="gif de papagaio metaleiro"/>
//<img src="media/revertiparrot.gif" alt="gif de papagaio reverti"/>
//<img src="media/tripletsparrot.gif" alt="gif de tres papagaios"/>
//<img src="media/unicornparrot.gif" alt="gif de papagaio unicornio"/>
