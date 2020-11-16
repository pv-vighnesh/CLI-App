/**
 * This is my very first App in NodeJS.
 * This is a Simple CLI Application.
 */

//Built-in JS module for collecting data from the Users
var readlineSync = require('readline-sync');

//Welcome message
console.log("Hello, Hope you are doing well!");

//Taking user's name
let userName = readlineSync.question("What's your name?");
console.log("Hello " + userName + ", Good to have to here.");

