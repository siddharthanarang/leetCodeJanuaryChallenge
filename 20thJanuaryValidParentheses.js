// Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
//   An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
//   Open brackets must be closed in the correct order.

// Example
// Input: s = "()[]{}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack =[], match ={
    '(' : ')',
    '{' : '}',
    '[' : ']'
  };
  for(let i=0; i<s.length; i++){
    if(match[s[i]]){
      stack.push(s[i]);
    }
    else{
      if(s[i] != match[stack.pop()]){
        return false;
      }
    }
  }
  if(stack.length){
    return false;
  }
  return true;
};

console.log(`Is Valid `,isValid('{[]}'));