var groupAnagrams = function(strs) {
  const hashMap = {};
  const ans = [];
  for (let i = 0; i < strs.length; i++) {
    hash = strs[i].split('').sort().join('');
    if (hashMap[hash] == null) {
      ans.push([strs[i]])
      hashMap[hash] = ans.length;
    } else {
      ans[hashMap[hash] - 1].push(strs[i]);
    }
  }
  return ans;
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"])
