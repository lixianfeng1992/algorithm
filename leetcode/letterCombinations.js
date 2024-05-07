var letterCombinations = function(digits) {
  if (digits.length === 0) {
    return [];
  }
  const ans = [];
  const phone = {
    '2':['a','b','c'],
    '3':['d','e','f'],
    '4':['g','h','i'],
    '5':['j','k','l'],
    '6':['m','n','o'],
    '7':['p','q','r','s'],
    '8':['t','u','v'],
    '9':['w','x','y','z']
  }
  var backtrack = function(conbination, nextDigit) {
    if (nextDigit.length === 0) {
      ans.push(conbination);
    } else if (!phone[nextDigit[0]]) {
      backtrack(conbination, nextDigit.slice(1));
    } else {
      for (let letter of phone[nextDigit[0]]) {
        backtrack(conbination + letter, nextDigit.slice(1));
      }
    }
  }
  backtrack('', digits);
  return ans;
};

letterCombinations('03');
