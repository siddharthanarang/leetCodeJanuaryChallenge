// Kth Largest Element in an Array
// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
//
//   Example
// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

  if(!nums || !nums.length){
    return -1;
  }
  
  nums = nums.sort(function(a,b){
    return b-a;
  });
  return nums[k-1];
};

console.log(`Kth largest element is `,findKthLargest([3,2,1,5,6,4] , 2));