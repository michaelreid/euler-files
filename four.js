// PROBLEM 4:
// ==========
// What is the largest palindrome derived from the product of two
// three digit numbers?





// 1. Determine the set of numbers to be tested:
// =============================================

// Generate two arrays to test:

// set limits of array:
var lowest = 901;
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


// print to console all of the test numbers that are multiples between
// the floor and ceiling of 3 digit numbers
// console.log(establishTestSet(floor, ceiling));

var testSet = establishTestSet(floor, ceiling);



// 2. Determine a class of objects that are Palindromes:
// =====================================================



// declare a new object: Palindrome - a number that is same forwards as backwards

var number = 999;
var number2 = 789;


// a function to convert a number to an array
var convertToArray = function(num) {
  var str = num.toString();
  return str.split('');
};


// a function to patch the reversed array back into a number

var backwards = function(arr) {
  // loop through array starting from end and
  // then push to new array
  var result = [];
  var len = arr.length;
  for (var i = len - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
   var join = result.join('');
   return parseInt(join);
}



// a function to test if a number is a palindrome

var testForPalindromicity = function(num) {
  var forwardsArr = convertToArray(num);
  var reverse = backwards(forwardsArr);
  // test if number passed to function is same as
  // the number reversed then it is a Palindrome
  if ( num === reverse) {
    return true;
  }
  else {
    return false;
  }
};




// 3. Test set of numbers from (1) to see if meet criteria of Palindrome (2):
// ==========================================================================

// an example array of numbers to test function
var arr1 = [ 4332, 23330, 987656789, 234, 784, 33333 ];


// pass an array of numbers to a funcition
// test each for Palindrome:
var testforP = function(arr) {
  var result = [];
  var len = arr.length;
  // loop through numbers in array
  for (var i = 0; i < len; i++) {
    // if a number is a palindrome then pass
    // the number and 'true' as a sub-array
    // to the final 'result' array
    if (testForPalindromicity(arr[i]) == true) {
      var arrTrue = [];
      arrTrue.push(arr[i], testForPalindromicity(arr[i]));
      result.push(arrTrue);
    }
  }
  return result;
};

// print to console the tests for Palindromicity in the Test Set:
console.log(testforP(testSet));

// ANSWER: 906,609
