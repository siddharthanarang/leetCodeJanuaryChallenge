// Merge Two Sorted Lists
// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
//
//   Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]



  // Definition for singly-linked list.
  function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

  if(!l1 && !l2){
    return null;
  }

  let l3 = new ListNode(0);
  let currentNode = l3;
  while(l1 || l2){
    if(l2 && (!l1 || l2.val < l1.val)){
      currentNode.next = new ListNode(l2.val);
      currentNode = currentNode.next;
      l2 = l2.next;
    }
    else{
      currentNode.next = new ListNode(l1.val);
      currentNode = currentNode.next;
      l1 = l1.next;
    }
  }
  return l3.next;

};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);


console.log(`Merge 2 sorted list `,JSON.stringify(mergeTwoLists(l2, l1)));