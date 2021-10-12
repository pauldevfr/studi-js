//Déclaration des variables
let dice;
let diceGame = document.querySelector('.dice');
let diceSide = [1, 2, 3, 4, 5, 6];
let rollDice = document.querySelector('.roll');
let hold = document.querySelector('.hold');
let scoreRoundP1 = document.querySelector('.score-text-p1');
let scoreTotalP1 = document.querySelector('.score-p1');
let scoreRoundP2 = document.querySelector('.score-text-p2');
let scoreTotalP2 = document.querySelector('.score-p2');
let newg = document.querySelector('.newg');
let titlePlayer1 = document.querySelector('.titleP1');
let titlePlayer2 = document.querySelector('.titleP2');
let basicScoreP1 = 0;
let basicScoreP2 = 0;

// function du joueur 1
function player1 () {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
    let roll = getRandomInt(0, 6)
    dice = diceSide[roll];

    if (basicScoreP1 == 0) {
        scoreRoundP1.innerHTML = dice;
        basicScoreP1 = parseInt(scoreRoundP1.innerText);
    } else {
        scoreRoundP1.innerHTML = dice + basicScoreP1;
        basicScoreP1 = parseInt(scoreRoundP1.innerText);
    }

    if (dice == 1) {
        scoreTotalP1.innerHTML = parseInt(scoreTotalP1.innerText);
        scoreRoundP1.innerHTML = 0;
        basicScoreP1 = 0;
        rollDice.classList.remove ('P1');
        rollDice.classList.add('P2');
    } else {
        // ne fait rien
    }
};

// function du joueur 2
function player2 () {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
    let roll = getRandomInt(0, 6)
    dice = diceSide[roll];

    if (basicScoreP2 == 0) {
        scoreRoundP2.innerHTML = dice;
        basicScoreP2 = parseInt(scoreRoundP2.innerText);
    } else {
        scoreRoundP2.innerHTML = dice + basicScoreP2;
        basicScoreP2 = parseInt(scoreRoundP2.innerText);
    }

    if (dice == 1) {
        scoreTotalP2.innerHTML = parseInt(scoreTotalP2.innerText);
        scoreRoundP2.innerHTML = 0;
        basicScoreP2 = 0;
        rollDice.classList.remove ('P2');
        rollDice.classList.add('P1');
    } else {
        // ne fait rien
    }
};

// function restart
function newGame () {
    scoreRoundP1.innerHTML = 0;
    scoreRoundP2.innerHTML = 0;
    scoreTotalP1.innerHTML = 0;
    scoreTotalP2.innerHTML = 0;
    basicScoreP1 = 0;
    basicScoreP2 = 0;
}


// function ajouter les points et passer
function addPoint1 () {
        scoreTotalP1.innerHTML = parseInt(scoreRoundP1.innerText) + parseInt(scoreTotalP1.innerHTML);
        scoreRoundP1.innerHTML = 0;
        basicScoreP1 = 0;
        rollDice.classList.remove ('P1');
        rollDice.classList.add('P2');
        if (scoreTotalP1.innerText >= 100) {
            alert("Player 1 a gagner");
            newGame();
        } else {
            // ne fait rien
        }
}

function addPoint2 () {
        scoreTotalP2.innerHTML = parseInt(scoreRoundP2.innerText) + parseInt(scoreTotalP2.innerHTML);
        scoreRoundP2.innerHTML = 0;
        basicScoreP2 = 0;
        rollDice.classList.remove ('P2');
        rollDice.classList.add('P1');
        if (scoreTotalP2.innerText >= 100) {
            alert("Player 2 a gagner");
            newGame();
        } else {
            // ne fait rien
        }
}


// Fonction anonyme d'évenements
newg.addEventListener('click', () => {
    newGame();
})

rollDice.addEventListener('click', () => {
    if (rollDice.matches('.P1')) {
        player1();
        titlePlayer1.classList.add ('name-player');
        titlePlayer2.classList.remove ('name-player');
    } else if (rollDice.matches('.P2')) {
        player2();
        titlePlayer2.classList.add ('name-player');
        titlePlayer1.classList.remove ('name-player');
    }
    diceGame.innerHTML = dice;
});

hold.addEventListener('click', () => {
    if (rollDice.matches('.P1')) {
        addPoint1();
        titlePlayer2.classList.add ('name-player');
        titlePlayer1.classList.remove ('name-player');
    } else if (rollDice.matches('.P2')) {
        addPoint2();
        titlePlayer1.classList.add ('name-player');
        titlePlayer2.classList.remove ('name-player');
    }
})