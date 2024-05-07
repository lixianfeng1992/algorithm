var buildTree = function(preorder, inorder) {
  let dic = {}
  var recur = function(root, left, right) {
    if (left > right) {
      return
    }
    const node = new TreeNode(preorder[root])
    i = dic[preorder[root]]
    node.left = recur(root + 1, left, i - 1)
    node.right = recur(i - left + root + 1, i + 1, right)
    return node
  }

  for (let i = 0; i < inorder.length; i++) {
    dic[inorder[i]] = i
  }
  return recur(0, 0, inorder.length - 1)
};

buildTree([3,9,20,15,7], [9,3,15,20,7])
