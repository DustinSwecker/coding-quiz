var startButton = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var answersEl = document.getElementById("answers");
var h1El = document.getElementById("h1el");
var allLi = document.querySelectorAll("li");



var pArray = ["Commonly used data types DO NOT include:", "The condition in an if/else statement is enclosed with_________.", "Arrays in JavaScript can be used to store__________.", "String values must be enclosed within ____ when being assigned to variables.", "A very useful tool used during debugging and development for printing content to the debugger is:"]

var answersArray = [["strings", "booleans", "alerts", "numbers"], ["quotes", "curly brackets"]]


var startQuiz = function (event) {    
    h1El.style.display = 'none';
    startButton.style.display = 'none';
    questionsEl.textContent = pArray[0];
    questionsEl.setAttribute("style", "font-size: 40px; font-weight: bold");
    questionsEl.setAttribute("data-state", 'two');
    console.log(questionsEl.dataset.state);
    for(var i = 0; i<4; i++) {
    var liEl = document.createElement("li");
    liEl.setAttribute("style", "background-color: #663399; text-align: center; border-radius: 20px; margin: 10px auto; width: 250px; height: auto; border: 1px solid black");
    liEl.innerHTML = answersArray[0][i];
    answersEl.appendChild(liEl);
    };
};

// var checkAnswers = function (event) {

// }

answersEl.addEventListener('click', function(event) {
    var answerChoice = event.target;
    if (questionsEl.dataset.state === "two") {
        if (event.target.value === )
    }
})

startButton.addEventListener('click', startQuiz);

