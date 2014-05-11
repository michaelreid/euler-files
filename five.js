// PROBLEM: 5

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


// Divisible by 20 means ends in 0, and multiple of 20





// 1. Start at number and count up in multiples of 20

// start with number given in problem
var start = 220000000;


// define a function to increase test number by 20
var findLowest = function(i) {
    while ( i >= start ) {
      var i = i + 20;
      console.log(i);
      // test for divisibility by 19
        if (i % 19 === 0) {
          if (i % 18 === 0) {
            if (i % 17 === 0) {
              if (i % 16 === 0) {
                if (i % 15 === 0) {
                  if (i % 14 === 0) {
                    if (i % 13 === 0) {
                      if (i % 12 === 0) {
                        if (i % 11 === 0) {
                            if (i % 9 === 0) {
                              if (i % 8 === 0) {
                                if (i % 7 === 0) {
                                  if (i % 6 === 0) {
                                      if (i % 3 === 0) {

                                            return i;

                                        } // end of %3 loop
                                  } // end of %6 loop
                                } // end of %7 loop
                              } // end of %8 loop
                            } // end of %9 loop
                        } // end of %11 loop
                      } // end of %12 loop
                    } // end of %13 loop
                  } // end of %14 loop
                } // end of %15 loop
              } // end of %16 loop
            } // end of %17 loop
          } // end of %18 if
        } // end of %19 if
    }// end of while loop
};  // end of funcition

console.log(findLowest(start));

// ANSWER: 232,792,560

// This does not require programming at all. Compute the prime factorization of each number from 1 to 20, and multiply the greatest power of each prime together:
//
// 20 = 2^2 * 5
// 19 = 19
// 18 = 2 * 3^2
// 17 = 17
// 16 = 2^4
// 15 = 3 * 5
// 14 = 2 * 7
// 13 = 13
// 11 = 11
//
// All others are included in the previous numbers.
//
// ANSWER: 2^4 * 3^2 * 5 * 7 * 11 * 13 * 17 * 19 = 232 792 560
