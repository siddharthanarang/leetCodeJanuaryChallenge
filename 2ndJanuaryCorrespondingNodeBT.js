// Find a Corresponding Node of a Binary Tree in a Clone of That Tree
//
//
// Given two binary trees original and cloned and given a reference to a node target in the original tree.
//
//   The cloned tree is a copy of the original tree.
//
//   Return a reference to the same node in the cloned tree.
//
//   Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.
//
//   Follow up: Solve the problem if repeated values on the tree are allowed.
//
//   Input: tree = [7,4,3,null,null,6,19], target = 3
//   Output: 3
//   Explanation: In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer is the yellow node from the cloned tree.


// Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {

  let currentNode = cloned;
  if(!target || target.val === undefined){
    return null;
  }
  let response;

  const traverse = (currentNode) =>{
    if(currentNode.val === target.val){
      response = currentNode;
      return;
    }
    if(currentNode.left){
      traverse(currentNode.left)
    }
    if(currentNode.right){
      traverse(currentNode.right)
    }
  };
  traverse(currentNode);
  return response;
};

let originalTree = new TreeNode(7);
let originalFirst = new TreeNode(4);
let originalSecond = new TreeNode(3);
let originalThird = new TreeNode(6);
let originalFourth = new TreeNode(19);

originalTree.left = originalFirst;
originalTree.right =originalSecond;
originalSecond.left = originalThird;
originalSecond.right = originalFourth;

let clonedTree = new TreeNode(7);
let clonedFirst = new TreeNode(4);
let clonedSecond = new TreeNode(3);
let clonedThird = new TreeNode(6);
let clonedFourth = new TreeNode(19);

clonedTree.left = clonedFirst;
clonedTree.right =clonedSecond;
clonedSecond.left = clonedThird;
clonedSecond.right = clonedFourth;

console.log(`Get Target Copy `,getTargetCopy(originalTree, clonedTree, originalSecond));
