var levelOrder = function(root) {
  const queue = []
  const res = []
  if (root !== null) {
    queue.push(root)
  }
  while (queue.length > 0) {
    const tmp = [];
    for (let i = queue.length; i > 0; i--) {
      const node = queue.pop()
      tmp.push(node.val);
      if (node.left !== null) {
        queue.
      }
    }
  }
};
