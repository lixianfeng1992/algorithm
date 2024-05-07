var canConstruct = function(ransomNote, magazine) {
  const hash = {};
  for (let char of ransomNote) {
    hash[char] = (hash[char] || 0) + 1;
  }
  for (let char of magazine) {
    if (hash[char]) {
      hash[char]--;
    }
  }
  for (let key in hash) {
    if (hash[key] > 0) {
      return false
    }
  }
  return true;
};

console.log(canConstruct('aa', 'aab'))
