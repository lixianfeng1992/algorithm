var minimumRecolors = function(blocks, k) {
  let whiteNum = 0;
  for (let i = 0; i < k; i++) {
    if (blocks[i] === 'W') {
      whiteNum++;
    }
  }
  let ans = whiteNum;
  for (let i = k; i < blocks.length; i++) {
    if (blocks[i] === 'W') {
      whiteNum++;
    }
    if (blocks[i - k] === 'W') {
      whiteNum--;
    }
    ans = Math.min(ans, whiteNum);
  }
  return ans;
};

console.log(minimumRecolors("WBWBBBW", 2))
