// Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
//
//   You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//   Example
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


  // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val);
      this.next = (next===undefined ? null : next);
  }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

  let l3 = new ListNode();
  let traverseNode = l3;
  let carry =0, sum, newNode;
  while(l1 || l2){

    if(l1 && l2){
      sum = carry + l1.val + l2.val;
      carry = parseInt(sum/10);
      sum = parseInt(sum%10);
      l1 = l1.next;
      l2 = l2.next;
    }
    else if(l1){
      sum = carry + l1.val;
      carry = parseInt(sum/10);
      sum = parseInt(sum%10);
      l1 = l1.next;
    }
    else{
      sum = carry + l2.val;
      carry = parseInt(sum/10);
      sum = parseInt(sum%10);
      l2 = l2.next;
    }
    newNode = new ListNode(sum);
    traverseNode.next = newNode;
    traverseNode = traverseNode.next;
  }
  if(carry){
    newNode = new ListNode(carry);
    traverseNode.next = newNode;
  }
  return l3.next;
};
let l1 = new ListNode(9);
l1.next =  new ListNode(9);
l1.next.next =  new ListNode(1);
// l1.next.next.next =  new ListNode(9);
// l1.next.next.next.next =  new ListNode(9);
// l1.next.next.next.next.next =  new ListNode(9);
// l1.next.next.next.next.next.next =  new ListNode(9);

let l2 = new ListNode(1);
// l2.next =  new ListNode(6);
// l2.next.next =  new ListNode(4);
// l2.next.next.next =  new ListNode(9);

console.log(`addTwoNumbers `, JSON.stringify(addTwoNumbers(l1, l2)));