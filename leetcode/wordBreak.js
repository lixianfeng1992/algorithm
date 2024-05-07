var wordBreak = function(s, worDict) {
  const backtrack = function(s) {
    if (s === '') {
      return true;
    }
    let res = false;
    for (let i = 1; i <= s.length; i++) {
      if (worDict.includes(s.slice(0, i))) {
        res = res || backtrack(s.slice(i));
      }
    }
    return res;
  }
  return backtrack(s)
}

wordBreak('leetcode', ['leet', 'code']);
