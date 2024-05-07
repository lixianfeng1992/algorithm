var invertTree = function(root) {
  if (root === null) {
    return;
  }
  const left = root.right ? invertTree(root.right) : null;
  const right = root.left ? invertTree(root.left) : null;
  root.left = left;
  root.right = right;
  return root;
}
