function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)
    let computerChoice;
    if(num === 0){
        computerChoice = "rock";
    }
    else if(num === 1){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }
    document.getElementById("computer-choice").innerText = "Computer plays: " + computerChoice;
    return computerChoice;

}

function getHumanChoice(){
    const choiceButton = document.getElementById("choice-button");
    let input = document.getElementById("human-choice").value.toLowerCase();
    let humanChoice;

    choiceButton.addEventListener('click', function(){
        if(input === "rock" || input === "paper" || input === "scissors"){
            document.getElementById('choice').innerHTML=`You played ${input}`;
            humanChoice = input;
            getComputerChoice();
            playRound();
            return humanChoice;
        }
        else{
            document.getElementById('choice').innerHTML='Invalid'
            input = "";
        }
    });
    

}

function playRound(humanChoice, computerChoice){
    let humanScore = 0;
    let computerScore = 0;
    if(humanChoice === "rock" && computerChoice == "rock"){
        document.getElementById("play-round").innerText="Tied"
    }
    if(humanChoice === "rock" && computerChoice == "paper"){
        computerScore += 1;
        document.getElementById("play-round").innerText=`Computer wins! Computer score is now ${computerScore}`
    }
        //if computer plays paper, computer wins
            //computer score increases by 1
        //if computer plays scissors, player wins
            //player score increases by 1
    //player plays paper
        //if computer plays rock, player wins
            //player score increases by 1
        //if computer plays paper, tie
        //if computer plays scissors, computer wins
            //computer score increases by 1
    //player plays scissors
        //if computer plays rock, computer wins
            //computer score increases by 1
        //if computer plays paper, player wins
            //player score increases by 1
        //if computer plays scissors, tie
}


function playGame(){
    //if round is not greater than 5
        //playround
        //save score
    //return the score

    playRound()
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)