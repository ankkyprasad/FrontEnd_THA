const cardsEl = document.querySelector(".cards");
// let rand = Math.floor(Math.random()*9 + 1);
let arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]

for(let i = 0; i < 18; i++){
    let randomIndex = Math.floor(Math.random()*arr.length);
    let number = arr[randomIndex];

    cardsEl.innerHTML += `
    <div class="card-rectangle">
        <div class="front"></div>
        <div class="back">${number}</div>
    </div>`;
    arr.splice(randomIndex, 1);
}

const cardRectangleEl = document.querySelectorAll(".card-rectangle");
const backEl = document.querySelectorAll(".back");

let count = 2;
let cardNumber = [];

cardRectangleEl.forEach(card => card.addEventListener("click", () =>{
    if(count != 0)
        if(card.classList.contains("card-rectangle"))
            card.classList.replace("card-rectangle","card-rectangle-rotate");
        else    
            card.classList.replace("card-rectangle-rotate","card-rectangle");
    
    let cardRectangleRotateChild = card.getElementsByTagName("div")[1];
    if(card.classList.contains("card-rectangle-rotate")){
        count -= 1;
        cardNumber.push(cardRectangleRotateChild.textContent);
    }else{
        count += 1;
        cardNumber.pop();
    }

    if(count === 0){
        checkCardNumbers();
        setTimeout(removeToggle, 700);
    }
}));

function removeToggle(){
    cardRectangleEl.forEach(card => card.classList.replace("card-rectangle-rotate", "card-rectangle"));
    count = 2;
}

function checkCardNumbers(){
    if(cardNumber[0] === cardNumber[1]){
        cardRectangleEl.forEach(card=> {
            card.classList.replace("card-rectangle-rotate", "card-rectangle-matched")
        });
    }
    cardNumber.splice(0, 2);
}