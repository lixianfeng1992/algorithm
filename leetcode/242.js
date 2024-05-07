var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  const hashMap = {};
  for (let i = 0; i < s.length; i++) {
      if (hashMap[s[i]]) {
          hashMap[s[i]] += 1;
      } else {
          hashMap[s[i]] = 1;
      }
      if (hashMap[t[i]]) {
          hashMap[t[i]] -= 1;
      } else {
          hashMap[t[i]] = -1;
      }
  }
  console.log(hashMap)
  for (let key in hashMap) {
      console.log(key)
      if (hashMap[key] !== 0) {
          return false;
      }
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram'))
