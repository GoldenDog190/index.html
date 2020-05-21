'use strict'

function askName() {
   var userName = prompt ('What is your name?');
   console.log (userName);
   return userName;
}

function askdogBreed(dog){
    var dogBreed = prompt(dog + ', Do you like dogs?').toLowerCase();
    console.log('before the while' + dogBreed);
    while ((dogBreed !== 'no') && (dogBreed !== 'yes')){
        console.log('in while but before re-assign' + dogBreed);
        dogBreed = prompt(dog + ', Do you like dogs?').toLowerCase();
        console.log('in while but after re-assign' + dogBreed);
    }
    return dogBreed;
}

function typeOfDog() {
    var typeOfDog = prompt ('What type of dog do you have?');
    console.log(typeOfDog);
}

function likedogBreed(dogBreedFromFunction){
    if (dogBreedFromFunction === 'golden retriever'){
        alert ('Me too!'); 
    } else if (dogBreedFromFunction === 'shar pei') {
        alert ('Shar Pei is a cute breed of dog too!');
    } else {
        alert ('Both the shar pei and golden retriever are good breeds!')
    }
}


// if (typeOfDog === 'chihuahua'){
    //     alert('The chihuahua dog breed is tempermental!');
    // }

    var userNameFromFunction = askName();
    var dogBreedFromFunction = askdogBreed (userNameFromFunction);
    var typeOfDogFromFunction = typeOfDog ();
    likedogBreed(dogBreedFromFunction)

    var letterAnswer = 'd'
    var guess = 5;
    var letterGuess = prompt('Guess a letter(single letter only)');

    for (var i = 0; i < guess; i = i + 1){
        if (letterGuess === letterAnswer){
            alert ('Ding Ding Ding! That is correct');
            break;
        } else {
            var left = guess - i;
            letterGuess = prompt('Wrong! Try again with another number!' + left + 'left.');
        }
    }