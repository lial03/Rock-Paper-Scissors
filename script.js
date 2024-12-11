const choose=["rock","paper","scissors"];
const player=document.getElementById("player");
const computer=document.getElementById("computer");
const result=document.getElementById("result");
const playerscore=document.getElementById("playerscore");
const compscore=document.getElementById("compscore");
let playerScore=0;
let compScore=0;

function shoot(playerchoice){
    const compchoice=choose[Math.floor(Math.random()*3)];
    let results="";
    if(playerchoice===compchoice){
        results="A TIE!";
    }
    else{
        switch(playerchoice){
            case "rock":
                results=(compchoice==="scissors") ? "YOU WON!": "YOU LOST!";
                break;
            case "paper":
                results=(compchoice==="rock") ? "YOU WON!": "YOU LOST!";
                break;
            case "scissors":
                results=(compchoice==="paper") ? "YOU WON!": "YOU LOST!";
                break;
        }
    }

    player.textContent=`Player: ${playerchoice}`;
    computer.textContent=`Computer: ${compchoice}`;
    result.textContent=results;

    result.classList.remove("win","lose");

    switch(results){
        case "YOU WON!":
            result.classList.add("win");
            playerScore++;
            playerscore.textContent=playerScore;
            break;
        case "YOU LOST!":
            result.classList.add("lose");
            compScore++;
            compscore.textContent=compScore;
            break;
    }
}