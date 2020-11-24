let computerScore = 0;
let playerScore = 0;


//Computer's Choice
function computerPlay() {
    let choices = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex];
}

//Scores to Count
let player = document.querySelector('#playercounter');
let computer = document.querySelector('#computercounter');

//Results to Print
let result = document.querySelector('.results');

//Game
function playRound(playerSelection,computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
   ) {
       playerScore =  ++playerScore;
       player.textContent=playerScore
       result.textContent = `Player wins, ${playerSelection} beats ${computerSelection}.`
   }

   else if (
       (playerSelection ==="rock" && computerSelection === "paper") ||
       (playerSelection ==="scissors" && computerSelection === "rock") ||
       (playerSelection === "paper" && computerSelection ==="scissors")
   ) {
        computerScore = ++computerScore;
        computer.textContent = computerScore
        result.textContent = `Computer wins, ${computerSelection} beats ${playerSelection}.`
   }

   else{
       result.textContent = `Both threw ${playerSelection}, it's a draw.`
   }
}

let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.value;
        let playerSelection = value;
        let computerSelection = computerPlay()
        console.log(playerSelection)
        console.log(computerSelection)
        playRound(playerSelection,computerSelection);

        if (playerScore === 5 || computerScore === 5) {
            if (playerScore ===5 ) {
                alert("Player is the first to reach 5. Player Wins!")
                window.location.reload(true);
            }
            else {
                alert("Computer is the first to reach 5. Computer Wins!")
                window.location.reload(true);
            }
        }
    });
});

