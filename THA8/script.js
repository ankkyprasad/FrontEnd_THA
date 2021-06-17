let squareEl = document.querySelector(".square");

for(let i = 0; i < 900; i++){
      // let tag = document.createElement("div");
      // tag.className = "box";
      // squareEl.appendChild(tag);
    squareEl.innerHTML += `<div class = "box"></div>`
}

let boxEl = document.querySelectorAll(".box"); 

boxEl.forEach(bo=> bo.addEventListener('click',()=>{
  bo.classList.toggle('changeColor');
}))


// squareEl.onclick = e => {
//     let targetGrid = e.target;
//         if(targetGrid.style.background ==     "rgb(255, 0, 0)"){
//       targetGrid.style.background = "rgb(255, 255, 255)";
//     }
//     else {
//       targetGrid.style.background = "rgb(255, 0, 0)";
//     }

// } 