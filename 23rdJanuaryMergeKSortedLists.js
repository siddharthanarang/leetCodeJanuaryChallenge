// Merge k Sorted Lists
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
//
//   Merge all the linked-lists into one sorted linked-list and return it.

// Example
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
//   [
//     1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
//   1->1->2->3->4->4->5->6


  // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val);
      this.next = (next===undefined ? null : next);
  }

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const mergeSortedList = (list1, list2) => {
    let newList = new ListNode();
    let currentNode = newList;
    while(list1 || list2){
      if(list1 && list2 && list2.val > list1.val){
        currentNode.next =  new ListNode(list1.val);
        list1 = list1.next;
      }
      else if(list2){
        currentNode.next =  new ListNode(list2.val);
        list2 = list2.next;
      }
      else{
        currentNode.next =  new ListNode(list1.val);
        list1 = list1.next;
      }
      currentNode = currentNode.next;
    }
    return newList.next;
  };
  if(!lists || !lists.length){
    return null;
  }
  else if(lists.length === 1){
    return lists[0];
  }

  let newList = mergeSortedList(lists[0],lists[1]);
  for(let i=2; i<lists.length;i++){
    newList = mergeSortedList(newList, lists[i]);
  }
  return newList;
};

let list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(5);

let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

let list3 = new ListNode(2);
list3.next = new ListNode(6);

console.log(`Merge K List `,JSON.stringify(mergeKLists([list1, list2, list3])));