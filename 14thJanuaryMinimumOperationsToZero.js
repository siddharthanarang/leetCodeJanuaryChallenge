// Minimum Operations to Reduce X to Zero
// You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.
//
//   Return the minimum number of operations to reduce x to exactly 0 if it's possible, otherwise, return -1.
// Example
//
// Input: nums = [3,2,20,1,1,3], x = 10
// Output: 5
// Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {

  // For minimizing the suffix + prefix sum we are going to maximize the sum of middle elements 
  let sum =0, i;
  for(i=0; i<nums.length; i++){
    sum += nums[i];
  }
  if(x > sum){
    return -1;
  }
  if(x === sum){
    return nums.length;
  }
  let maximumSumSubArray = sum - x, start =0, end =0, currentSum =nums[0], max =-1;
  while(start < nums.length && end <nums.length){

    if(currentSum === maximumSumSubArray){
      max = Math.max(max, end - start + 1);
      end++;
      currentSum += nums[end];
    }
    else if(currentSum < maximumSumSubArray){
      end++;
      currentSum += nums[end];
    }
    else{
      currentSum -= nums[start];
      start++;
    }
  }
  if(max ===  -1){
    return -1;
  }
  return nums.length - max;
};

console.log(`Minimum No Of Operations are `,minOperations([5,6,7,8,9], -1));