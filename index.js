const choices = document.querySelectorAll(".choices")

let userScore = 0;
let compScore = 0;

const compChoice = ()=>{
    const values = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * 3)
    let Compvalue = values[index];
    console.log("CompChose", Compvalue);
}
choices.forEach(choice=>{
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id")
        console.log("User choice is", userChoice)
        compChoice();
        PlayGame()
        return userChoice;
       
    })
})

const PlayGame = (userChoice)=>{
    if(compChoice === "rock" && userChoice === "scissors"){
        console.log("Comp Wins")
    }else if( compChoice === "scissors" && userChoice === "paper"){
        console.log("Comp Wins")
    }else if(compChoice === "papeer" && userChoice === "rock"){
        console.log("user wins")
    }else{
        console.log("Not working, or Draw")
    }
}