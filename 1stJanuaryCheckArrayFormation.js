// Check Array Formation Through Concatenation
//
// You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in
// pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].
//
//   Return true if it is possible to form the array arr from pieces. Otherwise, return false.


// Input: arr = [15,88], pieces = [[88],[15]]
// Output: true
// Explanation: Concatenate [15] then [88]
//
//
// Input: arr = [49,18,16], pieces = [[16,18,49]]
// Output: false
// Explanation: Even though the numbers match, we cannot reorder pieces[0].


/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  
  let temp;
  for(let i=0; i<pieces.length; i++){
    for(let j=i+1; j<pieces.length; j++){

      temp = pieces[i].concat(pieces[j]);
      if(isSybArray(arr,temp)){
        pieces[i] = pieces[i].concat(pieces[j]);
        pieces.splice(j,1);
        i--;
        break;
      }
      temp = pieces[j].concat(pieces[i]);
      if(isSybArray(arr,temp)){
        pieces[j] = pieces[j].concat(pieces[i]);
        pieces.splice(i,1);
        i--;
        break;
      }
    }
  }
  if(pieces.length > 1){
    return false;
  }
  if(arr.join() === pieces[0].join()){
    return true;
  }
  return false;
};

console.log(`canFormArray is `, canFormArray([85], [[85]]));
console.log(`canFormArray is `, canFormArray([15,88], [[88],[15]]));
console.log(`canFormArray is `, canFormArray([49,18,16], [[16,18,49]]));
console.log(`canFormArray is `, canFormArray([91,4,64,78], [[78],[4,64],[91]]));
console.log(`canFormArray is `, canFormArray([1,3,5,7], [[2,4,6,8]]));
console.log(`canFormArray is `, canFormArray([2,82,79,95,28], [[2],[82],[28],[79,95]]));
console.log(`canFormArray is `, canFormArray([2,74,86,25,20,19,87,98,55,94,58,47,56,28,50,51,54,14,79,72,23,48],
  [[55],[87,98],[94,58,47],[54,14],[20,19],[28],[72],[23],[48],[79],[2],[50],[86],[56],[25],[74],[51]]));

function isSybArray(bigArray, smallArray){
  
  let startIndex = bigArray.indexOf(smallArray[0]); 
  if(startIndex === -1){
    return false;
  }
  for(let i=0; i<smallArray.length;i++){
    if(smallArray[i] != bigArray[i+startIndex]){
      return false;
    }
  }
  return true;
}