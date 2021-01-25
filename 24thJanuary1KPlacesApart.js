// Check If All 1's Are at Least Length K Places Away
// Given an array nums of 0s and 1s and an integer k, return True if all 1's are at least ' +
// 'k places away from each other, otherwise return False.
//   Example
// Input: nums = [1,0,0,0,1,0,0,1], k = 2
// Output: true
// Explanation: Each of the 1s are at least 2 places away from each other.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
let lastOne = null;
  
  for(let i=0; i<nums.length; i++){
    if(nums[i] === 1){
      if(lastOne != null){
        if(i-lastOne-1 < k){
          return false;
        }
      }
      lastOne = i;
    }
  }
  return true;
};

console.log(`K length apart `,kLengthApart([0,1,0,1], 1));