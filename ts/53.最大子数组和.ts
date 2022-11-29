/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  if (nums.length === 0) return 0

  let dp: number[] = []
  dp[0] = nums[0]
  // let max = Math.min(...nums)

  for (let i = 1; i < nums.length; i++){
    dp[i] = Math.max(nums[i],dp[i-1] + nums[i])
    // max = dp[i] > max ? dp[i] : max
  }
  return Math.max(...dp)
};
// @lc code=end

