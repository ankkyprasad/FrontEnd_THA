const addEl = document.querySelector("#add");
const taskListEl = document.querySelector(".task-list-ul");
const todoInputEl = document.querySelector("#todo-input");

let taskListArr = [];

addEl.addEventListener('click', ()=>{
    let todoTask = todoInputEl.value;
    if(todoTask.length > 0)
        taskListEl.innerHTML += `<li>${todoTask}<button class="remove">Remove</button><button class="done">Done</button></li>`;
    todoInputEl.value = "";
    eventAssigner();
});


function eventAssigner(){
    let delButton = document.querySelectorAll(".remove");
    let doneButton = document.querySelectorAll(".done");

    delButton.forEach(del => del.addEventListener('click', ()=>{
        del.parentElement.remove();
    }));
    
    doneButton.forEach(done => done.addEventListener('click', ()=>{
        done.parentElement.innerHTML += "&#9989;";
    }));
}


