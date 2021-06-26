const squareEl = document.querySelector(".square");
const boxNumber = 144;

for(let i = 0; i < boxNumber; i++){
    squareEl.innerHTML += `<div class = "box"></div>`
}

const boxEl = document.querySelectorAll(".box");
const bookedEl = document.querySelector(".booked");
const remainingEl = document.querySelector(".remaining");

let countBooking = 0;
let countRemaining = boxNumber;

bookedEl.textContent = "Booked Seats: " + countBooking;
remainingEl.textContent = "Remaining Seats: " + countRemaining;

boxEl.forEach(box => box.addEventListener('click', ()=>{
    if(box.classList.contains("box")){
        box.classList.add("box-color-change");
        box.classList.remove("box");
        countBooking += 1;
        countRemaining -= 1;
        bookedEl.textContent = "Booked Seats: " + countBooking;
        remainingEl.textContent = "Remaining Seats: " + countRemaining;
    } else{
        box.classList.remove("box-color-change");
        box.classList.add("box");
        countBooking -= 1;
        countRemaining += 1;
        bookedEl.textContent = "Booked Seats: " + countBooking;
        remainingEl.textContent = "Remaining Seats: " + countRemaining;
    }
}));