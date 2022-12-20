/** Array of possible selections for computer */

const rndmSelection = ["rock", "paper", "scissors"];

    function playRound(playerSelection, computerSelection)
    {
        /** All possible win conditions, for both the player and the computer */

        if (playerSelection == "rock" && computerSelection == "paper")
        {
          return "Computer wins! You have " + playerSelection + " and the PC has " + computerSelection
        }

        else if (playerSelection == "rock" && computerSelection == "scissors")
        {
            return "You win! You have " + playerSelection + " and the PC has " + computerSelection
        }

        else if (playerSelection == "paper" && computerSelection == "rock")
        {
            return "You win! You have " + playerSelection + " and the PC has " + computerSelection
        }

        else if (playerSelection == "paper" && computerSelection == "scissors")
        {
            return "Computer wins! You have " + playerSelection + " and the PC has " + computerSelection
        }
        else if (playerSelection == "scissors" && computerSelection == "paper")
        {
            return "You win! You have " + playerSelection + " and the PC has " + computerSelection
        }

        else if (playerSelection == "scissors" && computerSelection == "rock")
        {
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
         
    } 
    
    /** Random choice from the array we created at the start */

function getComputerChoice() 
{
    return rndmSelection[~~(Math.random() * rndmSelection.length)];
}


const playerSelection = "paper";
const computerSelection = getComputerChoice();
 

console.log(playRound(playerSelection, computerSelection));