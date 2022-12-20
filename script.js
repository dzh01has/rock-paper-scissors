/** Array of possible selections for computer */

const rndmSelection = ["rock", "paper", "scissors"];
const possibleSelectionsPlayer = ["rock", "paper", "scissors"];
let round = 0;
let playerWins = 0;
let computerWins = 0;

    function playRound(playerSelection, computerSelection)
    {

        /** All possible win conditions, for both the player and the computer */
       if (possibleSelectionsPlayer.indexOf(playerSelection) === -1)
        {
           return "Wrong input!" 
        }  
       else if (playerSelection == "rock" && computerSelection == "paper")
        {
            computerWins++
             return "Computer wins! You have " + playerSelection + " and the PC has " + computerSelection
        }

        else if (playerSelection == "rock" && computerSelection == "scissors")
        {
            playerWins++
            return "You win! You have " + playerSelection + " and the PC has " + computerSelection
        }

        else if (playerSelection == "paper" && computerSelection == "rock")
        {
            playerWins++
            return "You win! You have " + playerSelection + " and the PC has " + computerSelection
        }

        else if (playerSelection == "paper" && computerSelection == "scissors")
        {
            computerWins++
            return "Computer wins! You have " + playerSelection + " and the PC has " + computerSelection
        }
        else if (playerSelection == "scissors" && computerSelection == "paper")
        {
            playerWins++
            return "You win! You have " + playerSelection + " and the PC has " + computerSelection
        }

        else if (playerSelection == "scissors" && computerSelection == "rock")
        {
            computerWins++
            return "Computer wins! You have " + playerSelection + " and the PC has " + computerSelection
        }

            /** Draw conditions */

        else 
        {
            switch (true) 
            {
            case (playerSelection && computerSelection == "rock"):

                    return "Draw! You have " + playerSelection + " and the PC has " + computerSelection
       
            case (playerSelection && computerSelection == "paper"):

                    return "Draw! You have " + playerSelection + " and the PC has " + computerSelection   

            case (playerSelection && computerSelection == "scissors"):

                    return "Draw! You have " + playerSelection + " and the PC has " + computerSelection   
          
            default:
                    return "Poop"
            }
 
        }
         
    }; 
    
    /** Random choice from the array we created at the start */

function getComputerChoice() 
{
    return rndmSelection[~~(Math.random() * rndmSelection.length)];
}

    /** Prompt to get input from the player */

function getPlayerChoice()
{
    return prompt("Please choose between 'rock', 'paper' and 'scissors' and write it here");
}

    /** Uses the function under this one in a 'for loop' to end the game after 5 rounds, keeps score to decide the ultimate winner */

function startGame()
{
    for (let i = 0; i <=5; i++) 
    {
        round++
        console.log(game(playRound));

        if (round == 5 && playerWins > computerWins)
        {
            round = 0;
            return "You win the game!"
        }
        else if (round == 5 && playerWins < computerWins)
        {
            round = 0;
            return "Computer wins the game! World domination by AI is imminent!"
        }    
    } 
}

 /** Function to start the game */

function game(playRound)
{   
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    return playRound(playerSelection, computerSelection);    
}

console.log(startGame(game))