// Max Number of K-Sum Pairs
//
// You are given an integer array nums and an integer k.
//
//   In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
//
//   Return the maximum number of operations you can perform on the array.
//

// Example
// Input: nums = [3,1,3,4,3], k = 6
// Output: 1
// Explanation: Starting with nums = [3,1,3,4,3]:
// - Remove the first two 3's, then nums = [1,4,3]
// There are no more pairs that sum up to 6, hence a total of 1 operation.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {

  let memory = {}, pairs = 0, sameNoOfPair;
  for(let i=0; i<nums.length; i++){
    memory[nums[i]] = (memory[nums[i]] || 0) + 1;
  }
  let otherNumber;
  for(let key in memory){
    key = parseInt(key);
    otherNumber = k - key;
    if(otherNumber === key){
      if(memory[otherNumber] >=2){
        sameNoOfPair = parseInt(memory[otherNumber]/2);
        pairs += sameNoOfPair;
        memory[otherNumber] -= 2 * sameNoOfPair;
      }
    }
    else{
      if(memory[otherNumber]){
        sameNoOfPair = Math.min(memory[otherNumber], memory[key]);
        pairs += sameNoOfPair;
        memory[key] -= sameNoOfPair;
        memory[otherNumber] -= sameNoOfPair;
      }
    }
  }
  return pairs;
};

console.log(`Max Operation are `,maxOperations([3,1,3,4,3], 6));