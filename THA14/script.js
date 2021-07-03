let btnEl = document.getElementById("btn");

function changecolor(){
    document.body.style.backgroundColor = `#${randomHex()}${randomHex()}${randomHex()}${randomHex()}${randomHex()}${randomHex()}`;
    btnEl.textContent = (`#${randomHex()}${randomHex()}${randomHex()}${randomHex()}${randomHex()}${randomHex()}`)
}

function randomHex(){
    const hexVal = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return hexVal[Math.floor(Math.random()*hexVal.length)]
}