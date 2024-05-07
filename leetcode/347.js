var topKFrequent = function(nums, k) {
  const frequencyMap = new Map();
  for (let num of nums) {
    frequencyMap.set(num, frequencyMap.get(num) + 1 || 1);
  }
  const n = frequencyMap.size;
  const nodes = [];
  for (let [num, count] of frequencyMap) {
    nodes.push({ num, count });
  }
  for (let i = Math.floor((n - 1) / 2); i >= 0; i--) {
    buildMapDump(nodes, i, n);
  }
  for (let i = 0; i < k; i++) {
    [nodes[0], nodes[n - 1 - i]] = [nodes[n - 1 - i], nodes[0]];
    buildMapDump(nodes, 0, n - 1 - i);
  }
  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(nodes[n - 1 - i].num);
  }
  return res;
};

var buildMapDump = function(nodes, i, n) {
  let index = 2 * i + 1;
  if (index >= n) {
    return;
  }
  if (index + 1 < n && nodes[index + 1].count > nodes[index].count) {
    index++;
  }
  if (nodes[index].count > nodes[i].count) {
    [nodes[index], nodes[i]] = [nodes[i], nodes[index]];
    buildMapDump(nodes, index, n);
  }
}

console.warn(topKFrequent([1,1,1,2,2,3], 2))
