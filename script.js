//model
let app = document.getElementById('app');
let avatars = [
  'img/mario.png',
  'img/luigi.png',
  'img/peach.png',
  'img/yoshi.png',
]
let player = [
  {
    image: 'img/mario.png',
    name: 'Mario',
    hp: 200,
  },
  {
    image: 'img/luigi.png',
    name: 'Luigi',
    hp: 140,
  },
  {
    image: 'img/peach.png',
    name: 'Peach',
    hp: 100,
  },
  {
    image: 'img/yoshi.png',
    name: 'Yoshi',
    hp: 80,
  },
];
let selectedFighter1 = {};
let selectedFighter2 = {};


//View


updateView();

function updateView() {
  app.innerHTML = /*html*/ `
  <h1 style = "text-align: center">Slåssespill</h1>
  <div id= "playerAvatars">
    <div id="playerAvatarsLeft">${showPlayer1()}</div>
    <div id="playerAvatarsRight">${showPlayer2()}</div>
  </div>
  <div id="selectedFighter1"> <img src="${selectedFighter1.image}"/></div>
  <div id="selectedFighter2"> <img src="${selectedFighter2.image}"/></div>
`;
}

//Controller


function showPlayer1() {
  let html = ''
  for (i = 0; i < player.length; i++){
    html += /*html*/
      `<img class="player" onclick="selectFighter1(${i})" src="${player[i].image}"/>`;
  };
  return html;
}
function showPlayer2() {
  let html = ''
  for (i = 0; i < player.length; i++){
    html += /*html*/
      `<img class="player" onclick="selectFighter2(${i})" src="${player[i].image}"/>`;
  };
  return html;
}

function selectFighter1(i) {
  selectedFighter1 = player[i];
   updateView();
}

function selectFighter2(i) {
  selectedFighter2 = player[i];
   updateView();
}
