var numOfSubarrays = function(arr, k, threshold) {
  let sum = 0, ans = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  const thresholdSum = k * threshold;
  if (thresholdSum <= sum) ans++;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    if (sum >= thresholdSum) ans++;
  }
  return ans;
};

console.log(numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5))
