// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

var wordBlanks =
  "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

// Only change code below this line
const myArray = ["Hello", 24];

const teams = [
  ["Bulls", 23],
  ["White Sox", 45],
];
Create a variable called myData and set it to equal the first value of myArray using bracket notation.
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
console.log(myData);
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop();
console.log(myArray);
console.log(removedFromMyArray);
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul",35]);
var myList = [["Chocolate Bar", 15],["bread", 1], ["jam",2] ,["eggs", 10],["butter",2]];
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
function functionWithArgs(one, two) {
  console.log(one + two);
}
  functionWithArgs(7, 3);
  function timesFive(num) {
    return num * 5;
  }
  
  const answer = timesFive(5);

  // Declare the myGlobal variable below this line


function fun1() {
  // Assign 5 to oopsGlobal here
  
}
let  myGlobal = 10;
let oopsGlobal = 5; 
// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";

  return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5
}

// Only change code above this line

addThree();
addFive(); 

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);