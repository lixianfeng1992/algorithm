var flatten = function(root) {
  while (root !== null) {
    if (root.left === null) {
      root = root.right
    } else {
      let pre = root.left
      while (pre.right !== null) {
        pre = pre.right
      }
      pre.right = root.right;
      root.right = root.left;
      root.left = null;
      root = root.right;
    }
  }
}
