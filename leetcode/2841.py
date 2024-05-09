class Solution:
    def maxSum(self, nums: List[int], m: int, k: int) -> int:
        x = sum(nums[: k - 1])
        cnt = Counter(nums[: k - 1])
        ans = 0
        for i in range(k - 1, len(nums)):
            x += nums[i]
            cnt[nums[i]] += 1
            if len(cnt) >= m:
                ans = max(ans, x)
            x -= nums[i - k + 1]
            cnt[nums[i - k + 1]] -= 1
            if cnt[nums[i - k + 1]] == 0:
                del cnt[nums[i - k + 1]]
        return ans
