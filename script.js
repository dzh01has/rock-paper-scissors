/** Array of possible selections for computer */
const rndmSelection = ["rock", "paper", "scissors"];
var playerSelection = "";
var computerSelection = "";
var round = 0;
var playerWins = 0;
var computerWins = 0;

const btn1 = document.querySelector('#Rock');
const btn2 = document.querySelector('#Paper');
const btn3 = document.querySelector('#Scissors');


/** container and div for score and result */
const container = document.querySelector('#container');

const result = document.createElement('div');
result.classList.add('result');
container.appendChild(result);
result.textContent = "Winner: "
const rounds = document.createElement('div');
rounds.classList.add('rounds');
rounds.textContent = "Round: " + round;
container.appendChild(rounds);

    function playRound(playerSelection, computerSelection)
    {
        /** All possible win conditions, for both the player and the computer */
       if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")
        {
           return "Wrong input!" 
        }  
       else if (playerSelection == "rock" && computerSelection == "paper")
        {
            computerWins++
            result.textContent = "Winner: Computer wins! You have " + playerSelection + " and the PC has " + computerSelection
            rounds.textContent = "Round: " + round;
        }

        else if (playerSelection == "rock" && computerSelection == "scissors")
        {
            playerWins++
            result.textContent = "Winner: You win! You have " + playerSelection + " and the PC has " + computerSelection
            rounds.textContent = "Round: " + round;
        }

        else if (playerSelection == "paper" && computerSelection == "rock")
        {
            playerWins++
            result.textContent = "Winner: You win! You have " + playerSelection + " and the PC has " + computerSelection
            rounds.textContent = "Round: " + round;
        }

        else if (playerSelection == "paper" && computerSelection == "scissors")
        {
            computerWins++
            result.textContent = "Winner: Computer wins! You have " + playerSelection + " and the PC has " + computerSelection
            rounds.textContent = "Round: " + round;
        }
        else if (playerSelection == "scissors" && computerSelection == "paper")
        {
            playerWins++
            result.textContent = "Winner: You win! You have " + playerSelection + " and the PC has " + computerSelection
            rounds.textContent = "Round: " + round;
        }

        else if (playerSelection == "scissors" && computerSelection == "rock")
        {
            computerWins++
            result.textContent = "Winner: Computer wins! You have " + playerSelection + " and the PC has " + computerSelection
            rounds.textContent = "Round: " + round;
        }

        /** Draw conditions */
        else 
        {
            switch (true) 
            {
            case (playerSelection && computerSelection == "rock"):

            result.textContent = "Winner: No one, it's a draw! You have " + playerSelection + " and the PC has " + computerSelection
            rounds.textContent = "Round: " + round;
       
            case (playerSelection && computerSelection == "paper"):

            result.textContent = "Winner: No one, it's a draw! You have " + playerSelection + " and the PC has " + computerSelection
            rounds.textContent = "Round: " + round;  

            case (playerSelection && computerSelection == "scissors"):

            result.textContent = "Winner: No one, it's a draw! You have " + playerSelection + " and the PC has " + computerSelection
            rounds.textContent = "Round: " + round;  
          
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

   if (round == 0)
    {
        btn1.addEventListener('click', function (e) 
        {
            round ++;
            playerSelection = "rock"
            computerSelection = getComputerChoice();
            if (round == 5 && playerWins > computerWins)
            {
                result.textContent = "You win the game!!!!!"
                rounds.textContent = "Round: 5";
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
                return
            }
            else if (round == 5 && playerWins < computerWins)
            {
                result.textContent = "Computer wins the game! World domination by AI is imminent!"
                rounds.textContent = "Round: 5";
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
                return
            }
            else
            {
                console.log(playRound(playerSelection, computerSelection));
            }  
        });

        btn2.addEventListener('click', function (e) 
        {
            round ++;
            playerSelection = "paper"
            computerSelection = getComputerChoice();
            if (round == 5 && playerWins > computerWins)
            {
                result.textContent = "You win the game!!!!!"
                rounds.textContent = "Round: 5";
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
                return
            }
            else if (round == 5 && playerWins < computerWins)
            {
                result.textContent = "Computer wins the game! World domination by AI is imminent!"
                rounds.textContent = "Round: 5";
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
                return
            }
            else
            {
                console.log(playRound(playerSelection, computerSelection));
            }    
        });

        btn3.addEventListener('click', function (e) 
        {
            round ++;
            playerSelection = "scissors"
            computerSelection = getComputerChoice();
            if (round == 5 && playerWins > computerWins)
            {
                result.textContent = "You win the game!!!!!";
                rounds.textContent = "Round: 5";
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
                return
            }
            else if (round == 5 && playerWins < computerWins)
            {
                result.textContent = "Computer wins the game! World domination by AI is imminent!";
                rounds.textContent = "Round: 5";
                btn1.disabled = true;
                btn2.disabled = true;
                btn3.disabled = true;
                return
            }
            else
            {
                console.log(playRound(playerSelection, computerSelection));
            }  
        });
    } 

    


