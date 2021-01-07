// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.
//
//   Exmaple 
//   Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  
  let frequencyCounter = {}, max = 0, current=0, lastDuplicate = -1;
  for(let i=0; i<s.length; i++){
    if(frequencyCounter[s[i]] === undefined || frequencyCounter[s[i]] < lastDuplicate){
      current++;
      frequencyCounter[s[i]] = i;
    }
    else{
      max = Math.max(current, max);
      lastDuplicate = frequencyCounter[s[i]];
      current = i -lastDuplicate;
      frequencyCounter[s[i]] = i;
    }
  }
  
  return Math.max(current, max);
    
};
console.log(`Length of longest Substring is `, lengthOfLongestSubstring(""));