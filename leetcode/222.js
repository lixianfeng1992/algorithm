var countNodes = function(root) {
  if (root === null) {
    return 0;
  }
  let leftLevel = countLevel(root.left);
  let rightLevel = countLevel(root.right);
  if (leftLevel === rightLevel) {
    return 1<<leftLevel + countNodes(root.right);
  } else {
    return 1<<rightLevel + countNodes(root.left);
  }
};

var countLevel = function(root) {
  let level = 0;
  while (root !== null) {
    level++;
    root = root.left;
  }
  return level;
}
