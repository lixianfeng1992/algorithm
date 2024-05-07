var maxDepth = function(root) {
  return getDepth(root, 0)
};

var getDepth = function(root, preDepth) {
  if (root === null) {
    return preDepth;
  }
  const left = getDepth(root.left, preDepth);
  const right = getDepth(root.right, preDepth);
  return Math.max(left, right) + 1;
}
