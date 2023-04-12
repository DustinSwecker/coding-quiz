//ISSUES -- can't add multiple values to localstorage, can't get setInterval to stop upon final answer click, can't setInterval outside of another function because it auto runs, can't retrieve value from secondsLeft to add to storage due to the interval continuing, need to add viewhighscores page

var startButton = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var answersEl = document.getElementById("answers");
var h1El = document.getElementById("h1el");
var allLi = document.querySelectorAll("li");
var feedbackEl = document.getElementById("feedback");
var initialsForm = document.getElementById("initials-form");
var timerEl = document.getElementById("timer");
var initialsEl = document.getElementById("initials");
var initialsSubmit = document.getElementById("initials-submit");
var viewHighScoresEl = document.getElementById("high-score");

//variable to alter page set up
var x=0;
//variable to create the element to hold feedback text
var feedbackText = document.createElement("h2");


//array to hold question values
var pArray = ["Try to answer the following code-related questions within the time limit. Keep in mind that wrong answers will penalize your time/score by ten seconds!", "Commonly used data types DO NOT include:", "The condition in an if/else statement is enclosed with_________.", "Arrays in JavaScript can be used to store__________.", "String values must be enclosed within ____ when being assigned to variables.", "A very useful tool used during debugging and development for printing content to the debugger is:"]


//array to hold answers to questions
var answersArray = ["",["strings", "booleans", "alerts", "numbers"], ["quotes", "curly brackets", "parenthesis", "square brackets"], ["numbers and strings", "other arrays", "booleans", "all of the above"], ["commas", "curly brackets", "quotes", "parenthesis"], ["javascript", "terminal bash", "for loops", "console.log"]];

var correctAnswerArray = ["","alerts", "parenthesis", "all of the above", "quotes", "console.log"]


//function to display questions
var displayQuestion = function() {
    
    h1El.style.display = 'none';
    startButton.style.display = 'none';
    questionsEl.textContent = pArray[x];
    questionsEl.setAttribute("style", "font-size: 40px; font-weight: bold");
    questionsEl.setAttribute("data-state", x);
    
    for(var i = 0; i<4; i++) {
    var liEl = document.createElement("li");
    liEl.setAttribute("style", "background-color: #663399; text-align: center; border-radius: 20px; margin: 10px auto; width: 300px; height: auto; border: 1px solid black");
    liEl.innerHTML = answersArray[x][i];
    answersEl.appendChild(liEl);

    };
};


//remove last li items created so only 4 answers appear per question
var displayNextQuestion = function() {
    while (answersEl.hasChildNodes()) {
        answersEl.removeChild(answersEl.firstChild);
      };
    //to remove "correct/incorrect" created elements past the past question
    displayQuestion();
    if (feedbackEl.children.length > 2) {
         feedbackEl.removeChild(feedbackEl.firstChild);
    }
    
}
//set initial timer
var secondsLeft = 75;

//set countdown on timer

var setTime = function() {
    
    var timerInterval = setInterval(function() {
    
        if (secondsLeft>0) {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left";
        } else if(secondsLeft === 0) {
        clearInterval(timerInterval);
    };
   
}, 1000);
};

//function to use on startQuiz button
var startQuiz = function () {   
    x=1;
    setTime();
    displayQuestion();
    
    };

// var checkAnswers subtract time if incorrect

var setFeedbackStylingCorrect = function () {
    
    feedbackText.innerHTML = "Correct!";
    feedbackEl.setAttribute("style", "color: gray; font-size: 30px; border-top: 2px solid gray");
    feedbackEl.appendChild(feedbackText);
};

var setFeedbackStylingIncorrect = function () {
    secondsLeft-=10;
    feedbackText.innerHTML = "Incorrect.";
    feedbackEl.setAttribute("style", "color: gray; font-size: 30px;");
    feedbackEl.appendChild(feedbackText);
};



var viewHighScores = function() {
    var initialsToHighScore = localStorage.getItem("initials");
    var scoreToHighScore = localStorage.getItem("score");
    h1El.style.display = 'none';
    startButton.style.display = 'none';
    questionsEl.textContent= initialsToHighScore + ": " + scoreToHighScore;
};



//event listener to check answers
answersEl.addEventListener('click', function(event) {
    var answerChoice = event.target;
        if (answerChoice.textContent === correctAnswerArray[x]) {
            setFeedbackStylingCorrect();
        } else {
            setFeedbackStylingIncorrect();
            
        }; 
    
        if (x<5) {
            x+=1;
        displayNextQuestion();
        } else if (x=6) {
            
            while (answersEl.hasChildNodes()) {
                answersEl.removeChild(answersEl.firstChild);
              };
            
            feedbackEl.style ="display:none";
            questionsEl.textContent="Your final score is " + secondsLeft;
            initialsForm.style.display = "flex";       
        }
});

viewHighScoresEl.addEventListener('click', viewHighScores)

//event listener for submitting initials/highscore
// var highScores =[];
// var initialsHighScores= []; 


initialsSubmit.addEventListener('click', function() {
    
   
    localStorage.setItem("initials", initialsEl.value);
    localStorage.setItem("score", questionsEl.value);
});
 
//event listener to start quiz
startButton.addEventListener('click', startQuiz);