//Create a randomized input for the computer
function computerPlay() {
    let choices = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex];
}        

//Function for playing 1 round of rock-paper-scissors
function playRound(playerSelection, computerSelection) {          
    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            alert("Player and Computer have thrown Rock. DRAW.") }
        else if (playerSelection === "scissors") {
            alert("Player has thrown Scissors. Computer has thrown Rock. Computer Wins.") }
        else if (playerSelection === "paper") {
            alert("Player has thrown Paper. Computer has thrown Rock. Player Wins.") }
    }
    if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            alert("Player has thrown Rock. Computer has thrown Scissors. Player Wins.") }
        else if (playerSelection === "scissors") {
            alert("Player and Computer have thrown Scissors. DRAW.") }
        else if (playerSelection === "paper") {
            alert("Player has thrown Paper. Computer has thrown Scissors. Computer Wins.") }   
    }
    if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            alert("Player has thrown Rock. Computer has thrown Paper. Computer Wins.") }
        else if (playerSelection === "scissors") {
            alert("Player has thrown Scissors. Computer has thrown Paper. Player Wins.") }
        else if (playerSelection === "paper") {
            alert("Player and Computer have thrown Paper.DRAW.") } 
    }    

}
//Loop for 5 rounds
function game() {
    for (let i =1; i<=5; i++) {
//Set the player's input via prompt and lowercase it
        let playerPrompt = window.prompt("Please input rock, paper or scissors.")
        const playerSelection = playerPrompt.toLowerCase()
//Set the randomized input into a variable to be used in our function later
        computerSelection=computerPlay()
//Run game
        console.log(playRound(playerSelection,computerSelection))
    }
}