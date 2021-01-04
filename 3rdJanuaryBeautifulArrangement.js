// Beautiful Arrangement
// Suppose you have n integers from 1 to n. We define a beautiful arrangement as an array that is constructed by these n numbers successfully if one of the following is true for the ith position (1 <= i <= n) in this array:
//
//   The number at the ith position is divisible by i.
//   i is divisible by the number at the ith position.
//   Given an integer n, return the number of the beautiful arrangements that you can construct.
//
//   Example
//
//   Input: n = 2
// Output: 2
// Explanation:
//   The first beautiful arrangement is [1, 2]:
// Number at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).
//   Number at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).
//   The second beautiful arrangement is [2, 1]:
// Number at the 1st position (i=1) is 2, and 2 is divisible by i (i=1).
//   Number at the 2nd position (i=2) is 1, and i (i=2) is divisible by 1.

/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {

  let tempArray = new Array(n);
  let output = 0;
  let combination = (i, arrangementArray) => {
    
    if(i === n && getDistinct(arrangementArray).length === n){
      console.log('case is ',arrangementArray);
      
      let k;
      for(k=0; k<arrangementArray.length; k++){
        if(arrangementArray[k] % (k+1) != 0 && (k+1) %arrangementArray[k] != 0){
          break;
        }
      }
      if(k === arrangementArray.length){
        console.log('arrangementArray is ',arrangementArray);
        output++;
      }
    }
    if(i >= n){
      return;
    }
    
    for(let j=0; j<n; j++ ){
      arrangementArray[i] = j + 1;
      combination(i+1, arrangementArray);
      
    }

  };
  combination(0, tempArray);
  return output;

};

const getDistinct = (input) => {
  return input.filter((value, index) =>{
    return input.indexOf(value) === index;
  });
};

console.log('Count Arrangement are ',countArrangement(5));
