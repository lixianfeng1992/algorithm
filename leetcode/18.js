var fourSum = function(nums, target) {
  const quadruplets = [];
  if (nums.length < 4) {
    return quadruplets;
  }
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break;
    }
    if (nums[i] + nums[n - 3] + nums[n - 2] + nums[n - 1] < target) {
      continue;
    }
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break;
      }
      if (nums[i] + nums[j] + nums[n - 2] + nums[n - 1] < target) {
        continue;
      }
      let left = j + 1, right = n - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          left++;
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return quadruplets
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
