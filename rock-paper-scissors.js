
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
    showScore(playerChoice,computer);

}


function showScore(playerChoice,computerChoice){
    
    const showTextScore=document.getElementById('round');
    let text;
    if(playerChoice == computerChoice){
        text = document.createTextNode("Draw!");
        showTextScore.append('\n');
        showTextScore.appendChild(text);

    }else if(playerChoice == 1 && computerChoice == 2){
        text= document.createTextNode("Computer Wins!");
        showTextScore.append('\n');
        showTextScore.appendChild(text);

    }else if(playerChoice == 1 && computerChoice ==3){
        text = document.createTextNode("Player Wins!")
        showTextScore.append('\n');
        showTextScore.appendChild(text);
     
    }

}

function clearScore(){
    const showTextScore =document.getElementById('round');
    text= document.createTextNode("");
    showTextScore.
}