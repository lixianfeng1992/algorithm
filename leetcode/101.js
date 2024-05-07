var isSymmetric = function(root) {

};

var dfs = function(left, right) {
  if (left === null && right === null) {
    return true;
  }
  if (left === null || right === null) {
    return false;
  }
  if (left.val !== right.val) {
    return false;
  }
  return dfs(left.left, right.right) && dfs(left.right, right.left);
}
