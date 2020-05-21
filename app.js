'use strict'

function askName() {
   var userName = prompt ('What is your name?');
   console.log (userName);
   return userName;
}

function askdogBreed(dog){
    var dogBreed = prompt (dog + ', What kind of dog breed do you have?').toLowerCase();
    console.log(dogBreed);
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
