function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Spørsmål " + currentQuestionNumber + " av " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Resultat</h1>";
    gameOverHTML += "<h2 id='score'> Din Score: " + quiz.score + "</h2>";
    gameOverHTML +="<h3> Ta testen på nytt? Oppdater siden :)"
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
var questions = [
    new Question("Når ble Kristusstatuen satt opp?", ["1931", "1831","1731", "2010"], "1931"),
    new Question("I hvilken by finner du Colosseum?", ["Piza", "Stockholm", "Roma", "Rio"], "Roma"),
    new Question("Når ble listen over verdens syv nye underverker lagd?", ["1990", "2007","1997", "1500"], "2007"),
    new Question("Hvilket av alternativene er ikke ett av de nye underverkene?", ["Chichen Itza", "Taj Mahal", "Eiffeltårnet", "Macchu Picchu"], "Eiffeltårnet"),
    new Question("Hvor mange nye underverker er det?", ["3", "7", "14", "21"], "7")
];
 
var quiz = new Quiz(questions);
 
populate();