var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
var newNunmbers = [];

newNunmbers = numbers.map((x) => {
  return x;
});

console.log(newNunmbers);

//Filter - Create a new array by keeping the items that return true.
var filteredArray = numbers.filter((x) => {
  return x > 10;
});

console.log(filteredArray);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumber = numbers.reduce((accumulator, currentNUmber) => {
  return accumulator + currentNUmber;
});

console.log(newNumber);

//Find - find the first item that matches from an array.
var firstFoundNumber = numbers.find((num) => {
  return num > 10;
});

console.log(firstFoundNumber);

//FindIndex - find the index of the first item that matches.
var firstFoundIndex = numbers.findIndex((num) => {
  return num > 10;
});

console.log(firstFoundIndex);
