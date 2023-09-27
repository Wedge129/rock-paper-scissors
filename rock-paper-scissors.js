var scorePlayer = 0;
var scoreComputer = 0;
var rock, paper, scissors = false;

function getPlayersChoiceRock() {
    rock = true;
    paper = false;
    scissors = false;
    playersChoice();
}

function getPlayersChoicePaper() {
    paper = true;
    rock = false;
    scissors = false;
    playersChoice();
}

function getPlayersChoiceScissors() {
    scissors = true;
    rock = false;
    paper = false;
    playersChoice();
}

function playersChoice() {
    let choice;
    if (rock) {
        choice = 1;
    } else if (paper) {
        choice = 2;
    } else if (scissors) {
        choice = 3;
    }
    
    computerChoice(choice);
}

function computerChoice(choice) {

    let computer = Math.floor(Math.random() * 3 + 1);
    let computer2;

    switch (computer) {
        case 1:
            computer2 = "Rock";
            break;
        case 2:
            computer2 = "Paper";
            break;
        case 3:
            computer2 = "Scissors";
            break;

    }

    const showText = document.getElementById('computerGenerated');
    const text = document.createTextNode(computer2);
    showText.append('\n');
    showText.appendChild(text);
    show(computer,choice);

}


function show(computerChoice,playerChoice) {

    const showTextScore = document.getElementById('round');
    let text;
    if (playerChoice == computerChoice) {
        document.getElementById("win").style.display = 'none';
        document.getElementById("lost").style.display = 'none';
        text = document.createTextNode("Draw!");
        showTextScore.append('\n');
        showTextScore.appendChild(text);
    } else if ((playerChoice == 1 && computerChoice == 2) || (playerChoice == 2 && computerChoice == 3) || (playerChoice == 3 && computerChoice == 1)) {
        document.getElementById("lost").style.display = 'flex';
        document.getElementById("win").style.display = 'none';
        text = document.createTextNode("Computer Wins!");
        showTextScore.append('\n');
        showTextScore.appendChild(text);
        scoreComputer++;
        calculateScore();


    } else if ((playerChoice == 1 && computerChoice == 3) || (playerChoice == 2 && computerChoice == 1) || (playerChoice == 3 && computerChoice == 2)) {
        document.getElementById("win").style.display = 'flex';
        document.getElementById("lost").style.display = 'none';
        text = document.createTextNode("Player Wins!")
        showTextScore.append('\n');
        showTextScore.appendChild(text);
        scorePlayer++;
        calculateScore();

    }


}

function clearGame() {
    location.reload();
}

function calculateScore() {
    const showScorePlayer = document.getElementById('player');
    const showScoreComputer = document.getElementById('computer');
    showScoreComputer.replaceChildren("Computer : " + scoreComputer);
    showScorePlayer.replaceChildren("Player : " + scorePlayer);
    console.log(scorePlayer);
    console.log(scoreComputer);
    if(scorePlayer == 3 || scoreComputer ==3){ showWinner();}
   
}

function showWinner() {

    if (scorePlayer == 3) {
        alert("You win!!!");
        location.reload();
    } else if (scoreComputer == 3) {
        alert("You lose!!");
        location.reload();
    }
}