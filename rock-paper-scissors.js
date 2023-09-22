var scorePlayer = 0;
var scoreComputer = 0;

function submit() {
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");
    let playerChoice;
    if (rock.checked) {
        playerChoice = 1;
        rock.checked = false;
        computerChoice(playerChoice);
    } else if (paper.checked) {
        playerChoice = 2;
        paper.checked = false;
        computerChoice(playerChoice);
    } else if (scissors.checked) {
        playerChoice = 3;
        scissors.checked = false;
        computerChoice(playerChoice);
    } else {
        console.log("Nothing is selected");
        return;
    }

}

function clearSelection() {

    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");
    if (rock.checked || paper.checked || scissors.checked) {
        rock.checked = false;
        paper.checked = false;
        scissors.checked = false;
    }
}

function computerChoice(playerChoice) {

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
    show(playerChoice, computer);

}


function show(playerChoice, computerChoice) {

    const showTextScore = document.getElementById('round');
    let text;
    let test;
    let winner;
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
    showWinner();
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