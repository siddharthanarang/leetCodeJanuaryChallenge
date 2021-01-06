// Kth Missing Positive Number
//
// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
//
//   Find the kth positive integer that is missing from this array.
//
//   Example
//
// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  
  if(!arr.length){
    return k;
  }

  let currentMissing = arr[0] - 1, diff, i;
  if(currentMissing >= k){
    return k;
  }
  
  for(i=1; i<arr.length; i++){
    diff = arr[i] - arr[i-1];
    if(diff != 1){
      if((currentMissing + diff - 1) < k){
        currentMissing += diff - 1;
      }
      else{
        return arr[i-1] + (k-currentMissing);
      }
    }
  }
  return arr[i-1] + k - currentMissing;
};

console.log(`Kth Missing Positive Number is `,findKthPositive([1], 6));