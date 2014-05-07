// PROBLEM 1.
// Find the sum of all the multiples of 3 or 5 below 1000:


// 1. a function that returns an array of all the multiples of 3 & 5 for a given number:

var multiples = function(query) {
    var array_ = [];
    for(i = 1; i <= query; i++){
        if(i % 3 === 0 || i % 5 === 0){
            array_.push(i);
        }
    }
  return array_;
};


// 2. a function that loops through a given array and sums all the elements in the array:

var sum_array = function(array_x){
  var total = 0;
  for(i = 0; i < array_x.length; i ++){
    total += array_x[i];
  }
  return total;
};


// 3. output to console the answer:

console.log(sum_array(multiples(999)));


// ANSWER: 233,168
