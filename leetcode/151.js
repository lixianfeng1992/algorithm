var reverseWords = function(s) {
  s = s.trim();
  let i = j = s.length - 1, ans = [];
  while (i >= 0) {
    while (i >= 0 && s[i] !== ' ') {
      i--;
    }
    ans.push(s.slice(i + 1, j + 1));
    while (i >= 0 && s[i] === ' ') {
      i--;
    }
    j = i;
  }
  return ans.join(' ');
};

console.log(reverseWords("a good   example")) // "blue is sky the"
