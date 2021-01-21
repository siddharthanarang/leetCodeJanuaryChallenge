// Find the Most Competitive Subsequence
//
// Given an integer array nums and a positive integer k, return the most competitive subsequence of nums of size k.
//
//   An array's subsequence is a resulting sequence obtained by erasing some (possibly zero) elements from the array.
//
// We define that a subsequence a is more competitive than a subsequence b (of the same length) if in the first position
// where a and b differ, subsequence a has a number less than the corresponding number in b. For example, [1,3,4] is more
// competitive than [1,3,5] because the first position they differ is at the final number, and 4 is less than 5.

// Example
// Input: nums = [3,5,2,6], k = 2
// Output: [2,6]
// Explanation: Among the set of every possible subsequence: {[3,5], [3,2], [3,6], [5,2], [5,6], [2,6]}, [2,6] is
// the most competitive.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {

  let response = [], minIndex=-1;
  for(let i=1; i<=k; i++){
    let min = Infinity;
    for(let j=minIndex+1; j<nums.length - k+i; j++){
      if(nums[j] != -1 && nums[j] < min){
        min = nums[j];
        minIndex = j;
      }
    }
    response.push(min);
    nums[minIndex] = -1;
  }
  return response;
};

console.log(`Most Competitive is `,mostCompetitive([2,4,3,3,5,4,9,6], 2));