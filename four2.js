// PROBLEM 4:
// ==========
// What is the largest palindrome derived from the product of two
// three digit numbers?





// 1. Determine the set of numbers to be tested:
// =============================================

// Generate two arrays to test:

// set limits of array:
var lowest = 997;
var highest = 999;

var createdArray = [];

// function to create an array of numbers between the limits:
var createArray = function(low, high) {
  for (i = low; i <= high; i++) {
    createdArray.push(i);
  }
  return createdArray;
}

// establish the two arrays:
var floor = createArray(lowest,highest);
var ceiling = floor;


// a function to move through the numbers of first set and multiply numbers by second array

var establishTestSet = function(setOne, setTwo) {

  // the final set of test numbers:
  var initialSet = [];
  var finalSet = [];
  // loop through the numbers in the first array and multiply by numbers in second array
  for (i = 0; i < setOne.length; i++) {

      for (j = 0; j < setTwo.length; j++) {

          var multiple = setOne[i] * setTwo[j];

          initialSet.push(multiple);
      }
  }

  /* FOUND ON STACKOVERFLOW WOULD LIKE TO UNDERSTAND BELOW FUNCTION */

  // function to run through numbers in the array established above and remove duplicates
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  var uniqueSet = initialSet.filter( onlyUnique );

  return uniqueSet;
};

console.log(establishTestSet(floor, ceiling));




// 2. Determine a class of objects that are Palindromes:
// =====================================================


var Palindrome = function (number){

  this.forwards = function(number) {
      // the property forwards is an array of the number
      var str = number.toString();
      return str.split('');
  } // end of forwards property

  this.backwards = function(number) {
    // a function to reverse the 'forward' property
    var reverse = function (Palindrome.forwards) {
      var result = [];
      var len = arr.length;
      for (var i = len - 1; i >= 0; i--) {
        result.push(arr[i]);
      }
      return result;
    }  // end of reverse function

  }  // end of backwards property
};  // end of Palindrome class





console.log(Palindrome(689));


console.log(palindrome);






// 3. Test set of numbers from (1) to see if meet criteria of Palindrome (2):
// ==========================================================================
