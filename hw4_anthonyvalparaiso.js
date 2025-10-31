// JavaScript Foundations Coding Assignment - Anthony Valparaiso

// Exercise 1

var thisIsANewVariable = 10;
if (thisIsANewVariable == 10) {
    // code block
}

// Exercise 2

let greetingMessage = `Hello, World!`;
let temperature = 98.6;
let isActive = true;

// Exercise 3

let currentScore = 95; // Stores the player's current score in the game

// Exercise 4

console.log('100' == 100);   // true (value equality)
console.log('100' === 100);  // false (strict equality)

// Section 2: Conditionals and Control Flow
// Exercise 5

let isWeekend = false;
let schedule;
schedule = isWeekend ? "Day off" : "Work day";
console.log(schedule);

// Exercise 6

let userAge = 16;
if (userAge >= 18) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// Exercise 7

let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
    console.log("Ready to process");
}

// Exercise 8

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Exercise 9

for (let i = 0; i <= 9; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

// Exercise 10

let counter = 10;
do {
    console.log("Running once");
} while (counter < 5);

// Section 3: Functions and Data Structures
// Exercise 11

function calculateArea(width, height) {
    return width * height;
}

let resultArea = calculateArea(5, 10);
console.log(resultArea);

// Exercise 12

let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape');        // Add to end
fruitList.shift();              // Remove first item
console.log(fruitList.indexOf('Banana'));  // Log index of Banana

// Exercise 13

let originalData = [1, 2, 3, 4, 5];
let clonedData = originalData.slice();

// Exercise 14

function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
}

// Exercise 15

let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");
let animalArray = [dog, cat];
console.log(animalArray);