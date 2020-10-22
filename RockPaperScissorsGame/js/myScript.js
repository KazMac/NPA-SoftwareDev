/* Karen Mackay, 21/10/2020 */
/* Rock Paper Scissors Game, version: 4 */

function inputUserChoice()
{
    var inputChoice = prompt("Do you choose rock, paper, scissors?");
    // document.write("You chose " + inputChoice + "<br>");
    return inputChoice;
}

function generateAIchoice()
{
    var computerChoice = Math.random();
    
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice < 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    // document.write("The computer chose " + computerChoice + "<br>");
    return computerChoice;
}

function displayChoices(playersChoice, secondPlayersChoice)
{
    document.write("You chose " + playersChoice + "<br>");
    document.write("The computer chose " + secondPlayersChoice + "<br>");
}

function compareChoices(choice1, choice2)
{
    if (choice1 == choice2) { // This a tie
        return("The result is a tie");
    } else if(choice1 ==="rock") {
        if(choice2 ==="scissors"){ //test rock vs scissors
            return("rock beats scissors, you win!");
        } else { // rock vs paper 
            return("paper beats rock, computer wins");
        }
    } else if (choice1 ==="paper"){
        if(choice2 === "rock") { //test paper vs rock
            return("paper beats rock, you win!");
        } else { // paper vs scissors
            return("scissors beats paper, computer wins");
        }
    }
}

function displayResult(result)
{
    document.write(result);
}

var userChoice = inputUserChoice();
var AIchoice = generateAIchoice();

displayChoices(userChoice, AIchoice);
displayResult(compareChoices(userChoice, AIchoice))
//document.write(compareChoices(userChoice, AIchoice))

