/**
 * This is my very first App in NodeJS.
 * This is a Simple CLI Application.
 */

//Built-in JS module for collecting data from the Users
var readlineSync = require('readline-sync');
var ansCheck;

//Welcome message
console.log("Hello, Hope you are doing well!");

//Taking user's name
var userName = readlineSync.question("What's your name? ");
welcomeMessage = 'Heyy ' + userName + '!!, Good to have you here!';
console.log(welcomeMessage);


/**
 * Using keyInYN() function.
 * Asking simple questions.
 * Checking if the answer given by the user is correct or not.
 * Displaying a message based on Users answer.
 */

  if (readlineSync.keyInYN('Care to play a Game?')) {

    console.log("Let's start then!");
    var userAnswer = readlineSync.question('Where did I study my Engineering?');

  if(userAnswer === 'EPCET' || userAnswer === 'East Point' || userAnswer === 'East Point College of Engineering and Technology') {
    ansCheck = 'YOU ARE CORRECT! :D';
  }
  else {
    ansCheck = 'I THOUGHT WE WERE BEST FRIENDS :/';
  }
  }
  else {
    console.log("Looks like you're too busy for me :(");
  }




