// Boats to Save People
//
// The i-th person has weight people[i], and each boat can carry a maximum weight of limit.
//
//   Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.
//
//   Return the minimum number of boats to carry every given person.  (It is guaranteed each person can be carried by a boat.)

// Example
//
// Input: people = [3,5,3,4], limit = 5
// Output: 4
// Explanation: 4 boats (3), (3), (4), (5)

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  
  if(!people.length){
    return 0;
  }

  people = people.sort((a,b) =>{
    return a-b;
  });
  let boats = 0, start =0, end = people.length-1;
  while(start <= end){
    if(start != end && (people[start] + people[end]) <= limit){
      boats++;
      start++;
      end--;
    }
    else{
      boats++;
      end--;
    }
  }
  return boats;
};

console.log(`No of boats are `,numRescueBoats([3,5,3,4], 5));