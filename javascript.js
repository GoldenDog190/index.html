
'use strict'

var userName = prompt ('What is your name?');
console.log (name);
var greeting;

if (userName = 'Amelia') {
    greeting = 'Hello Amelia!';
} else {
    greeting = 'Welcome!';
}

var today = new Date ();
var hourNow = today.getHours();
 
if (hourNow > 8) {
    greeting = 'Good Morning!';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
} else if (hourNow > 6) {
    greeting = 'Good Evening!';
}
var dogBreed = prompt ('What breed is your dog?');
console.log(dogBreed)

if (dogBreed = 'Golden') {
    greeting = 'Retriever'
} else {
    greeting = 'Shar Pei'
}

document.write('<h3>' + userName + greeting + dogBreed + '<h3>');
