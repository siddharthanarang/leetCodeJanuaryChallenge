// Remove Duplicates from Sorted List II

// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
//
//   Example
//
//   Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]



  // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val);
      this.next = (next===undefined ? null : next);
  }
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {

  let currentNode = head, duplicateValue, previousNode;
  while (currentNode) {

    if (currentNode.next && currentNode.val === currentNode.next.val) {
      duplicateValue = currentNode.val;
      currentNode.next = currentNode.next.next;
    }
      
    else if (currentNode.val === duplicateValue) {
      if (previousNode) {
        previousNode.next = currentNode.next;
        currentNode = currentNode.next;
      }
      else {
        head = currentNode.next;
        currentNode = currentNode.next;
      }
    }
      
    else {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

  }

  return head;

};

let list = new ListNode(1);
list.next = new ListNode(1);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(3);
list.next.next.next.next = new ListNode(4);
list.next.next.next.next.next = new ListNode(4);
list.next.next.next.next.next.next = new ListNode(5);
list.next.next.next.next.next.next.next = new ListNode(5);
list.next.next.next.next.next.next.next.next = new ListNode(5);
list.next.next.next.next.next.next.next.next.next = new ListNode(7);
list.next.next.next.next.next.next.next.next.next.next = new ListNode(8);

console.log(`Sorted List is `,JSON.stringify(deleteDuplicates(list)));
