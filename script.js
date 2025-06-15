const pChoice0 = document.getElementById("pChoice0");
const pChoice1 = document.getElementById("pChoice1");
const pChoice2 = document.getElementById("pChoice2");

let playerChoice;
let result, Emoji;
let playerScore = 0, computerScore = 0;

pChoice0.addEventListener("click", () => {
    playerChoice = 0;
    Game();
});

pChoice1.addEventListener("click", () => {
    playerChoice = 1;
    Game();
});

pChoice2.addEventListener("click", () => {
    playerChoice = 2;
    Game();
});


function Game(){
    const computerChoice = Math.floor(Math.random() *3);

    if(computerChoice === 0) Emoji = '✊';
    else if(computerChoice === 1) Emoji = '✋';
    else Emoji = '✌️';

    if(playerChoice === 0) pEmoji = '✊';
    else if(playerChoice === 1) pEmoji = '✋';
    else pEmoji = '✌️';

    if(playerChoice === computerChoice){
        result = `It's a Tie!`;
        resultColor = `#ffff00`;
    }

    else{

        switch (playerChoice) {
            case 0:
                result = (computerChoice === 1)? `You Lose!` : `You Win!!`;
                playerScore += (computerChoice === 1)? 0 : 1;
                computerScore += (computerChoice === 1)? 1 : 0;
                resultColor = (computerChoice === 1)? `#ff1900` : `#00e108`;
                break;

            case 1:
                result = (computerChoice === 2)? `You Lose!` : `You Win!!`;
                playerScore += (computerChoice === 2)? 0 : 1;
                computerScore += (computerChoice === 2)? 1 : 0;
                resultColor = (computerChoice === 2)? `#ff1900` : `#00e108`;
                break;

            case 2:
                result = (computerChoice === 0)? `You Lose!` : `You Win!!`;
                playerScore += (computerChoice === 0)? 0 : 1;
                computerScore += (computerChoice === 0)? 1 : 0;
                resultColor = (computerChoice === 0)? `#ff1900` : `#00e108`;
                break;

        }

    }

    document.getElementById("result-div").innerText = `${result}`;
    document.getElementById("result-div").style.color = `${resultColor}`
    document.getElementById("pShow").innerText = `${pEmoji}`
    document.getElementById("cChoice").innerText = `${Emoji}`;

    document.getElementById("pScore").innerText = `${playerScore}`;
    document.getElementById("cScore").innerText = `${computerScore}`;
}