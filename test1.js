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
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue) {
  return "Yes, that was true";
}
  return "No, that was false";
}

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(10));

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(10));
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

console.log(testLessThan(10));
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  val >= 25

  return "More Than 24";
}

console.log(testLessOrEqual(10));

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
 }

}
