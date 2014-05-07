// PROBLEM 3

// The prime factors of 13,195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600,851,475,143 ?




// Function to construct array of numbers from 0 to 'x':
var allNumbers = function(maX){
  var listM = [];
  for(i = 0; i < maX; i++){
    listM.push(i);
  }
  return listM;
};

// Function to collect array of factors:
  var factors = function(a){
    var array_ = [];
      for (var i = 0 ; i <= a; i++) {
        if( a % i === 0){
          array_.push(i);
      }
    }
    return array_;
  };


// Define a prime number:
  var prime = function(x){
  	if(factors(x).length === 2){
  	  return true;
  	}
  	else{
      return false;
  	}
  };


// Function to determine Prime Numbers from 0 to 'x'
var primeNumbers = function(x){
  var listPrime = [];
  var queryThis = allNumbers(x);
  for (var i = queryThis.length - 1; i >= 0; i--) {
    if(prime(queryThis[i])){
      listPrime.push(queryThis[i]);
    }
  }
  return listPrime;
};

//Function to determine if Prime Numbers are a factor of 'x'
var primeTest = function(x,y){
  var listYes = [];
  var queryThis = primeNumbers(x);
  for (var i = queryThis.length - 1; i >= 0; i--) {
    if(y % queryThis[i] === 0){
      listYes.push(queryThis[i]);
    }
  }
  return listYes;
};

// output the answer:
console.log(primeTest(10000,600851475143));

// Returns: [ 71, 839, 1471, 6857 ]

// ANSWER: 6,857
