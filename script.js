let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () =>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{
    console.log("game was a draw");
    msg.innerText = "Game Was A Draw! Play Again";
    msg.style.backgroundColor ="#081b31";

};
const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win");
        msg.innerText = "You win";
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose");
        msg.innerText ="you Lose";
         msg.style.backgroundColor ="red";
        }
}

const playGame = (userChoise) =>{
    console.log("user choice = ", userChoise);
    //generate comp choice
    const compChoice = genComputerChoice();
    console.log("Comp choice = ",compChoice);

    if(userChoise===compChoice){
        //Draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoise==="rock"){
            //scissors , paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoise=="paper"){
            //scissors , rock
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock , paper
            compChoice ==="rock" ? false : true ;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });
});

