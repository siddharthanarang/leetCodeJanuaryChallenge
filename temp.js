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
  
  // Creating Initial Array
  for(let createIndex=0; createIndex<tempArray.length; createIndex++){
    tempArray[createIndex] = createIndex+1;
  }
  
  let output = 0,k;
  
  
  const permute = (currentIndex, tempArray)=> {
    // Checking Whether given array forms that Beautiful Arrangement
    if(currentIndex === n){
      //WHY  THIS ? n-1

        // console.log('tempArray is ',tempArray);
      // for(k=0; k<tempArray.length; k++){
      //   if(tempArray[k] % (k+1) != 0 && (k+1) %tempArray[k] != 0){
      //     break;
      //   }
      // }
      // if(k === tempArray.length){
      //   console.log('tempArray is ',tempArray);
      //   output++;
      // }
      output++;
    }
    
    if(currentIndex >= n){
      return;
    }
    
    for(let i=currentIndex; i<n; i++){
      swap(tempArray, currentIndex, i);
      // console.log('currentIndex is ',currentIndex);
      // console.log('i is ',i);

      //console.log('tempArray after swap ',tempArray);
      if((tempArray[currentIndex] % (currentIndex+1) === 0 || (currentIndex+1) %tempArray[currentIndex] === 0) 
      // &&(tempArray[i] % (i+1) === 0 || (i+1) %tempArray[i] === 0)
        //WHY NOT THIS ?
      ){
        permute(currentIndex+1, JSON.parse(JSON.stringify(tempArray)));
      }
        
      
      swap(tempArray, i, currentIndex);
      //console.log('tempArray after 2nd swap ',tempArray);
    }
    
  };
  permute(0, tempArray);
  return output;

  

};

const swap = (originalArray, i, j) =>{
  [originalArray[i], originalArray[j]] =   [originalArray[j], originalArray[i]];
};


console.log('Count Arrangement are ',countArrangement(6));
