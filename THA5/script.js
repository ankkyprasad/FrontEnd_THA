let displayEl = document.getElementById("display-content");
var countDot = 1;

function show(x){
    let lastChar = displayEl.innerText.substr(-1);

    if ((displayEl.innerText.length == 0) && error(x)){
        return;
    }
    
    if(countDot === 0 && x === '.'){
        return;
    }else if(x === '.'){
        countDot -= 1;
        displayEl.innerText += x;
        return;
    }

    if(lastChar === '*' || lastChar === '/' || lastChar === '-' || lastChar === '+' || lastChar === '.' ){
        if(x === '*' || x === '/' || x === '-' || x === '+'){
            displayEl.innerText = displayEl.innerText.replace(lastChar, x);
            return;
        } else if(x === '.'){
            return;
        }
    }

    if(x === '*' || x === '/' || x === '-' || x === '+'){
        countDot = 1;
    }

    displayEl.innerText += x;
}

function error(x){
    if(x === '/' || x === '*'){
        return true;
    }
    return false;
}

function allClear(){
    displayEl.innerText = "";
}

function del(){
    displayEl.innerText = displayEl.innerText.slice(0, -1);
}

function calculate(){
    let expression = displayEl.innerText;
    displayEl.innerText = eval(expression);
}