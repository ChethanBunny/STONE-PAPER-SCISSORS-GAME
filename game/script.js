let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userscorep=document.querySelector("#user-score");
const compscorep=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawgame=()=>{
    console.log("DRAW GAME");
    msg.innerText="GAME DRAW ! TRY AGAIN"
     msg.style.backgroundColor="black";
};
const showWinner=(userwin,no,compChoice)=>{
    if(userwin){
        console.log("you Win!");
        msg.innerText="YOU WIN!"
        msg.style.backgroundColor="green";
        userscore++;
        userscorep.innerText=userscore;
    }else{
        console.log("you loose");
        msg.innerText="YOU LOST!"
        msg.style.backgroundColor="red";
        compscore++;
        compscorep.innerText=compscore;
    }
}
const playGame=(userChoice)=>{
console.log(userChoice);  
let no=userChoice;
const compChoice=genCompChoice();
console.log(compChoice);
if(no===compChoice){
    drawgame();
}else{
    let userwin=true;
    if(no==="rock"){
        userwin=compChoice==="papaer"?false:true;
    }else if(no==="paper"){
        userwin=compChoice==="scissors"?false:true;
    }else{
        userwin=compChoice==="rock"?false:true;
    }
    showWinner(userwin);
}
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});


























































