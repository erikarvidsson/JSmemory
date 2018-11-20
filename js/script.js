const hard = document.getElementById('hard');
const cardbox = document.createElement('article');
const article = document.querySelector('.cardbox');
let cardOne = '';
let cardTwo = '';
let count = 0;
let noMatch = null;
let delay = 600;



cardbox.setAttribute('class', 'cardbox');

hard.appendChild(cardbox);

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

let hardGame = cards.concat(cards);
hardGame.sort(() => 0.5 - Math.random());


hardGame.forEach(value =>{
  const card = document.createElement('div');


  card.classList.add('img');
  card.dataset.name = value.name;
  card.style.backgroundImage = `url(${value.img})`;
  cardbox.appendChild(card);


});


cardbox.addEventListener('click', function (event) {
  let clicked = event.target;
  if(clicked.nodeName === article || clicked === noMatch) {
    return;
  }

  if(count < 2){
    count++;
    if(count === 1){
      cardOne = clicked.dataset.name;
      clicked.classList.add('img-display');
    }
    else {
      cardTwo = clicked.dataset.name;
      clicked.classList.add('img-display');
    }
    if(cardOne !== '' && cardTwo !== ''){

    if(cardOne === cardTwo){
      setTimeout(match, delay);
      setTimeout(resetCard, delay);
    }else {
      setTimeout(resetCard, delay);
    }
  }
  noMatch = clicked;
}
});

if(cardOne === cardTwo){
}else{
}

const match = () => {
var selected = document.querySelectorAll('.img-display');
selected.forEach(card => {
  card.classList.add('img-match')
});
}

const resetCard = () => {
cardOne = '';
cardTwo = '';
count = 0;

var selected = document.querySelectorAll('.img-display');
selected.forEach(card => {
  card.classList.remove('img-display')
});
}
