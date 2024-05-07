var generateMatrix = function(n) {
  let l = 0, r = n - 1, t = 0, b = n - 1;
  const mat = Array.from({ length: n }, () => Array(n).fill(0));

  let num = 1, tar = n * n;
  while (num <= tar) {
    for (let i = l; i <= r; i++) {
      mat[t][i] = num++;
    }
    t++;
    for (let i = t; i <= b; i++) {
      mat[i][r] = num++;
    }
    r--;
    for (let i = r; i >= l; i--) {
      mat[b][i] = num++;
    }
    b--;
    for (let i = b; i >= t; i--) {
      mat[i][l] = num++;
    }
    l++;
  }
  return mat;
};

generateMatrix(3)
