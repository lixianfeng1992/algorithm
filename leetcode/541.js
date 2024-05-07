var reverseStr = function(s, k) {
  const arr = Array.from(s);
  const n = s.length;
  for (let i = 0; i < n; i += 2 * k) {
    reverse(arr, i, Math.min(i + k, n) - 1);
  }
  return arr.join('');
};

var reverse = function(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

console.log(reverseStr("abcdefg", 2))
