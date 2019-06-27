// Variables
let nbrTurn = 1;
let scoreIA = 0;
let scoreUser = 0;
const chifoumi = ["Rock", "Paper", "Scissors"];
const closedModal = document.querySelector('.closedModal');

//Divs pour InnerHTML
const totalScoreUser = document.querySelector('.scoreUser');
const totalScoreIA = document.querySelector('.scoreIA');
const result = document.querySelector('#result');
const modal = document.querySelector('#modal');
const modalBg = document.querySelector('.modal');
const imgChoiceUser = document.querySelector('.imgChoiceUser');
const imgChoiceIA = document.querySelector('.imgChoiceIA');

// Constantes boutons
const buttonRock = document.querySelector('.rock');
const buttonPaper = document.querySelector('.paper');
const buttonScissors = document.querySelector('.scissors');

//Ajout du score
totalScoreUser.innerHTML = "Score User : " + scoreUser;
totalScoreIA.innerHTML =  scoreIA + " : Score IA";

//Fonction score User :
function scoreUserTotal() {
    if (scoreUser < 3) {
        scoreUser += 1;
        totalScoreUser.innerHTML = "Score User : " + scoreUser;
        totalScoreIA.innerHTML =  scoreIA + " : Score IA";
        checkScore();
    }
}

function scoreIATotal() {
    if (scoreIA < 3) {
        scoreIA += 1;
        totalScoreUser.innerHTML = "Score User : " + scoreUser;
        totalScoreIA.innerHTML =  scoreIA + " : Score IA";
        checkScore();
    }
}

//Fonction checkScore
function checkScore() {
    if (scoreUser == 3) {
        modal.removeAttribute('id', 'modal');
        modalBg.textContent = 'Yay !! You defeated your opponent.';
        scoreUser = 0;
        scoreIA = 0;
        totalScoreUser.innerHTML = "Score User : " + scoreUser;
        totalScoreIA.innerHTML =  scoreIA + " : Score IA";
    } else if (scoreIA == 3) {
        modal.removeAttribute('id', 'modal');
        modalBg.textContent = 'Eww, you lost !!';
        scoreUser = 0;
        scoreIA = 0;
        totalScoreUser.innerHTML = "Score User : " + scoreUser;
        totalScoreIA.innerHTML =  scoreIA + " : Score IA";
    }
    return;
}

function reset() {
    setTimeout(function(){
        imgChoiceUser.setAttribute("src", "/img/loop.gif");
        imgChoiceIA.setAttribute("src", "/img/loop.gif");
        result.removeAttribute('class', 'resultInject');
        result.textContent ="";
    }, 1500);
} 

buttonRock.addEventListener('click', () => {
    // Nombre random entre 0 et 2 -> donc 3 possibilités
    const randomChifoumi = chifoumi[Math.floor(Math.random() * chifoumi.length)];
    imgChoiceUser.setAttribute("src", "/img/Rock.png");
    result.setAttribute('class', 'resultInject');
    switch (randomChifoumi) {
        case "Rock":
            imgChoiceIA.setAttribute("src", `/img/${randomChifoumi}.png`);
            result.textContent = "Damn, missed !";
            break;
        case "Paper":
            imgChoiceIA.setAttribute("src", `/img/${randomChifoumi}.png`);
            result.textContent = "Darn it. I lose !";
            scoreIATotal();
            break;
        case "Scissors":
            imgChoiceIA.setAttribute("src", `/img/${randomChifoumi}.png`);
            result.textContent = "Yay. I win !";
            scoreUserTotal();
            break;
    }
    reset();
});

buttonPaper.addEventListener('click', () => {
    // Nombre random entre 0 et 2 -> donc 3 possibilités
    const randomChifoumi = chifoumi[Math.floor(Math.random() * chifoumi.length)];
    imgChoiceUser.setAttribute("src", "/img/Paper.png");
    result.setAttribute('class', 'resultInject');
    switch (randomChifoumi) {
        case "Rock":
            imgChoiceIA.setAttribute("src", `/img/${randomChifoumi}.png`);
            result.textContent = "Yay. I win !";
            scoreUserTotal();
            break;
        case "Paper":
            imgChoiceIA.setAttribute("src", `/img/${randomChifoumi}.png`);
            result.textContent = "Damn, missed !";
            break;
        case "Scissors":
            imgChoiceIA.setAttribute("src", `/img/${randomChifoumi}.png`);
            result.textContent = "Darn it. I lose !";
            scoreIATotal();
            break;
    }
    reset();
});

buttonScissors.addEventListener('click', () => {
    // Nombre random entre 0 et 2 -> donc 3 possibilités
    const randomChifoumi = chifoumi[Math.floor(Math.random() * chifoumi.length)];
    imgChoiceUser.setAttribute("src", "/img/Scissors.png");
    result.setAttribute('class', 'resultInject');
    switch (randomChifoumi) {
        case "Rock":
            imgChoiceIA.setAttribute("src", `/img/${randomChifoumi}.png`);    
            result.textContent = "Yay. I win !";
            scoreIATotal();
            break;
        case "Paper":
            imgChoiceIA.setAttribute("src", `/img/${randomChifoumi}.png`);    
            result.textContent = "Darn it. I lose !!";
            scoreIATotal();
            break;
        case "Scissors":
            imgChoiceIA.setAttribute("src", `/img/${randomChifoumi}.png`);    
            result.textContent = "Damn, missed !";
            break;
    }
    reset();
});

closedModal.addEventListener('click', () => {
    modal.setAttribute('id', 'modal');
});