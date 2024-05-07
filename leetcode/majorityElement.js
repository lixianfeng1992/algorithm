var majorityElement = function(nums) {
  const ans = [];
  const n = nums.length;
  const candidate1 = {value: null, count: 0};
  const candidate2 = {value: null, count: 0};
  for (let i = 0; i < nums.length; i++) {
    if (candidate1.value === nums[i]) {
      candidate1.count += 1;
    } else if (candidate2.value === nums[i]) {
      candidate2.count += 1;
    } else if (candidate1.count === 0) {
      candidate1.value = nums[i];
      candidate1.count += 1;
    } else if (candidate2.count === 0) {
      candidate2.value = nums[i];
      candidate2.count += 1;
    } else {
      candidate1.count -= 1;
      candidate2.count -= 1;
    }
  }
  let count1 = 0;
  let count2 = 0;
  for (let num of nums) {
    if (num === candidate1.value) {
      count1++;
    } else if (num === candidate2.value) {
      count2++;
    }
  }
  if (count1 > n / 3) {
    ans.push(candidate1.value)
  }
  if (count2 > n / 3) {
    ans.push(candidate2.value)
  }
  return ans;
};

const res = majorityElement([2,2,1,3])
console.log(res);
