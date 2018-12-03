const hard = document.getElementById('hard');
const cardbox = document.createElement('article');
const article = document.querySelector('.cardbox');
const counter = document.querySelector('.counter')
var clear = document.querySelectorAll('.img-match');
var unclear = document.querySelectorAll('.img');
let cardOne = '';
let cardTwo = '';
let count = 0;
let clickcount = 0;
let noMatch = null;
let delay = 600;
let pairs = 0;
const resetBtn = document.querySelector('reset-btn');

cardbox.setAttribute('class', 'cardbox');

hard.appendChild(cardbox);

// Array of cards
const cards = [
  { 'name': 'bild1',
    'img': 'img/1.png'},
  { 'name': 'bild2',
    'img': 'img/2.png'},
  { 'name': 'bild3',
    'img': 'img/3.png'},
  { 'name': 'bild4',
    'img': 'img/4.png'},
  { 'name': 'bild5',
    'img': 'img/5.png'},
  { 'name': 'bild6',
    'img': 'img/6.png'},
  { 'name': 'bild7',
    'img': 'img/7.png'},
  { 'name': 'bild8',
    'img': 'img/8.png'},
  { 'name': 'bild9',
    'img': 'img/9.png'},
  { 'name': 'bild10',
    'img': 'img/10.png'},
];

// Duplicates the same array of cards
let hardGame = cards.concat(cards);
hardGame.sort(shuffle);

const hardGameLenght = hardGame.length/ 2;


function makeCards(){
hardGame.forEach(value =>{
  const card = document.createElement('div');
  card.classList.add('cards');
  card.dataset.name = value.name;

  const front = document.createElement('div');
  front.classList.add('front');
  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${value.img})`;

  card.classList.add('img');
  card.dataset.name = value.name;
  card.style.backgroundImage = `url(${value.img})`;
  cardbox.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});}

makeCards(hardGame);

// removeCards(hardGame);
const removeCards = () => {
  cardbox.innerHTML = "";
}


// Make cards clickable and alble to match
cardbox.addEventListener('click', function (event) {
  let clicked = event.target;
  if(clicked.parentNode.matches('.cards') || clicked === noMatch) {
    if(count < 2){
      count++;
      clickcount++;
      if(count === 1){
        cardOne = clicked.parentNode.dataset.name;
        console.log(cardOne);
        clicked.parentNode.classList.add('img-display');
        clicked.classList.remove('front');
      }
      else {
        cardTwo = clicked.parentNode.dataset.name;
        console.log(cardTwo);
        clicked.parentNode.classList.add('img-display');
        clicked.classList.remove('front');
      }
      if(cardOne !== '' && cardTwo !== ''){
        if(cardOne === cardTwo){
          pairs ++;
          setTimeout(match, delay);
          setTimeout(resetCard, delay);
        }else {
          setTimeout(resetCard, delay);
        }
    }
    };
    noMatch = clicked;
  }
    counter.innerHTML = clickcount;


  if(pairs === hardGameLenght){
   pairs = 0;
   cardbox.insertAdjacentHTML('beforeend','<div class="reset"><button class="reset-btn">NICE! <br> Play again</button></div>');
   document.querySelector('.reset-btn').addEventListener('click', resetGame);
  }
});

// Clickcounter
counter.innerHTML = clickcount;

// Shuffle cards
function shuffle() {
    return 0.5 - Math.random();
}

// Add matched css to matched cards
const match = () => {
var selected = document.querySelectorAll('.img-display');
selected.forEach(card => {
  card.classList.add('img-match');
});
}

// Resets chosen cards if not matched
const resetCard = () => {
cardOne = '';
cardTwo = '';
count = 0;

var selected = document.querySelectorAll('.img-display');
selected.forEach(card => {
  card.classList.remove('img-display');
  card.firstChild.classList.add('front');
});
}

// Resets game after you win and press the reset button
const resetGame = () => {
  var selected = document.querySelectorAll('.img-match');
  selected.forEach(card => {
    card.classList.remove('img-match');
    card.firstChild.classList.add('front');
  });
    cardbox.removeChild(cardbox.querySelector('.reset'));
    removeCards(hardGame);
    hardGame.sort(shuffle);
    makeCards(hardGame);
    clickcount = 0;
}
