var exist = function(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (backtrack(board, word, i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

var backtrack = function(board, word, i, j, k) {
  if (i >= board.length || i < 0 || j >= board[0].length || j < 0 || board[i][j] !== word[k]) {
    return false;
  }
  if (k === word.length - 1) {
    return true;
  }
  board[i][j] = '0';
  const res = backtrack(board, word, i + 1, j, k + 1) || backtrack(board, word, i - 1, j, k + 1) || backtrack(board, word, i, j + 1, k + 1) || backtrack(board, word, i, j - 1, k + 1);
  board[i][j] = word[k];
  return res;
}

const res = exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'SEE')
console.log(res);
