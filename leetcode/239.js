var maxSlidingWindow = function(nums, k) {
  const queue = [], ans = [], n = nums.length;
  let i = 1 - k, j = 0;
  while (j < n) {
    if (i > 0 && queue[0] === nums[i - 1]) {
      queue.shift();
    }
    while (queue.length && queue[queue.length - 1] < nums[j]) {
      queue.pop();
    }
    queue.push(nums[j]);
    if (i >= 0) {
      ans.push(queue[0]);
    }
    j++;
    i++;
  }
  return ans;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
