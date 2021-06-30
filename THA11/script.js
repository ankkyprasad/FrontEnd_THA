let questions = [
    {
        "name": " India's largest city by population",
        "option1": "Delhi",
        "option2": "Mumbai",
        "option3": "Pune",
        "option4": "Bangalore",
        "answer": "Mumbai",
    },
    {
        "name": "India is a federal union comprising twenty-nine states and how many union territories?",
        "option1": "6",
        "option2": "7",
        "option3": "8",
        "option4": "9",
        "answer": "7",
    },
    {
        "name": "What are the major languages spoken in Andhra Pradesh?",
        "option1": " English and Telugu",
        "option2": "Telugu and Urdu",
        "option3": "Telugu and Kannada",
        "option4": "All of the above languages",
        "answer": "Telugu and Urdu",
    },
    {
        "name": "What is the state flower of Haryana?",
        "option1": "Lotus",
        "option2": "Rhododendron",
        "option3": "Golden Shower",
        "option4": "Not declared",
        "answer": "Rhododendron",
    },
    {
        "name": " Where was the International Conference on 'Yoga for Diabetes' organized from January 4-6, 2017?",
        "option1": "New Delhi ",
        "option2": "Jharkhand",
        "option3": "Jammu and Kashmir",
        "option4": "Haryana",
        "answer": "New Delhi ",
    },
    {
        "name": "Name the tower which was lighted up in Tricolour of India on Republic Day, 2017?",
        "option1": "WTC Towers",
        "option2": "Jeddah Tower",
        "option3": "Burj Khalifa",
        "option4": "Burj Al Arab",
        "answer": "Burj Khalifa",
    },
    {
      
        "name": "Which of the following states is not located in the North?",
        "option1": "Himachal Pradesh",
        "option2": "Jharkhand",
        "option3": "Jammu and Kashmir",
        "option4": "Haryana",
        "answer": "Jharkhand",
    },
    {
        "name": "In what state is the Elephant Falls located?",
        "option1": "Meghalaya",
        "option2": "Mizoram",
        "option3": "Orissa",
        "option4": "Manipur",
        "answer": "Mizoram",
    },
    {
        "name": "Which state has the largest population?",
        "option1": "Maharastra",
        "option2": "Uttar Pradesh",
        "option3": "Bihar",
        "option4": "Andra Pradesh",
        "answer": "Uttar Pradesh",
    },
    {
        "name": " Which state has the largest area?",
        "option1": "Maharashtra",
        "option2": "Rajasthan",
        "option3": "Bihar",
        "option4": "Andra Pradesh",
        "answer": "Rajasthan",
    }
]


const quizEl = document.querySelector(".quiz");
const scoreEl = document.querySelector(".score");
let score = 0;
let questionCount = 0;

function printQuestion(){
    quizEl.innerHTML = `
    <div class="question">${questionCount + 1}. ${questions[questionCount].name}</div>            
    <div class="options">${questions[questionCount].option1}</div>
    <div class="options">${questions[questionCount].option2}</div>
    <div class="options">${questions[questionCount].option3}</div>
    <div class="options">${questions[questionCount].option4}</div>`
    checkAnswer();
}

function checkAnswer(){
    let optionEl = document.querySelectorAll(".options");
    optionEl.forEach(option => option.addEventListener("click", ()=>{
        if(option.textContent ==questions[questionCount].answer){
            score++;
            scoreEl.textContent = `Score: ${score}`;
        }
    
        questionCount++;
    
        if(questionCount < 10){
        printQuestion();
        } else{
            alert("Game over");
            document.location.reload();
        }
    }))
}

printQuestion();