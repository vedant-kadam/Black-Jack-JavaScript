
let cardsEL = document.getElementById("cards-el");
let cards = [];

let op = "";

let sum = 0;
// let sumEL =  document.getElementById("sum-el");
let sumEL = document.querySelector("#sum-el");

let hasBalckJacked = false;
let isAlive = false;

let messageEl = document.getElementById("message-el");

let player ={
     name :"Vedant",
     chips: 14
}


let playerEL = document.getElementById("player-el");
playerEL.textContent = player.name +": $"+player.chips


if (hasBalckJacked) {
    console.log("Caseh out");
}




function StartGame()
{
    isAlive = true;

    let firstCard = RandomCard();
    
    
    let secondCard = RandomCard();
    
    cards = [firstCard,secondCard];

    sum = firstCard + secondCard;
    console.log("test");
    console.log(cards);

    RenderGame();
}


function RenderGame() {

    cardsEL.textContent=`Cards : `;
    for(let i=0;i<cards.length;i++)
    {
        cardsEL.textContent+=cards[i]+" " ;
    }
    sumEL.textContent = `Sum : ${sum}`
    if (sum <= 20) {
        op = "Wana Draw again";

    }
    else if (sum === 21) {
        op = "Blacky Jacky";

        hasBalckJacked = true;
    } else {
        op = "YOu Got Jacked";
        isAlive = false;
    }
    messageEl.textContent = op;
    console.log("game Startetd");
}

function NewCard()
{
    if(isAlive && !hasBalckJacked)
    {
        let newCard = RandomCard();
        cards.push(newCard);
        sum+=newCard;
        console.log(cards);
    
        RenderGame();
    }
   
}

function RandomCard()
{
    
    let temp = Math.random()*13  ;
    temp = Math.floor(temp)+1;

    if(temp===1)return 11;
    else if(temp>=11) return 13;
    else return temp;
    
}

function loop()
{
    for(let i=0;i<cards.length;i++)
    {
       // console.log(cards[i]);
       let temp = Math.random()*5;
       console.log(temp);
       console.log(Math.ceil(temp));
       console.log(Math.floor(temp));
       
    }
}