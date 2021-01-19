// Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.
//
//   Example
//
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  
  // babab  babbab
  const isPalindrome = (currentString) => {
    let current = 0;
    while(current < parseInt(currentString.length/2)){
      if(currentString[current] != currentString[currentString.length - 1 -current]){
        return false;
      }
      current++;
    }
    return true;
  };
  
  const checkMaxString = (string1, string2) =>{
    if(string2.length >= string1.length){
      return string2;
    }
    else{
      return string1;
    }
  };
  let maxString = '', currentString;
  for(let i=0; i<s.length; i++){
    for(let j=i; j<s.length; j++){
      currentString = s.slice(i, j+1);
      console.log('currentString is ',currentString);
      if(isPalindrome(currentString)){
        console.log('isPalindrome is ');
        maxString = checkMaxString(maxString, currentString);
        console.log('maxString is ',maxString);
      }
    }

  }
  return maxString;

};

console.log(`Longest Palindrome is `,longestPalindrome('ac'));