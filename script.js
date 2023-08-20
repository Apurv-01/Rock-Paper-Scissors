const choices = ["Rock","Paper","Scissors"];
const btns = document.querySelectorAll('.start-button');
let playerChoice = document.querySelector('.player-choice');
let computerChoice = document.querySelector('.computer-choice');
let playerSelection;
let result = document.querySelector('.result');

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        playerSelection = btn.value;
        btn.classList.add('btn-clicked');
        setTimeout(()=>{
            btn.classList.remove('btn-clicked');
        },100);
        window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});

        function getComputerChoice(){
            const randomValue = Math.floor(Math.random()*3);
            return choices[randomValue];
        }
        
        const computerSelection = getComputerChoice();
        function playRound(computerSelection,playerSelection){
            if(computerSelection==playerSelection){
                return("It's a Tie");
            }
            else if(computerSelection=='Rock'){
                if(playerSelection=='Paper') return('Yay! You Won');
                return('Shit, Computer Won')
            }
            else if(computerSelection=='Paper'){
                if(playerSelection=='Rock') return('Computer Won');
                else return('Yay! You Won')
            }
            else{
                if(playerSelection=='Rock') return('Yay! You Won');
                else return('Shit, Computer Won')
            }
        }
        computerChoice.innerHTML = ' ';
        result.innerHTML=' ';
        playerChoice.innerHTML = `<h2>You: ${playerSelection}<br></h2>`;
        setTimeout(()=>{        
            
            computerChoice.innerHTML = `<h2> Computer: ${computerSelection}</h2>`;
    },2000);
    setTimeout(()=>{    
        const res = playRound(computerSelection,playerSelection);

        playerChoice.innerHTML=''; 
        computerChoice.innerHTML='';
        result.innerHTML = `<h2>${res}</h2>`;
},5000);
    })
})
