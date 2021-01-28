// Concatenation of Consecutive Binary Numbers
//
// Given an integer n, return the decimal value of the binary string formed by concatenating the binary representations
// of 1 to n in order, modulo 109 + 7.
//
// Input: n = 12
// Output: 505379714
// Explanation: The concatenation results in "1101110010111011110001001101010111100".
//   The decimal value of that is 118505380540.
// After modulo 109 + 7, the result is 505379714.

/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {

  let string ='', number;
  for(let i=1; i<=n; i++){
    string+=Number(i).toString(2);
    number = parseInt(string,2);
    number = number%(1000000007);
    string = Number(number).toString(2)

  }
  return number

};

console.log(`Concate Binary `,concatenatedBinary(1000));