var maxVowels = function(s, k) {
  function isVowel(ch) {
    return ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ? 1 : 0;
  }
  const n = s.length;
  let count = 0;
  for (let i = 0; i < k; i++) {
    count += isVowel(s[i]);
  }

  let ans = count;
  for (let i = k; i < n; i++) {
    count += isVowel(s[i]) - isVowel(s[i - k]);
    ans = Math.max(ans, count);
  }
  return ans;
};

console.log(maxVowels("abciiidef", 3))
