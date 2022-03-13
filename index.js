var readlineSync = require("readline-sync");

var name = readlineSync.question('Please enter your name : ');
console.log("Welcome "+name+" !!");
console.log('--------------------------');
console.log('This is a Quiz about how well you know me !!\nLet\'s get started \n');

var score = 0;
var highScores = [
    {
        name:"keerthi",
        score: 5
    },
    {
        name: 'Nobody',
        score: 4
    }
]

var questionOne = {
    question: 'Where do I live ?',
    answer: 'hyderabad'
}

var questionTwo = {
    question: 'What is my favorite color ?',
    answer: 'blue'
}

var questionThree = {
    question: 'What is my favorite food item ?',
    answer: 'chicken biryani'
}

var questionFour = {
    question: 'What is my favorite cartoon ?',
    answer: 'doremon'
}

var questionFive = {
    question: 'Which is my favorite my place ?',
    answer: 'india'
}

var questions = [ questionOne, questionTwo, questionThree, questionFour, questionFive];


function play( question, answer) {

    console.log(question);
    userGivenAnswer = readlineSync.question('');
    if( userGivenAnswer.toUpperCase() === answer.toUpperCase() ) {
        console.log('Right Answer');
        score = score + 1;
        console.log('Your score is: '+score);
        console.log('-------------------------------------');
    } else {
        console.log('Wrong Answer !!');
        console.log('Your score is: '+score);
        console.log('-------------------------------------');
    }
}


for ( i=0; i<questions.length; i++) {
    currentQuest = questions[i];
    play( currentQuest.question, currentQuest.answer);
}

console.log('Final score is '+ score+'\n');

if( score == highScores[0].score) {
    highScores.unshift({name,score});
} else {
    highScores.push({name,score});
}

console.log('Top Scores :')

for ( j=0; j<highScores.length; j++) {
    console.log(highScores[j].name+' '+highScores[j].score);
}

console.log('If your\'s high score, then send a screenshot to me !!');
console.log('otherwise try once again !!');