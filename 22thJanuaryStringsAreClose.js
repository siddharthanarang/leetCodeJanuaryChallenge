// Determine if Two Strings Are Close
//
// Two strings are considered close if you can attain one from the other using the following operations:
//
//   Operation 1: Swap any two existing characters.
//   For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
//   For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.
//
//   Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
//
//   Example
//
// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
//   Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  if(word1.length !== word2.length) return false;

  const ws1 = [...new Set(word1)].sort().join('')
  const ws2 = [...new Set(word2)].sort().join('')
  if(ws1 !== ws2) return false;

  const freq1 = Array(26).fill(0);
  const freq2 = Array(26).fill(0);

  for(let i = 0; i < word1.length; i++) {
    const idx1 = word1[i].charCodeAt() - 'a'.charCodeAt();
    const idx2 = word2[i].charCodeAt() - 'a'.charCodeAt();
    freq1[idx1]++;
    freq2[idx2]++;
  }
  const str1 = freq1.filter(x => x).sort().join()
  const str2 = freq2.filter(x => x).sort().join()
  return str1 === str2;
};