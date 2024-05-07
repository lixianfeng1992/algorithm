var minDepth = function(root) {
  return depth(root, 0);
};

var depth = function(root, preDepth) {
  if (root === null) {
    return preDepth;
  }
  preDepth += 1;
  if (root.left === null || root.right === null) {
    return preDepth;
  }
  return Math.min(depth(root.left, preDepth), depth(root.right, preDepth));
}




function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const node1 = new TreeNode(2);
const node2 = new TreeNode(3);
const node3 = new TreeNode(4);
const node4 = new TreeNode(5);
const node5 = new TreeNode(6);
node1.left = null;
node1.right = node2;
nod

console.log(minDepth(node1));
