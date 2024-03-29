// Get Maximum in Generated Array
// You are given an integer n. An array nums of length n + 1 is generated in the following way:
//
//   nums[0] = 0
// nums[1] = 1
// nums[2 * i] = nums[i] when 2 <= 2 * i <= n
// nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
// Return the maximum integer in the array nums​​​.
//
//   Example
//   Input: n = 7
// Output: 3
// Explanation: According to the given rules:
//   nums[0] = 0
// nums[1] = 1
// nums[(1 * 2) = 2] = nums[1] = 1
// nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2
// nums[(2 * 2) = 4] = nums[2] = 1
// nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3
// nums[(3 * 2) = 6] = nums[3] = 2
// nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3
// Hence, nums = [0,1,1,2,1,3,2,3], and the maximum is 3.

/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  let memory = {0:0,1:1};
  if(n <= 1){
    return n;
  }
  let max = 1;
  let currentNumber = 1, newNumber = 0;
  while(newNumber <= n){
    newNumber = 2*currentNumber;
    if(newNumber <= n){
      memory[newNumber] = memory[currentNumber];
      max = Math.max(max, memory[newNumber]);
    }
    newNumber = 2*currentNumber + 1;
    if(newNumber <= n){
      memory[newNumber] = memory[currentNumber] + memory[currentNumber+1];
      max = Math.max(max, memory[newNumber]);
    }
    currentNumber++;
  }
  return max;
};

console.log(`Get Maximum Generated number in a Array `, getMaximumGenerated(0));