var commonChars = function(words) {
  const minfreq = new Array(26).fill(Number.MAX_VALUE);
  for (let word of words) {
    const freq = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      ++freq[word[i].charCodeAt() - 'a'.charCodeAt()];
    }

    for (let i = 0; i < 26; i++) {
      minfreq[i] = Math.min(minfreq[i], freq[i]);
    }
  }
  const ans = [];
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < minfreq[i]; j++) {
      ans.push(String.fromCharCode(i + 'a'.charCodeAt()));
    }
  }
  return ans;
};

console.log(commonChars(["bella","label","roller"]))
