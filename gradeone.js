
var correctAnswer = 0;
var incorrectAnswer = 0;

var questionCount = 0;

var result = document.getElementById("result");


var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

q1a1.addEventListener("click", Incorrect);
q1a2.addEventListener("click", Correct);
q1a3.addEventListener("click", Incorrect);
q1a4.addEventListener("click", Incorrect);

q2a1.addEventListener("click", Correct);
q2a2.addEventListener("click", Incorrect);
q2a3.addEventListener("click", Incorrect);
q2a4.addEventListener("click", Incorrect);

q3a1.addEventListener("click", Incorrect);
q3a2.addEventListener("click", Correct);
q3a3.addEventListener("click", Incorrect);
q3a4.addEventListener("click", Incorrect);

q4a1.addEventListener("click", Incorrect);
q4a2.addEventListener("click", Incorrect);
q4a3.addEventListener("click", Correct);
q4a4.addEventListener("click", Incorrect);

q5a1.addEventListener("click", Incorrect);
q5a2.addEventListener("click", Incorrect);
q5a3.addEventListener("click", Incorrect);
q5a4.addEventListener("click", Correct);

q6a1.addEventListener("click", Incorrect);
q6a2.addEventListener("click", Incorrect);
q6a3.addEventListener("click", Correct);
q6a4.addEventListener("click", Incorrect);

restart.addEventListener("click" , restartQuiz);

function Correct(){
correctAnswer+=1;
questionCount += 1;
// console.log("questionCount = " + questionCount + "correctAnswers = " + correctAnswer);
if (questionCount == 6) {
  console.log("The quiz is done!")
  updateResult();
}
}
function Incorrect(){
  incorrectAnswer+=1;
  questionCount += 1;
  // console.log("questionCount = " + questionCount + "correctAnswers = " + correctAnswer);
  if (questionCount == 6) {
    console.log("The quiz is done!")
    updateResult();
  }
  }

function updateResult(){
  var message = "Good Job! You scored a ";
  result.innerHTML = message.concat(correctAnswer, " /6");
  console.log (message.concat(correctAnswer, " /6"));
}


function restartQuiz() {
  result.innerHTML = "You got a score of ...";
  questionCount = 0;
  correctAnswer=0;
  incorrectAnswer=0;
  enableQuestions ();
  console.log("questionCount = " + questionCount + "\t" + "correctAnswer = " + correctAnswer + "\t" + "incorrectAnswer = " + incorrectAnswer + "\t");
}


q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);

q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);
q5a3.addEventListener("click", disableQ5);
q5a4.addEventListener("click", disableQ5);

q6a1.addEventListener("click", disableQ6);
q6a2.addEventListener("click", disableQ6);
q6a3.addEventListener("click", disableQ6);
q6a4.addEventListener("click", disableQ6);

function disableQ1 () {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

function disableQ2 () {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

function disableQ3 () {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

function disableQ4 () {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
}

function disableQ5 () {
  q5a1.disabled = true;
  q5a2.disabled = true;
  q5a3.disabled = true;
  q5a4.disabled = true;
}

function disableQ6 () {
  q6a1.disabled = true;
  q6a2.disabled = true;
  q6a3.disabled = true;
  q6a4.disabled = true;
}

function enableQuestions () {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;

  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;

  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;

  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;

  q5a1.disabled = false;
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;
  
  q6a1.disabled = false;
  q6a2.disabled = false;
  q6a3.disabled = false;
  q6a4.disabled = false;

}
/*Add your JavaScript here*/